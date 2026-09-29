// Site content. Every claim has:
//   type: 'historical' | 'current' | 'interpretation' | 'disputed'
//   src:  array of source ids from sources.js (empty only for editorial interpretation)
//   note: optional qualification shown with the claim
// Interpretation is the editors' analysis and is never presented as established fact.

export const claimTypes = {
  historical: { label: 'Historical', short: 'HIST' },
  current: { label: 'Current', short: 'NOW' },
  interpretation: { label: 'Interpretation', short: 'READ' },
  disputed: { label: 'Disputed / qualified', short: 'Q?' },
};

export const sections = [
  {
    id: 'now',
    num: '01',
    title: 'The Park Now',
    kicker: 'Present tense',
    lede: 'A twelve-acre terraced garden on a ridge in Northwest Washington, administered as one of Rock Creek Park’s small sites.',
    claims: [
      { type: 'current', src: ['nps-rocr-event-meridian'], text: 'The NPS locates the park on 16th Street between Euclid and W Streets NW.' },
      { type: 'current', src: ['nps-rocr-event-meridian'], text: 'In its own event listing, the NPS describes the park as “colloquially referred to as Malcolm X Park” and “known for its beauty, art, recreation, First Amendment space, and illustrious history.”' },
      { type: 'current', src: ['nps-rocr-details', 'nps-findparks-meridian'], text: 'Meridian Hill Park is not a standalone national park unit. Rock Creek Park’s NPS record says it “also administers 99 separate neighborhood small sites,” and Meridian Hill events are published under Rock Creek Park.' },
      { type: 'current', src: ['nps-rocr-details'], text: 'Rock Creek Park land is open sunrise to sunset unless otherwise designated.', note: 'This is the general rule for Rock Creek Park lands. No Meridian-specific hours were returned.' },
      { type: 'current', src: ['nps-rocr-alerts'], text: 'On the date of research, none of Rock Creek Park’s three active NPS alerts concerned Meridian Hill.' },
      { type: 'current', src: ['news-fountain-2026'], text: 'The cascade was reported running again in May 2026 after years of shutdown, with work continuing in the upper park.', note: 'Reported by news coverage quoting the NPS. Check current conditions before visiting.' },
    ],
  },
  {
    id: 'built',
    num: '03',
    title: 'Who Built This Place?',
    kicker: 'Design, labor, patronage',
    lede: 'An Italian villa garden recast in concrete for a federal city, pushed forward by a private real-estate patron.',
    claims: [
      { type: 'historical', src: ['tclf-mhp', 'wikipedia-mhp'], text: 'Mary Foote Henderson, wife of former Missouri senator John B. Henderson, championed the park. She built a succession of mansions and embassies along 15th and 16th Streets between 1906 and 1930.' },
      { type: 'historical', src: ['nps-places-meridian', 'tclf-mhp'], text: 'Landscape architects George Burnap and Horace Peaslee planned an Italian-style garden. Ferruccio Vitale was the chief designer of the planting plan.' },
      { type: 'disputed', src: ['tclf-mhp', 'wikipedia-mhp'], text: 'Burnap was hired in 1914 according to the Cultural Landscape Foundation. Other accounts place his hiring in 1913.', note: 'Sources disagree. The NHL nomination should settle this.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Burnap was dismissed in August 1916 and Peaslee became lead landscape architect the following year, remaining on the project until the 1930s.', note: 'Via secondary source citing the 1993 NHL nomination.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Craftsman John Joseph Earley began the massive retaining walls in 1915 and developed the exposed-aggregate finish he called “architectural concrete.”', note: 'Via secondary source.' },
      { type: 'historical', src: ['tclf-mhp'], text: 'The cascade was inspired by the fountains of the Villa Aldobrandini at Frascati.' },
      { type: 'interpretation', src: [], text: 'The sources name designers, a craftsman and a patron. They are silent on the construction workforce. Who poured the concrete, and under what conditions, is an open research question here, not an answered one.' },
      { type: 'interpretation', src: ['wikipedia-mhp'], text: 'Henderson’s park sat among her own developments. It is reasonable to read the park as raising the value and prestige of her 16th Street properties. That is an inference from the pattern, not a documented statement of her motives.' },
    ],
  },
  {
    id: 'neighborhood',
    num: '04',
    title: 'The Neighborhood',
    kicker: 'Who lived here',
    lede: 'Before the garden, the land held homes, a seminary and grocery stores.',
    claims: [
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Wayland Seminary was built in 1875 at 15th Street (then Columbia Avenue) and Euclid to educate Black preachers and teachers. Alumni included Booker T. Washington and Adam Clayton Powell Sr.', note: 'Via secondary source citing an NPS study.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'When Congress approved the park on June 25, 1910, there were at least 35 houses within today’s park boundaries. All but two were occupied by Black residents, and there were two grocery stores.', note: 'Via secondary source citing an NPS study.' },
      { type: 'interpretation', src: ['wikipedia-mhp'], text: 'Building the park meant removing those households. The sources consulted do not say where the residents went or whether they were compensated. That gap belongs at the center of any account of who benefited.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'The Meridian Hill Historic District was added to the National Register of Historic Places on May 21, 2014.' },
      { type: 'interpretation', src: [], text: 'The diagram shows the general orientation of neighborhoods around the park. It is editorial and schematic, not a survey of official boundaries.', note: 'No boundary dataset could be retrieved from Data.gov.' },
    ],
  },
  {
    id: 'border',
    num: '05',
    title: 'The Park as a Border',
    kicker: 'Wall, stair, threshold',
    lede: 'The ground falls about 75 feet from Euclid Street to W Street. Walls hold the hill, and stairs cut through them.',
    claims: [
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Elevation drops about 75 feet from the northern edge on Euclid Street to the southern edge on W Street.', note: 'Via secondary source citing the NHL nomination.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'The park is bounded by 15th Street on the east, 16th Street on the west, Euclid Street on the north and W Street on the south.' },
      { type: 'interpretation', src: [], text: 'Massive retaining walls make the park legible as a fortress from some edges and a stage from others. A wall that holds soil can also hold people apart.' },
      { type: 'interpretation', src: [], text: '16th Street runs along the park’s west side, so the park sits between blocks to its east and west and between high ground and low. Read it as a hinge rather than a line: it both separates and gathers.' },
    ],
  },
  {
    id: 'malcolm',
    num: '06',
    title: 'Malcolm X Park',
    kicker: 'A name the map does not carry',
    lede: 'The NPS itself now acknowledges the unofficial name. The official name has never changed.',
    claims: [
      { type: 'historical', src: ['wikipedia-mhp'], text: 'In the late 1960s, Black activists began calling the park Malcolm X Park.', note: 'Via secondary source citing an NPS study.' },
      { type: 'disputed', src: ['wikipedia-mhp'], text: 'Who coined the name is unknown. Black United Front member R. H. Booker said his group did. Angela Davis is often credited, but NPS historian Elise Elder found no evidence for that claim.', note: 'Contested attribution. Do not repeat the Angela Davis origin as fact.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'In 1970, Representative Adam Clayton Powell Jr. introduced a bill to rename the park Malcolm X Park. It did not pass.' },
      { type: 'disputed', src: ['wikipedia-mhp'], text: 'The NPS has said the presidential memorial in the park, to James Buchanan, means it cannot be named for anyone else.', note: 'Reported via secondary source. The underlying NPS policy was not reviewed.' },
      { type: 'current', src: ['nps-rocr-event-meridian'], text: 'A 2026 NPS event listing uses the phrase “colloquially referred to as Malcolm X Park” and tags the event “malcolm x park.”' },
      { type: 'interpretation', src: [], text: 'The park holds two names at once. One is official and inscribed. The other is spoken and practiced. The gap between them is a record of who has claimed the space.' },
    ],
  },
  {
    id: 'sunday',
    num: '07',
    title: 'Sunday',
    kicker: 'Field observation, not data',
    lede: 'No source retrieved for this project documents present-day Sunday activities in detail. This section is a set of things to look for, not findings.',
    claims: [
      { type: 'current', src: ['nps-rocr-event-meridian'], text: 'The NPS names recreation, art and “First Amendment space” among the park’s current identities.' },
      { type: 'interpretation', src: [], text: 'Observation prompts: Where do drummers set up, and who gathers around them? Which surfaces host exercise, dance, picnics or dogs? Which edges stay empty? Record time, place and count.', note: 'Unverified. Fill this in from your own visit.' },
    ],
    observation: ['Drumming', 'Dancing', 'Yoga', 'Pickup soccer', 'Picnics', 'Dogs', 'Sitting on walls', 'Photography', 'Protest / signs'],
  },
  {
    id: 'drums',
    num: '08',
    title: 'The Drum Circle',
    kicker: 'Documented, reported, remembered',
    lede: 'The drum circle is the park’s best-known ritual, and among its least documented.',
    claims: [
      { type: 'disputed', src: ['wikipedia-mhp'], text: 'A drum circle was reportedly held in the park after Malcolm X’s assassination in 1965 to honor his memory.', note: 'Reported via secondary source. The 1965 origin rests on accounts summarized in an NPS study that was not read directly.' },
      { type: 'disputed', src: ['wikipedia-mhp'], text: 'Baba Ngoma, the Howard Theatre’s house drummer, is reported to have been the first to drum in the park. The circle became a weekly event.', note: 'Attribution via secondary source.' },
      { type: 'interpretation', src: [], text: 'The circle has lasted without a permit, a building or an official name. It is a form of memory kept by practice rather than by monument, in a park full of bronze memorials.' },
    ],
  },
  {
    id: 'material',
    num: '09',
    title: 'Material / Infrastructure',
    kicker: 'Pebble, cement, pump, wall',
    lede: 'Every hard surface here is a single experiment in exposed-aggregate concrete.',
    claims: [
      { type: 'historical', src: ['nps-places-meridian'], text: 'The NPS states the structures “made revolutionary use of concrete aggregate as a building material.”' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Earley’s technique washed the surface to expose pebbles set into the concrete. He used it for walls, fountains, benches and balustrades.' },
      { type: 'historical', src: ['tclf-mhp'], text: 'Walls and fountains were built of exposed aggregate in varying colors and textures.' },
      { type: 'historical', src: ['nps-places-meridian', 'tclf-mhp'], text: 'The cascade drops through thirteen basins into a large reflecting pool. The NPS calls it one of the longest in North America.' },
      { type: 'current', src: ['news-fountain-2026'], text: 'An NPS spokesperson put repairs at $15 million, with $10.7 million for the cascade, reflecting pool, secondary fountains, plumbing and water structure.', note: 'Via news coverage, read in summary only.' },
      { type: 'interpretation', src: [], text: 'The cascade is a machine as much as an ornament. When the pumps stop, the architecture reads as ruin. The park’s image depends on hidden plumbing.' },
    ],
  },
  {
    id: 'uprising',
    num: '10',
    title: '1968',
    kicker: 'Uprising and aftermath',
    lede: 'The sources consulted establish the park’s aftermath programs more clearly than its role during the April 1968 uprising itself.',
    claims: [
      { type: 'historical', src: ['wikipedia-mhp'], text: 'The uprising after Martin Luther King Jr.’s assassination had a profound effect on parts of the city, including the Meridian Hill neighborhood.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'Industrial designer Russel Wright was hired by the NPS to suggest improvements to area parks.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'A few months after the uprising, the Summer in the Park program began, aimed at inner-city youth. Its opening event drew about 20,000 people.' },
      { type: 'historical', src: ['nps-places-meridian'], text: 'The armillary sphere was damaged in the 1960s and later disappeared.' },
      { type: 'interpretation', src: [], text: 'Federal programming after 1968 treated parks as instruments of calm. The same years produced the Malcolm X name. The park became a site where state and community each tried to set its meaning.' },
      { type: 'disputed', src: [], text: 'Gap: no source consulted describes events inside the park during the April 1968 uprising. This site does not claim any.' },
    ],
  },
  {
    id: 'restoration',
    num: '11',
    title: 'Restoration',
    kicker: 'Decline, patrol, repair',
    lede: 'Restoration here has meant plumbing and paving, but also policing and patrols.',
    claims: [
      { type: 'historical', src: ['wikipedia-mhp'], text: 'In 1976, fountain plumbing, sidewalks and lighting were repaired. In 1981 the NPS imposed a 9 pm curfew, yet crime remained high.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'In the 1980s columnist Courtland Milloy called it “Crack Park.” Historian Michael Willrich wrote that the park itself was mainly a place where marijuana was sold.', note: 'The labels were contested at the time. Via secondary source.' },
      { type: 'historical', src: ['wikipedia-mhp'], text: 'In 1990, Steve Coleman, Josephine Butler, Morris Samuel and Howard Coleman formed Friends of Meridian Hill. It ran night patrols, planted trees and produced arts programs.' },
      { type: 'disputed', src: ['wikipedia-mhp'], text: 'Reported crime fell 82 percent between 1990 and 1992.', note: 'Single statistic via secondary source. Its original measurement was not reviewed.' },
      { type: 'historical', src: ['nps-places-meridian'], text: 'The NPS installed a new armillary sphere in November 2024.' },
      { type: 'disputed', src: ['news-fountain-2026', 'wikipedia-mhp'], text: 'Dates for the recent closure conflict. News coverage says the fountain shut in 2019. Wikipedia says the lower level closed in 2020 and reopened in 2023, while news coverage reports a lower-plaza reopening in May 2026.', note: 'Unresolved. The NPS project record is the source to consult.' },
      { type: 'current', src: ['news-fountain-2026'], text: 'News coverage says the 2026 reopening was carried out under Executive Order 14252, “Making the District of Columbia Safe and Beautiful.”', note: 'Stated framing as reported. Its effect on the park is a matter of current debate.' },
      { type: 'interpretation', src: [], text: 'Each restoration raises the question of whose park is being restored: the 1936 villa, the 1970s gathering ground, or the neighborhood park defended by volunteers in the 1990s.' },
    ],
  },
];

// Timeline events. Same type/src model.
export const timeline = [
  { year: '1819', type: 'disputed', src: ['nps-places-meridian', 'wikipedia-mhp'], text: 'A Porter mansion is completed on the hill.', note: 'The NPS says John Porter. Wikipedia says Commodore David Porter.' },
  { year: '1829', type: 'historical', src: ['nps-places-meridian'], text: 'Departing President John Quincy Adams lives in the mansion.' },
  { year: '1861–65', type: 'historical', src: ['nps-places-meridian'], text: 'Union troops camp on the grounds.' },
  { year: '1875', type: 'historical', src: ['wikipedia-mhp'], text: 'Wayland Seminary opens at 15th and Euclid to train Black preachers and teachers.' },
  { year: '1887', type: 'historical', src: ['wikipedia-mhp'], text: 'John B. and Mary Foote Henderson settle in Washington and build Henderson Castle.' },
  { year: '1910', type: 'historical', src: ['nps-places-meridian', 'wikipedia-mhp'], text: 'Congress approves the park on June 25. The government buys land holding at least 35 houses, nearly all home to Black residents.' },
  { year: '1914', type: 'disputed', src: ['tclf-mhp', 'wikipedia-mhp'], text: 'George Burnap hired to design the park.', note: 'Some accounts say 1913.' },
  { year: '1915', type: 'historical', src: ['wikipedia-mhp'], text: 'John Joseph Earley begins the retaining walls in exposed-aggregate concrete.' },
  { year: '1921–22', type: 'historical', src: ['wikipedia-mhp'], text: 'Dante (Dec 1, 1921) and Joan of Arc (Jan 6, 1922) statues dedicated.' },
  { year: '1923', type: 'historical', src: ['wikipedia-mhp'], text: 'Upper level opens to the public.' },
  { year: '1930', type: 'historical', src: ['wikipedia-mhp'], text: 'James Buchanan Memorial dedicated on June 26.' },
  { year: '1936', type: 'historical', src: ['wikipedia-mhp'], text: 'Park officially opens on September 26. The Noyes Armillary Sphere is the last major artwork installed.' },
  { year: '1964', type: 'historical', src: ['wikipedia-mhp'], text: 'Added to the DC Inventory of Historic Sites.' },
  { year: '1965', type: 'disputed', src: ['wikipedia-mhp'], text: 'Drum circle reportedly begins after Malcolm X’s assassination.', note: 'Reported origin.' },
  { year: '1968', type: 'historical', src: ['wikipedia-mhp'], text: 'Uprising after King’s assassination affects the neighborhood. Summer in the Park program follows.' },
  { year: 'Late 1960s', type: 'historical', src: ['wikipedia-mhp'], text: 'Activists begin calling it Malcolm X Park.' },
  { year: '1970', type: 'historical', src: ['wikipedia-mhp'], text: 'Rep. Adam Clayton Powell Jr.’s renaming bill fails.' },
  { year: '1974', type: 'historical', src: ['wikipedia-mhp'], text: 'Listed on the National Register of Historic Places on October 25.' },
  { year: '1981', type: 'historical', src: ['wikipedia-mhp'], text: 'NPS imposes a 9 pm curfew.' },
  { year: '1990', type: 'historical', src: ['wikipedia-mhp'], text: 'Friends of Meridian Hill founded. Volunteer night patrols begin.' },
  { year: '1994', type: 'historical', src: ['nps-places-meridian', 'wikipedia-mhp'], text: 'Designated a National Historic Landmark on April 19.' },
  { year: '2014', type: 'historical', src: ['wikipedia-mhp'], text: 'Meridian Hill Historic District listed on the National Register.' },
  { year: '2019–23', type: 'disputed', src: ['news-fountain-2026', 'wikipedia-mhp'], text: 'Fountain and lower level closed for rehabilitation.', note: 'Sources give different dates.' },
  { year: '2024', type: 'historical', src: ['nps-places-meridian'], text: 'Replica armillary sphere installed in November.' },
  { year: '2026', type: 'current', src: ['news-fountain-2026'], text: 'Cascade reported running again in May.' },
  { year: '2026', type: 'current', src: ['nps-rocr-event-meridian'], text: 'NPS ranger walk “Mobilizing Memories at Meridian Hill” scheduled for October 17.' },
];

// Walking route. Positions are schematic percentages on the park diagram, not surveyed coordinates.
export const walk = [
  { n: 1, x: 50, y: 7, name: 'Euclid Street edge', type: 'historical', src: ['wikipedia-mhp'], text: 'Start at the high northern edge. The ground ahead falls about 75 feet to W Street.', look: 'Turn south. Notice how much of the city you can see.' },
  { n: 2, x: 50, y: 24, name: 'Upper mall', type: 'historical', src: ['tclf-mhp'], text: 'A central lawn, side promenades and a linden allée form the upper terrace. Joan of Arc stands here.', look: 'Where do people spread out, and where do they only pass through?' },
  { n: 3, x: 74, y: 12, name: '15th & Euclid', type: 'historical', src: ['wikipedia-mhp', 'nps-rocr-event-meridian'], text: 'Wayland Seminary stood at this corner from 1875. Today NPS ranger walks meet near the bathrooms here.', look: 'Nothing marks the seminary. What else has left no trace?' },
  { n: 4, x: 50, y: 48, name: 'Head of the cascade', type: 'historical', src: ['nps-places-meridian', 'tclf-mhp'], text: 'Thirteen basins step down the slope, modeled on the Villa Aldobrandini at Frascati.', look: 'Is the water running today? Listen for the pumps.' },
  { n: 5, x: 24, y: 55, name: 'Retaining walls', type: 'historical', src: ['wikipedia-mhp'], text: 'Earley began these walls in 1915. Up close, the surface is a mosaic of exposed pebbles.', look: 'Touch the aggregate. Look for patches and newer repair work.' },
  { n: 6, x: 50, y: 80, name: 'Reflecting pool', type: 'current', src: ['tclf-mhp', 'news-fountain-2026'], text: 'The cascade ends in a large pool. This lower plaza was at the center of the 2019–2026 repair work.', look: 'Compare the new work with the old. What was kept, what replaced?' },
  { n: 7, x: 50, y: 95, name: 'W Street edge', type: 'interpretation', src: [], text: 'Look back uphill. From here the park reads as a wall and a stage at once.', look: 'Is the park inviting or guarded from this side?' },
];

// Neighborhood orientation. Editorial schematic only.
export const neighborhoods = [
  { name: 'Columbia Heights', pos: 'ne', note: 'North and east of the park.' },
  { name: 'Mount Pleasant', pos: 'nw', note: 'North and west, beyond 16th Street.' },
  { name: 'Adams Morgan', pos: 'w', note: 'West across 16th Street.' },
  { name: 'U Street / Shaw', pos: 's', note: 'South and southeast, downhill.' },
  { name: 'Meridian Hill', pos: 'c', note: 'The hill and historic district around the park.' },
  { name: 'Washington Heights', pos: 'sw', note: 'Historic name for the area southwest of the park. Location not verified in sources consulted.' },
];
