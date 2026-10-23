# Claude plugins for {{CLIENT_NAME}}

Built and maintained for {{CLIENT_NAME}} by IgniteAI Solutions. This repository is
where every fix and update to your Cowork plugin lands, so each seat pulls the new
version from here rather than waiting for a zip by email.

## What is in it

| Plugin | Version | What it does |
|---|---|---|
| `{{CLIENT_SLUG}}-cowork-setup` | 0.3.0 | Sets a seat up on Claude Cowork and keeps it improving: `/build`, `/twin`, `/guide`, `/end`, `/audit`, `/health`, `/mot` and the five starter skills. Then builds the business's knowledge base in place with `/ember-setup`: governed, linked by section, refreshed weekly, client material anonymised through `/release` before it goes public. Drafts only, never sends. |
| `multiplayer-ai-starter` | 0.1.1 | Optional. A system that knows what is going on in the business and keeps every person informed: progress, actions, next steps. Moves a team from people using AI on their own to agents working as shared teammates: find the repeats, tool or teammate, a readiness check, then a 30-day pilot with a roster, a north star, a first visible job, rubrics, a trust ladder and a weekly retro. Advises, never enforces. |

The user guide for the person at the seat is `plugins/{{CLIENT_SLUG}}-cowork-setup/README.md`,
with a printable copy in `plugins/{{CLIENT_SLUG}}-cowork-setup/docs/`. The knowledge base has
its own guide, `plugins/{{CLIENT_SLUG}}-cowork-setup/docs/knowledge-base-guide.md`.

## Installing

Add this repository as a plugin marketplace, then install `{{CLIENT_SLUG}}-cowork-setup` from it.

- Marketplace: `{{CLIENT_REPO}}`
- Plugin: `{{CLIENT_SLUG}}-cowork-setup`

From Claude Code the same install is one line:

```
/plugin install {{CLIENT_SLUG}}-cowork-setup --marketplace {{CLIENT_REPO}}
```

Before installing from here, uninstall any copy that came as a `.plugin` or `.zip` file,
so a seat never runs two builds at once. `/health` reports the version a seat is running.

## Updating

Every release bumps the version in `plugins/{{CLIENT_SLUG}}-cowork-setup/.claude-plugin/plugin.json`
and adds an entry to `CHANGELOG.md`. Update the marketplace, then update the plugin, and
run `/health` to confirm the new version number is the one loaded.

## Reporting a problem

Tell {{CLIENT_CONTACT}} first, at {{CLIENT_CONTACT_EMAIL}}. {{CLIENT_CONTACT}} passes it to
IgniteAI, and the fix comes back here with a version bump and a changelog line naming what
was reported and when.
