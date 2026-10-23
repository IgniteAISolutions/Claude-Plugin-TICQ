# The link map

The link map says which kinds of folder and page must link to which, and why. It is what
turns a set of tidy folders into a graph that shows how the business fits together: which
offers each client bought, which decisions changed which prices, which suppliers an
operation depends on. `/lint` checks the required links every week, and a missing one is
reported as a gap, never filled in by guesswork.

The map below is generic. `/ember-setup` reads the real tree, matches each folder to a
kind, agrees the matches with the owner, drops kinds the business does not have, adds
kinds it does, and writes the result into `System/Ember/map.md`. From then on the copy in
`map.md` is the one every skill follows.

## The kinds

A kind is what a folder is about, decided by its routing test, never by its name. A
small business usually has most of these, under its own names.

| Kind | Usually found at | What it holds |
|---|---|---|
| Company | `The Business/` company and legal area | Who the business is, what it is for this year, its structure |
| Offers | `The Business/` offers or services area | What is sold, how it is priced, how it is delivered |
| Client | `Projects/<party>/` | One client or partner with an engagement |
| Pipeline | `The Business/` sales area | Named prospects with no engagement yet |
| People | `The Business/` team area, and person pages inside client folders | The team, and the people the business deals with |
| Operations | `The Business/` operations area | How the work gets done: processes, checklists, lead times |
| Suppliers | `The Business/` suppliers or partners area | Who the business buys from or works alongside, and on what terms |
| Finance | `The Business/` finance area | Pointers to the system of record, the rules for money. Never balances |
| Marketing | `The Business/` marketing area, `zone: public` where published | Content, campaigns, the website, case studies |
| Decisions | `The Business/Decisions/` | One page per decision: what, when, who, why, look-again date |
| Policies | `The Business/` governance or policies area | Standing rules, the AI policy, what never goes in |
| Library | `Library/` | Reusable material that names no party |

Ember's own files in `System/Ember/` are not a kind. They are never linked as a source.

## Required links

Each row is a rule `/lint` checks. "From" is the folder card or page that must carry the
link; "to" is what it must link to.

| # | From | Must link to | Why |
|---|---|---|---|
| L1 | Every client card | The offers it bought | Shows what each client has, and which offers carry the business |
| L2 | Every client card | Its person and company pages | Who the business deals with there |
| L3 | Every client card | Every decision page that names it | A decision about a client is found from the client |
| L4 | Every offer page | The pricing page that prices it | One price, in one place |
| L5 | Every offer page | The operations pages that deliver it | How the thing sold gets made |
| L6 | Every decision page | Every page or card it changed, and its source | A decision is followed to what it changed |
| L7 | Every operations page that depends on a supplier | That supplier's page | A supplier change is followed to the work it affects |
| L8 | Every policy page | The folders it governs | A rule is found from the folder it applies to |
| L9 | Every card at `leadership` or `confidential` | The policy that sets who may see it | Access is explained, never assumed |
| L10 | Every finance page | The system of record it points at, by slot | Money is always read from the live system |
| L11 | Every published case study | The offer it shows, by wikilink; and its release record, by id in `released:` and in words under `## Sources` (never a wikilink) | The trail for every published claim |
| L12 | Every Pipeline entry that becomes a client | The new client card, with the date | The move from prospect to client is on the graph |

## Forbidden links

These are reported every week as a fault, highest first, and never fixed by the skill on
its own: the owner decides.

| # | Link | Why it is forbidden |
|---|---|---|
| F1 | Any page or card at `zone: public` linking to anything private, apart from `<offers>` pages at `sensitivity: internal` | Puts a client's name, or something only the business should see, beside published work. An offer page describes what is sold and names no client, so a case study may point to it. Everything else runs from private to public only |
| F2 | One client's card or page linking to another client's | One client's material never sits in another's context |
| F3 | Any page citing a file in `System/Ember/` as a source, apart from a case study naming its release record | Working files are orientation, never evidence; the release record is the one exception, because it is the trail |
| F4 | A finance page holding a balance, an invoice amount or a bank detail | Figures stay in the system of record |

## How setup tailors it

`/ember-setup` asks, one question at a time:

1. Here is how your folders match the kinds. Is each one right?
2. Which kinds does the business not have? (They are dropped, with their rules.)
3. What else does the business keep that matters and is not on the list? (A new kind, with
   one required link the owner agrees.)
4. Which of your folders, if any, are published? (They become `zone: public`.)

It writes the agreed kinds and rules into `map.md` with the owner's name and the date,
and shows the graph colour for each kind.

## How the graph shows it

Obsidian colours nodes by path. Setup writes `.obsidian/graph.json` with one colour group
per kind, using the real folder paths from the agreed map, plus one for sources and one
for public folders. `About Me/`, `System/`, `Skills/` and `_archive/` are filtered out of the
graph, so the picture is the business and nothing else.
