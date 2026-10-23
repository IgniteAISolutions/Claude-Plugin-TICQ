# The build sequence

Twelve steps, dependency ordered, each one ending by proving it took. Minute bands are a
guide to pace for one seat, not a stopwatch. Steps 1 to 10 are about 150 minutes of
working time; the knowledge base at step 11 adds 60 to 90 more, so a first seat books
the day, and a later seat in the same firm is shorter, because the knowledge base is
built once per firm.

## The pre-work gate, before step 1

Seats provisioned with the client owning admin. Connector authorisation cleared with
IT. Plugin installed and Cowork opened once. Business and role interviews done, on
disk. One live task the person brought. If any is false, stop and say which.

## Step 1, the cold open (0 to 20 min)

Connect one folder: their busiest live project, not the whole drive. Then one
instruction: read everything in here and tell me what you understand about this work,
what you are unsure about, and what you would need to be useful.

It comes back naming their clients, their formats, where the job has got to, what
looks unresolved. For someone who has only used a chat assistant, this is the moment,
and it costs no setup. It also does quiet double duty: this read is the sample mining
for the voice profile, so keep what it found.

**Verify:** it named at least three things that are true and one that is unresolved,
and the person agreed.

## Step 2, the first real piece of work (20 to 55 min)

The task they brought. Claude drafts it. It comes back around seventy per cent right.

That thirty per cent is the curriculum for the rest of the day. Do not fix it quietly.
Name every miss out loud and say what caused it: it did not know which client, the
tone is not theirs, it assumed something they never would, it was about to send.

**Verify:** the person has said which parts are wrong and why. Write those down; they
are steps 3 to 7.

## Step 3, folders and descriptors (55 to 70 min)

"It did not know which client that was." Run /structure in audit mode on their folder.
Show the numbers. Propose the subject-named tree. On a yes, apply it, with every folder
carrying a README.md. For a new seat with little content this is ten minutes; for a
seat with history it may run past the band, in which case propose now and apply after
the session.

**Verify:** ask Claude to locate one of their files by reading descriptors only.

## Step 4, the voice profile (70 to 85 min)

"The tone is not mine." From the samples read in step 1 plus ten pieces they name as
their best, mine the patterns using `../../cowork-interview/references/voice-mining.md`.
Then the fifteen gap questions, weighted to the never list. Write the profile with the
raw samples at the bottom.

**Verify:** redraft one paragraph of the step 2 output in the new voice and ask whether
they would send it.

## Step 5, context files (85 to 95 min)

"It assumed something I never would." Write `CLAUDE.md` from the template and the
interview answers, plus `About Me/` and `company-context.md`. No template placeholder
survives; where something was not answered, write "not yet answered".

If a `CLAUDE.md` already exists in the folder, do not replace it. Copy it to
`_archive/CLAUDE.md.<date>.bak`, then upgrade it section by section: keep every section
that is there, add the ones the standard requires from the template, and show the
person the difference before writing. Nothing the firm wrote is lost; nothing the
standard needs is missing. Then create `System/progress.md` from
`skills/cowork-guide/references/progress.md` with today as the seat start and one row
per skill that fits this role.

**Verify:** read `CLAUDE.md` back and summarise its own rules aloud, then ask what is
wrong. Something will be. `progress.md` exists with the role's skills listed.

## Step 6, the settings pass (95 to 105 min)

"It was one step from sending that." Run /settings. Every setting read off their
screen, decided against the firewall, recorded with a reason. Permission mode first.

**Verify:** the record file exists with a line per setting.

## Step 7, connectors and the firewall (105 to 120 min)

Two gates: an admin enabled the connector; the person authorises their own. One live
read per connector, and one line per connector appended to `System/settings-record.md`:
the connector, the date, what the live read returned, and whether it holds write or send
permission. `/ember-setup` reads these lines at step 11. Then the firewall in their own words from the decision-rights
block of the business interview: drafts never send, money is read only, nothing
client-facing moves without a person, nothing is deleted.

**Verify:** `System/settings-record.md` read back with a line per connector. Then ask
what happens when Claude finishes an email. If the answer is anything
other than "it waits for me", the rule has not landed.

## Step 8, the first skill (120 to 140 min)

They have just done a task and corrected it. That correction history is the skill,
already extracted. Run /twin on it: it interviews for what is still missing, writes
version one, runs it on a second real instance in front of them, routes the miss, runs
again. They leave with a skill they built.

**Verify:** the second run passed, and the person can say what the skill does without
reading it.

## Step 9, schedules and the target list (140 to 150 min)

Stage all seven scheduled tasks from `references/schedules.md`, each classified out
loud as it goes on: local, every one, because each reads or writes the working folder
and the machine has to be awake with Cowork open. Morning brief at 07:30. Triage at
08:00 and 14:00. The Monday nudge that runs `/guide weekly`, reads `progress.md`, says
what was used and what was not, makes one suggestion, and switches itself off when the
file says "coaching complete". The weekly flywheel that runs `/audit` on Friday
16:00. The filing sweep that runs `/structure sweep` on Friday 16:30, straight after
it. The monthly MOT that runs `/health` then `/mot` on day one. The backup, no skill
behind it, that zips the rules and system files on Sunday. Every one drafts; none
sends. Set the usage budget. Then the target list: what this person will do with it in
week one, by when, who is checking. Put the dates in the calendar, not a document.

**Verify:** watch one scheduled task fire and read its output. Calendar entries exist
with the person's name in the title.

## Step 10, the check (150 min)

Walk `acceptance-bar.md` with the person, box by box. Binary. Every box is decided here
except the team-wide line "The knowledge base holds real client material", which step 11
decides. Write the walk to `System/Reviews/<date>-acceptance.md`: one line per box,
ticked with its evidence, or open with what it needs and who owns it.

If any box other than the knowledge base line is open, stop here. Fix it, or close the
day with `/end` and name the box. The knowledge base is never built on a seat that has
not passed the check, because every later run inherits what the build left.

**Verify:** the acceptance file read back, every box but one decided, and the person
agrees with each line.

## Step 11, the knowledge base (150 to 240 min)

Run `/ember-setup`. It turns the working folder the build just made into the business's
knowledge base, in place: governance first, then the business, the model per job, the
link map, the build plan, the folder cards, Obsidian, and the weekly and monthly runs.
The interview is one question at a time and is in `skills/ember-setup/references/interview.md`.

Once per firm, on the owner's seat. A later seat in the same firm skips the interview:
`/ember-setup` reads `System/Ember/map.md` from the shared folder, checks the seat can
read and rewrite it, and adds the seat's name under Sensitivity at the level the owner
gives.

If the day has run long, stop at the end of any `/ember-setup` stage. It resumes from the
first stage whose proof fails, in a second session inside the same week. The acceptance
line stays open until it finishes, and the build is not live until then.

**Verify:** the setup review in `System/Ember/reviews/` read back, with the knowledge base
line ticked against two paths (a client folder card and a compiled page with a real
source), or the line left open with what it needs.

## Step 12, close

Run /end. It scores the session, scans the day's outputs for voice drift, and shows the
person the review. Update `System/Reviews/<date>-acceptance.md` with the knowledge base
line from step 11. Never call it live early: live means every box is true.

**Verify:** the `/end` review and the acceptance file read back; every box ticked, or the
open one named with its owner and date.

## The week that follows

Day two: fire the skill on a new instance, one gap, one rule. Day three: second task,
second skill, the person runs the interview. Day four: one more connector and one
scheduled task that produces something overnight, and one `/capture` of a real document
into the knowledge base, followed by `/ask` against it. Day five: `/audit` runs on Friday
and proposes what to build next, this plugin's own `/audit`, never another plugin's.
That is the moment it stops feeling like a tool.
