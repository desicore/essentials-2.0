# Courses — sub-module research prompts

One prompt per sub-module. Run each in its **own chat** in the `essentials-2.0/monrovia` workspace with **Fable** as the model. Paste the whole `NN-*.md` file as the first message. The chat stops on its own when the report is written; review, then start the next one.

| Order | Prompt | Why this order |
|---|---|---|
| 1 | `09-announcements-send-materials.md` | Highlighted on the module map; most uncertain (Canvas hand-off, shareable link). Also the best test of the pipeline on a new module. |
| 2 | `07-share-with-participants.md` | Learner Portal entry point; overlaps 09, so run it second to catch duplication early. |
| 3 | `10-simulation-dates-calendar.md` | Invitations + calendar; pairs with 06. |
| 4 | `06-events.md` | |
| 5 | `04-learner-groups.md` | Builds on the finished user-management module. |
| 6 | `05-scenarios.md` | |
| 7 | `08-recordings-course-reports.md` | Touches AI video annotation / chapterization. |
| 8 | `02-files-links-media.md` | |
| 9 | `03-skills-competencies.md` | |
| 10 | `01-objectives-outcomes-requirements.md` | Most conventional; fine to do last. |

Prompts are generated: `_headers/NN-*.md` (sub-module specific) + `_shared-block.md` (process, pipeline, deliverables). To change the process for all ten, edit `_shared-block.md` and re-run:

```sh
cd courses/_prompts
for h in _headers/*.md; do n=$(basename "$h" .md); slug="${n#*-}"; { cat "$h"; echo; sed -e "s/NN-<slug>/$n/g" -e "s/<SUB-MODULE>/$slug/g" _shared-block.md; } > "$n.md"; done
```

Each run produces `courses/NN-<slug>.html` (self-contained, images embedded) and `courses/NN-<slug>/` (references.json, assets, notes). The merge pass across all ten happens after review, in a separate chat.

Prerequisites checked on 2026-09-11: Mobbin MCP is available in every workspace; Refero is reached through `userflow-patterns--user-mgmt/inspiration/scripts/refero-mcp.mjs` (bearer token inside); `fetch-assets.mjs`, `merge-references.mjs` and `build-report.mjs` need no npm install (`sharp` is only for crop/WebP conversion later).
