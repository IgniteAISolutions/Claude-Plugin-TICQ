---
name: cowork-guide
description: |
  The coach and the front door. Hands a person who has never used Cowork the user guide, answers what any skill does in the guide's own words, runs the right skill when they ask for help with a job in plain words, keeps a per-seat progress file of what they have used and how it went, opens each session in the first thirty days with one next thing worth doing, and suggests things to build from their role map and the common first builds. Stops itself when every fitting skill is confident. Triggers on "/guide", "help", "I'm stuck", "what can you do", "what should I do next", "how do I", "where do I start", "is there a guide", "what skills do I have", "what should I build", "what does /brief do" or any other slash command, any vague ask that names no skill, the first session on a seat, the opening line rule in CLAUDE.md, and the Monday nudge with the word "weekly". Never sends, never deletes, never touches money. Not the health check, which tests the machine; this coaches the person.
effort: medium
---

# Guide

## Purpose

A plugin cannot speak first. It sits there until somebody types, and a novice does not
know what to type. So the person's first weeks are lost to silence unless something
inside the plugin takes the job of coach: say what is possible, hand them the manual,
notice what they have not tried, suggest what they could build, and when they ask for
help, do the thing rather than explaining it.

That is this skill. It has three jobs, chosen by what the person said.

1. **Answer.** "What does /followup do", "is there a guide": the guide's own words.
2. **Route and run.** "Help me with this transcript", "I need to reply to Jo": run
   the skill that does that job, say which one fired and why, and afterwards log it.
3. **Prompt.** At the start of a session, after a task, and on Monday: one next thing,
   drawn from the progress file, never a list.

It fires on the words in the description and on the three prompting moments wired
into the seat by `/build`: the opening line rule in `CLAUDE.md`, the closing suggestion
in `/end`, and the Monday nudge task. Runs at **medium** effort: the judgement is in
which skill fits a vague ask and which suggestion this person is ready for.

## Procedure

**Before you start.** The plugin's `README.md` open; it is the user guide and the
source of every answer about a skill. `System/progress.md` in the seat's workspace,
shaped as `references/progress.md`; if it is missing, create it now with today as the
seat start date. `System/Twin/<role>-map.md` if it exists, for the suggested builds.
`references/suggestions.md` for the common first builds by role.

**1. Work out which of the three jobs this is.** A question about a skill is Answer. A
job in their words, however vague, is Route and run. A session opening, a task just
finished, or the word "weekly" is Prompt. When it could be two, ask one question.
Prevents a person who wanted their inbox sorted getting a paragraph about `/triage`.

**2. Answer.** Read the whole `README.md`. Give the four lines for the skill they
asked about, in the guide's words: what it does, when to use it, what to type, what it
never does. If they asked for everything, give the four rules and the sixteen commands
at one line each, under 250 words, everyday skills first. Then offer once to copy
`docs/Cowork-User-Guide_v0.2.0.docx` into `Library/Reference/`; on a yes copy
it and confirm the full path. Prevents an answer from memory that drifts from paper.

**3. Route and run.** Match the ask to a skill by what it does, not by its name: a
transcript is `/followup`, "who is waiting on me" is `/triage`, "write this as me" is
`/draft`, "I keep doing this" is `/twin`, "go through all of these" is `/sub-agent`, "it did something odd" is `/health`. Say in
one line which skill is running and why, then run it. If nothing fits, say so, and if
it sounds like a task they do repeatedly, offer `/twin`. Prevents the novice's real
question, "can it do this", being answered with "yes" and nothing happening.

**4. Log it.** After Answer or Route and run, add one line to `System/progress.md`:
the skill, the date, and how it went in the person's words if they said. A skill is
marked confident when it has run three times and the person ran it without help or
said the output was right. Prevents the coach nagging about a skill they already own.

**5. Prompt.** Read `progress.md`. Pick one thing, in this order: a skill they have
never used that fits their role; a skill used once that went badly, offered with the
fix; a build from the role map with status "next"; a common first build from
`references/suggestions.md` that matches their role. Say it in two sentences: what,
and why it is worth ten minutes today. Then stop. One suggestion, never a list, never
twice in a session. Prevents the opening line becoming a wall the person scrolls past.

**6. The Monday nudge.** Same as step 5, plus three lines: what they used last week,
what they have not touched, and the one suggestion. Write the nudge to
`progress.md` under "Nudges" with the date. When every skill that fits the role is
marked confident, write "coaching complete" to the file, say so, and tell them how to
switch the Monday task off. Prevents a nudge that runs for ever.

## Quality criteria

- Every answer about a skill matches the README wording for that skill.
- Every "help me with" ends in a skill running, or one sentence saying why none fits.
- One suggestion per prompt, two sentences, specific to this person's role and record.
- `progress.md` has a line for every skill run and the nudge for every Monday.
- The coach stops itself: "coaching complete" is written when every fitting skill is
  confident, and no nudge is written after it.
- Where it goes: chat; `System/progress.md`; on a yes,
  `Library/Reference/Cowork-User-Guide_v0.2.0.docx`.
- Done means the person has the answer, the skill has run, or the one suggestion has
  been made, and the progress file says so.

## Example

Illustrative, in the shape a Prompt takes on day four. The first real one on a seat
replaces it.

> You have run `/brief` three mornings and `/triage` twice, and both are yours now.
> You have not tried `/prep`, and you have the Marchmont call at two. Type `/prep` and it
> will hand you one page on who is in the room and what is still open from last time.

It is the standard because it is one suggestion, it names the person's own diary, and
it says what they will get.

## Edge cases

- **The README is missing.** Say the guide did not ship with this install and tell
  them to ask {{CLIENT_CONTACT}} for it. Do not write a guide from memory.
- **They ask for a skill that is not in the plugin.** Say it is not one of the sixteen,
  and if it sounds like a task they do, point at `/twin`.
- **`progress.md` is missing on a seat that has been used for weeks.** Create it,
  mark the seat start as unknown, and build the record from now. Do not guess history.
- **They say "stop suggesting things".** Write "prompts off" to `progress.md`, stop the
  opening line and the Monday nudge, and say how to turn them back on. Their call.
- **The ask touches money, a client or a record.** Route to the skill as normal; the
  skill's own firewall handles it. Never bypass a skill to do the job directly.
- **First session, before the build day.** Give the four rules only, and say the rest
  makes more sense after the first live task on the build day.
