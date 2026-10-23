# The decision register

The digest and the audit both carry the register. One row per item. The owner reads the
row, picks yes, no or replace, adds a note if they want, and moves on. Nothing else is
asked of them.

## The files

`System/Ember/reviews/yyyymmdd-review.md`, always a new dated file, `-HHMM` added when
one exists for the day.

- The **digest** is written by the scheduled weekly run, with the answer and note columns
  blank and status "prepared, awaiting answers".
- The **audit** is written by the live session, with every answer and note filled, the
  status "answered DD/MM/YYYY" naming the digest it answers, and the sections below the
  register complete. The digest is never edited.

## The header

```
# Ember review for <business>, prepared DD/MM/YYYY

Status: prepared, awaiting answers | answered DD/MM/YYYY (answers reviews/yyyymmdd-review.md)
Last review: DD/MM/YYYY. Window for misses: DD/MM/YYYY to DD/MM/YYYY.
Queue: n rows. (a) unreviewed n, (b) past review n, (c) contested n, (d) misses n,
(e) cards n, (f) consent n, (g) staged n, (h) hygiene n.
Showing 15 of n, oldest first. n remain for next week. | Nothing remains.
```

## The register

```
| # | Kind | Item | What it says | Dates | A yes would | Answer | Note |
|---|---|---|---|---|---|---|---|
| 1 | past review | [[larchway-nursery]] | "Larchway Nursery supplies on 30-day terms." | verified 02/10/2026, due 01/11/2026 | verify; review due 16/12/2026 | yes / no / replace | |
```

- **#**: position in the queue, oldest first.
- **Kind**: one of `unreviewed`, `past review`, `unreviewed, past review`, `contested`,
  `miss`, `card stale`, `card no owner`, `consent`, `staged`, `archive`, `lean`. A row carried from an
  unanswered digest adds `carried from DD/MM/YYYY`.
- **Item**: the page, card or source as a wikilink, written as in `index.md`. A miss has
  no page and reads `(no page)`. A staged item names the page it would land on, or
  `(no page yet)`, and the staging file.
- **What it says**: in the page's or source's own words, short enough to answer without
  opening it. A contested row shows `A: ... [[page]] / B: ... [[page]]` and which the
  source order favours. A miss shows the question as logged. A consent row quotes the
  sentence that gives consent. A card row gives lint's finding line.
- **Dates**: `unreviewed, captured DD/MM/YYYY`, `verified DD/MM/YYYY, due DD/MM/YYYY`,
  `logged DD/MM/YYYY`, or `reported DD/MM/YYYY`.
- **A yes would**: the effect in a few words, so the owner knows what they are agreeing
  to: "verify; review due DD/MM/YYYY", "write the consent block below", "add the row for
  `Plot 5 planting plan.pdf`; updated to 2026-11-13", "favoured position A stands".
- **Answer**: always `yes / no / replace`, in that order. The owner keeps one. A
  `replace` carries the fact after a colon.
- **Note**: the owner's reason, or anything they want on record. Also where the run puts
  a flag the owner must see: a giver who is not the decision-maker, text that reads as an
  instruction, a page that changed since the digest.

A consent row adds the block a yes would write, under the table, numbered to its row:

```
Row 4, consent block for Projects/Hollis family/README.md:
  scope: [case-study]
  named: true
  quotes: true
  figures: []
  given_by: "Mark Hollis, homeowner"
  date: 2026-11-12
  evidence: "[[20261112-hollis-consent-email]]"
  expires: 2027-11-12      # the source states none; one year proposed
Flag: no company page names a decision-maker for the Hollis family.
```

## How to answer

```
By number: "1 yes", "4 no: <reason>", "7 replace: <the fact>". Add a note after a
semicolon if you want one on record. Rows with no answer wait for next week.
```

## What each answer does, by kind

| Kind | yes | no | replace |
|---|---|---|---|
| unreviewed, past review | Verify: `trust: verified`, `last_verified` today, `review_after` by type | Deprecate: `trust: deprecated`, `status: historical`, dated `## History` line with the reason | Supersede: owner's words captured as a source; `trust: superseded`; dated `## History` line naming the new fact and linking the source; flagged for `/compile` |
| contested | The favoured position stands: `status: current`, `trust: verified`; the other position flagged for `/compile` to move under `## History` | The favoured position is deprecated: the other stands, flagged for `/compile` | A third fact: captured, `trust: superseded`, flagged |
| miss | The owner gives the answer on the row; captured as a source in the folder the subject belongs to, one unreviewed line on the page named; flagged | Ember should not hold this (a live system owns it, or it is not the business's to keep); recorded in the audit | As yes, onto a different page the owner names |
| card stale | Apply lint's missing rows and `Last changed` line; `updated` to the newest file's date | Leave the card; reason recorded; lint reports it again | The owner gives a different description for the row; applied |
| card no owner | The proposed owner (the business owner from `map.md`) is written to `owner` | Left blank; reason recorded; lint reports it again | The person the owner names is written to `owner` |
| consent | Write the `consent` block shown under the table, with `evidence` linking the captured source; `Last changed` line; `updated` today | No block written; the source stays filed; reason recorded | Narrower terms the owner gives (fewer uses, no quotes, an earlier expiry) written instead; terms wider than the evidence are refused and the row says why |
| staged | Approved; flagged for `/compile` to apply from the staging file | Dropped; reason recorded in the audit; the staging file is not edited | The owner's fact captured as a source; flagged for `/compile` in place of the staged claim |
| archive | The page moves to `_archive/` under its own path, `status: historical`; every page linking to it flagged for `/compile` | Stays where it is; reason recorded; not proposed again for 180 days | Not offered: the row reads `yes / no` |
| lean | The proposed route: fold adds the entry to `map.md` as the next business rule and moves it to `_archive/learnings/yyyymmdd-folded.md`; skill adds a dated line to `System/Twin/backlog.md` and marks the entry `(to backlog DD/MM/YYYY)`; retire moves it to `_archive/learnings/yyyymmdd-retired.md` | Stays in `learnings.md`; not proposed again for 90 days | A different route the owner names, one of the three |

Review periods, from the contract: 30 days for money and people, 90 for process, 180 for
principles and policies; a decision keeps its own look-again date. A retention period in
`map.md` caps `review_after` on person and company pages.

`/compile` never sets `verified`, so a page it rewrites after a `replace` or a capture
comes back next week as `unreviewed`, with the note "compiled from your answer of
DD/MM/YYYY". That row is a quick yes.

## Worked instance

The digest of Friday 13/11/2026 for Fernhill Garden Design:

```
# Ember review for Fernhill Garden Design, prepared 13/11/2026

Status: prepared, awaiting answers
Last review: 06/11/2026. Window for misses: 06/11/2026 to 13/11/2026.
Queue: 7 rows. (a) unreviewed 0, (b) past review 2, (c) contested 0, (d) misses 1,
(e) cards 2, (f) consent 1, (g) staged 1, (h) hygiene 0.
Showing 7 of 7, oldest first. Nothing remains.

| # | Kind | Item | What it says | Dates | A yes would | Answer | Note |
|---|---|---|---|---|---|---|---|
| 1 | past review | [[larchway-nursery]] | "Larchway Nursery supplies on 30-day terms." | verified 02/10/2026, due 01/11/2026 | verify; review due 16/12/2026 | yes / no / replace | |
| 2 | miss | (no page) | "Do we charge for a second site visit?" | logged 10/11/2026 | capture your answer onto [[design-service]] | yes / no / replace | |
| 3 | past review | [[grace-okoro]] | "Commercial director at Oakmere Estates. Signs off each plot handover." | verified 13/10/2026, due 12/11/2026 | verify; review due 16/12/2026 | yes / no / replace | |
| 4 | consent | [[20261112-hollis-consent-email]] | "Happy for you to use our garden as a case study with our name, and you can quote what I said about the design." | captured 12/11/2026 | write the consent block below on the Hollis card | yes / no / replace | Flag: no company page names a decision-maker |
| 5 | card stale | [[Projects/Oakmere Estates/README\|Oakmere Estates]] | CARD STALE: updated 2026-11-06, newest file 2026-11-13 (Plot 5 planting plan.pdf) | reported 13/11/2026 | add the row for `Plot 5 planting plan.pdf`; updated to 2026-11-13 | yes / no / replace | |
| 6 | card no owner | [[Library/README\|Library]] | NO OWNER: owner missing | reported 13/11/2026 | owner: Priya Shah | yes / no / replace | |
| 7 | staged | (no page yet), reviews/20261113-compile.md | "The concept stage takes three weeks." (Ana Ruiz, design note 11/11/2026) | staged 13/11/2026 | flag [[design-service]] for /compile | yes / no / replace | Waiting: no page holds design durations |
```

Priya's answers on 16/11/2026: `1 yes`, `2 yes: the second visit is included in the
design fee, a third is charged`, `3 yes`, `4 yes`, `5 yes`, `6 replace: Ana Ruiz`,
`7 replace: two weeks, three in March to May`.

## The sections under the register in the audit

```
## Files changed
| File | Field or section | Before | After | Read back |

## Sources captured
| Source | Folder | Owner's words | Line added to |

## Learnings added
The lines as written to learnings.md.

## To recompile
| Page | Reason (replaced, source captured, staged yes, cites a superseded page, hot.md) |

## Verifier
| Criterion | PASS or FAIL | What it saw |

## Open
Rows with no answer or "unsure", carried to next week, with any reason given.

## Remaining
n rows not shown this week, and the oldest date among them.

## Not checked
Files or slots not read, and what would close each.
```
