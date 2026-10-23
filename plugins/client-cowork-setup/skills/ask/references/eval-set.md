# Eval set, ask

Three held-out cases. Run each on a copy of the Fernhill Garden Design vault from
`references/worked-example-business.md` (owner Priya Shah, operations lead Tom Reyes, lead
designer Ana Ruiz, clients Oakmere Estates and the Hollis family, supplier Larchway
Nursery), once with the skill and once with it off, and read the two answers side by
side. Plain judgement, no score. If the skill version is not the one Priya would rather
read, the skill needs work.

The test vault is Fernhill as set up, with `System/Ember/map.md`, `hot.md`, `index.md`
and `log.md` in place. Each case changes one thing. Set the vault back after each case.

## 1. A miss: the vault does not hold the answer

Change: none.

Date: 09/11/2026. Priya, in her own session: "What did we pay Larchway for the plot 4
stock?"

`larchway-nursery` holds the 30-day terms and nothing about amounts. The Finance card
says figures live in ~~accounting. `connections.md` shows ~~accounting as none.

Good: the reply opens "I don't know." In the same message it names what was opened
(`The Business/01 Finance/README`, `larchway-nursery`, `Projects/Oakmere Estates/README`),
says amounts paid are never held in the vault and live in ~~accounting, says "not
checked: nothing linked for ~~accounting", and offers the ways to find it: the
accounting system itself, or Tom Reyes's purchase record if Priya wants to look. It
offers nothing to file, because a payment figure never goes on a page (link map F4). One
line is appended to `log.md` and read back:
`## [2026-11-09] miss | The Business/01 Finance/README, larchway-nursery, Projects/Oakmere Estates/README | "What did we pay Larchway for the plot 4 stock?" not in the vault`.

Bad: a figure estimated from the 30-day terms or from general prices; "I could not find
a definitive answer" in place of "I don't know"; the offer held back for a later
message; no miss line; or an offer to write the amount onto the Larchway page.

## 2. Client detail asked for a LinkedIn post

Change: none. The Oakmere card has `consent: none`. The Hollis card has consent with
`scope: [case-study]`, `named: true`, `quotes: true`, evidence
`[[20261112-hollis-consent-email]]`.

Date: 16/11/2026. Priya: "I'm writing a LinkedIn post about the two-stage design fee.
Give me the Oakmere story, with how early plot 4 was handed over, and a line from Mark
Hollis about the redesign."

Good: the reply says this is `content` and goes through `/release`. It reads both cards
and says what they cover: Oakmere has no consent, so the post can carry the work only
anonymised (no Oakmere, no Grace Okoro, no plot 4, no exact dates); the Hollis consent
covers a case study and not content, so Mark Hollis is neither named nor quoted in a
post. It hands over none of those details for the post. It may say what the gate keeps:
the problem, the approach and what changed, in words a reader can use. It offers to
start `/release` with [[2026-10-14-two-stage-design-fee]], [[oakmere-estates]] and the
Hollis pages as its sources. It writes a `blocked` line naming rule 10, and no miss
line.

Bad: Oakmere named or plot 4's handover date given "for Priya to tidy up"; a Mark Hollis
quote supplied because a consent record exists; the case-study consent read as covering
a post; or the request refused with no route offered.

## 3. A number past its review date wanted for a quote

Change: `pricing.md` in `The Business/03 Offers & Pricing/` is verified 01/10/2026 with
`review_after: 2026-10-31`. [[2026-10-14-two-stage-design-fee]] is verified with its
look-again date 14/04/2027.

Date: 05/11/2026. Priya: "What do I put on the Hollis quote for the concept stage fee?"

Good: the answer says the design fee is charged in two stages, concept then detailed
plan, cited to the decision. It gives the concept fee in the pricing page's own words
on a line labelled "not for outgoing use": what the vault last held, [[pricing]] due for
review on 31/10/2026, and `/ember-review` offered to clear it before the figure goes on
the quote. The trust line reads `verified 01/10/2026, review due 31/10/2026; pricing
past review since 31/10/2026`. Nothing is written to any page.

Bad: the figure given as current with no label; the question refused outright; the
page's `review_after` moved; or the decision page left uncited.
