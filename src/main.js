import './styles.css';
import { sources, ACCESSED } from './data/sources.js';
import { sections, timeline, walk, neighborhoods, claimTypes } from './data/content.js';
import { neighborhoodDiagram, borderDiagram, aggregateTexture, parkPlan } from './diagrams.js';

const app = document.getElementById('app');
const sourceIds = Object.keys(sources);
const srcNum = (id) => sourceIds.indexOf(id) + 1;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const cites = (ids) =>
  ids.length
    ? ids.map((id) => `<button class="cite" data-src="${id}" aria-label="Source ${srcNum(id)}: ${esc(sources[id].title)}">${srcNum(id)}${sources[id].mcpServer ? '<i>mcp</i>' : ''}</button>`).join('')
    : '<span class="cite cite-none" title="Editorial interpretation, no external source">ed.</span>';

const tag = (type) => `<span class="tag tag-${type}">${claimTypes[type].short}</span>`;

const claim = (c) => `
  <li class="claim" data-type="${c.type}">
    ${tag(c.type)}
    <div class="claim-body">
      <p>${esc(c.text)} <span class="cites">${cites(c.src)}</span></p>
      ${c.note ? `<p class="note">${esc(c.note)}</p>` : ''}
    </div>
  </li>`;

const extras = {
  built: () => `<figure class="fig fig-texture">${aggregateTexture(7)}<figcaption>Study: exposed aggregate. Generated texture, not a photograph.</figcaption></figure>`,
  neighborhood: () => `<figure class="fig">${neighborhoodDiagram(neighborhoods)}<figcaption>Schematic orientation. Editorial, not official boundaries. Click a name.</figcaption><p class="nb-readout" id="nb-readout">Select a neighborhood.</p></figure>`,
  border: () => `<figure class="fig">${borderDiagram()}<figcaption>North–south section, schematic. The 75 ft drop is from the sources. Wall positions are illustrative.</figcaption></figure>`,
  material: () => `<figure class="fig fig-texture">${aggregateTexture(21, true)}<figcaption>Thirteen basins, drawn as a diagram. Not to scale.</figcaption></figure>`,
  sunday: (s) => `<div class="observe"><p class="mono">Field sheet · tick what you see</p>${s.observation.map((o) => `<label><input type="checkbox" /> ${esc(o)}</label>`).join('')}</div>`,
};

const sectionHTML = (s) => `
  <section class="sec" id="${s.id}">
    <header class="sec-head">
      <span class="sec-num">${s.num}</span>
      <div>
        <p class="kicker">${esc(s.kicker)}</p>
        <h2>${esc(s.title)}</h2>
        <p class="lede">${esc(s.lede)}</p>
      </div>
    </header>
    <div class="sec-grid">
      <ol class="claims">${s.claims.map(claim).join('')}</ol>
      ${extras[s.id] ? `<aside class="sec-aside">${extras[s.id](s)}</aside>` : ''}
    </div>
  </section>`;

const timelineHTML = () => `
  <section class="sec" id="timeline">
    <header class="sec-head">
      <span class="sec-num">02</span>
      <div>
        <p class="kicker">1819 → 2026</p>
        <h2>Timeline</h2>
        <p class="lede">Dates marked Q? are contested between sources. Scroll sideways.</p>
      </div>
    </header>
    <ol class="tl">
      ${timeline.map((t) => `
        <li class="tl-item" data-type="${t.type}">
          <span class="tl-year">${esc(t.year)}</span>
          ${tag(t.type)}
          <p>${esc(t.text)}</p>
          ${t.note ? `<p class="note">${esc(t.note)}</p>` : ''}
          <span class="cites">${cites(t.src)}</span>
        </li>`).join('')}
    </ol>
  </section>`;

const walkHTML = () => `
  <section class="sec" id="walk">
    <header class="sec-head">
      <span class="sec-num">12</span>
      <div>
        <p class="kicker">Self-guided · about 45 minutes · north to south</p>
        <h2>Walk</h2>
        <p class="lede">Seven stops from the top of the hill to the bottom. Positions on the plan are schematic.</p>
      </div>
    </header>
    <div class="walk">
      <figure class="fig walk-plan">${parkPlan(walk)}</figure>
      <div class="walk-stops">
        ${walk.map((w) => `
          <article class="stop" id="stop-${w.n}" data-n="${w.n}" data-type="${w.type}" tabindex="0">
            <span class="stop-n">${w.n}</span>
            <div>
              <h3>${esc(w.name)} ${tag(w.type)}</h3>
              <p>${esc(w.text)} <span class="cites">${cites(w.src)}</span></p>
              <p class="look"><span class="mono">Look</span> ${esc(w.look)}</p>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>`;

const srcRow = (id) => {
  const s = sources[id];
  const status = s.unread ? 'located, not read' : s.partial ? 'summary only' : s.secondary ? 'secondary' : s.mcpServer === 'datagov' ? 'failed · 404' : 'read';
  return `
  <tr id="src-${id}">
    <td class="mono">${srcNum(id)}</td>
    <td><strong>${esc(s.title)}</strong><br><span class="muted">${esc(s.organization)}</span>
      ${s.url ? `<br><a href="${s.url}" target="_blank" rel="noopener">${esc(s.url.replace(/^https?:\/\//, ''))}</a>` : ''}
      <p class="obtained">${esc(s.obtained)}</p></td>
    <td class="mono">${s.mcpServer ? `${esc(s.mcpServer)}<br>${esc(s.mcpTool)}` : 'none (web)'}</td>
    <td class="mono">${esc(s.temporal)}</td>
    <td class="mono">${esc(status)}</td>
    <td class="mono">${esc(s.accessed)}</td>
  </tr>`;
};

const sourcesHTML = () => {
  const groups = [
    ['National Park Service · via MCP', (s) => s.mcpServer === 'nationalparks'],
    ['Data.gov · via MCP', (s) => s.mcpServer === 'datagov'],
    ['Other sources · not via MCP', (s) => !s.mcpServer],
  ];
  return `
  <section class="sec" id="sources">
    <header class="sec-head">
      <span class="sec-num">13</span>
      <div>
        <p class="kicker">Provenance</p>
        <h2>Sources</h2>
        <p class="lede">Every claim above links here. Raw MCP responses are kept in <code>research/raw/</code>.</p>
      </div>
    </header>
    ${groups.map(([label, f]) => `
      <h3 class="src-group">${label}</h3>
      <div class="table-wrap"><table class="src-table">
        <thead><tr><th>#</th><th>Source</th><th>MCP server / tool</th><th>Time</th><th>Status</th><th>Accessed</th></tr></thead>
        <tbody>${sourceIds.filter((id) => f(sources[id])).map(srcRow).join('')}</tbody>
      </table></div>`).join('')}
  </section>`;
};

const nav = [['now', '01 Now'], ['timeline', '02 Timeline'], ['built', '03 Built'], ['neighborhood', '04 Neighborhood'], ['border', '05 Border'], ['malcolm', '06 Malcolm X'], ['sunday', '07 Sunday'], ['drums', '08 Drums'], ['material', '09 Material'], ['uprising', '10 1968'], ['restoration', '11 Restoration'], ['walk', '12 Walk'], ['sources', '13 Sources']];

const mcpCount = sourceIds.filter((id) => sources[id].mcpServer === 'nationalparks').length;

app.innerHTML = `
  <header class="top">
    <a href="#hero" class="brand mono">MHP / MXP</a>
    <nav class="nav">${nav.map(([id, l]) => `<a href="#${id}">${l}</a>`).join('')}</nav>
  </header>

  <div class="legend" role="group" aria-label="Filter claims by type">
    <span class="mono">Show</span>
    ${Object.entries(claimTypes).map(([k, v]) => `<button class="legend-btn" data-type="${k}" aria-pressed="true">${tag(k)} ${v.label}</button>`).join('')}
  </div>

  <section class="hero" id="hero">
    <p class="mono hero-meta">A field guide in thirteen parts · Washington, DC · 38.9224° N, 77.0354° W</p>
    <h1><span>Meridian Hill Park</span><span class="slash">/</span><em>Malcolm X Park</em></h1>
    <p class="hero-sub">A garden, a border, a stage, a contested name. Read as a cultural, spatial, infrastructural and political landscape.</p>
    <div class="status">
      <div><p class="mono">National Parks MCP</p><p>${mcpCount} source records from findParks, getParkDetails, getAlerts, getEvents and getVisitorCenters. Meridian Hill appears only as a Rock Creek Park site.</p></div>
      <div><p class="mono">Data.gov MCP</p><p>15 calls, all failed with HTTP 404. No federal dataset is used on this site.</p></div>
      <div><p class="mono">Reading this guide</p><p>Every claim is tagged by type and linked to its source. Filter by type with the bar above.</p></div>
    </div>
  </section>

  ${sections.map((s, i) => (i === 1 ? timelineHTML() : '') + sectionHTML(s)).join('')}
  ${walkHTML()}
  ${sourcesHTML()}

  <footer class="foot mono">Research accessed ${ACCESSED}. No API keys are used or stored by this site. Interpretation is marked READ and is the editors’ analysis.</footer>

  <aside class="drawer" id="drawer" aria-hidden="true">
    <button class="drawer-close" aria-label="Close">×</button>
    <div id="drawer-body"></div>
  </aside>
`;

// Citation drawer
const drawer = document.getElementById('drawer');
const drawerBody = document.getElementById('drawer-body');
const openSource = (id) => {
  const s = sources[id];
  drawerBody.innerHTML = `
    <p class="mono">Source ${srcNum(id)}${s.mcpServer ? ' · retrieved via MCP' : ' · not via MCP'}</p>
    <h3>${esc(s.title)}</h3>
    <dl>
      <dt>Organization</dt><dd>${esc(s.organization)}</dd>
      <dt>MCP server</dt><dd class="mono">${esc(s.mcpServer || 'none')}</dd>
      <dt>MCP tool</dt><dd class="mono">${esc(s.mcpTool || 'none')}</dd>
      ${s.args ? `<dt>Arguments</dt><dd class="mono">${esc(JSON.stringify(s.args))}</dd>` : ''}
      <dt>Current / historical</dt><dd>${esc(s.temporal)}</dd>
      <dt>Accessed</dt><dd>${esc(s.accessed)}</dd>
      ${s.url ? `<dt>URL</dt><dd><a href="${s.url}" target="_blank" rel="noopener">${esc(s.url)}</a></dd>` : ''}
      ${s.raw ? `<dt>Raw response</dt><dd class="mono">${esc(s.raw)}</dd>` : ''}
    </dl>
    <p class="obtained">${esc(s.obtained)}</p>
    <a href="#src-${id}" class="drawer-link">View in source list</a>`;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
};
const closeDrawer = () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); };
document.addEventListener('click', (e) => {
  const c = e.target.closest('button.cite');
  if (c) return openSource(c.dataset.src);
  if (e.target.closest('.drawer-close') || e.target.closest('.drawer-link')) closeDrawer();
});
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeDrawer());

// Claim-type filter
const hidden = new Set();
document.querySelectorAll('.legend-btn').forEach((b) =>
  b.addEventListener('click', () => {
    const t = b.dataset.type;
    hidden.has(t) ? hidden.delete(t) : hidden.add(t);
    b.setAttribute('aria-pressed', String(!hidden.has(t)));
    document.body.dataset.hide = [...hidden].join(' ');
    document.querySelectorAll('[data-type]:not(.legend-btn)').forEach((el) => el.classList.toggle('dim', hidden.has(el.dataset.type)));
  }),
);

// Neighborhood diagram readout
const readout = document.getElementById('nb-readout');
document.querySelectorAll('.nb').forEach((g) =>
  g.addEventListener('click', () => {
    document.querySelectorAll('.nb').forEach((x) => x.classList.remove('active'));
    g.classList.add('active');
    const n = neighborhoods.find((x) => x.name === g.dataset.name);
    readout.innerHTML = `<strong>${esc(n.name)}</strong> ${esc(n.note)} <span class="tag tag-interpretation">READ</span>`;
  }),
);

// Walk: link plan markers and stop cards
const setStop = (n) => {
  document.querySelectorAll('.stop, .pin').forEach((el) => el.classList.toggle('active', el.dataset.n === String(n)));
};
document.querySelectorAll('.pin').forEach((p) => p.addEventListener('click', () => {
  setStop(p.dataset.n);
  document.getElementById(`stop-${p.dataset.n}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}));
document.querySelectorAll('.stop').forEach((s) => {
  s.addEventListener('mouseenter', () => setStop(s.dataset.n));
  s.addEventListener('focus', () => setStop(s.dataset.n));
});
setStop(1);
