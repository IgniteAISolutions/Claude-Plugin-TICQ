# The lint checks, the report lines and the three reports

Every check lint runs, what it tests, how it tests it, what counts as a finding, and how
serious that finding is. The procedure in `../SKILL.md` runs them in the order below. A
check with nothing to report still writes its `OK` line with the count it checked, so a
clean check can be told apart from one that never ran.

Folder kinds are written in angle brackets (`<policies>`, `<offers>`, `<client>`) and read
from the link map in `System/Ember/map.md`. A kind the map does not name is reported as
`NOT RUN | <check> | map.md names no folder for <kind>`, never guessed.

## What is in scope

- **Walked:** every folder under the working folder, apart from `_archive/`, `Skills/` and
  `System/Ember/reviews/`. `.obsidian/` is skipped too: it holds Obsidian's settings and
  nothing of the business.
- **A folder card** is a folder's `README.md`.
- **A knowledge page** is a Markdown file whose front matter `type` is one of `knowledge`,
  `person`, `company`, `decision`, `policy`, `case-study`.
- **A source** is a Markdown file with `type: source`.
- **An original** is any other file: a PDF, a Word file, a spreadsheet, an image.
- **Ember's working files** (`map.md`, `hot.md`, `index.md`, `log.md`, `learnings.md`,
  `releases.md`, `questions.md`, `connections.md`) are checked only where a line below
  names them. They are never knowledge pages and never sources.
- A Markdown file outside `System/` that is not a `README.md`, not the root `CLAUDE.md`
  or `MEMORY.md`, and has no `type` in its
  front matter (or no front matter at all) is treated as a knowledge page with the missing
  fields reported. A person may have written it by hand in Obsidian, and it still answers
  questions until it is fixed.

## How a wikilink resolves

`[[The Business/03 Offers & Pricing/pricing]]` resolves to that path with `.md` added.
A bare `[[pricing]]` resolves to any file named `pricing.md` in the working folder, the
way Obsidian resolves it; two files with that name is a finding under C19. Text after `|`
or `#` is ignored for resolving. A link into `_archive/` resolves, and is reported under
C14 as a link to retired material, because a live page should not lean on it.

A link **counts** for the required-link checks when it is a wikilink anywhere on the card
or page: in the front matter `links` list or in the body.

## Severity

| Level | Name | Meaning | Where it sits in the report |
|---|---|---|---|
| 1 | Leak | Private material could reach the public, or already sits beside published work | Leads the findings, F1 first |
| 2 | Fault | A rule of the contract is broken: one client beside another, a working file used as evidence, a figure where only a pointer belongs | Next |
| 3 | Gap | The vault is incomplete or out of date: a card that does not match its folder, a missing field, a missing required link, a page past review | Next |
| 4 | Housekeeping | Tidiness that affects answers slowly: orphans, duplicates, file sizes | Last |

Within a level, findings run in check order, then by path.

## The run check

Written first, above the findings, because a missing refresh means the cards were never
brought up to date and every card finding below may be stale.

| # | Check | How | Finding | Line |
|---|---|---|---|---|
| C0 | This week's refresh report | List `System/Ember/reviews/*-refresh.md`. Present when one is dated within the last seven days, today included | No refresh report in the last seven days | `RUN CHECK \| refresh report \| present: reviews/yyyymmdd-refresh.md` or `\| MISSING \| newest is reviews/yyyymmdd-refresh.md, n days old` or `\| MISSING \| none ever written` |

## Level 1: leak

| # | Check | What it tests | How | What counts as a finding | Line |
|---|---|---|---|---|---|
| C1 | F1, public to private | No page or card at `zone: public` links to a page or card at `zone: private` | For every card and page with `zone: public`, resolve every wikilink (front matter and body) and read the target's `zone`. A target with no `zone` is read from its folder card; a folder card with no `zone` is private | Any resolved target at `zone: private`, apart from the one link L11 requires (see the note below). A link to a target that cannot be resolved is a C14 finding, never a pass | `F1 PUBLIC TO PRIVATE \| <file>:<line> \| [[target]] \| target is zone: private (<target path>)` |
| C2 | Unreleased file in a public folder | Every file in a `zone: public` folder came through `/release` | List every file in each public folder and its subfolders, apart from the folder's own `README.md`. Read each Markdown file's `released:` field and look the id up in `System/Ember/releases.md`. An original (a PDF, a Word file, an image) has no front matter, so it can only pass by being named as the file path in a release record | A file with no `released:`; a `released:` id with no record in `releases.md`; a record whose path does not match the file's path; an original not named in any record | `UNRELEASED \| <file> \| no released: id` or `\| released: R-yyyy-nnn not in releases.md` or `\| record names a different path` or `\| original named in no release record` |

**The L11 note.** `link-map.md` requires every published case study to link to the offer it
shows (L11), and offers are private by default. Lint treats a link from a case study, or
from a public folder card, to a page or card in `<offers>` as the L11 link and does not
report it under F1, but only where the target is at `sensitivity: internal`, as F1 in
`link-map.md` allows. An `<offers>` page at `leadership` or `confidential` is F1. Every
other public-to-private link is F1.

## Level 2: fault

| # | Check | What it tests | How | What counts as a finding | Line |
|---|---|---|---|---|---|
| C3 | F2, client to client | One client's material never links to another's | For every card and page inside a `<client>` folder, resolve every wikilink and note which `Projects/<party>/` folder the target sits in | A target inside a different client's folder | `F2 CLIENT TO CLIENT \| <file>:<line> \| [[target]] \| <party a> links into <party b>` |
| C4 | F3, working file as source | Nothing cites a file in `System/Ember/` as evidence | Read the `source` field and every line under `## Sources` on every knowledge page | A path into `System/Ember/`. A case study's `source` reads `release R-yyyy-nnn`, as text matching its `released:` id, which is not a path and is not a finding | `F3 WORKING FILE AS SOURCE \| <file>:<line> \| cites System/Ember/<file>` |
| C5 | F4, figures on a finance page | Finance pages hold pointers and rules, never balances, invoice amounts or bank details | For every page in `<finance>`, read the body for a currency figure next to a word such as balance, owed, outstanding, invoice, paid or due; for an invoice number with an amount; for a sort code, account number or IBAN pattern | Any match. Quote the line number only, never the figure or the detail, so the report does not carry what the page should not | `F4 FIGURE ON FINANCE PAGE \| <file>:<line> \| <balance \| invoice amount \| bank detail> pattern found; value not copied here` |

## Level 3: gap

### Folder cards

| # | Check | What it tests | How | What counts as a finding | Line |
|---|---|---|---|---|---|
| C6 | Folder with no card | Every walked folder has a `README.md` | List the folders | A folder with no `README.md` | `NO CARD \| <folder>/ \| n files inside` |
| C7 | Card incomplete | The card carries `/structure`'s descriptor and Ember's fields and sections | Read the front matter and headings against `folder-card.md` | Missing any of `folder`, `purpose`, `belongs`, `does-not-belong`, `routing-test`, `version`, `type: folder`, `sensitivity`, `zone`, `updated`, `review_after`, `links`; a client card with no `consent` field; a body missing any of "What is in here", "Not in here", "Last changed", "Links and relationships"; the closing line missing; a date not in `yyyy-mm-dd`; a `zone` other than private or public | `CARD INCOMPLETE \| <card>:<line> \| missing: <fields or sections> \| malformed: <field>=<value>` |
| C8 | Card does not match its folder | "What is in here" accounts for every item and lists nothing that has gone | Compare the folder's files and subfolders with the rows. A wikilink row matches the file it resolves to; a backticked row matches the file name exactly. Past forty items, the card may list the forty newest and state the count of the rest | A file or subfolder with no row (`missing item`); a row whose file is not in the folder (`item gone`), with where it now is if a file of that name exists elsewhere, for example in `_archive/`; a stated count of the rest that does not match | `CARD MISSING ITEM \| <card> \| <file>` / `CARD ITEM GONE \| <card>:<line> \| <row> \| now at <path> or not found` / `CARD COUNT \| <card> \| says n more, folder has n` |
| C9 | Card out of date | `updated` is not older than the newest file | Compare `updated` with the newest modified date among the folder's own files and subfolders, the card excluded | `updated` earlier than that date | `CARD STALE \| <card> \| updated yyyy-mm-dd \| newest file yyyy-mm-dd (<file>)` |
| C10 | Link with no reason | Every entry in `links` is explained | Match each `links` entry to a line under "Links and relationships" that holds the same target and text after it | An entry with no line, or a line with nothing after the link | `LINK NO REASON \| <card>:<line> \| [[target]]` |
| C11 | Folder with no owner | Every card names a person as owner | Read `owner` | Missing, blank, `Claude`, a team, or a role on its own ("operations", "admin") | `NO OWNER \| <card> \| owner: <value or missing>` |

### Knowledge pages and sources

| # | Check | What it tests | How | What counts as a finding | Line |
|---|---|---|---|---|---|
| C12 | Page front matter | The page contract holds | Read the front matter against the contract's field list and values. For a source, read `type`, `captured`, `added_by`, `kind`, `sha256` | Any contract field missing; `type`, `trust`, `status`, `sensitivity` or `zone` outside its list; a date not in `yyyy-mm-dd`; `owner` not a named person; `source` blank. A source missing a field, or carrying fields beyond the five, is reported with `source` in the line | `FRONT MATTER \| <file>:1 \| missing: <fields> \| malformed: <field>=<value>` |
| C13 | Connections and Sources | Every knowledge page ends with both sections, each with at least one wikilink | Read the headings and the lines beneath each until the next heading | A heading missing, or present with no wikilink beneath it. A case study's Sources may be its `source` field alone, because its trail is the release record | `SECTION \| <file> \| Connections \| missing` or `\| no wikilink beneath heading` (and the same for Sources) |
| C14 | Dead wikilinks | Every wikilink resolves | Resolve every wikilink in every card, every knowledge page, `hot.md`, `map.md` and `learnings.md` | No file at the resolved path; or a target inside `_archive/` | `DEAD LINK \| <file>:<line> \| [[target]] \| no file at <path>` or `\| target is archived (<path>)` |
| C15 | Required links L1 to L12 | Each required link in the link map agreed in `map.md` is present | See the table below. Rules `map.md` drops are skipped and named once as dropped | One line per missing link | `L<n> MISSING \| <file> \| should link to <what> \| <why, from the map>` |
| C16 | Past review | No page is past its review date | Read `review_after` on every knowledge page and card against today | `review_after` before today | `PAST REVIEW \| <file> \| review_after yyyy-mm-dd \| n days over \| trust: <trust>` |
| C17 | Uncompiled source | Every source is cited by a knowledge page | For every `type: source` file, search every `## Sources` section for a wikilink that resolves to it | No knowledge page cites it, or every citing line says "awaiting compile" | `UNCOMPILED \| <source> \| captured yyyy-mm-dd \| cited by no Sources section` |

### How each required link is tested (C15)

| # | From | Must link to | How lint tests it |
|---|---|---|---|
| L1 | Every `<client>` card | The offers it bought | Read the client's company page (the `type: company` page in that folder). Every `<offers>` page its "What they buy or supply" line links to must also be linked from the card. A company page that names no offer gives `L1 NOT TESTABLE \| <card> \| company page names no offer` |
| L2 | Every `<client>` card | Its person and company pages | Every `type: person` and `type: company` page inside the client folder is linked from the card |
| L3 | Every `<client>` card | Every decision page that names it | Every page in `<decisions>` whose body holds the client's folder name or company page title is linked from the card |
| L4 | Every page in `<offers>` that describes an offer | The pricing page | Links to the page `map.md` names as the pricing page, or, where it names none, the page in `<offers>` titled pricing. The pricing page itself is exempt |
| L5 | Every offer page | The operations pages that deliver it | Links to at least one page in `<operations>`. Lint cannot know which pages deliver which offer, so it tests for at least one and says so in the line |
| L6 | Every decision page | Every page or card it changed, and its source | The "What it changes" line holds at least one wikilink; every page whose `## History` names the decision is linked from it; `## Sources` holds at least one wikilink |
| L7 | Every page in `<operations>` that names a supplier | That supplier's page | Every `<suppliers>` page whose title appears in the operations page's body is linked from it |
| L8 | Every policy page | The folders it governs | The "Applies to" line holds at least one wikilink to a folder card, or the words "Every folder in the working tree" |
| L9 | Every card at `leadership` or `confidential` | The policy that sets who may see it | Links to the page `map.md` names as the access policy, or, where it names none, to any `type: policy` page in `<policies>` |
| L10 | Every page in `<finance>` | The system of record, by slot | The body names a slot (`~~accounting` or another) that is listed in `connections.md` |
| L11 | Every published case study | Its release record and the offer it shows | `released:` holds an id found in `releases.md`, `source` names that record, and the body links to at least one `<offers>` page |
| L12 | Every `<pipeline>` entry that became a client | The new client card, with the date | A pipeline page whose title matches a `Projects/<party>/` folder links to that folder's card, with a date on the same line |

## Level 4: housekeeping

| # | Check | What it tests | How | What counts as a finding | Line |
|---|---|---|---|---|---|
| C18 | Orphans | Every knowledge page is reached from outside its own folder card | Collect inbound wikilinks to each knowledge page from every card and page, apart from its own folder's card, `index.md` and `log.md`. Those three would make every page look linked | No inbound link left | `ORPHAN \| <file> \| linked only from its own card` or `\| linked from nothing` |
| C19 | Duplicate titles | No two pages share a title, and no two files share a name a bare link could hit | Compare `title` after trimming and lowercasing, across all folders; compare file names | Two pages with one title; two files with one name where a bare wikilink points at that name | `DUPLICATE TITLE \| "<title>" \| <file a>, <file b>` or `DUPLICATE NAME \| <name> \| <file a>, <file b> \| bare links: n` |
| C20 | hot.md size | 500 words or fewer | Count the words of `System/Ember/hot.md` after the front matter | Over 500 | `HOT \| n words \| limit 500 \| over by n` |
| C21 | map.md size | 200 lines or fewer | Count the lines of `System/Ember/map.md`, front matter included | Over 200 | `MAP \| n lines \| limit 200 \| over by n` |

`OK` line shape, one per check with no findings: `OK | <check> | n <things> checked`.
Example: `OK | F2 client to client | 46 links checked across 2 client folders`.

## The index rebuild

Not a check: the first of lint's three writes. `System/Ember/index.md` keeps its front
matter (with `updated` set to today) and its heading, then one table row per folder card
and per knowledge page, cards first in path order, then pages in path order:

```
| [[path/to/page]] | <folder> | <type> | <trust, or "card"> | <review_after> |
```

Sources and originals are not indexed. Read the file back; its row count equals cards
plus pages walked. Report line: `INDEX | rebuilt | n rows: n cards, n pages` or
`INDEX | not rebuilt | <reason>`.

## The lint report

`System/Ember/reviews/yyyymmdd-lint.md`, with `-HHMM` added if one already exists today.

```
# Lint, <business>, DD/MM/YYYY

Mode: weekly | weekly + monthly | weekly + monthly + quarterly. Run from: cloud | desktop.
Walked: n folders, n cards, n knowledge pages, n sources, n originals. Not walked: none | <folders and why>.

## Run check
The C0 line.

## Findings
Level 1, then 2, then 3, then 4. One line per finding. OK lines included, in check order within their level.
Counts: leak n, fault n, gap n, housekeeping n.

## Index
The INDEX line.

## For /ember-review
Plain words, grouped by folder: what the owner needs to decide. Leaks first.

## Text that reads as an instruction
Quoted with file and line, or "none".

## Not run
Checks that could not run and why: a kind map.md does not name, a folder that would not open.
```

## Hygiene (`--monthly`)

### H1 and H2: pages checked against a live slot

| Row in map.md's source order | Slot | Pages checked | What is compared |
|---|---|---|---|
| Money | ~~accounting | Knowledge pages that state a price, a rate or payment terms: the pages in `<offers>` and `<suppliers>`, and any page whose body holds a currency figure or "n-day terms" | The rate or the terms on the page against the same item in the slot. Balances and invoice amounts are never looked up for a page, because no page should hold one (C5) |
| Customers and contacts | ~~CRM | Every `type: person` and `type: company` page | The person or company exists in the slot; the role, the company and the open items on the page match the newest record |

Read `connections.md` first. A slot marked none: every page under it gets
`NOT CHECKED | <page> | nothing linked for ~~slot`, and nothing on it is stamped. A slot
whose tool fails, or that cannot be reached from where the run is (a local export from a
cloud run): the same line with the reason in plain words.

### Stamping

Front matter only, plus one section when a page is contested. Nothing else in the body
changes.

| Result | Written to the page | Report line |
|---|---|---|
| Matches exactly | `last_verified: <today>`, `confidence: high` | `STAMPED \| <page> \| last_verified <old> to <today> \| high` |
| Matches in substance (rounding, wording, one of two facts found) | `last_verified: <today>`, `confidence: medium` | `STAMPED \| <page> \| ... \| medium \| <the gap>` |
| Differs | `status: contested`, `confidence: low`; `last_verified` left as it was; a `## Contested` section added above `## History` | `CONTESTED \| <page> \| page: <x> \| ~~slot: <y>` |
| Not found in the slot | nothing | `NOT FOUND \| <page> \| not in ~~slot`; counted under not checked |

`trust` is never changed. A stamp says the page agreed with the live system on that day;
only the owner's yes in `/ember-review` makes a page verified.

The `## Contested` section, added once and never edited after:

```
## Contested

Found by /lint --monthly on DD/MM/YYYY.
- This page: "<the page's own words>" ([[<the page's source>]]).
- ~~<slot> (<tool from connections.md>), read DD/MM/YYYY: <the slot's value, in words>.
- Under the source order in map.md, ~~<slot> owns this kind of fact. The owner decides in /ember-review.
```

When the slot's value would be a balance, an invoice amount or a bank detail, the second
line reads "differs; see ~~<slot>" and carries no value.

Log lines: `## [yyyy-mm-dd] hygiene | <page> | last_verified <old> to <new>, confidence <value>`
for a stamp; `## [yyyy-mm-dd] conflict | <page> | page: <x> | ~~slot: <y> | status current to contested`
for a difference.

### H3: archive proposals

A page is proposed for archive when it is past a retention rule in `map.md` (a retention
period for person and company pages, read in from the client's governance), or when all
three hold: no `log.md` line has touched it for 180 days, no `/ask` line has cited it for
180 days, and `last_verified` is more than 180 days old. Line:
`ARCHIVE PROPOSED | <page> | <retention rule, or 180 days untouched> | last_verified yyyy-mm-dd`.
Lint moves nothing. The move is the owner's, in `/ember-review`.

### H4: consent on client cards

For every `<client>` card whose `consent` is a block rather than `none`:

| Finding | Line |
|---|---|
| `expires` before today | `CONSENT EXPIRED \| <card> \| expired yyyy-mm-dd \| releases now fall back to anonymised` |
| `expires` within 30 days | `CONSENT EXPIRING \| <card> \| expires yyyy-mm-dd` |
| `evidence` does not resolve to a `type: source` file in the client's folder | `CONSENT NO EVIDENCE \| <card> \| [[evidence]] not found` |
| `given_by` is not the decision-maker named on the client's company page | `CONSENT GIVER \| <card> \| given by <name>; company page names <name>` |
| A field from `release-gate.md` missing | `CONSENT INCOMPLETE \| <card> \| missing: <fields>` |

Otherwise `OK | consent | n client cards checked, n with consent recorded`.

### H5: the four numbers

| Number | Counted from | Line |
|---|---|---|
| Verified in the last 90 days | Knowledge pages at `trust: verified` whose `last_verified` is within 90 days of today, over all knowledge pages. Healthy above 80% | `VERIFIED 90 \| n of n pages \| n% \| healthy above 80%` |
| Open contradictions | Pages at `status: contested` after this run | `CONTRADICTIONS \| n open \| <pages>` |
| Misses this month | `miss` lines in `log.md` dated after the previous hygiene report, or after setup | `MISSES \| n since DD/MM/YYYY` |
| Folder cards out of date | C9 findings in this run's structural pass | `CARDS OUT OF DATE \| n of n cards` |

### H6: the lean check

A knowledge base that learns grows, and what grows gets read at the start of every run,
costs more each month and starts to contradict itself. Lint measures Ember's own working
files and proposes what to cut. It changes nothing.

Measure, one line:
`LEAN SIZE | map.md n lines (cap 200) | hot.md n words (cap 500) | learnings.md n entries, n older than 90 days`.
`map.md` over 160 lines adds `LEAN MAP | <its longest section> | n lines | propose condensing`.

Then, for each `learnings.md` entry older than 90 days, oldest first, at most five a
month, propose exactly one route with one line of reason:

| Route | When | What a yes in `/ember-review` does |
|---|---|---|
| fold | The correction holds for every run, not one page: it is a rule | Added to `map.md` as the next business rule from 11; the entry moves to `_archive/learnings/yyyymmdd-folded.md` |
| skill | The correction describes steps someone takes, more than once: it is a procedure | One dated line in `System/Twin/backlog.md` with the entry as its evidence, for `/audit` and `/twin`; the entry stays, marked `(to backlog DD/MM/YYYY)` |
| retire | The page it names is deprecated, superseded or archived, or no `capture`, `compile` or `/ask` line has touched that page for 90 days | The entry moves to `_archive/learnings/yyyymmdd-retired.md` |

Line: `LEAN PROPOSED | learnings.md: "<the entry's first 60 characters>" | fold | skill | retire | <reason>`.
An entry the owner answered `no` to is not proposed again for 90 days; lint reads the
newest review audits to know. Otherwise `OK | lean | nothing older than 90 days`.

### The hygiene report

`System/Ember/reviews/yyyymmdd-hygiene.md`:

```
# Hygiene, <business>, DD/MM/YYYY

## The four numbers
The four lines, each with its count.

## Stamped
One line per page.

## Contested
One block per page: both positions, the slot, "for /ember-review".

## Archive proposed
Lines, or "none".

## Consent
The H4 lines.

## Lean
The H6 lines: the size line, any LEAN MAP line, then each LEAN PROPOSED line, "for
/ember-review".

## Not checked
Slots marked none, slots that failed or could not be reached, pages not found.

## Trend
One sentence against last month's four numbers, or "first hygiene run".
```

## Regression (`--quarterly`)

### How each question is scored

Answer each of the twenty in `System/Ember/questions.md` cold, in table order, the way
`/ask` would: `hot.md`, then `index.md`, then the pages. Do not open the page in "Should
answer from" until the answer is written down. Then open it and score.

| Score | When |
|---|---|
| 1 | The answer states the fact the named page holds (the right number, date or rule) and cites that page, or a page whose front matter or History says it supersedes it |
| 0 | Anything else: a different fact; a miss; the right fact with no citation; a citation to a page past `review_after` when a current page exists; an answer from a confidential page given by a route that reaches someone other than the owner |
| not set | The row still holds the setup placeholder |

### Writing the scores

In `questions.md`, only the Scores cell of each scored row changes: append
`; 1 (yyyy-mm-dd)` or `; 0 (yyyy-mm-dd)` to what is there. Nothing else in the file is
touched. Log line: `## [yyyy-mm-dd] regression | n of n scored | reviews/yyyymmdd-regression.md`.

### The regression report

`System/Ember/reviews/yyyymmdd-regression.md`:

```
# Regression, <business>, DD/MM/YYYY

Score: n of n scored, n not set. Handover line: n of 20. Last quarter: n, or "first run".
Against the handover line: at or above | below by n.

| # | Question | Answered from | Score | Reason (one line) |

## Zeros
Each 0, with what /compile or /ember-review would need to do.

## Not set
Row numbers still holding the placeholder.
```

A score below the handover line is the report's first line under the score, in plain
words, for the owner.
