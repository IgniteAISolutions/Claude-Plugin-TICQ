# The seven scheduled tasks

Staged on the build day, step 9, each classified out loud as the person watches. All
seven are local: none runs in the cloud. Every one reads or writes the working folder,
and the rule in `../../../references/cloud-vs-local.md` says that makes it a local task. The
right-hand column says which file each one needs, so the classification can be checked
rather than taken on trust.

| Task | When | Where | Runs | Produces | Stops when | Why it is local |
|---|---|---|---|---|---|---|
| Morning brief | daily 07:30 | local | `/brief` | the day and one first move | never | step 3 reads the working folder; drafts read the voice profile in `About Me` |
| Inbox triage | 08:00 and 14:00 | local | `/triage` | four buckets and drafts waiting | never | drafts read the voice profile in `About Me` |
| Monday nudge | Mon 08:00 | local | `/guide weekly` | one suggestion and progress logged | when `progress.md` says coaching complete | reads and writes `System/progress.md` |
| Weekly flywheel | Fri 16:00 | local | `/audit` | up to three proposals in `System/Twin/backlog.md` and a short note | never | reads `System/Reviews`, writes `System/Twin/backlog.md` |
| Filing sweep | Fri 16:30 | local | `/structure sweep` | the list of misfiled files in `System/Reviews` | never | reads the whole working folder |
| Monthly MOT | day 1, 08:00 | local | `/health` then `/mot` | the wiring report and the findings memo in `System/Reviews` | never | reads `CLAUDE.md`, `MEMORY.md` and `System` |
| Backup | Sun 20:00 | local | a copy job with no skill | `CLAUDE.md`, `MEMORY.md`, `About Me`, `Skills` and `System` zipped to `_archive/backups/<date>.zip`. Every backup is kept; the job never removes one | never | zips files in the working folder |

## Why every one is local

Each task reads or writes the working folder, so the machine has to be awake with
Cowork open when it fires. A cloud task cannot see the folder at all. The morning
tasks need the laptop open before 07:30 or they run late and catch up rather than
land on time; say this to the person on the build day so a missed brief is not read
as a fault.

## The rule that holds across all seven

Every task drafts. None of the seven sends anything, on any schedule, for any reason.
None of the seven deletes anything either. That includes the backup: an earlier build
said "last eight kept", which needs the job to delete the ninth, and a scheduled task
that deletes breaks the plugin's never-delete rule with nobody watching. When
`_archive/backups` holds more than eight, `/health` says so and the person clears the
old ones by hand, if they want to.

## If a task ever moves to the cloud

Only a task that touches nothing but connectors can. None of the seven qualifies as
built, because each reads a file in the working folder. If a seat later moves its voice
profile into an account skill, inbox triage becomes connector-only and can move to the
cloud. Re-classify it out loud when that happens, and update this table and the skill's
own Scheduling section in the same edit so the two never disagree again.

## How each is verified

On the build day: watch one task fire and read what it produced, so the person has
seen the mechanism once with their own eyes. The other six are verified by their
first real run in the days that follow, and checked again at day 30 by `/health`,
which lists every scheduled task and says whether it ran and where.
