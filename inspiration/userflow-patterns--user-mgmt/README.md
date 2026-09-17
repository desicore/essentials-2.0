# Essentials 2.0 design research artefacts

This repository holds the briefs, references, and tooling for Essentials 2.0 UX
inspiration boards. The first module is **Access, roles & sharing**. The internal
HTML report groups research by question so references can be reviewed and selected
before cropped details are placed on an inspiration board.

See [the research plan](inspiration/PLAN.md) and [the JSON schema](inspiration/schema.md).
The [stub](inspiration/access-sharing/references.stub.json) contains test photographs
and invented annotations, not verified product research.

## Setup and quick start

Requires Node.js 20.9+ and npm (the report builder itself uses Node 20+ APIs).
Sharp is the only direct dependency.

```sh
npm install
npm run build-report -- inspiration/access-sharing/references.stub.json --out inspiration/tmp/report.html
npm run build-report -- inspiration/access-sharing/references.stub.json --out inspiration/tmp/report-embedded.html --embed
npm run fetch-assets -- inspiration/access-sharing/references.stub.json --out inspiration/tmp/assets
npm run crop -- inspiration/access-sharing/references.stub.json --assets inspiration/tmp/assets --out inspiration/tmp/cropped
```

Open either HTML file directly in a modern browser. No server, framework, or CDN
is required. The default report hotlinks images; `--embed` makes images available
offline too. Source links still lead to the original websites. Reports support
selected-only, source, question, and text filters, plus a keyboard-accessible
full-size lightbox (Escape closes it). Selection comes from JSON; filters do not
edit the input or persist between page loads.

## Script usage

```sh
node inspiration/scripts/build-report.mjs <references.json> [--out report.html] [--embed]
node inspiration/scripts/fetch-assets.mjs <references.json> [--out inspiration/access-sharing/assets]
node inspiration/scripts/crop.mjs <references.json> [--assets dir] [--out dir/cropped]
```

- `build-report` defaults to `report.html` beside the input JSON. Optional top-level
  `intro` supplies the introductory paragraph. Unknown question IDs warn on stderr
  and appear in an Unassigned section. Empty questions remain visible.
- `fetch-assets` defaults to `inspiration/access-sharing/assets`. It saves images
  at `<out>/<safe-id>/<zero-based-index>.<ext>` and writes `manifest.json`.
  Paths in the manifest are relative to its directory. Existing nonempty image
  files are skipped; delete a cached file to refresh a changed URL.
- `crop` defaults to those assets and `<assets>/cropped`. It reads crop notes and
  writes `<out>/<safe-id>-<index>.png`, replacing previous crops. It never changes
  the original images or input JSON. It processes any nonempty crop, regardless
  of selection, and does not insert the crops into the HTML report.

All scripts create output directories and accept `--help`. Downloads use native
fetch with a 30-second timeout per attempt and up to three attempts. Image URLs
must be publicly fetchable HTTP(S) URLs with a supported image Content-Type;
browser sessions/authentication are not reused. Embed mode downloads every listed
image (deduplicating identical URLs) and fails without replacing the report if
any download fails. Large collections can make embedded HTML files large.
Asset downloads and crops continue after individual failures, print summaries,
and exit nonzero if anything failed. Failed manifest entries are `null`.

The scripts share CLI, JSON, download, and filename helpers in
`inspiration/scripts/shared.mjs`. Generated test reports and assets belong in
`inspiration/tmp/`, which is ignored by Git. Other existing research/integration
scripts are separate from these utilities.

## Gotchas learned on the first board (2026-09-08)

- **WebP → PNG before uploading to Figma.** Figma cannot read WebP metadata and renders the fill blank. `node inspiration/scripts/convert-webp.mjs <assets dir>`.
- **Mobbin image links expire.** They are per-call redirect links; run `fetch-assets` right after research.
- **Refero `_preview.jpg` may not exist for older flows** (the CDN returns 403). `refero-build-access-sharing.mjs` now HEAD-checks each preview and falls back to the step's `_thumb.jpg` (800px). If a 403 still appears, re-run that script; `build-report --embed --assets <manifest>` leaves any remaining failures hotlinked and warns.
- **One source per product.** `merge-references.mjs` keeps Mobbin (or whichever has the flow) when the same app appears in both sources for a question.
- FigJam pipeline: `figjam-plan.mjs` → `upload_assets` (Figma MCP, 60 per call) → `figjam-upload.mjs` → `figjam-gen.mjs place` → `use_figma`.
