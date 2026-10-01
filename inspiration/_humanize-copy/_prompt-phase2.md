# Plain-language rewrite, Phase 2: Courses and User management reports

You are the orchestrator (Opus 5.5). Rewrite the visible copy of the **older** inspiration reports so a stakeholder who is not a designer or developer can read them. Do not change what the reports say. Change how they say it.

## Already done: do not touch

Phase 1 is finished and approved. The 8 product-first reports `03-scenario-manager` … `10-dashboard` are rewritten, verified and rebuilt (see `_humanize-copy/report.md`). **Do not open, edit or rebuild anything in those 8 module folders, `build-gallery.mjs`, or `backup/03-*` … `backup/10-*`.** The only file shared with Phase 1 that you may change is `inspiration/index.html` (via `build-gallery-index.mjs`, see below).

## Your scope

| Report (what stakeholders open) | Sources |
|---|---|
| `courses/01-objectives-outcomes-requirements.html` … `courses/09-announcements-send-materials.html` (9 reports) | `courses/NN-slug/references.json`, `courses/NN-slug/synthesis.html` or `synthesis.json` |
| User management R1: `userflow-patterns--user-mgmt/inspiration/share/02-R1-access-roles-sharing.html` (+ `access-sharing/report.html`) | `access-sharing/references.json` |
| User management R2: `share/03-R2-university-identity-directory-sync.html` (+ `university-identity/report.html`) | strings in `university-identity/scripts/build.mjs` and that folder's own `scripts/build-report.mjs`, plus the card JSONs `build.mjs` reads |
| User management shortlist: `user-manager-shortlist.html` + `share/01-user-manager-shortlist.html` | `shortlist-data.json` (must be copied in first, see below) |
| `inspiration/index.html` | hard-coded strings in `build-gallery-index.mjs` |

All paths are under `INSP=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration`. These files are tracked in git, and `git diff` shows your changes. Do not commit, stash or checkout.

## Reuse what Phase 1 built

- **Rules:** `_humanize-copy/style-guide.md` (including "Lessons from the pilot"), `_humanize-copy/glossary.md`, and the humanizer patterns in `/Users/danielbrassnyo/.claude/skills/humanizer/SKILL.md`. These are approved: follow them as they are, and add to the glossary only if you find new jargon.
- **Tone model:** the finished `04-recording/04-recording.html` and its `work/module.json`. The Phase 2 text should read the same way.
- **Agent brief:** adapt `_humanize-copy/brief.md` into `_humanize-copy/brief-phase2.md` for these sources (fields: report `title`/`intro`, question `title` + `answer`, each reference's `title` and `take`, synthesis prose). Keep its "read first" list and its rules.
- **Verifier:** extend `_humanize-copy/verify.mjs` with a separate mode (for example `verify.mjs phase2 <report>|all`) without changing how the Phase 1 modes behave, and check that `verify.mjs all` still passes for 03–10. It fails if any of these change:
  - in `references.json`: the report's ids, question ids, the `question` of each reference, the `images` arrays, `kind`, `source`, `url`, `counter_example`, or the number of questions or references
  - in the synthesis files: the number of headings, list items or links
  - in any report: the `<img>` count

  It also flags long sentences, banned words and unexpanded abbreviations, like Phase 1.
- **Backups:** before editing, copy each report's editable sources into `_humanize-copy/backup/phase2/<report>/`, keeping their paths. Keep them apart from the Phase 1 backups.

## How each report is rebuilt (tested already)

Each report was rebuilt into a scratch folder before this prompt was written, and the rebuilds came out **byte-identical** offline. The exact commands, the map of where each piece of text lives, and the gotchas are in:

- `_humanize-copy/phase2-recon/courses-01-03.md`
- `_humanize-copy/phase2-recon/courses-04-06.md`
- `_humanize-copy/phase2-recon/courses-07-09.md`
- `_humanize-copy/phase2-recon/user-mgmt.md`

Read the relevant file before touching a report, and use its recipe exactly. The recon rebuilt into `phase2-recon/tmp/` using patched copies of some scripts. You should run the **real** scripts, which write to the real report paths. Ignore `phase2-recon/tmp/`; it's scratch.

### Rule 1: never rerun a generator
Many modules have scripts that **write the copy into the sources from hard-coded strings**: `synthesise.py`, `synthesize.py`, `write-synthesis.py`, `annotate.mjs`, `annotate-cards.py`, `cut.mjs`, `extract-policy.mjs`, `merge-references.mjs`, `post.mjs header`, `fetch-assets.mjs`, and the Python builders in `university-identity/` (`build-documentation.py`, `build-library.py`, `build-mobbin.py`). Running any of them silently reverts the rewrite or needs the network. **Edit the sources directly. Only run the build step and the post-processor named in each recipe.** Put this rule, word for word, in every agent brief.

### Rule 2: post-processors that break if run twice
The post-processors for Courses 01, 03, 04, 05 and 08 edit the built report in place and fail or double-insert on a second run. Always run the base `build-report.mjs` step right before them, never the post-processor alone.

### Per-report notes

| Report | What to edit | Rebuild | Notes |
|---|---|---|---|
| Courses 01–09 | `NN/references.json`: report `title`/`intro`, question `title` + `answer`, each reference's `title` + `take`. Synthesis: `NN/synthesis.html` (02, 03, 04, 05, 06, 07, 09) or `NN/synthesis.json` (01, 08). | `node $PIPE/build-report.mjs NN/references.json --embed --assets NN/assets/manifest.json --out courses/NN-slug.html` (`--assets` takes the **manifest file**), then that module's post-processor. 05: `05-scenarios/scripts/build.sh`. 07: `finish-report.mjs`. | Headings hard-coded in `01/insert-synthesis.mjs` and `08/insert-synthesis.py` (including "Part A/B"): edit those strings in the script. **02:** six answers show raw ids like `[mobbin:uuid]` as text; replace each with the product name. **03:** edit `references.json` only (the stub intro is outdated). **09:** leave `annotate.json` as it is. |
| R1 | `access-sharing/references.json`: intro, 6 answers, 137 `take`s (about 4,350 words) | recipe in `user-mgmt.md`, then copy the result over `share/02-R1-access-roles-sharing.html` and `access-sharing/report.html` | The biggest job: split the takes across two agents by question. Only one agent writes the file at a time (agent A rewrites, then agent B); or have each agent return its rewritten takes and merge them yourself. |
| R2 | intro, question titles/answers, open questions and evidence gaps: strings in `university-identity/scripts/build.mjs`. Synthesis paragraphs and field labels: `university-identity/scripts/build-report.mjs` (not the shared one). Card text: the input JSONs. | `university-identity/scripts/build.mjs`, then copy to `share/03-R2-university-identity-directory-sync.html` | First confirm which JSONs `build.mjs` **reads** and which it **writes** (it rewrites some tracked JSON and bumps `generatedAt`). Edit only the ones it reads, then rebuild and confirm the edits survived. |
| Shortlist | `shortlist-data.json`. It is not in the repo. Copy it from `/Users/danielbrassnyo/conductor/archived-contexts/essentials-2.0/team-management-research/user-manager-shortlist/shortlist-data.json` to the path `build-shortlist.mjs` expects (see `user-mgmt.md`) **before** backing up, then edit the copy. | `build-shortlist.mjs` rebuilds `user-manager-shortlist.html`. `share/01` can't be rebuilt offline (its Python builder downloads images). **Patch `share/01` with a small script:** map each old string to its new one from the JSON diff, replace text nodes only, never touch `data:` URIs, and check that the `<img>` count is unchanged and the file size stays within ±2%. | "Next step" reads `meta.nextStep`, but the JSON has `nextStep` at the top level, so the section may render empty. If it does, fix that one lookup and say so in the report. Leave `user-manager-shortlist.md` (hand-written). |
| Index | heading, intro and table headings in `build-gallery-index.mjs` | `node $PIPE/build-gallery-index.mjs $INSP` | The Phase 1 gallery rows must come out unchanged. If it's a small change, show the Courses and User management links with readable names (for example "Courses: Share with participants" instead of "courses · 07-share-with-participants"). |

`PIPE=$INSP/userflow-patterns--user-mgmt/inspiration/scripts`

### Shared page labels (do this once, first)
`$PIPE/build-report.mjs` holds the labels of every question-based report ("Search references", "Selected only", "Reset filters", "Questions", "Counter-example", "View source ↗", the eyebrow). Change the visible text only, not classes or ids:
- "Counter-example" → "Example of what not to do"
- "references" → "examples" in visible text
- other labels: plain wording in the style guide

Add a "How to read this page" box under the intro, in the same style as the Phase 1 box but worded for these reports: the page is organised by question; each card is one example screen or sequence; click a card to enlarge it; use the filters to narrow down.

Rebuild Courses 01 to confirm nothing broke before handing out work.

Don't regenerate `share/user-management-inspiration-research.zip` or `share/verify/*.png`. Note in the report that the zip still holds the old wording.

## Agent plan

1. **You (Opus):**
   - Read the four recon files and the Phase 1 style guide.
   - Copy in `shortlist-data.json`, back up the sources and extend `verify.mjs`.
   - Write `brief-phase2.md` and change the shared labels.
2. **Smoke test (1 Sonnet 5.5 agent): Courses 01.** Rewrite, rebuild, then run `verify.mjs phase2 courses-01` and compare the `<img>` count. If it passes and reads like the Phase 1 reports, carry on. No need to stop for the user; the style is already approved.
3. **Roll-out (Sonnet 5.5, up to 4 at a time):** one agent per Courses module (02–09), two for R1 (see its note), one for R2, one for the shortlist. Each agent owns only its report's files and rebuilds its own report.
4. **Checks (Haiku 4.5, 1 agent):** run `verify.mjs phase2 all`. Fix only what it flags; report anything uncertain without guessing.
5. **You:**
   - Read every report's intro, question answers and synthesis yourself.
   - Rebuild the index.
   - Open one Courses report, R1 and R2 in the browser: confirm images render and the synthesis blocks are there. Save screenshots to `_humanize-copy/phase2-*.png`.

## Done when

- All 9 Courses reports, R1, R2, both shortlist files and the index are rebuilt with the new wording.
- `verify.mjs phase2 all` passes, and `verify.mjs all` (Phase 1) still passes.
- The `<img>` counts are unchanged. Courses 01–09: 38, 62, 54, 44, 87, 184, 57, 61, 125.
- No generator script was rerun, and no file in 03–10 changed.
- A **"Phase 2" section is appended to `_humanize-copy/report.md`**, with:
  - word counts before and after
  - 5 before/after pairs
  - the `nextStep` finding
  - anything you left technical on purpose, and why
- Nothing committed. Tell the user it's ready for review.
