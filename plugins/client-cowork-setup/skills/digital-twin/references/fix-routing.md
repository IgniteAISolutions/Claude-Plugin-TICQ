# Where a fix goes

When the skill's output misses, the fix belongs to one of the five parts. Putting it
anywhere else turns the skill into a wall of instructions arguing with itself, and by
version six it performs worse than version one.

| What went wrong | Fix goes to | Example of the fix |
|---|---|---|
| Too long, too short, wrong shape | Quality criteria | "Under 200 words." "Three sections, in this order." |
| A section it always omits | Procedure | Add the step, with the reason it exists |
| It started writing before reading everything | Procedure | "Read the whole source before writing anything" as step 1 |
| Could not find what it needed | Procedure, before you start | Name the file and where it lives |
| Wrong tone, wrong register, does not sound like them | Example | Replace or add the real example; do not add adjectives to the criteria |
| Mishandled an odd input | Edge cases | Name the input and say what to do |
| Confident where the data was thin | Edge cases | "If the data is thin or weak, say so plainly" |
| Two sources disagreed and it picked one silently | Edge cases | "Acknowledge the conflict and say which is better supported" |
| Did something it should have asked about | Edge cases, and the never line in Purpose | "Stop and ask <name>", and check the tier |
| Fired when it should not have, or did not fire | Purpose | Add or remove the words in the description |
| Saved to the wrong place, wrong name | Quality criteria, where it goes | Name the folder and the filename pattern |
| Kept polishing after it was finished | Quality criteria, done means | State the stop condition |

Two rules underneath the table.

**One miss, one rule, one part.** Never fix a miss by adding a paragraph. Find the part,
add the smallest rule that closes the gap, run again.

**A rule that closes a miss and nothing else.** If the rule would also stop something
the person wanted, it is the wrong rule. Ask what distinguishes the case that failed
from the case that should pass, and write that distinction down.
