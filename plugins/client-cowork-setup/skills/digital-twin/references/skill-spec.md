# The five parts of a skill

Every skill this builder produces has the same five parts, in the same order. They are
the frame the person is coached through, though never as a form: the questions are
about the job, and the parts fill in behind them. Once the skill exists, the five
headings are what the person sees, and the five headings are where every later fix
goes.

| # | Part | What it holds | Where it comes from in the interview |
|---|---|---|---|
| 1 | Purpose | What the skill is for, the words that make it fire, and what it must never do without asking | "What makes you think 'right, I need to do this'?", the name they use for the task, and the tier from the frame |
| 2 | Procedure | What has to be open before starting and where it lives, then the steps in the order an expert works, each one guarding against a named failure | "What do you open first?", the walk of the live case, then "what goes wrong when that step is skipped?" |
| 3 | Quality criteria | Testable standards the output must meet, ending with where it goes and what done looks like | "What would make you look at it and think 'no, that's wrong'?", the never list, "Where does it go and who picks it up?", "How do you know it is finished?" |
| 4 | Example | One real artefact the person named as their best, and why it is the standard | Opened from their files, never described |
| 5 | Edge cases | What to do when the input is thin, contradictory or missing something, and when a case reaches a line that needs a yes | "Tell me about the time this went badly", the live case that had no clear answer, the firewall in `CLAUDE.md` |

## The four things a client skill also needs, and where they live

A skill written for one person at home needs the five parts. A skill that runs inside
an organisation needs four more things, and each has a home inside the five rather
than a heading of its own. Keep them there. A skill with nine headings reads as a
form, and a form gets filled in rather than thought about.

- **Inputs** open the Procedure. "Before you start" is step zero: what has to be in
  front of you, and where each thing lives.
- **Destination** closes the Quality criteria: the format, the filename, the folder,
  who reads it and in what tool they finish it. Wrong folder is a failed criterion
  like any other.
- **Done** is the last quality criterion. It is the stop condition, so the skill
  finishes rather than polishes.
- **Authority** appears twice. The never line sits in the Purpose, where the
  description carries it into every run, and the Edge cases say what to do when a
  case reaches that line: stop and ask the person named in the frame.

## What good looks like in each part

**Purpose.** Two sentences and a never line. The job, then the firing words in the
person's own vocabulary, then what it does not do without asking. Most homemade
skills carry only the first sentence, which is why they sit in the library and never
fire.

**Procedure.** A sequence engineered against failures, not a description of the task.
"Read the whole source before writing anything" exists because people draft from the
first two pages. Each step should be able to say what it prevents.

**Quality criteria.** If it cannot be checked, it is not a criterion. Under 200 words.
No passive voice in the first sentence. Every claim traceable to the source. Saved to
the client folder under the date-first name. Those pass. "Keep it tight" does not.

**Example.** Rules are a lossy compression of judgement. They keep the constraints and
lose the feel. One real example restores what the rules lost: rhythm, restraint, what
"tight" means in this firm's documents rather than in general.

**Edge cases.** Where integrity gets encoded. "If the data is thin, say so plainly
rather than papering over it" is an honesty rule, and the edge cases are where the
skill is told to say the uncomfortable sentence, and where it is told to stop and ask.

## The written shape

```
---
name: <task-name>
description: <what it does>. Triggers on <their words for it>. Never <the authority line>.
effort: <low|medium|high>
---
# <Task name>

## Purpose
What it is for. The words that make it fire. What it never does without asking.

## Procedure
Before you start: what must be open, and where it lives.
Then the steps, in the order the person works, each with the failure it prevents.

## Quality criteria
Testable standards, one per line.
Where it goes: format, filename, folder, who reads it, in what tool.
Done means: the stop condition.

## Example
Link to the real file, and why it is the standard.

## Edge cases
What to do when the input is thin, sources disagree, something is missing.
What to do when a case reaches the never line: stop and ask <name>.
```

## The loop that follows

A skill is not finished when it is written. It is finished when it has run on a live
case, missed, been corrected in the one part that produced the miss, and run again
clean. `fix-routing.md` says which part each kind of miss belongs to.
