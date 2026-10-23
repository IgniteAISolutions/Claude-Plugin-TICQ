# The governance bridge

A knowledge base is a store of business information, and some of it is personal data.
Ember is governance-first: the rules about what goes in, who sees it and what leaves
come before the build, and where the client already has governance, the knowledge base
inherits it rather than inventing its own.

## Step 1: find what exists

`/ember-setup` looks before it asks. In the working folder and the linked storage it
looks for:

| What | Usually named | What Ember takes from it |
|---|---|---|
| An AI policy | "AI policy", "acceptable use of AI" | Approved tools, data that may not go near an AI tool, who approves exceptions |
| A DPIA | "DPIA", "data protection impact assessment" | Data categories processed, lawful basis, retention, who the controller's contact is |
| An AI manifesto | "AI manifesto", "how we use AI" | The human rules: what people decide, what Claude never does |
| An enforcement rule pack | a governance plugin installed on the seat, or a rule pack file | The rules already enforced, so Ember never contradicts them |
| A data protection policy or privacy notice | "privacy", "data protection" | Retention periods, subject rights contact |

It reads each one it finds, says which it found and which it did not, and quotes the rules
it will apply. A document it cannot open is reported as found and not read.

## Step 2: apply what it found

Stricter wins, line by line:

- **What never goes in.** The client's prohibited data is added to
  `<policies>/what-never-goes-in.md`. Ember's own list stays as the floor.
- **Sensitivity.** Each data category in the DPIA or policy is mapped to `internal`,
  `leadership` or `confidential`, and the mapping is written into `map.md`. A category the
  client's documents restrict to named people is `confidential`.
- **Retention.** Where the client sets a retention period, `review_after` on person and
  company pages is never later than it, and `/lint --monthly` proposes archiving any page
  past it.
- **Publishing.** The client's rules on publishing or referencing clients are applied by
  `/release` wherever they are stricter than the gate.
- **Tools.** Where the AI policy lists approved tools, setup checks that the storage, the
  connectors and Obsidian are on the list, and reports any that are not.
- **Access, set in the tool.** Every connector Ember only reads (~~email, ~~calendar,
  ~~meeting notes, ~~accounting, ~~CRM) is set to read-only in the connector's own
  permissions, wherever the tool allows it. A rule saying "never send" is a request; a
  connector that cannot send is a control. ~~file storage is the one exception, because
  the vault lives there and Ember edits cards in place; its write access is scoped to the
  working folder where the tool allows. Each slot's access is written in
  `connections.md`: read-only, read-write with the reason, or "cannot be restricted in
  this tool", which goes in the setup review as a risk for the owner.

## Step 3: tell the governance owner

Building a knowledge base is a new processing activity. Setup drafts, and never sends, a
short note to the person who owns the client's governance, naming: what the knowledge
base holds, where it is stored, who can see it, what never goes in, how long personal
data is kept and how it is reviewed. The note asks them to add the knowledge base to the
DPIA or record of processing. It is filed in the client's policies folder as a draft and
listed in the setup report.

## When there is no governance

Ember ships basic governance so a small business is never left without it:

- `<policies>/ai-use.md` and `<policies>/what-never-goes-in.md`, filled from three questions in
  the setup interview: what personal data goes in, who can see it, what never goes in.
- `sensitivity` defaults to `internal`, and person pages to `leadership`.
- Personal data is limited to names, business contact details and what was bought or
  agreed. Anything beyond that (health, payroll, identity documents, financial account
  details, anything in a special category) stays out of the vault until the business has
  done a full governance step, and the skills say so and stop. Once it has, the limit
  becomes what its DPIA allows, recorded line by line in `map.md` under Sensitivity, and
  setup is re-run for that section only.

## The plan the account is on

Where client or confidential material goes into the vault, setup asks which Claude plan
the seat is on and how its data-use setting is set, and records the answer in `map.md`.
Business plans carry contractual terms on training use; individual plans have their own
privacy setting. Setup does not assert either from memory: it asks the person to read
the setting off their screen, and if confidential client material is going in on an
individual plan, it says so in the setup report as a risk for the owner to decide.

## The never list, the floor

Whatever the client's documents say, these never go into the vault:

- Passwords, API keys, tokens or any login.
- Card numbers, bank account details, sort codes.
- Government identity numbers, passport or driving-licence details.
- Health information about any person.
- Payroll and individual pay.
- Anything a person gave in confidence and would not expect written down.

A source holding any of these is not captured until a copy without them is supplied.
