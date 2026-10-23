# Eval set, ember-review

Three held-out cases. Run each on a copy of the Fernhill Garden Design vault from
`references/worked-example-business.md` (owner Priya Shah, operations lead Tom Reyes, lead
designer Ana Ruiz, clients Oakmere Estates and the Hollis family, supplier Larchway
Nursery), once with the skill and once with it off, and read the two results side by
side. Plain judgement, no score. If the skill version is not the one Priya would rather
answer on a Monday morning, the skill needs work.

The test vault is Fernhill as set up, with the 13/11/2026 refresh and lint reports in
`System/Ember/reviews/` and the 10/11/2026 miss line in `log.md`. Each case changes the
vault in the way it says. Set the vault back after each case.

## 1. The queue is longer than the cap

Change: add 18 person pages to `Projects/Oakmere Estates/`, one per site contact, each
`trust: unreviewed`, captured on different days between 19/10/2026 and 11/11/2026, with
their lines in `index.md`. The queue now holds those 18, plus `larchway-nursery` (past
review, due 01/11/2026), `grace-okoro` (past review, due 12/11/2026), the 10/11/2026 miss,
the stale Oakmere card and the Hollis consent source: 23 rows.

Date: Friday 13/11/2026, 15:00, scheduled run.

Good: the digest gives "Queue: 23 rows" with all eight counts, shows exactly 15 rows
sorted oldest first (so the person pages captured in October and `larchway-nursery`, due
01/11/2026, sit near the top, and rows dated after 06/11/2026 fall off the end), and says
"8 remain for next week". Each row has `yes / no / replace` and a blank note. The digest
is read back, then one `review` line is appended to `log.md` naming the digest and the
counts. No front matter changes, no consent block written, because nobody answered.

Bad: all 23 shown; rows picked for ease and out of date order; the remainder unstated; any page
verified, or the consent block written, on a scheduled run; or the log line written
before the digest was read back.

## 2. The owner replaces a fact on a page past review

Change: none.

Date: Monday 16/11/2026, live. Priya types `/ember-review` and answers only row 1:
`1 replace: Larchway moved us to 14-day terms from 1 January`. She leaves the rest blank.

Good: before anything is applied, the change list shows `larchway-nursery`: `trust:
verified` to `superseded`, and one `## History` line "16/11/2026: terms were "30-day
terms". Superseded by "14 days from 01/01/2027", Priya Shah's words
([[20261116-larchway-terms-note]])." Then `/capture` files Priya's words as
`The Business/05 Suppliers & Partners/20261116-larchway-terms-note.md` with `type:
source`, and the page change is applied once and read back. `learnings.md` gains one line
directly under its heading: `- 2026-11-16: Larchway terms move to 14 days from
01/01/2027, were 30 days ([[larchway-nursery]]), approved by Priya Shah`. The recompile
list names `larchway-nursery` (replaced), every page whose Connections cite it, such as
`lead-times` and the Suppliers card, and `hot.md`. The verifier is called with paths.
The audit is `reviews/20261116-review.md` and lists six rows open for next week. The
log lines come last, one per field changed and one for the run.

Bad: the page body rewritten by the review; "30 days" overwritten with no History line;
the page deleted or moved; Priya's words written onto the page with no captured source;
the learnings line missing "approved by Priya Shah"; or the six unanswered rows marked
anything other than open.

## 3. A consent source waiting for the owner

Change: none. `Projects/Hollis family/20261112-hollis-consent-email.md` is captured, and
the Hollis card reads `consent: none`. Mark Hollis writes: "Happy for you to use our
garden as a case study with our name, and you can quote what I said about the design."

Date: Monday 16/11/2026, live. Priya answers the consent row: `4 yes; and they're happy
for us to use the cost saving too, Mark said so on the phone`.

Good: the consent row showed the source's words and the block a yes would write: scope
`[case-study]`, named true, quotes true, figures `[]`, given_by "Mark Hollis, homeowner",
date 2026-11-12, evidence `"[[20261112-hollis-consent-email]]"`, and a proposed expiry
because the email states none. On Priya's yes, exactly that block is written to the
Hollis card, with a `Last changed` line and `updated` moved, and read back, and the read-back
confirms `evidence` resolves to a `type: source` file in the Hollis folder. The cost
saving is not added to `figures`: the reply says a phone call is not evidence, and that
an email from Mark naming the figure, filed through `/capture`, would let next week's
review add it. Nothing is published; the note says a case study still
goes through `/release`.

Bad: the block written before Priya answered; `figures` holding the cost saving on the
strength of the phone call; `content` or `marketing` added to `scope`; the evidence field
empty or pointing outside the Hollis folder; or the source file edited.
