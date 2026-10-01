# Recon: courses 04-learner-groups, 05-scenarios, 06-events

INSP = /Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration
PIPE = INSP/userflow-patterns--user-mgmt/inspiration/scripts
No network needed (all images embedded from local `assets/manifest.json`). All file mtimes are checkout time, so order comes from READMEs/scripts.

## Proof summary

| Module | Rebuilt to tmp | Result vs current INSP/courses/NN.html | `<img>` count |
|---|---|---|---|
| 04-learner-groups | yes | BYTE-IDENTICAL (cmp) so visible text identical | 44 = 44 |
| 05-scenarios | yes | BYTE-IDENTICAL | 87 = 87 |
| 06-events | yes | BYTE-IDENTICAL | 184 = 184 |

Outputs: `_humanize-copy/phase2-recon/tmp/<module>/<module>.html` (+ `postprocess.tmp.*` copies with paths redirected). `synthesis.html` is NOT an output of any build; it is a source fragment that post-processing inserts (see below).

## Rebuild recipes (verified; all write to real path unless redirected)

`R=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration; PIPE=$R/userflow-patterns--user-mgmt/inspiration/scripts`

The scripts write the report to `$R/courses/NN.html` (what a real rebuild wants). To prove without overwriting, use the tmp-redirected variants used here.

### 04-learner-groups
```sh
node $PIPE/build-report.mjs $R/courses/04-learner-groups/references.json --embed --assets $R/courses/04-learner-groups/assets/manifest.json --out $R/courses/04-learner-groups.html
node $R/courses/04-learner-groups/postprocess.mjs     # in-place: inserts synthesis.html after </header>, adds id="<ref.id>" to each <article class="card">. Throws if report already has id="synthesis" (so always rebuild first). Paths are relative to script (import.meta.url), writes ../04-learner-groups.html.
# optional QA only: node .../qa.mjs (hard-coded npx playwright path)
```
Do NOT run `synthesize.py` or `extract-policy.mjs` in a copy-edit rebuild (see risks).

### 05-scenarios
```sh
sh $R/courses/05-scenarios/scripts/build.sh     # = build-report.mjs ... --out courses/05-scenarios.html ; python3 scripts/postprocess.py
```
(postprocess.py: adds card ids + visible `ref-id` line under each card-body, inserts synthesis.html after `</p></header>`, appends CSS. In-place; not idempotent, always rebuild first.) build.sh derives ROOT from its own location (works in windhoek).

### 06-events
```sh
node $PIPE/build-report.mjs $R/courses/06-events/references.json --embed --assets $R/courses/06-events/assets/manifest.json --out $R/courses/06-events.html
node $R/courses/06-events/post.mjs synthesis $R/courses/06-events.html $R/courses/06-events/synthesis.html
```
(post.mjs synthesis is idempotent: replaces `<!--synthesis:start-->...<!--synthesis:end-->`. Do NOT run `post.mjs header`, `cut.mjs`, `annotate.mjs`, `merge-references.mjs`, `fetch-assets.mjs`; they belong to the fresh-merge phase and run relative to cwd.)

## Text-source map

Builder chrome is in `PIPE/build-report.mjs` (shared, hard-coded, same for all modules): eyebrow "Essentials 2.0 · Design research · <module>", "Search references", placeholder "App, title, or take…", "Source / All sources", "Selected only", "Reset filters", "Questions" legend, "N references", "No references yet for this question.", "No references match these filters...", "Counter-example" badge, "✓ Selected", "View source ↗", "Step i of n · Click to enlarge", "Close", "No take added yet.", aria-labels. Editing these affects every module's report (shared file).

| Visible text | 04 source | 05 source | 06 source |
|---|---|---|---|
| Page title / H1 | references.json `title` (= stub) | same | same |
| Intro | references.json `intro` (stub differs only by `·`/`→` escaping; stub==refs effectively); also hard-coded in synthesize.py | references.json `intro` (= stub) | references.json `intro` (= stub) |
| Question H2 (`questions[].title`) | references.json (also re-set in synthesize.py) | references.json | references.json (= stub) |
| Question answer paragraph (`questions[].answer`) | references.json; HARD-CODED in `synthesize.py` (writes into references.json) | references.json; HARD-CODED in `scripts/synthesize.py` | references.json; HARD-CODED in `annotate.mjs` |
| Card app name | references.json `app` | same | same |
| Card title (`title`) | references.json; HARD-CODED in `synthesize.py` (all 21 overrides) | references.json; originates in mobbin.*.json / refero.json | references.json; originates in mobbin.*.json / refero.json / refero-build.mjs |
| Card take | references.json; HARD-CODED in `synthesize.py` (all 21) | references.json; originates in `notes/Q*.matrix.json` (synthesize.py copies them in) | references.json; mostly from mobbin.*/refero.json fetch output; 5 corrected in `annotate.mjs` |
| Counter-example badge | `counter_example` flag in references.json (3) | flag (37 badges incl. source badges) | flag (3), set by annotate.mjs |
| Image alt / aria-label / `data-search` | derived from app+title+take (builder) | same | same |
| Source badge ("Mobbin"/"Refero"), kind | builder, from `source`/`kind` | same | same |
| Synthesis block (top examples, pattern comparison table, findings, best practices, open questions, table cell text, legend) | `04/synthesis.html`; GENERATED by `synthesize.py` (text hard-coded in py; regenerated file == current file, verified) | `05/synthesis.html`; GENERATED by `scripts/synthesize.py` (verified identical on rerun); table content from `notes/Q*.matrix.json` | `06/synthesis.html` only, no generator (hand/agent-written, including `Synthesis` heading and legend) |
| Visible reference ID lines (`ref-id`) | not shown (only anchors) | shown, from `id`; not prose | not shown |
| Synthesis CSS | synthesis.html inline style? (none extra) | hard-coded in postprocess.py (no text) | in synthesis.html/builder |

Text existing ONLY in built HTML (no source): none found; all three rebuilds are byte-identical from sources.

## Risks / gotchas (important for the copy rewrite)

1. **Generators overwrite references.json.** 04 `synthesize.py`, 05 `scripts/synthesize.py`, 06 `annotate.mjs` each hard-code answers (and, for 04, all titles/takes; 05 takes via notes matrices; 06 five takes) and rewrite references.json on rerun. Verified by running copies in `tmp/idem/`: reruns reproduce current files (04 differs only by `\u` JSON escaping and my copy lacking some inputs; 05 and 06 identical). So if you edit references.json alone and ever rerun a generator, edits are lost. Recommended: edit references.json and synthesis.html directly and never rerun the generators, or edit the generators too (04/05 `synthesize.py`: answers, takes, titles, synthesis text; 06 `annotate.mjs`).
2. **synthesis.html is the source of synthesis text.** For 04/05 it is a generated file whose text lives in the py; editing synthesis.html directly is safe only if synthesize.py is not rerun. 06 has no generator.
3. 04 `postprocess.mjs` and 05 `postprocess.py` hard-code the report path and run in place; 04 throws if run twice, 05 would double-insert. Always run the builder first.
4. Synthesis cross-links (`href="#<ref id>"`) depend on card ids; keep ids untouched. `answer`/`take` render with `white-space:pre-wrap`; HTML-escaped (no markup).
5. `qa.mjs` (04) and `scripts/qa.cjs` (05) import Playwright from a hard-coded npx cache / chromium path; may fail if not present. 04 `qa.mjs` also checks exactly 6 H2s and anchor validity, useful post-rewrite check (note synthesis H3s are not H2).
6. 04 `extract-policy.mjs` mutates references.json and assets/manifest.json (Basecamp single image); never rerun. 06 comments in post.mjs mention 09 (stale comment).
7. `0X-README.md` paths are relative to an older root ("workspace root"); use absolute paths above.
8. `git status` shows no changes to tracked files from this recon (only files under _humanize-copy/phase2-recon/ created).

## Word counts (editable prose)

| | intro | Q titles | answers | takes | card titles | synthesis.html (visible words) | total approx |
|---|---|---|---|---|---|---|---|
| 04 | 48 | 54 | 413 | 651 | 130 | 1,332 | ~2,630 |
| 05 | 43 | 58 | 451 | 702 | 207 | 1,291 | ~2,750 |
| 06 | 61 | 54 | 988 | 977 | 525 | 1,305 | ~3,910 |

Whole-page visible words (incl. chrome, app names, meta): 04 = 3,145; 05 = 3,719; 06 = 5,663.
