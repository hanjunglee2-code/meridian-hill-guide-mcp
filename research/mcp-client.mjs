// Minimal MCP stdio client used during development research.
// It launches an MCP server exactly as configured in the user-scope Claude config
// (~/.claude.json), calls MCP tools over JSON-RPC, and saves the raw responses.
// The NPS API key is read from that user config or from the environment at
// runtime. It is never written to this project.
//
// Usage: node research/mcp-client.mjs <server> <outfile.json> '<json array of {name, arguments}>'
//        node research/mcp-client.mjs <server> --list
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname } from 'node:path';

const [server, out, callsJson] = process.argv.slice(2);
const cfg = JSON.parse(readFileSync(`${homedir()}/.claude.json`, 'utf8')).mcpServers[server];
if (!cfg) throw new Error(`No user-scope MCP server named ${server}`);

const child = spawn(cfg.command, cfg.args, {
  env: { ...process.env, ...(cfg.env || {}) },
  stdio: ['pipe', 'pipe', 'ignore'],
});

let buf = '';
const pending = new Map();
child.stdout.on('data', (d) => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
    } catch { /* ignore non-JSON log lines */ }
  }
});

let nextId = 1;
const rpc = (method, params) => new Promise((resolve) => {
  const id = nextId++;
  pending.set(id, resolve);
  child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
});

await rpc('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'meridian-research', version: '1' } });
child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');

if (out === '--list') {
  const r = await rpc('tools/list', {});
  console.log(JSON.stringify(r.result.tools.map((t) => ({ name: t.name, description: t.description, input: t.inputSchema })), null, 2));
} else {
  const calls = JSON.parse(callsJson);
  const results = [];
  for (const c of calls) {
    const r = await rpc('tools/call', c);
    const text = (r.result?.content || []).map((x) => x.text).join('\n');
    let parsed; try { parsed = JSON.parse(text); } catch { parsed = text; }
    results.push({
      mcpServer: server,
      mcpTool: c.name,
      arguments: c.arguments,
      accessed: new Date().toISOString(),
      isError: !!(r.error || r.result?.isError),
      result: r.error || parsed,
    });
    console.error(`${server}.${c.name} ${JSON.stringify(c.arguments)} -> ${text.length} chars${r.result?.isError ? ' (error)' : ''}`);
  }
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(results, null, 2));
}
child.kill();
process.exit(0);
