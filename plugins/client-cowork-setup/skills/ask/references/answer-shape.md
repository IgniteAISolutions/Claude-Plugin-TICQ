# The answer shape

Every `/ask` answer uses this layout, in this order. The answer and the trust and age
line always appear. Lines marked (when) appear only in that case, so a short question
gets a short answer.

```
[The answer.] One short paragraph, or up to five lines for a list. Every claim ends with
its page as [[page]]. A number sits on the same line as the page it came from, in the
page's own words. A sentence with no page starts "Opinion:".

Trust and age: <one line, see below>.
Source order (when two sources disagreed): <source a> won over <source b> under "<row of
the source order in map.md>"; logged.
Contested (when a page is at status contested): <position one> [[page]] / <position two>
[[page]]. Not chosen; it is in the review queue.
Not for outgoing use (when a number sits only on a page past review): <figure> is what the
vault last held; [[page]] was due for review on DD/MM/YYYY and /ember-review clears it.
Release (when the answer is headed for a case study, marketing, content or another
client): This goes through /release. Consent on [[<client> card]]: <what it covers for
this use, or none>. Say yes and I will start /release with these pages as its sources.
Not shown (when a page was withheld for sensitivity): A page on this subject is answered
only to <the owner | the owner and the people named for leadership pages>.
I don't know (when any part is a miss): see below.
File it? (when the owner gave the answer): Say yes and I will file that through /capture.
```

## The trust and age line

One line, covering every page cited. The weakest page governs the wording.

| State of the pages cited | Line |
|---|---|
| All verified, none past review | `verified 01/10/2026, review due 30/12/2026` (the oldest last_verified, the earliest review_after) |
| Any page unreviewed | `unreviewed, 1 of 3 pages unreviewed, review due 30/12/2026` |
| Any page past review_after | the line above, then `; <page> past review since 01/11/2026` |
| Any page deprecated or superseded | not cited as current; where it is the only holder, `superseded on DD/MM/YYYY, see [[new page]]` |
| A live system won over the vault | `read from ~~accounting on DD/MM/YYYY; the vault copy is dated DD/MM/YYYY` |

Dates in this line are DD/MM/YYYY. "Pages" counts the knowledge pages cited, never the
sources behind them.

## What a citation is

`[[page]]` written exactly as the page appears in `index.md`, so it resolves in Obsidian:
`[[lead-times]]`, `[[oakmere-estates]]`, `[[2026-10-14-two-stage-design-fee]]`. When two
pages share a name, use the path form from `index.md`. A folder card is cited as
`[[<folder>/README|<name>]]` when the claim is about what a folder holds. A citation never
points at `map.md`, `hot.md`, `index.md`, `log.md`, `learnings.md` or anything in
`reviews/`, because none of those is a source (link map F3). A captured source is cited
only when the question was about what that source says.

## "I don't know"

Said in those words, at the start of the miss, and followed in the same message by:

1. The cards and pages opened.
2. The way to find it, one or more of:
   - **The live system that owns that kind of fact**, named from `connections.md`:
     "~~CRM holds contacts; it is linked, shall I look?" or "~~calendar is not linked, so
     it was not checked".
   - **A source or original that may hold it**, named from its folder card: "the
     `Larchway terms 2026.pdf` on the Suppliers card may say".
   - **The owner's answer**, filed through `/capture` once they confirm it.

Never "I could not find a definitive answer", never "it is likely that", never a general
answer from outside the vault.

## The log lines this skill may write

Appended to `System/Ember/log.md` in the contract's shape, one line each, read back after
writing.

```
## [2026-11-09] miss | larchway-nursery, The Business/05 Suppliers & Partners/README | "Does Larchway deliver on Saturdays?" not in the vault
## [2026-11-09] conflict | lead-times vs planting-season | build start in March: lead-times (verified 01/10/2026) won over planting-season (unreviewed), "verified beats unreviewed"
## [2026-11-09] blocked | Projects/Oakmere Estates/oakmere-estates | rule 10: content use asked; sent to /release, no detail given
```

The miss line names the pages and cards opened (or `none`) and quotes the question as
asked, so the review can tell whether a page was later written for it and the monthly
hygiene can count it. A refusal for sensitivity writes no miss line.

## Worked instance

Priya Shah, 09/11/2026: "If the Hollis family sign their design this week, when can the
build start? And who supplies the plants?"

```
Build starts six weeks after the design is signed, eight weeks in March to May
[[lead-times]]. A signature this week puts the start in the week of 21/12/2026,
outside the spring window [[lead-times]]. A quote states its build start from that
page [[quoting-process]]. Larchway Nursery supplies the plants, on 30-day terms
[[larchway-nursery]].

Trust and age: verified 01/10/2026, review due 30/12/2026; larchway-nursery past review
since 01/11/2026.
```

Four claims, four citations, one trust line. No source-order line because nothing
disagreed. No outgoing-use line because no number is going out. No release line because
the answer stays inside Fernhill.
