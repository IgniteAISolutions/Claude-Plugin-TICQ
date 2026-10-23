# Anonymisation: building the list and rewriting

How `/release` carries out steps 3 and 6 of the gate. The gate's rules are in
`references/release-gate.md` at the plugin root and win over this file. Where the
business's governance, recorded in `System/Ember/map.md`, is stricter, that wins over
both.

The aim is a text a stranger could read without learning who the client is, that the
client's own staff would accept as fair, and that still teaches a reader in the same
position something they can use.

## Part 1: building the identifier list

### Where to look, in this order

1. **The client card**, `<client>/README.md`: the folder name, `purpose`, the "What is in
   here" table (file names often carry site names, plot numbers, project code names) and
   the Last changed lines.
2. **The company page** in `<client>/`: trading names, brands, products, the decision-maker,
   the region and town, size, how long they have been a client, what they bought.
3. **Every person page** in `<client>/`: full name, first name, surname, initials, job
   title, any nickname used in sources.
4. **Every source the draft draws on**, read whole: names of sites, streets, plots,
   venues; every figure; every date; every phrase in quotation marks; any distinctive
   phrase a reader could search for; names of internal documents.
5. **The business's own pages the draft draws on** (a decision, an offer, an operations
   page): any line on them that names the client or holds a figure from the client's
   work.
6. **The draft itself**: anything in it that is not yet on the list and could narrow the
   reader down. A detail the draft adds is checked the same way as one the sources hold.

A client is "involved" when any source names them or was made for them. A person is
involved when they are named in any source the draft draws on, whatever side they work
for. The business's own staff are on the list too: naming the designer who led a job
can identify the client to anyone who knows the designer's work.

### The kinds and their variants

| Kind | What goes on the list | Variants to add |
|---|---|---|
| Client name | Legal name, trading names, brands, product names, web domain | Short name, possessive, initials, the name inside a longer word, a hashtag form |
| Person | Full name | First name alone, surname alone, initials, a nickname from the sources |
| Job title | A title only one person at the client holds | The title in short form |
| Place | Town, street, site, plot, venue, postcode, building name | Abbreviations, the place as an adjective |
| Figure | Every money amount, headcount, volume, duration, percentage | The same figure written as words, rounded, or in another unit |
| Date | Every exact date, month and year, weekday tied to an event | Both date formats, the month alone where it ties to one event |
| Document or project | File names, plan names, code names, tender references | The name without its extension or number |
| Phrase | Direct quotes, slogans, distinctive wording a search would find | Close paraphrases that keep the distinctive words |
| History | "Client since", contract length, a one-off event (an award, a flood, a launch) | The event described another way |

Each row in the staging file holds: identifier, kind, file and line, consent covers
(yes, with the consent field, or no), and what replaced it.

## Part 2: rewriting

Work in this order: names, people, places, documents and phrases, figures, dates, quotes.
Then run the combination test on the whole draft. Then read it as a stranger and as the
client.

### Names and products

- The client becomes a description at the level of a sector and a size band: "a housing
  developer", "a family-run hotel group", "a homeowner".
- A product or brand becomes what it is: "their main product line", "a range of
  self-build kits".
- Never use a made-up company name. A made-up name can belong to a real business. A
  plain description cannot.
- Never use initials or a first letter ("O. Estates", "a developer we'll call O.").

### People

- A person becomes their role at the level of a function: "their commercial lead", "the
  homeowner", "the site team".
- A title that only one person holds is widened: "commercial director" becomes "a senior
  manager" or "the client".
- The business's own staff are named only where the owner wants it and no client
  identifier is left that the name would complete. Default: "our designer", "the crew".
- No photos of people, faces, vehicles with livery, signs or house fronts.

### Places

- Keep a region at most: "the south of England", "the North West", "a coastal county".
- Remove towns, streets, sites, plots, venues, postcodes and building names.
- Where the place is the story ("a garden on a steep chalk slope"), keep the
  characteristic and drop the location.

### Figures: the banding table

Every exact figure becomes a band or a relative figure unless the client's `figures`
list names it. Use the widest band that still makes the point. Two figures that together
let a reader work out a third are both banded.

| Kind | Exact (example) | Band |
|---|---|---|
| Money, small | £0 to £999 | "under a thousand pounds" |
| Money | £1,000 to £9,999 | "a few thousand pounds" |
| Money | £10,000 to £99,999 | "tens of thousands of pounds" |
| Money | £100,000 to £249,999 | "a six-figure sum" |
| Money, large | £250,000 and up | "a significant contract", or a relative figure |
| Headcount | 1 to 9 | "a small team", "fewer than ten people" |
| Headcount | 10 to 49 | "a team of ten to fifty" |
| Headcount | 50 to 249 | "a mid-sized business" |
| Headcount | 250 and up | "a large organisation" |
| Volume | 2 to 5 units | "a handful", "a small run" |
| Volume | 6 to 20 units | "a dozen or so", "a run of" |
| Volume | above 20 | "dozens", "a large programme" |
| Duration | days | "a few days", "within the week" |
| Duration | weeks | "a few weeks", "about a month" |
| Duration | months | "a season", "over a year" |
| Change | a percentage | the nearest plain fraction: "about a quarter", "nearly half", "roughly double" |
| Change | a money saving | a relative figure on the same base ("about a fifth less design time"), never the amount |

A relative figure must be true. Compute it from the source's own before and after
figures, round down to the nearest plain fraction, and show the sum in the staging
file's Replacements section. If the source gives no base, use the money band instead. A
relative figure that cannot be shown from a source is a guess, and a guess never goes
out.

A ratio, a count of weeks early or late, or a percentage is still a figure when it is
unusual enough to be searched for or remembered by the client's market ("the first
developer to hand over 40 plots in a winter"). Band it.

### Dates

- An exact date becomes a season, a part of a year or a relative time: "in the autumn",
  "late last year", "within six weeks of signing".
- Keep a year only when the year is the point (a regulation that started that year) and
  nothing else narrows it.
- Never keep a date that ties to a public event the client was part of (a launch, an
  opening, a planning decision in the news).
- Relative time is measured from the event, never from today. Write "two weeks earlier
  than planned" and never "last month": the piece will be read long after it was
  written.

### Quotes

- Without `quotes: true` covering this use, a quote becomes paraphrase in the business's
  own words, attributed to no one: "the client said the early concept stage let them
  plan their sales launch" becomes "an early concept stage gave the developer time to
  plan around it".
- A paraphrase drops the distinctive words. If a search for any five words in a row from
  the paraphrase would find the original (in a review, a post, the client's own site),
  it is still a quote.
- With `quotes: true`, a quote is used word for word or not at all, and attributed by
  the name and title the consent allows. Never tidy a quote.

### Documents, code names and phrases

- Internal document names, plan names and project code names are removed. "The plot 4
  planting plan" becomes "the planting plan".
- A phrase the client uses for its own product or programme is removed.

## Part 3: the combination rule

Each detail can pass alone while together they point to one business. The test: list
what the draft still says about the client in four columns, sector, size, region and
any distinctive event, then ask how many businesses fit all four at once.

- **Many fit**: release.
- **A few fit, and a reader in the client's market could guess**: widen the column that
  narrows most, and test again.
- **One fits**: remove or generalise the distinctive event first, then widen size, then
  region. Sector is usually the point of the story, so it goes last.

Write the four columns and the answer in the staging file. The verifier's R5 row checks
the same four and says why.

### Worked reasoning, Fernhill

The two-stage design fee case study, 14/11/2026, drawn from the Oakmere Estates folder.

First draft, after names and figures were handled:

| Sector | Size | Region | Distinctive event |
|---|---|---|---|
| Garden design for a housing developer | A small run of new-build plots | The south of England | "On plot 4 the handover came two weeks early" |

Sector, size and region together fit many developers who use outside garden designers.
The event does not: "plot 4" is a site detail the developer's own staff and their buyers
would recognise, and with a timing it could be matched to a known handover. It is also
an identifier on the list. So the event is generalised to "one handover came two weeks
early". Two weeks early is kept: it is a relative duration, common enough to say nothing
about which developer.

The saving "£3,400 on design time" is an exact money figure with no consent. Banded to a
relative figure, "about a fifth less design time", with the sum from the transcript's
before and after figures in Replacements.

Second test: sector, size, region, and an event any developer could have. Many fit.
Release.

A counter-case that would fail: "a housing developer in <a named county> that won a
regional design award for its 2026 plots". Region narrowed to a county, a public award and a year
together point to one firm whatever else is removed. The award goes first; then the
county widens to the south of England.

## Part 4: what to keep

A good release still teaches something. After the rewrite, check the draft carries:

- **The problem**, in terms a reader in the same position recognises: "one design fee up
  front left both sides waiting on a full plan".
- **The approach**, specific enough to copy: "we split the fee in two, a concept and then
  a detailed plan".
- **What changed**, as a banded or relative result that is still a real result: "about a
  fifth less design time".
- **The sector**, because readers look for work like theirs.
- **One concrete detail that is not an identifier**: a stage, a step, a choice made and
  why.

If any of these is gone, the draft is weaker than it needs to be. Put back the general
form of what was removed, never the identifier. If the story only works with the client's
name, it is a named case study, and that needs consent.

## Part 5: read it twice

Before staging:

1. **As a stranger.** Could someone outside the client's market tell who it is? Look for
   any name, place, figure or phrase in the draft that a web search would resolve.
2. **As the client.** Would the client's decision-maker, reading it, feel it was fair and
   that nothing they told the business in confidence is in it? Something said in
   confidence stays out even when it identifies no one.

Both answers go into the staging file under Governance, one line each.
