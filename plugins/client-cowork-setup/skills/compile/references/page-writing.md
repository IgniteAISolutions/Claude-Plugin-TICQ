# Page writing: the shapes /compile writes

Read the part you need. The page contract itself is in `references/ember-contract.md` at
the plugin root, and it wins over this file. This file holds the exact shapes, so that
every run writes them the same way and the verifier can check them.

## Where a page lives

A knowledge page lives in the folder its subject belongs to, by that folder's routing
test. Put the page's subject to each card's `routing-test`, as `/capture` does for a
source:

- The company page for a client, and person pages for the people there, live in that
  client's Projects folder (`<client>`).
- What is sold and its price live in `<offers>`.
- A process, a checklist or a lead time lives in the folder `map.md` matches to
  Operations.
- A supplier's page lives in the folder matched to Suppliers.
- A decision lives in `<decisions>`, named `yyyy-mm-dd-<short-title>.md`.
- A standing rule lives in `<policies>`.

Never `System/`, `Skills/` or `_archive/`. Never a folder at `zone: public`; that is
`/release`. Two folders pass, or none: ask in a live run, list it for the review in a
scheduled one. The file name is the page's subject in lowercase words joined by hyphens
(`lead-times.md`, `grace-okoro.md`).

One fact lives on exactly one page. Before writing a sentence, search `index.md` and the
pages read for that fact. If it is already stated somewhere, that page is where it goes.

## Writing the body

- **One claim per sentence.** "Larchway Nursery supplies on 30-day terms." One sentence,
  one thing that could be checked.
- **Falsifiable.** Every sentence could be shown wrong by a document, a person or a live
  system. "Larchway is a good supplier" cannot, and is left out. "Larchway has delivered
  late twice since 01/09/2026" can, if a source says so.
- **The source's own terms.** Keep the number, the unit and the condition as the source
  gives them ("six weeks from signed design to build start, eight in March to May").
  Never round, never generalise.
- **Who said it, where it matters.** A claim made by a client about the business is
  written as theirs: "Grace Okoro said on 18/11/2026 that Oakmere has four plots in the
  build."
- **No figures from ~~accounting.** Balances, invoice amounts and bank details are never
  written on any page (F4). A finance page says where the figure is read live.
- **Plain prose.** Short sentences, British spelling, dates in prose as DD/MM/YYYY, no em
  dashes.

## Merge into the page that exists

The order of choice, every time:

1. **The fact is already on a page and agrees.** Add a Sources line. Leave the body and
   the trust as they are.
2. **The fact is new and the page's subject covers it** (its title and first paragraph
   say so). Add one sentence where it fits, add the Sources line, set
   `trust: unreviewed`, and move `review_after` to the period for that type counted from
   today.
3. **No page's subject covers it.** Only now consider a new page, and only through the
   gate (rule 7):
   - **Two independent sources.** Two sources from different origins: a different
     meeting, a different sender, a separate document. Two captures of one meeting, or an
     email and the attachment it carried, are one source.
   - **Or one decision it changes.** A decision page in `<decisions>` that relies on the
     fact or that the fact alters.
   - **Neither.** The claim waits under "Open" in `hot.md`:
     `waiting for a second source: <claim, ten words or fewer> ([[<source>]])`.

A new page names its gate evidence on its Sources lines: both sources, or the source and
the decision.

## Front matter for a new page

From the matching template in `templates/pages/`, every field filled.

| Field | Value |
|---|---|
| `type` | knowledge, person, company, decision or policy. Never case-study (that is `/release`) and never source |
| `title` | the page's first heading, in quotes |
| `owner` | a named person: the person `map.md` or the folder card names for that area, else the owner of the knowledge base. Never Claude, never a role alone |
| `source` | the main source as a vault path, or the meeting and its date |
| `captured` | the earliest source's date |
| `last_verified` | today, the day the content was checked against its sources |
| `review_after` | from `last_verified`: 30 days for person and company pages and any page stating money; 90 for other knowledge pages; 180 for policies; for a decision, its "Look again on" date. Never later than a retention period in `map.md` |
| `trust` | unreviewed. Compile never writes verified |
| `status` | current, or contested when it opens with a disagreement |
| `sensitivity` | from the template and the sensitivity table in `map.md`; never lower than the folder card's. A page higher than its card raises the card |
| `zone` | private |

## Supersede with History

When a fact changes (a dated change by the party who owns it, or a decision):

1. The body states the new fact, with the date it takes effect and its source or decision
   linked.
2. The old wording moves, word for word, under `## History`, newest first:

```
## History

- 21/11/2026: terms were "30 days" ([[20250602-larchway-account-letter]]). Superseded by "14 days from 01/01/2027" ([[20261119-larchway-terms-email]]).
```

3. `trust: unreviewed`, `last_verified` today, `review_after` moved on.

Nothing is removed from History. A fact that disappears from the body with no History
line fails verifier criterion 7.

A whole page replaced by another keeps its place. Its front matter becomes
`trust: superseded`, `status: historical`, and this line goes under its first heading:

```
Superseded by [[<new page>]] on DD/MM/YYYY.
```

Its line in `index.md` is marked superseded. It is never moved or deleted by compile.

## Contested, with both positions

When a source disagrees with the page's current fact and is not a change by the party
who owns it, the body keeps its fact and `status` becomes `contested`. Add, above
`## History`:

```
## Contested

- Position A: three plots in the build, as the page states ([[20250914-oakmere-signed-order]], 14/09/2025).
- Position B: four plots in the build, said by Grace Okoro ([[20261118-oakmere-plot5-visit-transcript]], 18/11/2026).
- Rule 1 and the source order in map.md favour A for now: it is verified and from a signed document; B is unreviewed. The weekly review decides.
```

Both positions, both sources as wikilinks, both dates, and the one line on what the rules
favour and why. Compile never picks a winner. `/ember-review` settles it: the answer
removes the Contested section and the losing position goes under History.

## Connections, with reasons

One line per related page or card, the link first and the reason after it:

```
## Connections

- [[larchway-nursery]]: lead times for planting depend on Larchway's delivery dates.
- [[The Business/03 Offers & Pricing/build-service|Build service]]: the lead time is quoted to clients who buy this.
```

A reason says how the two relate in the business. "Related" or "see also" is not a
reason. Every target must exist or be created in the same run.

## Sources lines

One per source, as a wikilink so provenance shows on the graph:

```
## Sources

- [[20261119-larchway-terms-email]] (added by Tom Reyes, 2026-11-19): the new 14-day terms from 01/01/2027.
```

A line `/capture` left as "unreviewed, awaiting compile" is rewritten in this shape once
its claims are filed. An original is cited by its path:
`- [[The Business/04 Operations/Crew handbook.pdf]] (added by Tom Reyes, 2026-09-03): the crew start time`.
A decision cited as evidence: `- [[2026-10-14-two-stage-design-fee]]: what it settles`.
Never a file in `System/Ember/` (F3).

## The link map's required links

After the claims are filed, check each touched page and card against the required links
in `map.md` (the business's copy of L1 to L12 in `references/link-map.md`):

| Touched | Check |
|---|---|
| A client card | L1 the offers it bought, L2 its person and company pages, L3 every decision naming it |
| An offer page | L4 its pricing page, L5 the operations pages that deliver it |
| A decision page | L6 every page or card it changed, and its source |
| An operations page | L7 the supplier page it depends on |
| A policy page | L8 the folders it governs |
| A card at leadership or confidential | L9 the policy that sets who may see it |
| A finance page | L10 the system of record, by slot |
| A pipeline entry that became a client | L12 the new client card, with the date |

L11 (a published case study) belongs to `/release`; compile never writes it.

Add a required link where the new material supports it, with its reason. Where it does
not (the transcript never says which offer Oakmere bought, say), do not guess: list it in
the staging file and the reply as `gap: L1, Projects/Oakmere Estates/README.md, no source
names the offer`.

Never introduce:

- **F1**: a public page or card linking to a private one.
- **F2**: one client's page or card linking to another client's.
- **F3**: a page citing a file in `System/Ember/` as a source.
- **F4**: a finance page holding a balance, invoice amount or bank detail.

## The folder card after a compile

For each folder where a page was made or changed (`references/folder-card.md`):

- **What is in here**: a new row for a new page (wikilink, one line, owner, date, trust);
  the date and trust updated for a changed page.
- **Last changed**: a new top line, `DD/MM/YYYY: [[<page>]] <what changed> (compile, from
  <source>)`. Keep the five newest.
- **`updated`**: today.
- **`links`**: a new entry for each required link added to the card, with its line
  under "Links and relationships".
- **`sensitivity`**: raised if a page now in the folder is higher.

The six descriptor fields are never touched.

## The staging file

`System/Ember/reviews/yyyymmdd-compile.md`, with `-2` added if one exists for today.
Nothing in `reviews/` is a source.

```
# Compile, yyyy-mm-dd

Run: live | scheduled (called by /refresh)

## Files to change
| File | New or changed | Fields and sections | Before | After |

## Claims
| # | Claim | Said by | Source | Goes to |

## Required links
| Rule | File | Added or gap | Reason |

## Verifier rows
| Criterion | PASS or FAIL | What it saw |

## Proposed text
### <path>
<the full text of the page or card as it will be written>

## For the weekly review
<scheduled runs only: every file changed, every contested page, every claim waiting,
every gap, every item left unapplied because it needed a person>
```

## Log lines

One per file touched, one per contested page, then one for the run:

```
## [2026-11-21] compile | The Business/05 Suppliers & Partners/larchway-nursery.md | terms: before "30-day terms", after "14 days from 01/01/2027"; History +1; trust: before "verified", after "unreviewed"; Sources +1
## [2026-11-21] conflict | Projects/Oakmere Estates/oakmere-estates.md | status: before "current", after "contested"; three plots (signed order) against four (transcript 18/11/2026)
## [2026-11-21] compile | run | 3 pages, 3 cards, 1 contested, 1 superseded, 1 waiting, 2 required links added
```

Before and after are the words that changed, kept short. A field left as it was is left
out of the line.
