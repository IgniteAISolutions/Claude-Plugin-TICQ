# The folder card

Every folder in the working tree carries one `README.md`. `/structure`
already writes it as a descriptor with four fields: purpose, belongs, does not belong,
routing test. Ember extends that same file into a folder card. It never writes a second
file beside it, and it keeps every field `/structure` wrote, word for word.

The card answers five questions about its folder, in the order a person or Claude needs
them: what is this folder for, what is in it, what is not in it and where that lives
instead, what changed last, and what does it link to and why.

## The front matter

The descriptor fields `/structure` wrote (`folder`, `purpose`, `belongs`, `does-not-belong`,
`routing-test`, `version`) are left exactly as they are. `/structure` also writes `updated`;
Ember keeps that field and from then on moves it whenever anything in the folder changes,
logging the old value. Ember adds the rest.

```yaml
---
folder: Projects/Oakmere Estates
purpose: Everything for the engagement with Oakmere Estates.
belongs: Proposals, designs, correspondence, site notes and decisions made for Oakmere.
does-not-belong: Fernhill's own pricing (The Business/03 Offers & Pricing). Other clients' work.
routing-test: Does this name Oakmere, or was it made for them? If yes it lives here.
version: 1.2
# Ember adds:
type: folder
owner: Priya Shah
sensitivity: leadership          # the highest sensitivity of anything inside
zone: private                    # private | public
updated: 2026-11-06              # the date of the newest change to anything in the folder
review_after: 2027-02-04         # 90 days on, unless the folder holds money or people pages
links:
  - "[[The Business/03 Offers & Pricing/README|Offers & Pricing]]"
  - "[[The Business/Decisions/2026-10-14-two-stage-design-fee]]"
consent: none                    # client folders only; see release-gate.md
---
```

Rules for the fields:

- `owner` is a named person. A folder with no owner is reported by `/lint` until one is
  named.
- `sensitivity` is the highest of anything in the folder. A folder holding one
  confidential page is a confidential folder.
- `zone: public` marks a folder whose contents may be published: case studies, marketing,
  content, the website. Only `/release` writes into a public folder (`release-gate.md`).
  Every other folder is private.
- `updated` moves whenever anything in the folder changes. `/lint` compares it with the
  newest file and reports a stale card.
- `links` holds the folders and pages this folder relates to. Each one is explained in
  the body under `## Links and relationships`; a link with no reason is reported.
- `consent` appears only on a client or partner folder. Its values and the evidence it
  needs are in `release-gate.md`.

## The body

```markdown
# Oakmere Estates

Everything for the engagement with Oakmere Estates.

**Belongs here.** Proposals, designs, correspondence, site notes and decisions made for Oakmere.

**Does not belong here.** Fernhill's own pricing, which lives in [[The Business/03 Offers & Pricing/README|Offers & Pricing]]. Other clients' work, which lives in their own folder.

**Routing test.** Does this name Oakmere, or was it made for them? If yes it lives here.

## What is in here

| Item | What it is | Owner | Date | Trust |
|---|---|---|---|---|
| [[oakmere-estates]] | The company page: who they are, who we deal with, what is open | Priya Shah | 2026-11-06 | verified |
| [[20261021-oakmere-site-visit-transcript]] | Transcript of the site visit, captured as it came | Tom Reyes | 2026-10-21 | source |
| `Plot 4 planting plan.pdf` | The issued planting plan for plot 4 | Tom Reyes | 2026-10-30 | original |
| [[Meeting Prep/README\|Meeting Prep]] | Prep notes before each Oakmere meeting | Priya Shah | 2026-11-04 | folder |

## Not in here

- Oakmere's invoices and payments. Those live in ~~accounting, and the figures are never copied here.
- Anything Fernhill publishes about this work. A case study, if one is ever made, goes through `/release` into [[The Business/06 Marketing & Content/Case Studies/README|Case Studies]], anonymised unless consent is recorded above.

## Last changed

- 06/11/2026: [[oakmere-estates]] open item closed, plot 4 handover agreed (compile, from the 05/11 email)
- 30/10/2026: `Plot 4 planting plan.pdf` added (Tom Reyes)
- 21/10/2026: [[20261021-oakmere-site-visit-transcript]] captured (capture)

## Links and relationships

- [[The Business/03 Offers & Pricing/README|Offers & Pricing]]: Oakmere buys the two-stage design service; its prices come from there.
- [[The Business/Decisions/2026-10-14-two-stage-design-fee]]: the decision that set how Oakmere is billed for design.
- [[The Business/05 Suppliers & Partners/README|Suppliers & Partners]]: the nursery that supplies plot 4's stock.

This file describes the folder and never accumulates facts. Facts live on the pages it lists.
```

## Rules for the body

- **What is in here** lists every file and subfolder, one row each. Knowledge pages and
  captured sources are wikilinks. An original that Obsidian cannot open as a note (a
  PDF, a Word file, a spreadsheet) is named in backticks with what it is, so the card
  still accounts for it. A folder with more than forty items lists the forty most recent
  and says how many more there are.
- **Not in here** names where things that look as if they belong actually live, with a
  link where there is one. It points; the front matter's `does-not-belong` is the rule.
- **Last changed** holds the five newest changes, newest first, each with the date, the
  item, what changed and which run or person changed it. Older lines drop off the card;
  `log.md` keeps them all.
- **Links and relationships** gives one line per entry in `links`, saying why the two
  are related. The reason is the part a person reads; the link is the part the graph
  draws.
- The closing line stays. A card that starts collecting facts gets two versions of the
  truth, and nothing says which wins.

## A public folder's card

A card with `zone: public` links only to other public pages and cards, and to `<offers>`
pages at `sensitivity: internal`, which describe what the business sells and name no
client (`link-map.md`, F1). It never links to anything else that is private, in its front
matter or its body. A public card that links into a client folder draws the client's name on the graph
beside the published work, which is the leak the gate exists to stop. The relationship
runs the other way: the private client card may link to the public case study, and the
release record in `System/Ember/releases.md` holds the trail. `/lint` checks this every
week.

## Upgrading an existing README

Where a folder already has a `README.md`, from `/structure` or written by hand, Ember
keeps every line of it and adds the missing fields and sections. It shows the person the
difference for the first three cards, then applies the rest on one yes. A README in a
shape Ember does not recognise is copied to `_archive/readme-before-ember/<path>` before
the card is written, and the card's `Last changed` says so.
