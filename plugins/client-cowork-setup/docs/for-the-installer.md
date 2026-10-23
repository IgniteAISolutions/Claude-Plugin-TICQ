# {{CLIENT_SLUG}}-cowork-setup 0.2.0, notes for the installer

Built from the client template repository, where `TEMPLATE.md` at the root sets it up
for a new client. The user guide for the person at the seat is the plugin's `README.md`,
with a printable copy at `docs/Cowork-User-Guide_v0.2.0.docx`. `/guide` hands it to them.
This file is for whoever installs, packs or extends the plugin.

A Claude Cowork build for a client team, built for the Claude 5 models. Installs as
one plugin of sixteen skills and one hook. Runs day one so the person is amazed before lunch and working by the end
of the week, and keeps the system improving after the facilitator leaves.

## What this build does

- **Day one is inverted.** It opens by reading the person's real folder and doing one
  live task before any setup. Each piece of setup then arrives as the repair for a miss
  they just watched. Setup taught as repair, never as prerequisite.
- **`/twin`, the digital twin.** Turns a task a person does into a tested skill by
  interview, in one sitting, without ever showing them a form. The engine the coach
  hands to.
- **`/structure`.** Audits a workspace, proposes subject-named folders with a
  descriptor in every one, applies on a yes with a manifest. No inbox, no outputs
  folder, anywhere. The rule that stops the mess coming back.
- **`/settings`.** Every Cowork setting read off the screen, decided against the
  firewall, recorded with a reason.
- **`/end`.** Closes a session with a review and files each lesson where it acts: the
  misfiring skill, the memory file, the audit queue.
- **Voice by mining.** The profile is mined from ten real pieces the person wrote,
  then fifteen gap questions. The hundred questions are the question bank, never run
  cold.
- **Five parts, every skill.** Purpose, Procedure, Quality criteria, Example, Edge
  cases, in that order, in every skill the plugin ships and every skill `/twin`
  builds. A skill is coached into those five from questions about the job, then run
  on a live case, and every miss is fixed in the one part that produced it: too long
  goes to the criteria, a missing step to the procedure, an odd input to the edge
  cases, wrong tone to the example. The frame is
  `skills/digital-twin/references/skill-spec.md`.
- **Claude 5.** Model names corrected throughout. Every skill names its recommended
  effort in its frontmatter and says why. Choose effort first, model second.

## The skills

| Command | Skill | Effort | What it does |
|---|---|---|---|
| `/interview` | cowork-interview | high | Business interview once per firm, role interview per seat, before the day |
| `/build` | cowork-build | high | Day one, ten steps, each verified. The runsheet is `skills/cowork-build/references/sequence.md` |
| `/structure` | workspace-structure | high, low to apply | Audit, propose, apply on a yes |
| `/settings` | settings-pass | low | Every setting decided and recorded |
| `/twin` | digital-twin | high | One task into one tested skill, by interview |
| `/health` | cowork-health-check | high | Audit an install, repair the unambiguous, day-30 review |
| `/audit` | cowork-audit | medium | The weekly flywheel: counts repeats, proposes at most three, waits for a yes |
| `/mot` | cowork-mot | high | The monthly MOT: weighs the context, hunts contradictions, checks the loop is turning |
| `/end` | session-end | medium | Review and route the lessons |
| `/guide` | cowork-guide | medium | The coach: answers from the guide, routes and runs skills on a plain ask, keeps `System/progress.md`, one suggestion per session and on Mondays until confident |
| `/brief` | cowork-morning-brief | medium | The day, one first move, MUST / SHOULD / COULD |
| `/triage` | cowork-inbox-triage | medium | Four buckets, drafts the replies it can |
| `/prep` | cowork-meeting-prep | medium | Briefing before a meeting |
| `/followup` | cowork-meeting-followup | medium | Transcript to actions, decisions, draft |
| `/draft` | cowork-draft-in-my-voice | high | Writes in the person's voice, every fact sourced or marked NOT VERIFIED |
| `/sub-agent` | sub-agent | high | Splits a wide job across sub-agents on lighter models, checks every result |

## The structure it builds

```
<Workspace>/
├── CLAUDE.md, MEMORY.md, README.md
├── About Me/        who this person is, how they write
├── The Business/    the firm itself
├── Projects/        one folder per party with an engagement
├── Library/         knowledge base, templates, reference
├── Skills/
├── System/          scheduled tasks, reviews, settings record
└── _archive/        retired, never deleted
```

Every folder carries a `README.md` with purpose, belongs, does-not-belong and a
routing test. Folders are named for subjects, never for stages.

## Order of use, for a new firm

1. `/interview`, business once, role per seat, before the day.
2. `/build`, one seat at a time. It calls `/structure`, `/settings`, `/twin` and `/end`
   in sequence.
3. Day two to five: fire the skill, second skill, one scheduled task, then `/audit` on
   Friday proposes what to build next.
4. `/health` at day 30.

## Order of use, for a firm already built to an older standard

1. `/health` on the pilot seat. It runs `/structure` in audit mode and reports.
2. Approve the routing table for that seat. `/structure` applies with a manifest.
3. `/settings` on that seat. Then `/twin` on the person's most repeated task.
4. Roll to the next seat only when the pilot's day-30 passes.

## Firewall, in every seat

Drafts never send. Money is read only. Nothing client-facing moves without a person.
Nothing is deleted; retired files go to `_archive`. A run that reads the inbox never
also sends in that run.

## The hook

`hooks/hooks.json` runs `hooks/sub-agent-model.js` before every sub-agent is sent. It
refuses a general-purpose sub-agent that has no model set, so legwork never runs at full
weight by default. Named agent types set their own model and are left alone. It needs
`node` on the path and fails open: bad input, a missing field or a missing `node` lets the
call through, because a broken guard must never stop a seat working.

Verified on Claude Code 2.1.302 on 18-10-2026: a sub-agent with no model was refused, and
one with its model set ran. **Not verified on Cowork.** A user report from May 2026 says
Cowork loads plugin hooks and never runs them. Where it does not run, the sub-agent skill
carries the same rule inline. Test it on a live Cowork seat and write the result here
with the date.

## Scheduled tasks

Seven, all local, staged by a person on the build day. The table of what runs when,
where, and what it produces is `skills/cowork-build/references/schedules.md`. A
plugin cannot create a scheduled task on install; never write as if it can.

## Volatile facts

`references/volatile-facts.md` holds the things that change between Cowork versions:
model names, permission-mode labels, screen positions, scheduled-task behaviour.
Re-verify against the live app before every build day.

## Packing

`pack.ps1` in the parent folder zips this tree, copies the zip to `.plugin`, and
prints the entry count. Count the entries before shipping. If the count drops between
releases, something was dropped and it will not announce itself.
