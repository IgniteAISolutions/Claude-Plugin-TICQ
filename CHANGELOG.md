# Changelog

## 0.3.0, 23 October 2026

### Added

- **The knowledge base, Ember, folded into the setup plugin.** Eight skills (`/ember-setup`,
  `/capture`, `/compile`, `/ask`, `/ember-review`, `/lint`, `/refresh`, `/release`), a
  read-only `verifier` agent, the contract and references, and the vault, page, card,
  policy and Obsidian templates. One install. The worked examples use one invented
  business; no real client appears anywhere. `skills/`, `agents/`, `references/`,
  `templates/`, `commands/`
- **`/build` rolls into the knowledge base.** Twelve steps: step 10 walks the acceptance
  bar, step 11 runs `/ember-setup` once the check has passed, step 12 closes with `/end`.
  A later seat in the same firm takes a short path instead of the full interview.
  `skills/cowork-build/references/sequence.md`, `acceptance-bar.md`, `skills/ember-setup/SKILL.md`
- **A hook that refuses an unreleased write into a public folder.** A file in a
  `zone: public` folder must carry a release id recorded against that file; released
  wording changes only through a new release. Fails open. Tested with node against
  seventeen cases; not verified on Claude Code or Cowork. `hooks/release-gate.js`,
  `hooks/hooks.json`, `references/release-gate.md`
- **Runs fitted to the rhythm the owner already keeps.** Setup asks how they already
  review the week and the month; the weekly run lands an hour before their review and
  the monthly the working day before their sit-down. Friday 15:00 and the first weekday
  where they keep none. `skills/ember-setup/references/interview.md`,
  `references/ember-schedules.md`, `templates/system-ember/map.md.template`
- **Connectors set read-only in the tool.** Governance asks the person to read each
  connector's permissions off the screen and sets read-only where the tool allows; file
  storage keeps write, scoped to the working folder. What could not be restricted is a
  risk in the setup review. `references/governance-bridge.md`,
  `templates/system-ember/connections.md.template`
- **The lean check.** `/lint --monthly` measures Ember's own files and proposes, for old
  corrections, fold into a rule, turn into a skill candidate, or retire. `/ember-review`
  takes those and the archive proposals as an eighth source. `skills/lint/references/checks.md`
  (H6), `skills/ember-review/`
- **`/health` check 8f**, whether the knowledge base is being kept.
  `skills/cowork-health-check/references/check-matrix.md`
- **`docs/knowledge-base-guide.md`**, the guide to the knowledge base for the owner.

### Not done

- The Word guide, `docs/Cowork-User-Guide_v0.2.0.docx`, is not reissued and does not
  cover the knowledge base.
- No skill in this release has run on a live seat.

## multiplayer-ai-starter 0.1.1, 22 October 2026

### Changed

- **Positioning.** The plugin builds towards a system that knows what is going on in the
  business and keeps every person informed: progress, actions, next steps. It does not
  run the business; people decide. Said in the README, the manifest, the marketplace
  entry and `multiplayer-start`.
- **The team briefing** (`first-job-briefing`) always takes that three-part shape:
  progress, actions (who owes what, by when), next steps (including decisions a person
  needs to make). Worked example and quality criteria updated.

## multiplayer-ai-starter 0.1.0, 22 October 2026

### Added

- **A second plugin, `multiplayer-ai-starter`.** Twelve skills that take a team from
  single-player AI to a shared agent: `multiplayer-start` (the router), `find-the-repeats`,
  `tool-or-teammate`, `readiness-check`, `pilot-plan`, `team-roster`, `north-star`,
  `first-job-briefing`, `rubric-builder`, `trust-ladder`, `capture-the-method` and
  `weekly-retro`. One shared state file, `multiplayer-pilot.md`. Built on Anthropic
  Academy's *Building effective human-agent teams* and its blog post. Advises, never
  enforces: no stage gates, and choices to set advice aside are recorded rather than
  blocked. Worked examples use an invented company. `plugins/multiplayer-ai-starter/`

## 0.2.0, 18 October 2026

### Added

- **`/sub-agent`, a sixteenth skill.** Splits a wide job across sub-agents on lighter
  models, runs the independent parts at the same time, and checks every result before the
  person sees one answer. Every brief opens with a ROUTE line naming its model.
  `skills/sub-agent/SKILL.md`, `commands/sub-agent.md`
- **A hook that refuses a general-purpose sub-agent sent without a model.** Fails open.
  Verified on Claude Code; not verified on Cowork. `hooks/hooks.json`,
  `hooks/sub-agent-model.js`
- **The no-ai-slop standard.** Em dashes, dead AI words and phrases, filler transitions,
  hype, evasive verbs and the contrast trick are hard rules in every new voice profile,
  struck per person only where their samples show they write that way. They hold for
  everything written in the workspace, drafts and chat replies alike. `templates/voice-profile.md.template`,
  `templates/CLAUDE.md.template`, `skills/cowork-interview/references/voice-mining.md`
- **Size and done, before starting.** The CLAUDE.md template now asks how big the job is
  and what done looks like, stops when the work grows by half again, and treats pushback
  as a misread question. `templates/CLAUDE.md.template`
- **Every fact in a draft is sourced.** `/draft` names where each figure, date, name and
  agreed point came from, or marks it NOT VERIFIED.
  `skills/starters/cowork-draft-in-my-voice/SKILL.md`, `commands/draft.md`

### Fixed

- **Stale model names.** Corrected to the current lineup, checked against Anthropic's
  models page on 18 October 2026. `references/volatile-facts.md`,
  `skills/settings-pass/references/settings-list.md`,
  `skills/cowork-interview/references/voice-100q.md`
- **The user guide said fourteen skills.** There were fifteen; there are now sixteen.

## 0.1.0, 18 October 2026

Template baseline, derived from the 0.3.1 client build, 18 Oct 2026.
