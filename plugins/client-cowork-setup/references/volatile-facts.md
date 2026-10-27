# Facts with a shelf life

Everything in this plugin that goes stale lives here, with the date it was checked.
Nothing else in the plugin restates any of it; other files point here. Two copies of a
fact drift apart, and then neither one can be trusted.

**Re-verify this file against a live install before every build day.** It is the file
that goes stale fastest, and a trainer reading a wrong button name in front of ten
people loses the room.

Sources are named per section. Where a line says Academy, it was read from the Claude
Academy corpus on 28-08-2026 and paraphrased rather than quoted, deliberately. See the
licence note at the foot of this file.

## Models

Verified 18-10-2026 from Anthropic's models overview page,
`platform.claude.com/docs/en/about-claude/models/overview`.

| Model | What it is for | Cost against Opus 5.5 |
|---|---|---|
| Fable 5.1 | The hardest reasoning and long, many-step jobs, when Opus 5.5 at high effort has fallen short | About two and a half times |
| Opus 5.5 | Anthropic's recommended starting point: planning, judgement, anything a client or a manager will read | The benchmark |
| Sonnet 5.5 | Doing the work from a clear brief: reading, drafting, comparing, summarising | About half |
| Haiku 5.5 | Quick checks, simple lookups, sorting and extraction | A small fraction |

Fable 5, Opus 5, Sonnet 5, Haiku 4.5 and every 4.x model are now listed as legacy. A
skill, guide or setting that names one of them is stale and gets corrected on sight.
`skills/sub-agent/SKILL.md` routes work by this table and reads it from here.

## Permission modes, Cowork

Academy, *Setting up Claude Cowork*, 28-08-2026. There are **two**, and these are their
names:

1. **Ask before acting.** The default. Claude pauses for approval before anything that
   reaches the outside world: sending email, posting a message, sharing a file.
2. **Act without asking.**

**Not found on screen, 13 October 2026.** On a Mac seat running the current desktop app,
neither the permission-mode choice above nor the in-app writing-voice setting could be
found where earlier builds put them. Treat both locations as unverified until someone
finds them on a live install and writes the path here with the date.

Constant across both: permanent file deletion always prompts, and that prompt cannot be
turned off in either mode.

**The three-mode set belongs to a different surface.** Ask, Code and Plan are the
interaction modes of the Code tab in the desktop app. Material giving Cowork three
permission modes has confused the two, and that is where our own contradiction came
from.

## Effort

For **Cowork and Chat** the Academy names no levels at all. It describes a default and
the option of moving one level lower. **Do not hard-code Low, Medium, High, Max for
Cowork.**

Its rule is worth carrying. Where the temptation is to drop to a cheaper model to stay
inside limits, lower the effort on the frontier model instead. A frontier model at
medium tends to beat an older model at maximum.

For **Claude Code**, a different surface, the settings key is `effortLevel` and the
documented values are low, medium, high and xhigh, while the same page's worked example
runs an effort flag set to max. That page contradicts itself, so treat xhigh as settings
vocabulary and max as flag vocabulary, and present neither as the one true name.

## Skill governance, the three toggles

Academy scaling guidance, 28-08-2026. They live under **Org Settings, Skills**, and the
Academy **states no plan restriction on them**. Our earlier note that they may be
Enterprise only is unsupported, so do not assert it.

| Posture | User-created skills | Skill sharing | Share with organisation |
|---|---|---|---|
| Admin curated | Off | Off | Off |
| Guided creation | On | On | Off |
| Fully open | On | On | On |

**Guided creation** is the Academy's recommendation for most teams, and it is this
plugin's default.

Two limits that change what a client can be promised: governance posture does not
control connector access, and connectors are org-wide on or off with no per-team
scoping. RBAC governs capability access rather than skill sharing.

## Connectors

Academy, 28-08-2026. Two gates. An admin enables the connector across the organisation,
then **each person authorises their own**. Claude reaches only what that person could
already reach. There is no per-group connector control.

Many connectors, the default Google Drive and M365 among them, are read and search only.
Others can create and edit. Check which before promising a client a write.

## Plugin distribution

Academy, 28-08-2026.

- Three admin states: **Available** (visible in the Directory, people install it if they
  want it), **Installed by default** (present on open, can be turned off), **Required**
  (installed and stays on).
- A plugin someone installs themselves **lives on that machine** and does not follow the
  account to other devices, remote sessions included.
- Organisation-provisioned plugins **re-sync over local edits**. A client who edits a
  provisioned plugin loses the edit.
- Teammates receiving a shared plugin can use it and turn it off, but cannot edit it.
  Updates flow from whoever maintains it.

## Plans

Verified 28-08-2026.

- Claude for Teams: minimum 2 seats, maximum 150. Material saying minimum 5 is out of date.
- Cowork with plugins: all paid plans, macOS and Windows, Linux in beta.
- Skills: Pro, Max, Team, Enterprise.
- Admin dashboard: Team and Enterprise. Analytics API: Enterprise only.
- Audit logs do not cover Cowork yet, which matters for any client under a regulator.

## SKILL.md limits

Academy, *Configuration and multi-file skills*, 28-08-2026.

- `name`: lowercase, numbers and hyphens, 64 characters maximum, matching the directory.
- `description`: what it does and when to use it, 1,024 characters maximum. This is the
  field matching runs against, so it carries the trigger phrases.
- Optional: `allowed-tools`, `model`, `effort`.
- Keep SKILL.md under 500 lines. Detail goes to `references/`, executables to `scripts/`,
  templates and images to `assets/`.
- Only names and descriptions load at startup. Matching is semantic.
- Name collisions resolve Enterprise, then Personal, then Project, then Plugins. **A
  plugin skill loses to a personal skill of the same name**, which is why every skill
  here carries a distinct, prefixed name rather than a generic one.

## Plugin manifest

Academy, *Plugins* lesson, 28-08-2026. `name` is the only required field, and it
namespaces the plugin's skills. Components are discovered by directory convention, so
the manifest is otherwise optional. Version it like any dependency, because that is what
makes updates trackable across a team.

## Node.js minimum versions

Verified 27-10-2026 from `nodejs.org/dist/index.json`, the security release of
20-10-2026.

| Line | Lowest safe version |
|---|---|
| 22 | 22.23.4 |
| 24 | 24.22.1, the one to recommend |
| 26 | 26.12.1 |

Every other line from 26 down gets no security fixes. `hooks/node-version-check.js` holds
the working copy of this table, so change both together. Re-check at every Node.js
security release.

## Still open

| Fact | Why it is open |
|---|---|
| Usage ratio for a Cowork session against a standard chat | Carried as roughly 20x in older material, never confirmed, and absent from the Academy corpus |
| Team sharing of Projects | Written when Cowork Projects were local-only. Needs re-reasoning rather than a word swap. Chris to decide |
| Screens and buttons | Deliberately empty. Click paths move faster than anything else here, and a stale one loses a room. Fill this in on the morning of a build, from the screen |

## Licence note

The Academy corpus is Anthropic's copyrighted courseware. Teaching their frameworks is
one thing and reproducing their lesson prose inside a commercial deliverable is another.
Everything above is paraphrased for that reason. Before this plugin ships to a paying
client, confirm the position under the Partner Network agreement. The same question
applies to the carried voice interview, which derives from a named third party.
