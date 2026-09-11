You are building tooling for a UX inspiration-board pipeline in THIS repo (the current working directory, /Users/danielbrassnyo/Documents/dev-projects/elevate/essentials-2.0; git repo on branch main with no commits yet). Read inspiration/PLAN.md first for context. Do NOT commit. Do not modify inspiration/PLAN.md, inspiration/scripts/figjam-upload.mjs, inspiration/scripts/refero-*.mjs, or anything under inspiration/access-sharing/ except the stub file you create.

Deliverables:

1. Repo scaffold: README.md (what this repo is: Essentials 2.0 design research artefacts; how to run the scripts), .gitignore (node_modules, .DS_Store, inspiration/tmp), package.json ("type":"module", scripts: build-report, fetch-assets, crop; dependency: sharp only).

2. inspiration/schema.md documenting this JSON shape, and inspiration/access-sharing/references.stub.json with 3 example entries (2 flows, 1 screen, one marked counter_example) using placeholder image URLs from https://picsum.photos so the build can be tested:
{
  "module": "access-sharing",
  "title": "Access, roles & sharing",
  "questions": [ {"id":"Q1","title":"...","answer":""} ... ],
  "references": [ {
    "id": "mobbin:<uuid>",
    "source": "mobbin" | "refero",
    "app": "Notion",
    "title": "Invite guests to a page",
    "kind": "flow" | "screen",
    "url": "https://mobbin.com/...",
    "images": ["https://..."],
    "question": "Q1",
    "take": "one line: what we are referencing in this",
    "counter_example": false,
    "selected": false,
    "crop": ""
  } ]
}
"images": for flows one URL per step in order. "crop": optional "imageIndex:x,y,w,h" in px. The six questions Q1..Q6 are in inspiration/PLAN.md section 2; copy their titles into the stub.

3. inspiration/scripts/build-report.mjs — usage: node inspiration/scripts/build-report.mjs <references.json> [--out report.html] [--embed]
   - ONE self-contained HTML file. Default: images hotlinked. With --embed: download every image and inline as base64 data URIs (Node 20+ fetch).
   - Layout: title + intro paragraph slot; one section per question in Q order (question title, answer if present, count); cards inside. Card = app name, source badge (Mobbin/Refero), kind, title, the "take" line, link to url, a horizontal scrollable strip of images for flows (single image for screens), a red "counter-example" badge when true, a subtle "selected" mark when true. Cards ~360px wide in a wrapped grid. Clicking an image opens it full size in a lightbox.
   - Top toolbar: "selected only" toggle, filter by source, filter by question (checkboxes), text search over app/title/take. Vanilla JS, no frameworks, no CDN.
   - Clean neutral styling; readable in light and dark (prefers-color-scheme).
   - Handle missing fields gracefully; validate that every reference's question exists, warn to stderr otherwise.

4. inspiration/scripts/fetch-assets.mjs — usage: node inspiration/scripts/fetch-assets.mjs <references.json> [--out inspiration/access-sharing/assets]. Downloads every image to <out>/<safe-id>/<index>.<ext>, skips existing, prints a summary, writes <out>/manifest.json mapping ref id -> local paths.

5. inspiration/scripts/crop.mjs — usage: node inspiration/scripts/crop.mjs <references.json> [--assets dir] [--out dir/cropped]. For each reference with non-empty crop "i:x,y,w,h", crop assets/<id>/<i>.* with sharp to out/<id>-<i>.png. Skip references without crop.

6. Run npm install, then run build-report on the stub (both modes, outputs into inspiration/tmp/) and fetch-assets on the stub (into inspiration/tmp/assets), and make sure they work end to end. Final message: file list, how to run, caveats. Under 300 words.
