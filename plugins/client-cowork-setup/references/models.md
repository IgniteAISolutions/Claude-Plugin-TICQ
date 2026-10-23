# Which model for which Ember job

The setup interview recommends a model for each Ember job and writes the choice into
`System/Ember/map.md`. The recommendation follows one rule from `/sub-agent`: choose
the effort first and the model second, and lower the effort on a strong model before
dropping to a weaker one.

## The lineup

The model table in `references/volatile-facts.md` is the one to use: it is re-checked
before every build day. This copy matches it as of 18/10/2026, checked against
Anthropic's models overview page. If the two disagree, `volatile-facts.md` wins, and this
file is the one out of date.

| Model | What it is for |
|---|---|
| Opus 5.5 | Judgement, planning, anything a client or a manager will read |
| Sonnet 5.5 | Doing the work from a clear brief: reading, drafting, comparing, summarising |
| Haiku 5.5 | Quick checks, simple lookups, sorting and extraction |
| Fable 5.1 | The hardest long jobs, only when Opus 5.5 at high effort has fallen short |

A model name on any other list is legacy and is corrected on sight.

## The recommendation

| Job | Recommended | Why |
|---|---|---|
| `/ember-setup` | Opus 5.5, high effort | Every judgement about the business's structure and governance is made here once |
| `/compile` | Opus 5.5, high effort | Deciding which page holds a fact, and spotting a contradiction, is judgement |
| `/release` | Opus 5.5, high effort | The cost of a missed identifier is a client's trust |
| `/ask` | Sonnet 5.5 | Reading and citing from a clear map; move to Opus 5.5 when the answer will leave the business |
| `/ember-review` | Sonnet 5.5 | Building the register is reading and sorting; the owner makes the decisions |
| `/refresh` (weekly) | Sonnet 5.5 | Reading a week of changes and capturing them is work from a brief |
| `/lint` | Haiku 5.5 for the structural checks; Sonnet 5.5 for `--monthly` and `--quarterly` | Structure is mechanical; hygiene and scoring need reading |
| `/capture` | Sonnet 5.5 | Filing is routing from a clear test |
| The verifier | Sonnet 5.5 | Checking evidence row by row |

## How the interview puts it

Setup says the recommendation in one sentence per job and asks one question: "Is cost or
care the bigger worry for you this year?" Cost moves `/compile` and the monthly run down
one step, to Sonnet 5.5. Care keeps the table as it is. `/release` and `/ember-setup` stay
on Opus 5.5 either way, and setup says so and why.

Where the seat cannot choose a model for a scheduled task, setup says so and records the
model the task will actually use.
