# Recon: courses 07, 08, 09

INSP = /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration
PIPE = INSP/userflow-patterns--user-mgmt/inspiration/scripts
Tmp outputs: INSP/_humanize-copy/phase2-recon/tmp/{07,08,09}/ (plus `vt.py` visible-text extractor, `new.txt`/`cur.txt` dumps).

## Verdict

| Module | Rebuild | Result vs current HTML |
|---|---|---|
| 07 | works, offline | **byte-identical** HTML; visible text identical; 57 vs 57 `<img>` |
| 08 | works, offline | **byte-identical**; text identical; 61 vs 61 `<img>` |
| 09 | works, offline | **byte-identical**; text identical; 125 vs 125 `<img>` |

All three use local `assets/manifest.json` images (no network). None has a built `NN-slug/synthesis.html` report: the `synthesis.html` in 07 and 09 is a **fragment** (source) that gets injected after `</header>`. 08's synthesis source is `synthesis.json`.
Mtimes are all the checkout time (10:52 Sep 30), useless for ordering; order derived from the scripts.

Note `--assets` must be the `assets/manifest.json` file (not the dir), unlike `_shared-block.md`, which says `--assets $MOD/assets`.

## Rebuild recipes (real recipe; writes onto INSP/courses/NN-slug.html. To test, use the tmp variants)

Let M=INSP/courses.

### 07
Real: `node M/07-share-with-participants/finish-report.mjs` (builds with build-report.mjs, then adds `id="ref-<id>"` anchors and a `<small class="muted">id</small>` per card, then injects `synthesis.html` after `</header>`). Output path hard-coded to `INSP/courses/07-share-with-participants.html` (derived from script location).
Proof used: copy of the script with only `mod` and `report` constants changed, at tmp/07/finish-report.mjs:
`node INSP/_humanize-copy/phase2-recon/tmp/07/finish-report.mjs`
Upstream content scripts (NOT part of rebuild, they regenerate sources): `annotate-cards.py` then `synthesise.py` (write references.json takes/answers/counter_example and synthesis.html). Dry run in tmp copy: they reproduce the current references.json and synthesis.html exactly. DANGER: if the later job edits references.json or synthesis.html, never run these two, they would revert the edits. Conversely, if their hard-coded strings are edited instead, they must be re-run to propagate. Pick one source of truth (recommend JSON/HTML and retire the .py).

### 08
```
node PIPE/build-report.mjs M/08-recordings-course-reports/references.json --embed --assets M/08-recordings-course-reports/assets/manifest.json --out M/08-recordings-course-reports.html
python3 M/08-recordings-course-reports/insert-synthesis.py
```
`insert-synthesis.py` is NOT idempotent (inserts synthesis and card ids into whatever is in the report), so always run it right after a fresh build-report. Output path hard-coded (`p.parent/'08-...html'`). Proof: build to tmp/08/08-recordings-course-reports.html, then tmp/08/ins.py (copy with `report=` and `p=` constants pointed at tmp/real module dir).

### 09
```
node PIPE/build-report.mjs M/09-announcements-send-materials/references.json --embed --assets M/09-announcements-send-materials/assets/manifest.json --out M/09-announcements-send-materials.html
node M/09-announcements-send-materials/post.mjs synthesis M/09-announcements-send-materials.html M/09-announcements-send-materials/synthesis.html
```
`post.mjs synthesis` is idempotent (marker comments `<!--synthesis:start/end-->`). No id anchors added. Proof ran this against tmp/09 output.
Upstream scripts (do NOT rerun after copy edits): `post.mjs header` (overwrites title/intro/question titles from references.stub.json, keeps non-empty answers), `cut.mjs` (drops refs), `annotate.mjs` (overwrites takes + answers + counter_example from annotate.json). Verified: current references.json answers and 23/23 takes equal annotate.json, so annotate.json is a duplicate source that would clobber edits to references.json.

## Text-source map

Shared chrome comes from build-report.mjs (hard-coded in PIPE, shared by all modules, also 01-06): eyebrow "Essentials 2.0 · Design research · <module>", search/filter labels ("Search references", "All sources", "Selected only", "Reset filters", "Questions"), "N of M references", "No references match...", "View source ↗", "No source link", "Counter-example" badge, "✓ Selected", source badges (Mobbin/Refero), kind label (screen/flow), image alt text (`App — title, image n`), lightbox text, noscript text, "No take added yet.". Editing these means editing shared build-report.mjs (affects 01-10 on rebuild) or post-editing the HTML.

| Visible text | 07 | 08 | 09 |
|---|---|---|---|
| Page title / H1 (`module.title`) | references.json `title` (== stub) | same | same |
| Intro paragraph | references.json `intro` (== stub) | same | same |
| Question id+H2 | references.json `questions[].title` (== stub) | same | same |
| Question answer paragraph | references.json `questions[].answer`. 07: also hard-coded in synthesise.py `answers` list plus appended sentences; 09: also annotate.json `answers` | references.json (no generating script; README says merge would overwrite them) | references.json (+ annotate.json duplicate) |
| Card: app, title | references.json `references[].app/.title` (titles come from Mobbin/Refero raw) | same | same |
| Card: take | references.json `references[].take`. 07: also annotate-cards.py `takes` + 2 overrides in synthesise.py; 09: annotate.json `takes` (23) | references.json | references.json |
| Counter-example badge | references.json `counter_example` (07: set in synthesise.py by id; 09: annotate.json list) | references.json | references.json |
| Card id (small grey text) | 07: finish-report.mjs injects id; 08: insert-synthesis.py `reference-id` span | (same) | none |
| Synthesis block (Top examples, Pattern comparison table, differences, practices, open questions, method) | **synthesis.html** fragment (generated from synthesise.py strings: `top`, `findings`, `best`, `questions`, method details, legend; table cells from notes/Q*-cells.json + 2 hard-coded cell overrides); headings and legend hard-coded in synthesise.py | **synthesis.json** (top/legend/comparison/differences/practices/open/limitations); headings "Top examples", "Pattern comparison", "What the best apps do differently", "Best practices top companies converge on", "Open questions for Essentials 2.0" hard-coded in insert-synthesis.py | **synthesis.html** fragment (hand-authored, no generator) |
| Part A / Part B subsection labels | none | hard-coded in insert-synthesis.py ("Part A · Recording organisation, access and playback", "Part B · Course reporting and learner results") | none |
| Synthesis CSS/inline styles | inline in synthesise.py | CSS string in insert-synthesis.py | in fragment |
| Course links on INSP/index.html | filename only ("courses · 07-share-with-participants") from build-gallery-index.mjs; no editable prose | same | same |

The index has no course descriptions; the link text is the filename (not humanisable without changing the generator). There is no INSP/courses/index.html.

## Risky text (hard-coded in scripts / duplicated / no single source)
1. **07 synthesise.py**: all 6 answers, top-examples blurbs, findings/best/open-question sentences, matrix cell overrides, method text live in Python and are duplicated in references.json + synthesis.html. Generator and outputs are currently in sync.
2. **07 annotate-cards.py**: 20 takes duplicated in references.json.
3. **08 insert-synthesis.py**: section headings + Part A/B labels hard-coded. Synthesis prose is in synthesis.json (clean).
4. **09 annotate.json** duplicates references.json answers/takes; **09 synthesis.html** fragment only source (fine, but hand-edited HTML).
5. Comparison table cell text in 07 sits in notes/Q1-6-cells.json (plus python overrides), copied into synthesis.html; edit synthesis.html directly.
6. Shared build-report.mjs chrome (see above).
7. No text exists only in built HTML (all three rebuilt byte-identically).
8. 08 cards use `cite` link labels `[App · id]` and 07 uses `App · source:idprefix…` link text (generated, contain raw ids).

## Word counts (editable prose, approx)
| | intro | q titles | answers | takes | ref titles | synthesis | total prose |
|---|---|---|---|---|---|---|---|
| 07 | 50 | 63 | 544 | 669 | 101 | ~1485 (synthesis.html incl. tags stripped) | ~2900 |
| 08 | 41 | 63 | 459 | 668 | 131 | ~1100 (synthesis.json incl. keys) | ~2450 |
| 09 | 108 | 69 | 842 | 1195 | 262 | ~1400 | ~3900 |
(Full-page visible text incl. chrome/tables: 07 3546, 08 3258, 09 5091 words.) Refs: 28 / 37 / 42.

## Gotchas
- No network needed; all images local (assets/manifest.json present). Do NOT run merge-references.mjs (hard-codes another module's header, per plan.md/README) or fetch-assets.
- `_shared-block.md` build path points at `monrovia` checkout and `--assets $MOD/assets` (wrong); ignore, use recipes above.
- Reports are 2-6 MB with base64 images; keep diffs in sources, not HTML.
- For the copy job: edit references.json (+ 08 synthesis.json / 07,09 synthesis.html); treat 07 .py generators and 09 annotate/cut/post-header as retired, never rerun. 08 needs insert-synthesis.py headings edited in place.
- Text check method: tmp/vt.py strips style/script/data URIs and diffs visible text.
