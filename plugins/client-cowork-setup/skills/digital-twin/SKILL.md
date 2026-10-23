---
name: digital-twin
description: |
  Sits a person who has never written a skill down with Claude and turns one task they do into a working, tested skill, by interview rather than by form. Walks their real week to find the tasks worth digitising, extracts how they actually do one (the reasoning, the rejections, the example they are proudest of), builds version one in the five parts every skill here is built to, runs it on a live case in the room, routes every miss to the one part that caused it, and stops when the output is one they would sign. Triggers on "/twin", "digitise this", "turn this into a skill", "capture how I do this", "make Claude do this the way I do", "I keep doing this", "build me a skill for", or when the coach, the weekly audit or the build day hands over a task. Never shows the person the skill's structure during extraction. Never sends, never deletes, never touches money. Not the architect or the skill builder; this runs both in one sitting.
effort: high
---

# Digital twin

## Purpose

A person who has done the same task for nine years cannot tell you how they do it. Ask
cold and you get a sanitised three steps with every real decision missing, because the
decisions stopped being conscious around year two. The knowledge comes out under
questioning against a live case, and nowhere else.

So this skill never asks anyone to describe a task in the abstract, and it never shows
them a form. It asks about the job. It assembles the skill in the background, in the
five parts every skill this plugin builds to: **Purpose, Procedure, Quality criteria,
Example, Edge cases**. The frame, and where the four client-side needs (inputs,
destination, done, authority) live inside it, is in `references/skill-spec.md`.

It produces one skill folder the person can install: a `SKILL.md` in those five parts,
one real example pulled from their own files, and an eval set of the live cases it was
tested on. When run on a role rather than a task, it also produces a role map: the
prioritised list of what to digitise next and the list of what should not be digitised
at all.

It fires on the words in the description. It never sends, never deletes, never touches
money, and never puts a skill that touches money, clients or records live without the
yes at the gate.

**Model and effort.** Runs on the session's strategist model at **high** effort. The
interview is judgement work: deciding which answer is thin, which thread to follow,
which miss belongs to which part. Do not run it at medium to save cost; a thin
extraction produces a skill that fires and disappoints, which costs more.

## Procedure

**Before you start.** The workspace's `CLAUDE.md` open, for the firewall lines and the
tier. `references/interview.md`, `references/skill-spec.md` and
`references/fix-routing.md` read. The person's own files reachable, because the
example is opened from them, never described. A real instance of the task in front of
you: today's inbox, this week's report.

Six phases. Phases 1 and 5 exist only when the run covers a whole role; a single task
starts at phase 2.

**0. Frame.** Two minutes. Who is in the room (the person alone, or with a
facilitator), which organisation, which role, and the tier: does this role touch money,
clients or records? The tier sets the gate at phase 4 and nothing else. Write it down
and move on. Prevents a skill going live that should have been signed off.

**1. Map the role.** Never ask "what do you do". Ask them to take you through last
Tuesday, from opening the laptop. Then sweep for what Tuesday missed: the weekly, the
monthly, the quarterly, and the things that only happen when something goes wrong. The
last category is where the hidden work lives. Triage the list on four things: how often,
how long, how much it hurts when it is late, how much judgement it carries. Out comes
the backlog, and the **not suitable** pile. Say plainly which tasks should not be
digitised and why. That is what buys trust for the rest. Prevents a week spent
digitising the wrong task.

**2. Extract one task.** The full script is in `references/interview.md`. The shape:
walk the task on the real instance in front of you. Then go after the reasoning, not
the preferences. When they say "I always put the summary first", ask what happened the
time it was not first. When they say "I never include X", ask what went wrong when X
was included. Then get the example: open their files and find the best one they have
ever produced, rather than asking them to describe one. Then the bad one, and what was
wrong with it. Then the never list. Then the rules of thumb. Then the question that
makes a skill good rather than plausible: "When one of these is finished properly, what
does that look like? How do you know?"

The five parts fill in behind the questions. The person only ever hears questions
about their job. The moment somebody sees five headed sections they fill in a form, and
a form gets the answers people think they should give. Prevents the sanitised three
steps.

**3. Build, run, observe, refine.** Write version one in the written shape from
`references/skill-spec.md`. Run it on a second real instance while they watch. It will
get something wrong. Do not fix it quietly: name the miss, and route it to the one part
that produced it using `references/fix-routing.md`. Too long goes to quality criteria. A
missing section goes to procedure. A case it mishandled goes to edge cases. Wrong tone
goes to the example. Fired on the wrong words goes to purpose. Run it again. Two or
three cycles is normal; they leave with something tested rather than something drafted,
and watching it do their job badly and then correcting it is the moment they stop being
a sceptic and become the owner. Prevents the skill that was written, filed and never
trusted.

**4. Gate.** Tier decides. A task that touches only internal material: they save it
themselves and it is live. A task that touches money, clients or records: it goes to
the person named in the frame for a yes, and the skill carries the firewall lines from
`CLAUDE.md` in its own text until then.

**5. Resume.** A role map has a dozen tasks and a session does one or two. Write the map
to `System/Twin/<role>-map.md` with the status of every task on it, so the next session
opens with "we did triage and the weekly report; next on your list is the month-end
pack", not with a blank page.

## Quality criteria

The skill is finished when all of these hold. Check them before presenting, and say
which one is weakest.

- It has the five parts, in order, and only the five. Inputs sit at the top of the
  procedure, destination and done at the end of the criteria, the never line in the
  purpose.
- The procedure is in the order the person actually works, and every step names a
  failure it exists to prevent.
- Every quality criterion is testable. A word count, a named section, a rule about the
  first sentence. "Make it punchy" fails this test.
- The example is real, theirs, and the one they named as their best. Not written by
  Claude, not a composite.
- The edge cases say the uncomfortable sentence: what to do when the data is thin, when
  sources disagree, when the input is missing something, and when a case reaches the
  never line.
- It was run on at least two live cases and the second one passed.
- Every fix made in the room went to one part. There is no general instruction to be
  more careful anywhere in it.
- The person can say what the skill does without reading it.

Where it goes: `Skills/<task-name>/SKILL.md`, with the example and the eval cases in
the same folder. The role map to `System/Twin/<role>-map.md`.

Done means: the second live case passed and the person said, in some form, "that is
what I would have written". Then stop. A skill that has passed is not polished further.

## Example

`references/worked-example.md` is a complete run: an operations manager's weekly client
report, from the Tuesday walk to the tested skill, including the miss on the first run,
where each fix went, and the skill as it was filed, in the five parts. Read it before
your first live run. It is the standard because the person read the second output and
said it was what she would have written, and because nothing in the filed skill is a
general instruction.

## Edge cases

- **They cannot name a best example.** Go and look. Open the folder where the outputs
  live and read three. Pick the one they react to. Never proceed without a real example;
  it is the highest-value part and the first thing cut when the room runs late.
- **The task turns out to be judgement all the way down.** Reading a room, pricing a
  one-off, deciding whether a client is worth keeping. It goes on the not-suitable pile,
  said out loud, with the reason. A skill that pretends to do this is worse than none.
- **Two people do the same task differently.** Extract both. Where they agree, that is
  the procedure. Where they differ, that is either an edge case or a decision the firm
  has not made, and the second kind goes to the owner rather than into the skill.
- **The live case has no clear answer.** Good. That is the edge case the skill needed.
  Write down what the person did and why.
- **A test case reaches the never line.** Stop the run, show the case, and ask the
  person named in the frame. What they decide becomes an edge case in the skill.
- **The session runs out of time mid-extraction.** Write what exists to the role map
  with the status "partial", name the next question, and stop. Never finish by guessing.
- **The person asks to see the form.** Show them the finished skill, not the template.
  The template is the tool, and handing someone the tool changes what they say.
