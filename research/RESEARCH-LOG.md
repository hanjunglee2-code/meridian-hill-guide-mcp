# Research log

Accessed 2026-09-28. Raw MCP responses are in `raw/`. The client that produced them is `mcp-client.mjs`.

## How MCP was called

The `nationalparks` and `datagov` servers are configured at user scope in `~/.claude.json`.
`mcp-client.mjs` launches each server exactly as configured and calls tools over MCP JSON-RPC (`tools/call`).
The NPS API key is read from that user config at runtime. It is never written into this project.

## National Parks MCP (`nationalparks`)

| Tool | Arguments | Result |
|---|---|---|
| findParks | q "Meridian Hill" | No matching unit. Returned 57 unrelated parks alphabetically. |
| findParks | q "Rock Creek", DC | Rock Creek Park (rocr), Civil War Defenses of Washington. |
| findParks | stateCode DC | 36 DC units. No Meridian Hill unit. |
| getParkDetails | rocr | 1,754 acres, authorized 1890. "Also administers 99 separate neighborhood small sites." |
| getAlerts | rocr | 3 alerts, none about Meridian Hill. |
| getAlerts | rocr, q "Meridian" | 0 alerts. |
| getEvents | rocr | 46 events. One at Meridian Hill. |
| getEvents | rocr, q "Meridian" | "Mobilizing Memories at Meridian Hill", 2026-10-17. Describes the park as "colloquially referred to as Malcolm X Park" and a "First Amendment space". |
| getVisitorCenters | rocr | Old Stone House, Nature Center, Peirce Mill. None at Meridian Hill. |

**Finding:** Meridian Hill Park is not a standalone NPS unit. The NPS represents it through Rock Creek Park.

## Data.gov MCP (`datagov`)

| Tool | Calls | Result |
|---|---|---|
| package_search | 12 queries | HTTP 404 on every call |
| package_show | 1 | HTTP 404 |
| group_list | 1 | HTTP 404 |
| tag_list | 1 | HTTP 404 |

The package hardcodes `https://catalog.data.gov/api/3`. That endpoint returns 404 for every action, including `status_show`.
The catalog website's search ignored the query and returned generic popular datasets, so it was not usable as a fallback.
**No Data.gov dataset is used on the site.** Nothing was forced in to demonstrate MCP use.

## Non-MCP sources

- NPS Places page for Meridian Hill Park. Read directly.
- Wikipedia, Meridian Hill Park. Secondary. It cites an NPS study of African American experiences (Elise Elder), the 1993 NHL nomination (Ethan Carr) and the 1972 NRHP nomination.
- The Cultural Landscape Foundation page. Read directly.
- Washington Times, May 16, 2026. Read only through a search-result summary.
- NHL nomination PDF. Located, but it is a scanned image and its text could not be extracted.

## Known conflicts between sources

- Porter mansion builder: NPS says John Porter; Wikipedia says Commodore David Porter.
- Burnap hiring: 1914 (TCLF) or 1913 (other accounts).
- Recent closure: fountain shut 2019 (news); lower level closed 2020, reopened 2023 (Wikipedia); lower plaza reopened May 2026 (news).
- Armillary sphere: damaged in the 1960s (NPS); removed 1973 (Wikipedia).

## Open research gaps

- Primary text of the NHL nomination and the NPS African American experiences study.
- Where the pre-1910 Black residents went, and on what terms.
- Construction labor force.
- Events inside the park during the April 1968 uprising.
- Documentation of today's Sunday activities.
- An official neighborhood boundary dataset, for example from DC Open Data.
