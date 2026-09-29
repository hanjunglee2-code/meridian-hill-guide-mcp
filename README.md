# Meridian Hill Park / Malcolm X Park — field guide

A static Vite site. Research was gathered during development through MCP servers and documented sources, then written into data files. The site makes no API calls and needs no key.

```
npm install
npm run dev      # local dev server
npm run build    # static build in dist/
```

## Layout

- `src/data/sources.js` — source registry: organization, URL, MCP server and tool, current or historical, date accessed, what was obtained.
- `src/data/content.js` — every claim, tagged historical, current, interpretation or disputed, with source ids.
- `src/diagrams.js` — schematic SVG diagrams.
- `src/main.js`, `src/styles.css` — rendering and design.
- `research/` — MCP client, raw MCP responses and the research log.

## Re-running research

`research/mcp-client.mjs` launches the user-scope MCP servers from `~/.claude.json`. The NPS key comes from that config or the environment, never from this repo.

```
node research/mcp-client.mjs nationalparks --list
node research/mcp-client.mjs nationalparks research/raw/nps.json '[{"name":"getEvents","arguments":{"parkCode":"rocr","q":"Meridian"}}]'
```
