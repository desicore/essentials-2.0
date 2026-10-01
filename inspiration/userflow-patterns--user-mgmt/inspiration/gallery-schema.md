# Flow gallery JSON (product-first inspiration reports)

Contract for `scripts/build-gallery.mjs`, used by the module reports that come after Courses (Scenario manager, Recording, Inventory, Scheduling, Reports, Debrief/Review, Mobile/iPad). The report is organized **by product**. Each product shows 1–3 **complete flows**, and every flow is tagged with the module's **jobs** (the FigJam boxes under the module), which also act as filters. The older question-based `schema.md` / `build-report.mjs` pair stays as it is for the finished modules.

## Folder layout (one per module)

```
inspiration/<NN-slug>/
  _prompt.md            the Cursor prompt for this module
  <NN-slug>.html        the built, self-contained report (the deliverable)
  work/
    plan.md             orchestrator plan: jobs, queries, agent split, product longlist
    module.json         header, jobs, products (shortlist), synthesis   ← orchestrator writes
    raw/*.json          candidate flows/screens from the fetch agents  ← fetch agents write
    notes/<product>.json per-product annotations                       ← annotator agents write
    assets/             downloaded step images (fetch-assets.mjs)
    assets-opt/         resized WebP cache (build-gallery.mjs; safe to delete)
```

## `work/raw/*.json` — candidates

The same object shape as `schema.md` references, so `fetch-assets.mjs` works unchanged. Every fetch agent owns its own file (e.g. `raw/mobbin.A.json`, `raw/refero.json`), so parallel agents never write to the same file.

```json
{ "references": [ {
  "id": "mobbin:<flow-or-screen-uuid>",
  "source": "mobbin",
  "app": "Loom",
  "title": "Recording a screen with camera bubble",
  "kind": "flow",
  "url": "https://mobbin.com/...",
  "images": ["<step 1 image_url>", "<step 2 image_url>", "..."],
  "platform": "web",
  "jobs": ["start-stop", "device-check"],
  "take": "One evidence-based sentence: what this flow shows."
} ] }
```

- `id`: `<source>:<id>`, unique across the module. The same flow found twice keeps one entry.
- `kind`: `flow` (multi-step; `images` in step order, **every step**) or `screen` (one image). Prefer flows.
- `platform`: `web`, `ios`, `ipad` or `android`. Mobbin's `ios` results that are clearly tablet layouts may be tagged `ipad`.
- `jobs`: ids from `module.json` → `jobs`. The annotator may correct them later.
- Download images **immediately** after every search call: `node $PIPE/fetch-assets.mjs <raw file> --out <work>/assets`. Mobbin image URLs expire; the builder only uses local files. (Each call rewrites `assets/manifest.json` for that file only; the builder ignores the manifest and resolves `assets/<safe-id>/<index>.*` directly.)

## `work/module.json` — header, jobs, shortlist, synthesis

```json
{
  "module": "04-recording",
  "title": "Recording — flow inspiration",
  "intro": "Plain-text paragraph: scope, sources, date.",
  "baseline": "Optional plain text: what already exists (e.g. the current SRV) and what the flows are compared against.",
  "targets": { "products": [8, 12], "flows": [15, 25] },
  "jobs": [
    { "id": "start-stop", "title": "Start/stop manual & automatic recording", "description": "Optional one-liner." }
  ],
  "products": [
    { "id": "loom", "name": "Loom", "analog": "direct", "why": "One line: why this product is in the report.",
      "flows": ["mobbin:...", "refero:..."] }
  ],
  "synthesis": {
    "patterns": [ { "title": "Pre-flight check before record", "body": "2–4 sentences.", "flows": ["mobbin:..."] } ],
    "open_questions": ["Where the pattern does not map cleanly to simulation education."]
  }
}
```

- `targets` (optional): inclusive ranges `--check` warns against. Defaults: 8–12 products, 15–25 flows.
- `analog`: `direct` (same job in a comparable pro tool), `adjacent` (same job, different domain) or `wildcard` (an unusual idea worth seeing).
- `products[].flows`: candidate ids in display order. Each must exist in `raw/*.json` and have all its images downloaded.
- Product order = display order: put the strongest first.
- `synthesis.patterns[].flows` link to flow cards. Every id must be in some product.

## `work/notes/<product-id>.json` — annotations

One file per product, written by the annotator agent after it has **looked at the downloaded step images**.

```json
{ "product": "loom", "flows": {
  "mobbin:...": {
    "summary": "One sentence: what the user accomplishes, start → end.",
    "steps": ["Short label for step 1", "Step 2", "..."],
    "steal": ["2–4 concrete, reusable ideas"],
    "avoid": ["0–1 things not to copy"],
    "fit": "One line: how this maps to Essentials 2.0 / the baseline.",
    "jobs": ["start-stop"],
    "counter_example": false
  } } }
```

- `steps`: one label per image, same order. Missing labels fall back to "Step n".
- `jobs` (optional) replaces the candidate's `jobs` when present.
- `counter_example: true` adds a red badge (the whole flow is a "don't build this").

## Commands

```
PIPE=/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/userflow-patterns--user-mgmt/inspiration/scripts
node $PIPE/build-gallery.mjs <work> --list     # compact candidate table for shortlisting (by app)
node $PIPE/build-gallery.mjs <work> --check    # validate + coverage; exit 1 on errors
node $PIPE/build-gallery.mjs <work>            # build ../<module>.html (embedded WebP, offline)
node $PIPE/build-gallery-index.mjs <inspiration dir>   # rebuild inspiration/index.html
```

`--check` errors: unknown or missing flow ids, missing step images, unknown job ids, flows without notes. Warnings: product/flow counts outside `targets`, jobs with fewer than 2 flows from different products, step-label count mismatches.

The build resizes every image to at most 1280×1600 WebP (q72, cached in `assets-opt/`) and base64-embeds it, so the HTML works offline and survives Mobbin link expiry. `--no-optimize` embeds the originals.
