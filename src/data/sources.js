// Source registry. Every claim on the site points at one or more of these ids.
// mcpServer / mcpTool are null when a source was NOT retrieved through MCP.
// Raw MCP responses are preserved in research/raw/*.json.

export const ACCESSED = '2026-09-28';

export const sources = {
  'nps-findparks-meridian': {
    title: 'findParks search for "Meridian Hill"',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/findapark/index.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'findParks',
    args: { q: 'Meridian Hill', limit: 10 },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'No park unit named Meridian Hill. The query returned 57 unrelated units in alphabetical order, which indicates the search term matched nothing specific. Meridian Hill Park is not a standalone NPS unit.',
    raw: 'research/raw/nps.json',
  },
  'nps-findparks-dc': {
    title: 'findParks for stateCode DC',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/state/dc/index.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'findParks',
    args: { stateCode: 'DC', limit: 50 },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'The NPS lists 36 units for DC. Rock Creek Park (code rocr) is one. None is named Meridian Hill Park.',
    raw: 'research/raw/nps.json',
  },
  'nps-rocr-details': {
    title: 'Rock Creek Park park details',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/rocr/index.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'getParkDetails',
    args: { parkCode: 'rocr' },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'Rock Creek Park: 1,754 acres, authorized 1890, "the third national park to be designated by the federal government." Directions text: "Rock Creek Park also administers 99 separate neighborhood small sites." Park land open sunrise to sunset unless otherwise designated.',
    raw: 'research/raw/nps.json',
  },
  'nps-rocr-alerts': {
    title: 'Rock Creek Park alerts (all, and filtered for "Meridian")',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/rocr/planyourvisit/conditions.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'getAlerts',
    args: { parkCode: 'rocr', q: 'Meridian' },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      '3 active alerts for Rock Creek Park (Waterside Drive, Nature Center, Fort Totten). 0 alerts mention Meridian Hill.',
    raw: 'research/raw/nps.json',
  },
  'nps-rocr-event-meridian': {
    title: 'Event: "Mobilizing Memories at Meridian Hill"',
    organization: 'National Park Service, Rock Creek Park (NPS Data API)',
    url: 'https://www.nps.gov/rocr/planyourvisit/calendar.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'getEvents',
    args: { parkCode: 'rocr', q: 'Meridian' },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'Ranger walking tour listed under Rock Creek Park on 2026-10-17. NPS text: "Meridian Hill Park, colloquially referred to as Malcolm X Park, is known for its beauty, art, recreation, First Amendment space, and illustrious history." Theme: "who we choose to memorialize and why." Meets by the bathrooms near 15th and Euclid St. Location: 16th St between Euclid and W Streets NW. Coordinates 38.922366, -77.035418. Tags include "malcolm x park", "cascading fountain", "Freedom 250".',
    raw: 'research/raw/nps.json',
  },
  'nps-rocr-events-all': {
    title: 'Rock Creek Park events (unfiltered)',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/rocr/planyourvisit/calendar.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'getEvents',
    args: { parkCode: 'rocr', limit: 50 },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      '46 events listed across Rock Creek Park sites (Nature Center, Peirce Mill, Old Stone House, Georgetown, Dumbarton Oaks, Meridian Hill). One of the 46 is at Meridian Hill.',
    raw: 'research/raw/nps.json',
  },
  'nps-rocr-visitorcenters': {
    title: 'Rock Creek Park visitor centers',
    organization: 'National Park Service (NPS Data API)',
    url: 'https://www.nps.gov/rocr/planyourvisit/hours.htm',
    mcpServer: 'nationalparks',
    mcpTool: 'getVisitorCenters',
    args: { parkCode: 'rocr' },
    temporal: 'current',
    accessed: ACCESSED,
    obtained: 'Three visitor centers: Old Stone House, Nature Center, Peirce Mill. None at Meridian Hill.',
    raw: 'research/raw/nps.json',
  },
  'datagov-mcp-failure': {
    title: 'Data.gov MCP: package_search, package_show, group_list, tag_list',
    organization: 'U.S. General Services Administration (Data.gov catalog)',
    url: 'https://catalog.data.gov/',
    mcpServer: 'datagov',
    mcpTool: 'package_search, package_show, group_list, tag_list',
    args: { q: '12 queries, incl. "Meridian Hill Park", "Malcolm X Park", "National Register of Historic Places", "DC neighborhood clusters"' },
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'All 15 calls failed with HTTP 404. The server hardcodes https://catalog.data.gov/api/3, which no longer responds. No dataset was retrieved, so no Data.gov dataset is used on this site.',
    raw: 'research/raw/datagov-search.json',
  },
  'nps-places-meridian': {
    title: 'Meridian Hill Park (NPS Places)',
    organization: 'National Park Service',
    url: 'https://www.nps.gov/places/meridian-hill-park.htm',
    mcpServer: null,
    mcpTool: null,
    temporal: 'mixed',
    accessed: ACCESSED,
    obtained:
      'Porter mansion 1819; J. Q. Adams 1829; Union troops camped during the Civil War; federal purchase 1910; Burnap and Peaslee Italian-style plan; "revolutionary use of concrete aggregate"; 13-basin cascade "one of the longest in North America"; Joan of Arc the only equestrian statue of a woman in DC; armillary sphere damaged in the 1960s, new one installed November 2024; National Historic Landmark.',
  },
  'wikipedia-mhp': {
    title: 'Meridian Hill Park (Wikipedia)',
    organization: 'Wikipedia, secondary compilation',
    url: 'https://en.wikipedia.org/wiki/Meridian_Hill_Park',
    mcpServer: null,
    mcpTool: null,
    temporal: 'mixed',
    accessed: ACCESSED,
    obtained:
      'Secondary source. Most statements here cite an NPS study of African American experiences at the park (historian Elise Elder), the 1993 NHL nomination (Ethan Carr) and the 1972 NRHP nomination (Helen Dillon). Those primary documents were not read directly for this site, so claims from this source are marked "via secondary source".',
    secondary: true,
  },
  'tclf-mhp': {
    title: 'Meridian Hill Park',
    organization: 'The Cultural Landscape Foundation',
    url: 'https://www.tclf.org/meridian-hill-park',
    mcpServer: null,
    mcpTool: null,
    temporal: 'historical',
    accessed: ACCESSED,
    obtained:
      'Burnap hired by Interior in 1914; Peaslee modified plans; Ferruccio Vitale planting plan; twelve acres; upper mall, promenades, linden allée, Joan of Arc; lower cascade of thirteen basins into a reflecting pool; exposed aggregate; cascade inspired by Villa Aldobrandini, Frascati; Mary Foote Henderson a major force.',
  },
  'news-fountain-2026': {
    title: 'Fountain flows again at D.C.\'s Meridian Hill Park after idling for 7 years',
    organization: 'The Washington Times (May 16, 2026), with an NPS spokesperson quoted',
    url: 'https://www.washingtontimes.com/news/2026/may/16/fountain-flows-dcs-meridian-hill-park-idling-7-years/',
    mcpServer: null,
    mcpTool: null,
    temporal: 'current',
    accessed: ACCESSED,
    obtained:
      'Read through a search-result summary, not the full article. Fountain shut in 2019; reopened May 2026 alongside the lower plaza under Executive Order 14252; NPS spokesperson cited $15 million in repairs, $10.7 million for the cascade, pool, secondary fountains and plumbing; upper-park work continuing.',
    partial: true,
  },
  'nps-nhl-nomination': {
    title: 'National Historic Landmark Nomination: Meridian Hill Park (1993)',
    organization: 'National Park Service',
    url: 'https://npgallery.nps.gov/pdfhost/docs/NHLS/Text/74000273.pdf',
    mcpServer: null,
    mcpTool: null,
    temporal: 'historical',
    accessed: ACCESSED,
    obtained:
      'Located but not read. The PDF is a scanned image and its text could not be extracted. Listed here as the key primary source for follow-up.',
    unread: true,
  },
};
