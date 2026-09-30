# Recon: User management reports (UM)

Paths: `B=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration`, `U=$B/userflow-patterns--user-mgmt/inspiration`.
Proof outputs: `$B/_humanize-copy/phase2-recon/tmp/user-mgmt/` (r1-report.html, r2-report.html, sl/, ui/, idx/, textdiff.py).
Text diff method: strip style/script, data: URIs, tags; collapse whitespace; diff lines. Every comparison below gave 0 diff lines and equal `<img>` counts. R1, R2, shortlist and index also rebuilt byte-identical (`cmp`).

Everything shipped is a git-tracked, committed copy. `share/02` is byte-identical to `access-sharing/report.html`, and `share/03` is byte-identical to `university-identity/report.html` (`cmp`).

## Key finding: shortlist data file is not in the repo

`<repo>/.context/user-manager-shortlist/shortlist-data.json` does not exist in the windhoek checkout or under `essentials-2.0/*` or `dev-projects/elevate/essentials-2.0`. The only copy is at
`/Users/danielbrassnyo/conductor/archived-contexts/essentials-2.0/team-management-research/user-manager-shortlist/shortlist-data.json` (39 KB, Sep 10). It is outside the repo and untracked.
The later job must either copy it back to `<repo>/.context/user-manager-shortlist/` or edit `user-manager-shortlist.html` directly (see fallback below).
The same folder holds `node-*.md`, `style-notes.md` and `verify-report.md` (reasoning notes, not visible copy).

## 1. Shortlist: `share/01-user-manager-shortlist.html` (3.0 MB) and `user-manager-shortlist.html` (87 KB)

### Rebuild recipe
Step 1 (offline): `build-shortlist.mjs` takes `repoRoot = scriptDir/../../..`. In this checkout that is `$B/userflow-patterns--user-mgmt` (not the git root), so the JSON must go there:
```sh
B=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration
U=$B/userflow-patterns--user-mgmt/inspiration
mkdir -p $B/userflow-patterns--user-mgmt/.context/user-manager-shortlist
cp /Users/danielbrassnyo/conductor/archived-contexts/essentials-2.0/team-management-research/user-manager-shortlist/shortlist-data.json \
   $B/userflow-patterns--user-mgmt/.context/user-manager-shortlist/
node $U/scripts/build-shortlist.mjs      # writes $U/user-manager-shortlist.html (87 KB)
```
The `.context/` dir is probably gitignored (check `git status` before committing). Proof used an unchanged copy of the script in a mirrored layout (`tmp/user-mgmt/sl/`), not the commands above.

Step 2, inline images and copy into share/:
```sh
python3 $U/share/build-shortlist.py      # reads $U/user-manager-shortlist.html, writes $U/share/01-user-manager-shortlist.html
```
`build-shortlist.py` needs `requests` (NOT installed for system python3) and NETWORK. It downloads 36 http images (26 mobbin.com, 10 images.refero.design) and inlines 10 local `university-identity/assets/*` images.
It also rewrites hrefs `tmp/report-hotlink.html[#x]` -> `02-R1-access-roles-sharing.html[#x]` and `university-identity/report.html[#x]` -> `03-R2-...html`.
Mobbin image URLs expire, so it may fail today. **I did not run step 2** (network rule).

Offline fallback for the later job, since the py only swaps src and href: apply the same text edits to `share/01-...html` with a text-safe replace after step 1, or change only the text via step 1 and re-run the py when network and `requests` are available. Do NOT regenerate the image data without network.

### Proof
- `user-manager-shortlist.html` rebuilt from the archived JSON via the unchanged script: **identical** (byte-identical, 561 text lines, 47 img).
- `share/01` vs `user-manager-shortlist.html`: **text identical** (0 diff lines, 47 img both). So the share file differs only in inlined src and sibling hrefs.
- The py step was not run (network).

### Text-source map
| Visible text | Source |
|---|---|
| Page title / h1, intro paragraphs (split on blank lines) | JSON `meta.title`, `meta.intro` |
| Reports line (R1/R2 labels, counts, paths) | JSON `meta.reports.R1/R2.{label,count,path}` |
| Summary table (node, keeps, counters, strongest) | JSON `nodes[].title/keeps/counters/strongest.{round,question,app,title}` |
| Node heading, lead | `nodes[].title`, `nodes[].lead` (light markdown: backtick code, `*em*`) |
| Group sub-headings | `nodes[].groups[].heading` |
| Card: app, title, take, round, question | `refs[].app/title/take/round/question` |
| Counter-example cards | `nodes[].counterExamples[]` (same fields) |
| Callouts "Still uncovered", "AI", "Close calls dropped" | `nodes[].uncovered`, `.ai`, `.dropped` |
| "Next step" section | script reads `meta.nextStep`, but the JSON has `nextStep` at top level, so the section body probably renders empty (still byte-identical to current HTML). Check before relying on it. |
| **Hard-coded in build-shortlist.mjs** | UI chrome: "Counter-examples", "Don't build this", "Documentation only - no screen", "Image unavailable", tags "Not in original index" and "Docs only", "Source", "Open in R1/R2 report", "No source link", table column heads, "N keeps / N counters", "Reports:", "Search cards", "N of M cards shown", "Next step", "Close", "Still uncovered", "Close calls dropped", nav aria-labels |

Counts and ordering strings (`keeps`, `counters`, totals in `meta.totals`) are stored in JSON and are not recomputed, so they could go stale if cards are removed.
`user-manager-shortlist.md` is a separate hand-written markdown companion. Nothing builds it and nothing is built from it. It duplicates the text, so it would need a manual edit to stay in sync. It also says "Reports: R1 = tmp/report-hotlink.html".
Note: the HTML links to `tmp/report-hotlink.html` (scratch) for R1 before the py rewrites it. That file is a scratch artifact and is not regenerated by any recipe here.

Prose words: about 1,410 editable (intro, leads, card titles and takes, callouts). The whole text of the page is about 2,300 words.

## 2. R1: `share/02-R1-access-roles-sharing.html` (22.9 MB, 616 img)

### Rebuild recipe
```sh
U=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration
cd $U
node scripts/build-report.mjs access-sharing/references.json --out access-sharing/report.html --embed --assets access-sharing/assets/manifest.json
cp access-sharing/report.html share/02-R1-access-roles-sharing.html
# optional: refresh the zip (share/user-management-inspiration-research.zip, 20.9 MB) after all 3 files change
```
Uses local assets only (`access-sharing/assets/`, 551+ files, 615 unique data URIs). No network needed, about 10 s. Node >= 20, `sharp` is not needed by this script (only `shared.mjs`).
Package/node_modules live at `$U/../`. The recipe worked from `$U`.

### Proof
Output to `tmp/user-mgmt/r1-report.html`: **byte-identical** to `access-sharing/report.html` and to `share/02`. Text is identical (10,091 words counting UI, 616 img).

### Text-source map
| Visible text | Source |
|---|---|
| Page title/h1, intro | `access-sharing/references.json` -> `title`, `intro` (eyebrow prefix "Essentials 2.0 - Design research - <module>" hard-coded in build-report.mjs, module from JSON) |
| Question heading and "answer" paragraph | `references.json` `questions[].title`, `questions[].answer` (note: `merge-references.mjs` hard-codes the question titles; see gotchas) |
| Card: app, title, take, source URL | `references[].app/title/take/url` |
| **Hard-coded in `scripts/build-report.mjs`** | Badges (Mobbin/Refero/Selected/Counter-example), "View source", "Step N of M", "Click to enlarge", "Screen", filter labels ("Search references", "Source", "Selected only", "Reset filters", "Questions"), "N references", "No references match...", "Image unavailable", lightbox text, noscript text, "No take added yet." fallback |

`sections.json` is FigJam node IDs only, not copy. `board-plan.json`, `figjam/` and `refero*.json` / `mobbin.*.json` are upstream data or FigJam sync, not read by the build.
Only `references.json` matters. Caution: `scripts/merge-references.mjs <dir>` would REGENERATE `references.json` from `mobbin.*.json` / `refero*.json` with the hard-coded QUESTIONS (titles only, no answers/intro). Do not run it after editing `references.json`.
`merge-references.mjs` and `refero-build-access-sharing.mjs` are upstream and should not be part of the rewrite recipe.

Prose words: about 4,360 (137 takes plus titles, 6 question titles and answers, intro). Only about 190 words are questions/intro/answers; the rest is per-reference `take` text.
`references.json` has no empty takes.

## 3. R2: `share/03-R2-university-identity-directory-sync.html` (5.1 MB, 70 img)

### Rebuild recipe
```sh
U=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration
cd $U/university-identity
node scripts/build.mjs        # merges 3 input JSONs -> references.json, board-plan.json, assets/manifest.json, assets/metadata.json, then runs scripts/build-report.mjs --embed -> report.html
cp report.html ../share/03-R2-university-identity-directory-sync.html
# optional: node scripts/verify.mjs
```
Requires `sharp` (resolved from `$U/../node_modules`, which exists). No network. Local assets only.
**Side effects:** build.mjs REWRITES `references.json`, `board-plan.json`, `assets/manifest.json`, `assets/metadata.json` (which includes `generatedAt`, so git will show a diff). It preserves `figjam/node-map.json` if present.
It does not rewrite the three input JSONs.

Optional upstream step, only if editing the copy in the .py scripts rather than the JSONs:
```sh
python3 scripts/build-documentation.py   # -> documentation-references.json + (assets read)
python3 build-library.py                 # needs evidence/refero-*.json -> library-references.json, library-assets.json
python3 build-mobbin.py                  # reads ../access-sharing/references.json -> mobbin-references.json, mobbin-assets.json
```
I proved these regenerate JSONs byte-identical (in the tmp copy, with `../access-sharing/references.json` copied alongside). They all use only the standard library.

### Proof
Copy of the `university-identity/` dir in `tmp/user-mgmt/ui/` (node_modules symlinked at `tmp/user-mgmt/node_modules`): `node scripts/build.mjs` gives `report.html` **byte-identical** to the current one and to `share/03`. Text is identical (6,911 words counting UI, 70 img). The py regeneration also gave an identical report.

### Text-source map
Where the text lives depends on which layer the later job edits. Choose ONE: the py scripts regenerate the JSONs and would overwrite direct JSON edits.
| Visible text | Source |
|---|---|
| Title, intro, six question titles, answers, open questions, "evidence gaps" (4), module | **Hard-coded in `scripts/build.mjs`** (`questions`, `gaps`, `data.intro`, `data.title`). Not in any JSON input. |
| "Priority questions for university IT" (10 items) | `research-notes.md`, section `## Priority university IT interview questions` (numbered list, parsed by build.mjs) |
| Per-card text: `title`, `take`, `observed`, `adaptation`, `limitation`, app, actor | Inputs `documentation-references.json` (21 refs), `library-references.json` (6), `mobbin-references.json` (5). Those are generated by `scripts/build-documentation.py`, `build-library.py` and `build-mobbin.py`, where the strings are hard-coded. |
| Synthesis block: "Decisions and evidence gaps", ownership hypothesis, the authentication/LDAP/CSV paragraph, h3 headings | **Hard-coded in `university-identity/scripts/build-report.mjs`** |
| Card labels "Observed / documented", "Possible adaptation", "Limitation / mismatch", badges, filters, lightbox | **Hard-coded in `university-identity/scripts/build-report.mjs`** (this round's own copy, not `$U/scripts/build-report.mjs`) |

`README.md`, `brief.md`, `CLAUDE.md` (generic routing block) and `research-notes.md` (apart from the priority questions) are not shown in the report.
`board-plan.json` copies `intro`/`answers` for FigJam. It is regenerated by build.mjs and is not visible copy.

Prose words: about 4,250 (about 700 in intro, questions, answers, open questions, IT questions, gaps; about 3,550 in the 32 refs x title/take/observed/adaptation/limitation). The synthesis block in build-report.mjs adds about 100 words of hard-coded text.

## 4. INSP index: `$B/index.html` (5 KB, 459 words, 0 img)

Built by `$U/scripts/build-gallery-index.mjs` (run with the inspiration dir as its argument):
```sh
node $U/scripts/build-gallery-index.mjs $B        # writes $B/index.html
```
Proof: run against a symlink mirror of `$B` (tmp/user-mgmt/idx): **byte-identical** to the current `index.html`. No network.
Links to: 8 module galleries (`03-scenario-manager` ... `10-dashboard`), and "earlier reports", which are UM `share/01`, `share/02`, `share/03` plus courses `07-share-with-participants.html` and its siblings (12 in total).
Sources: the gallery rows come from each `NN-*/work/module.json` (`title`, `products`, `jobs[].title`). Everything else is **hard-coded in the script**: the h1 "Essentials 2.0: ideas from other products", the intro sentence, table headings, "Earlier reports (organized by question)", and the "(not built yet)" string. Earlier-report link labels are derived from the filename (e.g. "user-mgmt - 01-user-manager-shortlist").
The index links the R1/R2/shortlist share files only (not `access-sharing/report.html` or the source shortlist).

## Gotchas
- `shortlist-data.json` exists only in `archived-contexts/` (outside the repo). The script's `repoRoot` is `$B/userflow-patterns--user-mgmt` in this checkout, which is not the git root.
- The share step for the shortlist (`share/build-shortlist.py`) needs network and the `requests` module (not installed). The image URLs are from mobbin/refero and may be expired or blocked. There is no offline path except to patch text in the existing share file.
- R1 is 22.9 MB and its rebuild takes about 10 s; if the zip is to stay current, regenerate `user-management-inspiration-research.zip` (20.9 MB) and its `share/verify/*.png` screenshots manually. Nothing in the repo builds them.
- The R2 `build.mjs` modifies tracked JSON files (`generatedAt` timestamp) on every run.
- Three places duplicate R1/R2 copy: the `.md` files (`user-manager-shortlist.md`, `user-manager-map-index.md`), `board-plan.json`, and `figjam/`. They are not visible in the HTML reports but can drift.
- `tmp/report-hotlink.html` is the target of 35 "Open in R1 report" links in the source shortlist. It is scratch (only rewritten by the py) and is not rebuilt by these recipes.
- Text in R2 is spread across four layers (build.mjs, two report/py script families, research-notes.md). Edit the JSON inputs only if the .py scripts will not be re-run afterwards.
