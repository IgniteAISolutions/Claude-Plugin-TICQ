# Setting up a new client from this template

This repository is the baseline for every client Cowork plugin. It carries invented
placeholders only. "Use this template" plus the steps below gives a new client a working
plugin. Budget under an hour.

## The placeholders

| Placeholder | What goes in it | Example of the shape | Where it appears |
|---|---|---|---|
| `{{CLIENT_NAME}}` | The company name, as the client writes it | Northgate Advisory | `.claude-plugin/marketplace.json`, `README.md`, `plugins/client-cowork-setup/README.md`, `plugins/client-cowork-setup/docs/Cowork-User-Guide_v0.2.0.docx` (cover and footer) |
| `{{CLIENT_SLUG}}` | The company name in lowercase-hyphen form, used in the plugin name | northgate-advisory | `README.md`, `plugins/client-cowork-setup/docs/for-the-installer.md` |
| `{{CLIENT_CONTACT}}` | The named lead at the client: the champion people ask first | First name, or first and last | `README.md`, `plugins/client-cowork-setup/README.md`, `plugins/client-cowork-setup/skills/cowork-guide/SKILL.md`, `plugins/client-cowork-setup/docs/Cowork-User-Guide_v0.2.0.docx` (rules page and Who to ask) |
| `{{CLIENT_CONTACT_EMAIL}}` | The lead's work email | name@northgate.example | `README.md`, `plugins/client-cowork-setup/README.md`, `plugins/client-cowork-setup/docs/Cowork-User-Guide_v0.2.0.docx` (Who to ask) |
| `{{CLIENT_REPO}}` | The new client repository, owner and name | IgniteAISolutions/Claude-Plugin-Northgate-Advisory | `README.md` |
| `{{CLIENT_STORAGE_PATH}}` | The client's shared SharePoint, OneDrive or Google Drive folder that holds `The Business/` | the folder path as it appears on a synced seat | `plugins/client-cowork-setup/templates/CLAUDE.md.template` |

The square-bracket fields inside `plugins/client-cowork-setup/templates/`, such as
`[NAME]` and `[COMPANY]`, are a different thing. Leave them alone: `/interview` and
`/build` fill them per seat from the interviews.

The Word guide is binary, so a text search will not find its placeholders. Open it in
Word and use Find and Replace on each placeholder above.

## Setting up a new client, in order

1. **Use this template.** On GitHub, "Use this template", owner `IgniteAISolutions`,
   name `Claude-Plugin-<ClientName>`, private. Clone it.

2. **Fill the placeholders.** Replace every placeholder in the table above in every file
   it names, the Word guide included. Then confirm none is left:

   ```
   grep -rn "{{" --exclude-dir=.git . | grep -v TEMPLATE.md
   pandoc plugins/*/docs/*.docx -t plain | grep -n "{{"
   ```

   Both must return nothing.

3. **Rename the plugin.** Placeholders in a plugin name break the install, so the name is
   set by hand, in lowercase-hyphen form only:
   - Rename the folder `plugins/client-cowork-setup` to `plugins/<client-slug>-cowork-setup`.
   - In `plugins/<client-slug>-cowork-setup/.claude-plugin/plugin.json`, set `name` to
     `<client-slug>-cowork-setup`.
   - In `.claude-plugin/marketplace.json`, set the top-level `name` from `client-plugins`
     to `<client-slug>`, and set the plugin entry's `name` and `source` to the new
     folder name.
   - Every skill then appears as `<client-slug>-cowork-setup:twin` and so on. No skill
     file is renamed; the prefix comes from the plugin name.

4. **Set the licence ID.** This baseline carries no licence ID and no hidden per-buyer
   marker, so there is nothing to set and no two clients can ship the same one. If a
   licence ID or buyer marker is ever added to the baseline, add its placeholder to the
   table above and set a unique value here.

5. **Bump to 1.0.0.** Change `0.2.0` to `1.0.0` in:
   - `plugins/<client-slug>-cowork-setup/.claude-plugin/plugin.json` (`version`)
   - `.claude-plugin/marketplace.json` (both `version` fields)
   - `README.md` (the plugin table)
   - `plugins/<client-slug>-cowork-setup/README.md` (the version line under the title
     and the footer)
   - `plugins/<client-slug>-cowork-setup/docs/for-the-installer.md` (the heading)
   - The Word guide: the cover version line and the footer, then rename the file to
     `docs/<ClientName>-Cowork-User-Guide_v1.0.0.docx`. Its filename is named in five
     places; update every one to match:

     ```
     grep -rn "Cowork-User-Guide_v" --exclude-dir=.git . | grep -v TEMPLATE.md
     ```

     Today that is the plugin `README.md`, `docs/for-the-installer.md`,
     `commands/guide.md`, and two lines of `skills/cowork-guide/SKILL.md`.

   Replace the template line in `CHANGELOG.md` with a `1.0.0` entry for the client's
   first build, dated DD Month YYYY.

6. **Add the client as a collaborator.** Repository Settings, Collaborators, add
   `{{CLIENT_CONTACT}}`'s GitHub account with read access. Read is enough to add the
   marketplace and pull updates.

## Before shipping

- `grep -rn "{{" --exclude-dir=.git .` returns only this file.
- `plugin.json` and `marketplace.json` parse as JSON, and the marketplace `source` points
  at the renamed folder.
- Install from the new repository on one seat and run `/health`. It reports the version
  loaded; it must say 1.0.0.
- Run the client-isolation check against the new repository before the client is added.
