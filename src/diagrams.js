// Inline SVG diagrams. All are schematic and labeled as such in their captions.

// Seeded random so generated textures are stable between reloads.
const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

export function aggregateTexture(seed = 7, withCascade = false) {
  const r = rng(seed);
  const tones = ['var(--peb-1)', 'var(--peb-2)', 'var(--peb-3)', 'var(--peb-4)'];
  let pebbles = '';
  for (let i = 0; i < 420; i++) {
    const x = r() * 300, y = r() * 300, rx = 2 + r() * 6, ry = rx * (0.55 + r() * 0.4), rot = r() * 180;
    pebbles += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${tones[Math.floor(r() * 4)]}"/>`;
  }
  let cascade = '';
  if (withCascade) {
    for (let i = 0; i < 13; i++) {
      const y = 22 + i * 19, w = 40 + i * 4;
      cascade += `<rect x="${150 - w / 2}" y="${y}" width="${w}" height="12" fill="var(--water)" stroke="var(--ink)" stroke-width="1.2"/>`;
      cascade += `<text x="${150 + w / 2 + 8}" y="${y + 10}" class="svg-mono">${String(i + 1).padStart(2, '0')}</text>`;
    }
  }
  return `<svg viewBox="0 0 300 300" role="img" aria-label="${withCascade ? 'Diagram of the thirteen-basin cascade over an aggregate texture' : 'Generated exposed-aggregate concrete texture'}">
    <rect width="300" height="300" fill="var(--cement)"/>${pebbles}${cascade}</svg>`;
}

export function neighborhoodDiagram(list) {
  const cells = { nw: [0, 0], n: [1, 0], ne: [2, 0], w: [0, 1], c: [1, 1], e: [2, 1], sw: [0, 2], s: [1, 2], se: [2, 2] };
  const S = 110;
  const nodes = list.map((n) => {
    const [cx, cy] = cells[n.pos];
    const x = cx * S + S / 2 + 10, y = cy * S + S / 2 + 10;
    return `<g class="nb" data-name="${n.name}" tabindex="0" role="button">
      <circle cx="${x}" cy="${y}" r="${n.pos === 'c' ? 0 : 34}" />
      <text x="${x}" y="${n.pos === 'c' ? y + 50 : y}" text-anchor="middle" class="svg-label">${n.name.split(' ').map((w, i) => `<tspan x="${x}" dy="${i ? 13 : 0}">${w}</tspan>`).join('')}</text>
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 350 350" role="img" aria-label="Schematic map of neighborhoods around the park">
    <rect x="10" y="10" width="330" height="330" fill="none" stroke="var(--rule)" stroke-dasharray="2 4"/>
    <line x1="150" y1="10" x2="150" y2="340" class="street"/><text x="146" y="330" class="svg-mono" transform="rotate(-90 146 330)">16TH ST</text>
    <line x1="210" y1="10" x2="210" y2="340" class="street"/><text x="222" y="330" class="svg-mono" transform="rotate(-90 222 330)">15TH ST</text>
    <rect x="150" y="130" width="60" height="100" class="park-block"/>
    <text x="180" y="185" text-anchor="middle" class="svg-mono">PARK</text>
    <text x="175" y="24" class="svg-mono">N ↑</text>
    ${nodes}
  </svg>`;
}

export function borderDiagram() {
  // Profile from Euclid (north, high) to W St (south, low), ~75 ft drop per sources.
  const pts = 'M20,60 L150,62 L160,62 L160,100 L200,102 L200,140 L240,142 L240,180 L300,185 L380,190';
  return `<svg viewBox="0 0 400 260" role="img" aria-label="Schematic north-south section showing a 75 foot drop">
    <path d="${pts} L380,240 L20,240 Z" fill="var(--cement)" />
    <path d="${pts}" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <g class="walls"><rect x="156" y="62" width="6" height="40"/><rect x="196" y="100" width="6" height="42"/><rect x="236" y="140" width="6" height="42"/></g>
    <line x1="392" y1="60" x2="392" y2="190" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="386" y="130" text-anchor="end" class="svg-mono accent">≈75 FT</text>
    <text x="20" y="50" class="svg-mono">EUCLID ST · NORTH</text>
    <text x="380" y="210" text-anchor="end" class="svg-mono">W ST · SOUTH</text>
    <text x="60" y="95" class="svg-label">upper mall</text>
    <text x="205" y="125" class="svg-label">cascade</text>
    <text x="290" y="175" class="svg-label">pool</text>
    <text x="20" y="232" class="svg-mono">SCHEMATIC · WALL POSITIONS ILLUSTRATIVE</text>
  </svg>`;
}

export function parkPlan(stops) {
  const W = 200, H = 400;
  const X = (p) => 20 + (p / 100) * (W - 40), Y = (p) => 20 + (p / 100) * (H - 40);
  let basins = '';
  for (let i = 0; i < 13; i++) basins += `<rect x="${X(50) - 8}" y="${Y(42) + i * 8}" width="16" height="5" class="basin"/>`;
  const route = stops.map((s, i) => `${i ? 'L' : 'M'}${X(s.x)},${Y(s.y)}`).join(' ');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Schematic plan of the park with walking stops">
    <rect x="20" y="20" width="${W - 40}" height="${H - 40}" class="park-outline"/>
    <rect x="${X(18)}" y="${Y(12)}" width="${X(82) - X(18)}" height="${Y(36) - Y(12)}" class="lawn"/>
    ${basins}
    <rect x="${X(30)}" y="${Y(74)}" width="${X(70) - X(30)}" height="${Y(86) - Y(74)}" class="pool"/>
    <line x1="${X(0)}" y1="${Y(40)}" x2="${X(100)}" y2="${Y(40)}" class="wall-line"/>
    <text x="${W / 2}" y="13" text-anchor="middle" class="svg-mono">EUCLID ST</text>
    <text x="${W / 2}" y="${H - 5}" text-anchor="middle" class="svg-mono">W ST</text>
    <text x="12" y="${H / 2}" text-anchor="middle" class="svg-mono" transform="rotate(-90 12 ${H / 2})">16TH ST</text>
    <text x="${W - 8}" y="${H / 2}" text-anchor="middle" class="svg-mono" transform="rotate(90 ${W - 8} ${H / 2})">15TH ST</text>
    <path d="${route}" class="route"/>
    ${stops.map((s) => `<g class="pin" data-n="${s.n}" role="button" tabindex="0" aria-label="Stop ${s.n}: ${s.name}">
      <circle cx="${X(s.x)}" cy="${Y(s.y)}" r="9"/><text x="${X(s.x)}" y="${Y(s.y) + 3.5}" text-anchor="middle">${s.n}</text></g>`).join('')}
  </svg>`;
}
