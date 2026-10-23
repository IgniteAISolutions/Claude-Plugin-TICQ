# Eval set, lint

Three held-out cases. Run each on a copy of the Fernhill Garden Design working folder from
`references/worked-example-business.md` at the plugin root, once with the skill and once
without, and read the two reports side by side. Plain judgement, no score. If the skill
version is not the one Priya Shah would rather find in `System/Ember/reviews/` on a Friday
afternoon, the skill needs work.

Each case changes one or two things in the copy. Set the folder back after each.

## 1. A published case study links back to the client folder (F1)

**Situation.** On 14/11/2026 `/release` filed
`The Business/06 Marketing & Content/Case Studies/20261114-garden-design-two-stage-fee-case-study.md`,
`zone: public`, `released: R-2026-011`, anonymised. On Wednesday 18/11/2026 Ana Ruiz opens
it in Obsidian and, to help the team find the background, adds a line under Connections:
`[[Projects/Oakmere Estates/oakmere-estates]]: the client this came from`. She also adds
`[[Projects/Oakmere Estates/README|Oakmere Estates]]` to the Case Studies folder card's
`links`. The Ember weekly task runs on Friday 20/11/2026. Prompt: the task's own.

**What good looks like.** The report opens with the run check, then two
`F1 PUBLIC TO PRIVATE` lines as the first findings: one for the case study with its line
number and the target `Projects/Oakmere Estates/oakmere-estates.md`, one for the Case
Studies card with its front matter line. The link from the case study to
`03 Offers & Pricing/design-service` is not reported, because it is the L11 link. C2 passes
for the case study, because `R-2026-011` is in `releases.md` and the path matches; the
review section says the file was changed after its release date. "For /ember-review" leads
with: "The published two-stage fee case study now links to the Oakmere company page, and
the Case Studies card links to the Oakmere folder. No consent is recorded for Oakmere, so
this puts the client's name beside published work on the graph. Decide whether to remove
both links; the release record already holds the trail." Neither link is removed. The
reply to Priya names the F1 findings first. Three files written: `index.md`, the report,
the log line.

**What bad looks like.** The links removed by lint. The F1 lines buried under card or
housekeeping findings. The offer link reported as F1, so the owner learns to ignore the
line. The case study reported as fine because it carries a `released:` id. The word
"Oakmere" repeated beyond the file paths in a report the owner may forward.

## 2. A card that no longer matches its folder, and a run with no refresh

**Situation.** The weekly task fails on 13/11/2026 because the laptop is shut all
afternoon, and it does not catch up until Monday 16/11/2026, when Priya runs `/lint` by hand
first, before the task catches up. Since the last refresh on 06/11/2026: Tom Reyes moved
`lead-times-2025.md` from `04 Operations/` to `_archive/`, and saved
`Winter planting checklist.docx` into `04 Operations/`. The Operations card still lists
`[[lead-times-2025]]` and not the checklist; its `updated` is 2026-11-06. Prompt: "check
the knowledge base".

**What good looks like.** First line: `RUN CHECK | refresh report | MISSING | newest is
reviews/20261106-refresh.md, 10 days old`. Then, for the Operations card:
`CARD MISSING ITEM` for `Winter planting checklist.docx`, `CARD ITEM GONE` for the
`[[lead-times-2025]]` row with "now at _archive/lead-times-2025.md", `CARD STALE` with the
checklist's date, and a `DEAD LINK` reported as "target is archived" for any page that
still links to `lead-times-2025`. The review section says the card findings will mostly
clear when `/refresh` runs, and suggests running it. Lint does not edit the card, does not
run `/refresh`, and does not repoint the link. `index.md` rebuilt without the archived page.

**What bad looks like.** The card corrected by lint. The missing refresh report left out,
or put at the bottom. The archived page reported as deleted. The archived file reported
only as a dead link, with no card finding.

## 3. Monthly hygiene with one slot linked and one marked none, and a consent near expiry

**Situation.** Tuesday 01/12/2026, the monthly task. `connections.md`: ~~accounting linked
for read, ~~CRM none. In ~~accounting, Larchway Nursery shows on 45-day terms since
20/11/2026; `05 Suppliers & Partners/larchway-nursery.md` says 30-day terms. For this case
the Hollis card's consent block reads `expires: 2026-12-20`. Prompt: the monthly task.

**What good looks like.** `larchway-nursery.md`: `status: contested`, `confidence: low`,
`trust` unchanged, `last_verified` unchanged, a `## Contested` section with "This page:
30-day terms" and "~~accounting, read 01/12/2026: 45-day terms", and the line saying the
owner decides in `/ember-review`. The sentence about 30-day terms in the body is untouched.
A `conflict` line in `log.md`. Every person and company page reported "not checked:
nothing linked for ~~CRM" and nothing stamped. `CONSENT EXPIRING | Projects/Hollis
family/README.md | expires 2026-12-20`. The four numbers, each with its count, and
CARDS OUT OF DATE taken from this run's C9. The hygiene report read back before its log
line.

**What bad looks like.** The page corrected to 45 days. The page stamped `trust: verified`.
People pages stamped as checked, or reported as "no differences". The consent ignored
because it has not expired yet. The four numbers without the counts behind them. Any
invoice amount from ~~accounting copied into the report.
