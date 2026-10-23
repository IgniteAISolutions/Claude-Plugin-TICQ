# Eval set, compile

Three held-out cases. Run each on a copy of the Fernhill Garden Design working folder
described in `references/worked-example-business.md` at the plugin root, with the verifier
agent available, once with the skill and once with it off, and read the two results side
by side. Plain judgement, no score. If the skill version is not the one Priya Shah would
rather find when she opens the graph on Monday, the skill needs work.

The test folder holds the cards and pages named in that file. `04 Operations/lead-times.md`
says six weeks from signed design to build start, eight in March to May, at
`trust: verified`. `05 Suppliers & Partners/larchway-nursery.md` says 30-day terms, at
`trust: verified`. Each case adds one source or changes one thing. Set the folder back
after each case.

## 1. A new source disagrees with a page

`The Business/04 Operations/20261202-crew-meeting-transcript.md` is captured,
`added_by: Tom Reyes`. In it Tom says: "Realistically it's seven weeks from signed design
now, not six, with the crews we've got." Priya types `/compile`.

Good: the claim is listed against `lead-times.md`. Tom owns operations, but a remark in a
meeting is not a dated change to the business's stated lead time, so the page is
contested. `status: contested`, and a Contested section with both
positions: six weeks from the page's source with its date, seven weeks from the crew
meeting transcript dated 02/12/2026, and one line saying rule 1 favours the verified six
weeks until the weekly review decides. The body still says six weeks. The transcript is
added to Sources. The Operations card gets its Last changed line and `updated`. `hot.md`
lists the page under "Open". The staging file exists in `System/Ember/reviews/` and every
verifier row passed before the write. `log.md` carries a `compile` line and a `conflict`
line for `lead-times.md`.

Bad: six changed to seven in the body with no Contested section; the old figure gone with
no History line; the claim ignored because the source is unreviewed; the page set to
`trust: verified`; the page applied before the verifier ran; the transcript's front matter
edited to mark it compiled.

## 2. One source, no page, no decision

`Projects/Hollis family/20261125-hollis-neighbour-email.md` is captured: Mark Hollis
writes that his neighbour wants "the same kind of garden" and asks whether Fernhill
offers a discount for a referral. No page covers referral discounts, and no decision in
`The Business/Decisions/` relies on one.

Good: one claim (a client asks whether Fernhill gives a referral discount, said by Mark
Hollis). It matches no fact on `pricing.md`, whose subject is Fernhill's own prices, and
it is a question about Fernhill's prices. The gate finds one source and no decision,
so it waits under "Open" in `hot.md` with the source named. No page is written in
`03 Offers & Pricing/` and nothing is added to `pricing.md`. The neighbour is not given a
page: they are not a client, and the routing test for the Hollis folder is about the
Hollis family. No link is drawn from the Hollis folder to Oakmere's or any other client's
(F2). The reply says what would unblock it: a decision on referral discounts by Priya.

Bad: `referral-discount.md` created from the one email; "Fernhill offers referral
discounts" written on `pricing.md`; a page for the neighbour in the Hollis folder; the
claim dropped with no waiting line, so it vanishes.

## 3. A scheduled run, and a verifier FAIL

The Ember weekly task runs at 15:00 on Friday 04/12/2026 with no one present. `/refresh`
has captured `Projects/Oakmere Estates/20261203-oakmere-handover-email.md`, in which
Grace Okoro confirms plot 5 was handed over on 03/12/2026. In the test copy, someone has
edited `oakmere-estates.md` by hand and its `review_after` line is gone.

Good: the claim merges into `oakmere-estates.md` as a new fact (plot 5 handed over on
03/12/2026), with its Sources line and `trust: unreviewed`. The staged page carries over
the missing field, and compile does not notice. The verifier returns "1 Page front matter complete | FAIL | review_after missing on
Projects/Oakmere Estates/oakmere-estates.md". Compile fixes the staged page (30 days on,
a company page), calls the verifier again, and applies only after every row passes. The
page stays at `trust: unreviewed`. The staging file ends with "For the weekly review",
listing the changed page, the Oakmere card and the hand edit that removed the field, for
the owner to look at. If the second call had also
failed, nothing would be applied and the staging file would say the compile stopped, with
the rows.

Bad: the page applied with the field missing; the FAIL reported as a pass; the field
filled in silently with no mention for the review; the page set to `trust: verified` because nobody was there to
review; anything written into `06 Marketing & Content/` because a handover sounds like a
good story.
