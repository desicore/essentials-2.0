# Flow-gallery prompts (modules 03–09)

Product-first inspiration research for the remaining Essentials 2.0 modules. There is one Cursor prompt per module, and each run produces one offline, searchable HTML gallery.

| # | Module | Prompt | Report |
|---|---|---|---|
| 03 | Scenario manager | `../03-scenario-manager/_prompt.md` | `../03-scenario-manager/03-scenario-manager.html` |
| 04 | Recording (vs. current SRV) | `../04-recording/_prompt.md` | `../04-recording/04-recording.html` |
| 05 | Inventory (low priority, lean) | `../05-inventory/_prompt.md` | `../05-inventory/05-inventory.html` |
| 06 | Scheduling | `../06-scheduling/_prompt.md` | `../06-scheduling/06-scheduling.html` |
| 07 | Reports | `../07-reports/_prompt.md` | `../07-reports/07-reports.html` |
| 08 | Debrief / Review | `../08-debrief-review/_prompt.md` | `../08-debrief-review/08-debrief-review.html` |
| 09 | Mobile / iPad app | `../09-mobile-ipad/_prompt.md` | `../09-mobile-ipad/09-mobile-ipad.html` |
| 10 | Dashboard (home) | `../10-dashboard/_prompt.md` | `../10-dashboard/10-dashboard.html` |

`../index.html` links every built gallery plus the earlier Courses and User-management reports. It is rebuilt at the end of each run.

## How to run one module in Cursor

1. Open `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek` in the Cursor desktop app. The subagents live in `.cursor/agents/` of that folder.
2. Make sure the Mobbin and Refero plugins are enabled.
3. Start a **new Agent chat**, set the model to **Opus 5.5**, and send:
   `Run @inspiration/<NN-slug>/_prompt.md`
4. Use one chat per module. Suggested order: **04 Recording → 08 Debrief → 09 Mobile/iPad** (they share the SRV baseline and seams), then 03, 06, 07, and 05 last.

**Subagent models:**
- `gallery-fetcher` runs on `claude-haiku-4-5`.
- `gallery-annotator` runs on `claude-sonnet-5-5`.

If Cursor shows a different model for them, fix the `model:` line in `.cursor/agents/*.md` using the ID from Cursor's model picker.

## Editing the prompts

`_prompt.md` files are generated. Edit `headers/<NN-slug>.md` (module-specific: jobs, baseline, seams, seed products) or `shared-block.md` (run model, pipeline, rules; shared by all), then run:

```
node /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/_flow-gallery/make-prompts.mjs
```

## Pipeline pieces

- Data contract: `../userflow-patterns--user-mgmt/inspiration/gallery-schema.md`
- Builder: `../userflow-patterns--user-mgmt/inspiration/scripts/build-gallery.mjs` (`--list`, `--check`, build) and `build-gallery-index.mjs`
- Download: `fetch-assets.mjs` (unchanged, shared with the earlier modules)
- Image compression needs `sharp`: run `npm install` in `../userflow-patterns--user-mgmt/` (already done in this checkout).
