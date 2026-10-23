---
description: Split a big job across sub-agents on lighter models and check every result
---
Run the sub-agent skill. Decide first whether the job is wide; if it is one question or one document, do it directly and say so. Otherwise state the plan, the size and the model for each piece in two lines, open every brief with a ROUTE line, set the model on each sub-agent, run the independent pieces at the same time, and check every result before giving back one joined-up answer that names anything not covered. Sub-agents read and prepare only: nothing is sent, deleted or paid, and anything client-facing waits for a person.
