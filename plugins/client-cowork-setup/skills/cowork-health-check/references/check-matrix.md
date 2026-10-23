# The check matrix

What each check tests, and what counts as a pass. Read this when running `/health`.

## `CLAUDE.md`, section by section

Ten of these are the same for every client. Two vary, and they come from the client's
own `company-context.md` rather than from here. Report each as present, missing or
incomplete, and quote what you find.

| # | Section | Passes when |
|---|---|---|
| a | Who I am | Names the person and their role |
| b | Read About Me first | An instruction to read the `About Me/` folder before any task |
| c | *Business context* | Points at the shared company context file, with a path that resolves. **Client-specific: read the path from `company-context.md`** |
| d | The four scope questions | Where will it live, what does it touch, what is in and out of scope, what is still needed from me |
| e | The rules that never bend | Never send, never delete, money is read only, personal data stays put, when unsure stop and ask |
| f | The folder list | Every folder named, and each one exists |
| g | The naming convention | A dated pattern, lowercase, hyphens, one file per document |
| h | *The systems list* | Names their real systems and which are read only or off limits. **Client-specific: read from `company-context.md`** |
| i | End-of-session wrap-up | An instruction to run `/end` and file each lesson where it acts |
| j | The skills and the five parts | The command table, and the paragraph saying every skill has Purpose, Procedure, Quality criteria, Example, Edge cases, and where a fix goes |
| k | Model and effort | Choose effort first, model second; each skill names its own |
| l | The first thirty days | The opening-line rule from `/guide`, tied to `System/progress.md` |

**Square brackets count as missing.** A template that shipped with `[name]`, `[role]` and a
path to be set during the session, and never got filled in, is a form rather than a set
of instructions. This is the most common defect on the list and it is mechanically
checkable, so check it mechanically.

## The nine gotchas

These are what breaks on the way, and they matter more than the acceptance bar, which
only says what must be true at the end. Every one came off a real build.

1. `CLAUDE.md` never finished during the build, square brackets left in it
2. Memory not wired, so nothing carries between sessions
3. The flywheel never installed, so nothing grows after the trainer leaves
4. Schedules created but never staged, or staged and never fired
5. Custom instructions absent
6. Cloud mode left on by default, so local tasks fail silently
7. The wrong folder saved at Cowork setup
8. Connectors enabled at admin level and never authorised by the person
9. The client was never told where to go next

Numbers 1, 2, 4, 6, 7 and 8 are testable and the steps above test them. Number 3 is a
listing check. Numbers 5 and 9 need a person to confirm, so they go in the report under
WHAT NEEDS A PERSON rather than being asserted either way.

## The contradiction sweep, step 8

Four checks that compare what the documents say against what the machine does. All four
came off the first live run of this skill on 29-08-2026, against a setup built by
somebody careful who found all four in his own install. Assume any setup has them.

These are the findings a person cannot make about their own system, because they wrote
the documents and they remember what they meant rather than what they typed.

### 8a. Every pointer resolves

Take every file path named in `CLAUDE.md`, in `company-context.md`, and in any skill's
frontmatter or body. Resolve each one. Report the ones that do not.

A required read that is not there is a rule the person cannot follow, and it fails
quietly: the session finds nothing and carries on without it, producing work that looks
complete and skipped a control.

Two outcomes and they need different fixes. **The file moved to `_archive`**, which means
the pointer was left behind when somebody retired it correctly. **The file never existed**,
which means the rule was written for something that was never built. Say which.

Where the target is archived, the question for the person is whether the file should come
back or the pointer should go. Do not decide it for them.

### 8b. The controls cover every route the rules name

Read the rules for any instruction that tells a session **how** to write, send, or store
something. Then check the controls can actually see that route.

Where a client runs hooks, that is the matcher against the tools the rules name. Where a
client has no hooks, it is the firewall against what the connectors can do: a rule saying
never send, on a mail connector holding send permission, is a rule with nothing behind it.

The failure to hunt for is a document that instructs the bypass. A rule telling somebody
to write through a tool the gate cannot see is worse than a gap that went unnoticed,
because it will be followed exactly.

### 8c. Every convention is stated once

Search for anything stated as a standard: naming, folder structure, file formats, dates,
version handling. Where the same convention appears more than once, compare the wordings
character by character.

Two statements of one rule drift, and the drift shows up on disk as two or three schemes
running at the same time. Count the schemes actually in use before proposing which one
wins, because the answer is usually whichever the worked examples use rather than
whichever the prose says.

Check the worked examples against the stated rule too. A rule contradicted by its own
example is the same defect wearing a different hat.

### 8d. Memory matches the scheduler

Read what memory and the context files claim about scheduled tasks: which exist, which
are live, which were retired. Then read the scheduler.

Report every disagreement in both directions. A task memory calls live that the scheduler
shows disabled is work the person believes is happening. A task running that memory never
mentions is work with no owner.

Watch for an open action in memory that was written down and never done, of the shape
"somebody to disable these". That line has been outstanding since the day it was written,
and it is usually the explanation for the disagreement.

### 8e. The backups are piling up

List `_archive/backups`. Where it holds more than eight zips, say how many and the oldest
date, and leave them. The backup task never deletes, and neither does this check; the
person clears old ones by hand if they want the space back.

### 8f. The knowledge base is being kept

Only where `System/Ember/` exists. Five checks, each by reading a file or the scheduler:

- Both Ember tasks are in the scheduler, and where each runs (cloud or desktop) matches
  the "Scheduled runs" line in `System/Ember/connections.md`.
- The newest `System/Ember/reviews/*-refresh.md` is under eight days old, and the newest
  `*-hygiene.md` under five weeks. A task that ran and wrote nothing is reported as the
  silent failure, never as a pass.
- The newest hygiene report carries the four numbers and the lean check.
- No file in a folder at `zone: public` lacks a `released:` id that appears in
  `System/Ember/releases.md`. Any that does is the first finding of the report.
- The release hook: say whether `hooks/release-gate.js` fired on this surface, from the
  test result recorded in `docs/for-the-installer.md`. Where it is not verified, the
  weekly `/lint` leak check is the only control, and the report says so.

## The weekly review, created as a local task

Where step 8 finds no weekly review, stage the Weekly flywheel from
`skills/cowork-build/references/schedules.md`: `/audit`, Friday 16:00, local. It reads
`System/Reviews` and writes `System/Twin/backlog.md`, so it has to be local; say why
when you report it. Do not create a second, separate weekly review alongside it, and do
not point anything at an outputs folder: this plugin builds none.

## Reporting a negative

A finding of "this is missing" is only as good as the search behind it. When you report
something absent, name what you looked at. "No voice profile in About me, which holds 3
files: how-i-work.md, preferences.md, notes.md" is a finding. "No voice profile" on its
own is a claim that cannot be checked.

The same goes for a clean result. If a whole step passes, say what you ran.
