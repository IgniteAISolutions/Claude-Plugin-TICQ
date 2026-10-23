# The nine checks, and the memo

What each check tests, what counts as a pass, what gets applied on the spot, and what has
to wait for a yes from the owner named in `CLAUDE.md`. Read this when running `/mot`.

The dividing line between the third and fourth columns is one question: could a reasonable
person want it the way it is? A pointer to a file that is not there could not. A rule
somebody wrote on purpose could. When in doubt, it needs a yes.

| # | Check | What passes | Applied without a yes | Needs a yes |
|---|---|---|---|---|
| 1 | Context weight | `CLAUDE.md` under roughly 200 lines and signal-dense, per Anthropic's published guidance, with the detail in referenced files. Every figure counted, tokens marked approximate | Nothing. Counting only | Nothing. This check measures |
| 2 | The cut list | Every proposed cut is sorted: rule, justification, repetition, or dead reference. Lines saved given per item | Removing a reference to a file that never existed and nothing points to | Every move of justification, every collapse of repetition, every line in `CLAUDE.md`. Never a rule carrying a dated incident, at all |
| 3 | Contradictions | Both sides quoted with file and line, one recommendation, no edit | Nothing | Which side wins, always. The loser comes out whole rather than being softened |
| 4 | Routing overlaps | Every pair that would claim the same request is quoted, with the words they collide on | Nothing | The reciprocal boundary line, written into both descriptions |
| 5 | File integrity | No file ends mid-sentence, frontmatter markers and description intact on every skill, no square brackets, every path resolves | A path pointer corrected where the target is findable and unambiguous. A stray frontmatter marker | A truncated file. A bracket whose value has to be known rather than guessed. A pointer whose target is in `_archive` |
| 6 | Stale dates | Nothing past its own written window, and each review date has a diary entry proposed beside it | Nothing | Every refresh and every retirement, and every calendar entry |
| 7 | The learning loop | Reviews written this month, each routed lesson landing in the file it named, `progress.md` moved, `backlog.md` moved | Nothing | Any change to `progress.md` or `backlog.md` beyond the one run line |
| 8 | Settings drift | Every line in `System/settings-record.md` matches the value the person reads off their own screen | A missing date or decider added to a record line the person confirms in session | Every setting change, and every admin-level setting, which goes to the admin by name |
| 9 | Starter performance and `MEMORY.md` | Every eval case scored pass, fail or NOT VERIFIED. No duplicate or superseded line left proposed without an answer | A `MEMORY.md` line duplicated word for word, the earlier copy retired to `_archive/memory-<date>.md` | Every other removal, every eval failure that implies a skill edit, and anything in `MEMORY.md` that is a judgement rather than a copy |

## What NOT VERIFIED means here

Three cases, and each says what would close it.

- An eval case needing a connector that is off. Name the connector and who can authorise it.
- A fix written to a skill served from a plugin cache. It reaches the seat when the plugin
  is reinstalled, and not before.
- A setting nobody read off the screen. The record is evidence of a past decision, never
  evidence of the current value.

## The memo

One page, to `System/Reviews/<date>-mot.md`, in this order. The chat summary is the same
thing under 250 words: the verdict, the worst finding, and what needs a yes.

```
RAN                  the date it should have run, and the date it did
WEIGHT               each file, lines and approximate tokens, and the total
WORST FINDING        one, quoted with file and line
FINDINGS BY CHECK    checks 1 to 9, worst first, each quote carrying its location
FIX LIST             numbered. Each: what, where, and safe (applied) or needs a yes (not
                     applied) with the name of who decides
LOOP                 reviews this month, lessons landed, progress.md, backlog.md
EVALS                skill by skill, x of y, with the failing cases named
NOT VERIFIED         and what it would take
TREND                one sentence against last month's memo, or "first MOT on this seat"
```

A clean MOT is a real result. Where a check finds nothing, say what you ran, so a healthy
seat can be told apart from a check that did not happen.
