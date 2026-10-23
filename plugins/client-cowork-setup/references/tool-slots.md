# Tool slots and the connections record

Skills never name a product. They name a slot, and `System/Ember/connections.md` says
which tool fills it. Setup writes it, copying what `/settings` already recorded
about the seat's connectors in `System/settings-record.md` and adding what Ember needs.

| Slot | Typical tools | Ember uses it for |
|---|---|---|
| ~~file storage | OneDrive or SharePoint, Google Drive, Dropbox | Holds the working folder; must pass the rewrite test |
| ~~email | Outlook, Gmail | `/refresh` reads the week's client threads for sources |
| ~~calendar | Outlook Calendar, Google Calendar | `/refresh` reads which meetings happened; dates are never stored as facts |
| ~~meeting notes | a notetaker, or transcripts saved into the folder | `/refresh` captures transcripts as sources |
| ~~accounting | the business's accounting system, or an export saved into Finance | `/lint --monthly` checks money pages against it; figures are never copied |
| ~~CRM | the business's CRM, or a sheet | `/lint --monthly` checks people and company pages against it |

## The record

```
| Slot | Tool | Linked on | Proven by | Ember may | Notes |
|---|---|---|---|---|---|
| ~~file storage | OneDrive | 2026-11-02 | rewrite test read back from a cloud run | read, write | cloud runs pass |
| ~~email | Outlook | 2026-11-02 | read the three newest subjects | read | sources proposed, not captured, without a yes |
| ~~accounting | none | | | | export monthly into Finance |
```

"none" is a valid answer and is written down.

## The rules every skill follows

1. Read `connections.md` first, before reaching for any tool.
2. A slot marked none is reported as "not checked: nothing linked for ~~slot", never as
   empty. An inbox that was not read has not been shown to be empty.
3. A slot whose tool fails (signed out, expired, refused) is reported the same way, with
   the error in plain words, and the skill carries on with what it can reach.
4. Never ask anyone to paste a password, key or token. People link tools themselves
   through Claude's settings.
5. The "Ember may" column is the limit. A tool recorded as read is never written to by
   Ember, even when the connector would allow it.
