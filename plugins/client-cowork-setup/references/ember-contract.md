# Ember: the contract every skill follows

Ember is the knowledge layer that sits on top of a client's Cowork workspace. This file is
the contract. Every skill, the verifier and the setup interview are written to it, and
nothing in a skill contradicts it. Where a skill and this file disagree, this file wins
and the skill is the defect.

## What Ember is

The client's own Cowork folder, in their own cloud storage (OneDrive, SharePoint, Google
Drive or Dropbox), opened in Obsidian as one vault. Ember does not build a second folder
beside the work. It builds the link network in place, inside the folders the business
already uses.

Three things make that work:

1. **Every folder carries a folder card**, its `README.md`, saying what is in the folder,
   what is not, what changed last and what it links to and why. The card is the page the
   graph draws for that folder. Its shape is in `folder-card.md`.
2. **Every knowledge page carries the page contract** below: a source, an owner, a review
   date, a trust level and a sensitivity. Originals (a PDF, a Word file, a spreadsheet)
   stay exactly where they were filed and are never edited; the folder card lists them,
   and knowledge pages cite them.
3. **A link map** says which kinds of folder must link to which, so the graph shows how
   the business actually fits together. The generic map is in `link-map.md`; the setup
   interview tailors it to the business.

Two runs keep it true on a schedule: a weekly refresh and a monthly check, with a
quarterly test of the twenty questions inside the monthly run. Nothing is deleted,
nothing is overwritten silently, and nothing is treated as company knowledge until a
named person has said yes to it.

## The workspace it sits on

Ember assumes the tree `/build` lays down with `/structure`. The setup interview
reads the real tree first and maps Ember to whatever is there; it never renames a folder
to fit this list.

```
<working folder>/              the vault root; .obsidian/ lives here
  CLAUDE.md  MEMORY.md         the rules and the setup facts
  About Me/                    the person at the seat
  The Business/                the firm itself, in numbered areas
  Projects/<party>/            one folder per client or partner with an engagement
  Library/                     reusable material that names no party
  Skills/                      what Claude loads
  System/                      what Claude runs; Ember's own files are in System/Ember/
  _archive/                    retired, never deleted
```

## Ember's own files

Everything Ember needs that is not knowledge lives in `System/Ember/`. These are
working files. None of them is ever cited as the source of a fact.

| File | What it holds | Written by |
|---|---|---|
| `map.md` | The business in one paragraph, the owner, the source order, the ten rules as this business applies them, the link map as agreed, the models chosen per job. Under 200 lines. Read first by every skill | /ember-setup, then only by the owner's yes |
| `hot.md` | What changed recently and what is open. Under 500 words. Orientation only, never evidence | rewritten last by every filing run |
| `index.md` | One line per folder card and per knowledge page, with its trust and review date | rebuilt in full by /lint; /compile adds and updates the lines for pages it touched |
| `log.md` | Append-only. One line per operation, in the shapes below | every skill |
| `learnings.md` | Corrections the owner approved, newest first | /ember-review |
| `releases.md` | One record per release through the gate. Append-only | /release |
| `questions.md` | The twenty questions the business asks most, each with the page that should answer it, and the score history | /ember-setup, scored by /lint --quarterly |
| `connections.md` | Which tool fills each slot, and whether a scheduled run can reach the folder from the cloud | /ember-setup, /refresh |
| `reviews/` | Dated reports and staging files, `yyyymmdd-kind.md`: setup, rewrite-test, refresh, compile, lint, review, hygiene, regression, release | the runs |

`System/README.md` lists `Ember/` among the things System holds, so the routing test
still passes.

## Folder names in this plugin

Every business names its folders its own way, so the skills never hard-code a path to a
kind of folder. They write the kind in angle brackets and read the real path from the
link map in `map.md`: `<policies>` is the folder matched to Policies, `<decisions>` to
Decisions, `<offers>` to Offers, `<case-studies>` to the public folder that holds case
studies, `<client>` to one client's Projects folder, and in the same way `<company>`,
`<pipeline>`, `<people>`, `<operations>`, `<suppliers>`, `<finance>`, `<marketing>` and
`<library>` for the other kinds in `link-map.md`. A skill that cannot find a kind in
`map.md` says so and asks; it never guesses a folder.

## The page contract

A knowledge page is a Markdown file that states facts about the business. It lives in the
folder its subject belongs to, by that folder's routing test: the pricing page in the
offers area, the client page in that client's Projects folder. One fact lives on exactly
one page. Every knowledge page carries this front matter, and a skill refuses to write a
page without it.

```yaml
type: knowledge | person | company | decision | policy | source | case-study
title:
owner:            # a named human, never Claude, never a role on its own
source:           # a file in the vault, a URL, or a meeting or interview with its date
captured:         # yyyy-mm-dd
last_verified:    # yyyy-mm-dd
review_after:     # yyyy-mm-dd: see "Review periods" below
confidence:       # optional: high | medium | low, set only by /lint --monthly
trust: unreviewed | verified | deprecated | superseded
status: current | historical | contested
sensitivity: internal | leadership | confidential
zone: private | public
```

### Review periods

| Page | `review_after` is `last_verified` plus |
|---|---|
| person, company, and any page stating money (a price, rate, term or fee) | 30 days |
| every other knowledge page | 90 days |
| policy | 180 days |
| decision | its "Look again on" date |
| case-study | 180 days |

Never later than a retention period recorded in `map.md`. When `/lint --monthly` stamps a
new `last_verified` because the page agreed with the live system, it moves `review_after`
by the same period and changes nothing else.

### Trust and status together

| Situation | `trust` | `status` |
|---|---|---|
| New, not yet answered in the review | unreviewed | current |
| The owner said yes (in `/ember-review`, at setup, or to a release) | verified | current |
| The owner said no | deprecated | historical |
| The whole page was replaced by another page | superseded | historical |
| One fact on the page changed | unchanged | current, with the old wording under `## History` |
| Two sources disagree and neither has been settled | unchanged | contested, with a `## Contested` section |

Only a person's yes makes a page verified. The yes may come in the weekly review, during
setup while the owner is answering the interview, or when the owner approves a release.
No scheduled run ever sets `verified`.

### The Contested section

Added above `## History` by whichever skill finds the disagreement, never edited after,
and removed only when `/ember-review` settles it (the losing position then goes under
History):

```
## Contested

Found by /<skill> on DD/MM/YYYY.
- This page: "<the page's own words>" ([[<its source>]]).
- <the other source>: <what it says, in words> ([[<that source>]] or ~~<slot>, read DD/MM/YYYY).
- Under the source order in map.md, <which owns this kind of fact>. The owner decides in /ember-review.
```

A value that would be a balance, an invoice amount or a bank detail is never written
here; the line says "differs; see ~~<slot>".

Every knowledge page ends with two sections:

- `## Connections`: each line a `[[wikilink]]` and, after it, why the pages are related
  ("prices here are what [[quoting-process]] applies").
- `## Sources`: each line `[[path/to/source]] (added by <name>, yyyy-mm-dd): what was
  drawn from it`. Sources are wikilinks so provenance shows on the graph.

A **source** is anything the business keeps as evidence: an original document, an email
or transcript captured as a dated Markdown file, a note of the owner's own words. A
captured source carries `type: source`, `captured`, `added_by`, `kind` and `sha256`, and
nothing more. Sources are filed in the folder their subject belongs to, named
`yyyymmdd-<subject>-<kind>.md`, and are never edited by anyone after capture. An
original (a PDF, a Word file, a sheet) has nowhere to hold front matter, so its hash is
carried on its `capture` line in `log.md`, and the verifier checks it from there.

`added_by` is always a named person. In a scheduled run with nobody present it is the
owner named in `map.md`, followed by "(auto-capture)", because the owner agreed the
auto-capture list at setup.

A **case study** is the one public page type. Its `source` names its release record as
text ("release R-2026-011"), and its `## Sources` section says the same in words. It
links to nothing private apart from `<offers>` pages at `sensitivity: internal`
(`link-map.md`, F1).

### What is in scope

Ember reads and writes in `The Business/`, `Projects/` and `Library/`, and keeps its own
files in `System/Ember/`. It leaves `About Me/` (the person's own files, read by
`/interview` and `/build`), `Skills/`, the rest of `System/` and `_archive/` alone, and the graph
leaves them out. Top-level folders (`The Business/`, `Projects/`, `Library/`) carry a
folder card with no kind, whose links are the folders inside them.

## The ten rules

Binding on every skill, in every run, scheduled or live. `map.md` restates them for the
business and may add to them; it never removes one.

1. **Newest verified wins.** A page past `review_after` drops in ranking and is never the
   source for a number that leaves the business.
2. **Conflicts follow the source order** in `map.md`. Say which source won and log it.
3. **Say "I don't know".** When the answer is not in the vault, say so in those words and,
   in the same message, offer the way to find it: the live system that owns that kind of
   fact, a source that may hold it, or the owner's answer filed once confirmed. A miss
   reported beats a guess filed.
4. **Never turn a guess into company knowledge.** Every page carries a source.
5. **Supersede, never overwrite a fact.** A fact that changes gets a new status and a dated
   note, and the old version stays on the page under `## History`.
6. **Deletion is a human act.** The skills do not have it. Retired material moves to
   `_archive/`.
7. **A new knowledge page needs two independent sources, or one decision it changes.** A
   single statement lands on an existing page, or waits for its second source. A
   decision page needs one source that names who decided and when, because the decision
   is itself the event.
8. **Show the exact files to be changed, then apply once.**
9. **Sources are never edited**, by a skill or by a person through a skill.
10. **Private stays private.** `sensitivity: confidential` is answered only to the owner.
    `leadership` is answered to the owner and to the people `map.md` names as leadership.
    `internal` is answered to anyone with a seat. Nothing crosses from a private page into
    a public page, a case study, marketing or content except through `/release`
    (`release-gate.md`).

## How writes work

This plugin's rule is to revise a file in place rather than make a v2, and Ember
follows it. Folder cards, knowledge pages and Ember's working files are edited in place.
What protects the business instead of copies:

- Sources are never touched (rule 9).
- Every edit writes one line to `log.md` naming the file, the field or section, and the
  before and after.
- A changed fact is superseded with a dated note, never replaced silently (rule 5).
- The skill shows the files it will change, the verifier checks them, and the change is
  applied once (rule 8).
- `reviews/` and captured sources are always new dated files.

Setup proves the storage can rewrite a file before anything else is built: it writes
`System/Ember/reviews/yyyymmdd-rewrite-test.md`, rewrites it, and reads back the second
version. If the storage cannot rewrite, Ember does not proceed on that route.

## The log line shapes

```
## [yyyy-mm-dd] <operation> | <file or files> | <what changed, before to after>
```

Operations: `setup`, `card`, `capture`, `compile`, `conflict`, `miss`, `review`, `lint`,
`refresh`, `hygiene`, `regression`, `release`, `blocked`. A `blocked` line records a run
that stopped on a rule, and names the rule.

Two lines have a fixed shape because other skills count them:

```
## [yyyy-mm-dd] capture | <path of the source or original> | sha256 <hash>, added by <name>
## [yyyy-mm-dd] miss | <pages opened, comma separated> | "<the question as asked>" not in the vault
```

A card edit's log line carries the before and after of every descriptor field it changed,
in full, so the verifier can check criterion 8 from the log when no staging copy exists.

## Slots, firewall and the governance bridge

Skills never name a product. They name a slot (`~~file storage`, `~~email`,
`~~calendar`, `~~accounting`, `~~CRM`, `~~meeting notes`) and read `connections.md`
first. A slot marked none is reported as "not checked: nothing linked for ~~slot", never
as empty.

The firewall in `firewall.md` holds in every Ember run. Where the client has a
governance pack (an AI policy, a DPIA, a manifesto or an enforcement rule pack), its data
rules override Ember's defaults wherever they are stricter; `governance-bridge.md` says
how setup reads them in.

## The schedules

Two scheduled tasks, set up at the end of `/ember-setup`. Full prompts and the cloud or
desktop rule are in `ember-schedules.md`.

| Task | When | Runs | Writes |
|---|---|---|---|
| Ember weekly | the owner's review day, an hour before their review (default Friday 15:00) | `/refresh`, then `/lint`, then the `/ember-review` digest | `reviews/yyyymmdd-refresh.md`, `-lint.md`, `-review.md` |
| Ember monthly | the working day before their monthly sit-down, 09:00 (default first weekday) | `/lint --monthly`; in January, April, July and October also `--quarterly` | `reviews/yyyymmdd-hygiene.md`, `-regression.md` |

## The four numbers

Published monthly in the hygiene report, one line each: knowledge pages verified in the
last 90 days as a percentage (above 80% is healthy); open contradictions; questions
Ember could not answer this month, counted from the `miss` lines; folder cards out of
date (a card whose `updated` is older than the newest file in its folder).

## The eight skills and the agent

| Command | Does |
|---|---|
| `/ember-setup` | The knowledge-base interview that runs after the build's acceptance bar: proves storage, reads governance, recommends models, agrees the link map, writes the folder cards in place, fills `System/Ember/`, opens the graph in Obsidian, stages the two schedules, and runs the first weekly cycle by hand (which may call `/capture` and `/compile`) |
| `/capture` | Files one source in the folder its subject belongs to, as it arrived, with a hash, and one unreviewed line on the right page or card |
| `/compile` | Turns new sources into knowledge pages and links: merges into the page that holds the fact, supersedes changed facts, marks disagreements contested, updates the folder cards, refreshes `hot.md` and `index.md` |
| `/ask` | Answers from the vault with a citation on every claim, trust and age in one line, and "I don't know" for a miss |
| `/ember-review` | The weekly decision register the owner answers in ten minutes: yes verifies, no deprecates, replace supersedes. The only skill that writes a consent block onto a client card, on the owner's explicit yes, with its evidence linked |
| `/lint` | Structural checks, folder cards against their folders, the link map's required links, the public zone's leak check; `--monthly` hygiene and `--quarterly` regression |
| `/refresh` | The weekly pull: what changed in the folders and the linked tools this week, captured or proposed, compiled, and the cards brought up to date |
| `/release` | The only route from private material to anything public: anonymise by default, name only with recorded consent, verify, owner's yes, record |

Plus the `verifier` agent: read-only, given file paths and never pasted content, returns
one evidence row per criterion. `/compile`, `/ember-review` and `/release` call it
before they apply.

## House style

Every skill has the five parts in order: purpose and trigger, procedure, quality
criteria, worked example, edge cases. Plain short sentences, British spelling, no em
dashes, dates in front matter as yyyy-mm-dd and in prose as DD/MM/YYYY. Worked examples
use the invented business in `worked-example-business.md` and nothing else; no real
client, person or figure appears anywhere in this plugin.
