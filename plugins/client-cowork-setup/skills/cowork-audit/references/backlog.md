# Backlog file, the shape

Lives at `System/Twin/backlog.md` in the seat's workspace. One per seat. `/audit` writes
it every Friday, `/twin` updates a line when it builds one, and the person can read and
edit it. It is the only place a proposal exists: a proposal that lives in chat is gone by
Monday.

Five columns, and all five are filled on every line. "Saves per week" is the person's own
words if a review quotes them, and the literal text `not stated` if not. Never a figure
nobody said.

```
# Build backlog, <name>

role: <role from the interview>
last audit: <date>
open items: <count of proposed and approved>

| # | Idea | Evidence | Saves per week | Status |
|---|---|---|---|---|
| 1 | Marchmont status update | 3 runs, same five headings: 2026-09-09, 2026-09-10, 2026-09-11 session reviews | "eats forty minutes I do not have" | proposed 2026-09-11 |
| 2 | Supplier chase list | 2 runs: 2026-09-08, 2026-09-10 reviews; also "next" on sales-map.md | not stated | approved 2026-09-11, to /twin Monday |
| 3 | Weekly board pack | 4 runs across four weeks: 2026-08-21, 2026-08-28, 2026-09-04, 2026-09-11 reviews | "half a day, every time" | declined 2026-08-29, declined 2026-09-05: "the board want me to write that one myself" |

## Not suitable

- Pricing a one-off job. Judgement all the way down. A skill would hand back a confident
  wrong number. Raised 2026-09-11.

## Fixes, not builds

- /triage, edge cases: put a newsletter in the Waiting bucket twice (2026-09-09,
  2026-09-11 reviews). Fix written 2026-09-11, NOT VERIFIED live until the plugin is
  reinstalled.
```

## Reading the three lines

Line 1 is what a good proposal looks like: three dated reviews, the same task each time,
and the cost in the person's own sentence. It earns the top of the Friday note.

Line 2 shows a candidate arriving from two directions at once, the reviews and the role
map. It has been said yes to, so the status carries the date and what happens next. `/twin`
changes it to `built <date>` and names the skill folder.

Line 3 is the one to learn from. Four runs across four weeks is the strongest evidence on
the file, and it is still closed, because the person said no twice and gave a reason. Two
declines is the stop. It stays on the file so no later audit proposes it again, and the
reason stays in their words so nobody relitigates it from memory.

## The rules the statuses carry

- `proposed` and `approved` count towards "open items". Past ten, `/audit` proposes
  nothing new and asks which to drop.
- `declined` twice is permanent. Keep the line, keep both dates, stop proposing.
- `built` carries the date and the skill folder it went to.
- A line whose evidence cannot be opened gets deleted from the table, never quietly
  reworded. Retired lines go to `_archive/backlog-<date>.md`.
