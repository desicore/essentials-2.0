# University identity research — 2026-09-08

Internal evidence collection for Essentials 2.0 / LearningSpace. The scope and exact six questions are in [brief.md](brief.md). Product screenshots are real collected evidence. Documentation entries deliberately have no screenshot when none was collected. Adaptations are hypotheses, not LearningSpace capabilities.

Open [report.html](report.html) directly in a browser. All available screenshots are embedded, in complete collected order, with a full-size lightbox. Filters cover source, evidence type, question, selection and text. No network connection is needed for the report images; source links lead to original services.

Rebuild from the project root:

```sh
node inspiration/university-identity/scripts/build.mjs
node inspiration/university-identity/scripts/verify.mjs
```

The isolated builder merges `documentation-references.json`, `library-references.json` and, if present, `mobbin-references.json`. It preserves evidence metadata and uses only local assets. Existing assets, prior-round scripts and Page 1 research are not modified. Missing source assets appear as explicit unavailable blocks; the builder never silently hotlinks them. Rebuilding preserves an existing FigJam node map.

## Schema compatibility

The main collection follows `inspiration/schema.md` with an explicit additional `source: "documentation"` value for official documentation. The local normalizer supports this value; the previous shared scripts would classify it as unknown and discard evidence metadata, so use this round's isolated scripts.

Additional fields retained on each reference include `actor`, `observed`, `adaptation`, `limitation`, `evidenceType`, `accessedAt`, `sourceIds`, `steps`, `localAssets` and optional `boardStepIndices`. Text-only documentation references keep `kind: "screen"` and `images: []` for existing-schema compatibility; the report labels them **Documentation evidence — no product screenshot**. Entries with official product illustrations keep those images and their source order, explicitly labeled as documentation illustrations rather than a captured live session.

`assets/manifest.json` maps each reference ID to relative asset paths, relative to `assets/`, preserving image indices. `assets/metadata.json` adds source URLs, stable step IDs, dimensions, file sizes, formats and SHA-256 values. A missing image maps to null. Source URLs may expire; local bytes remain usable.

`board-plan.json` targets only file `tN2AM7RZD2InF1LYnN0zcn`, Page `5:422`. It specifies six tall white sections in a horizontal arrangement, a short left sticky, ordered full screenshots and neutral text for evidence/adaptation/questions. Blue `#A8DAFF` means positive; red `#FFB8A8` means counter-example, matching the inspected Page 1 legend. Full images retain aspect ratio. Per-flow board selections contain at most eight original indices and preserve the final collected state; omissions are explicit. The HTML report always retains the complete collected sequence.

A local report link may not be clickable from FigJam. Board annotations should show the project-relative report path and reference ID/fragment as text, plus a genuine clickable source URL. Do not invent an online hosted report URL.

## Placement state

See `figjam/node-map.json` for actual placement state and verified counts. `board-plan.json` is a placement plan, not a record of work completed in FigJam. Null IDs and pending status must never be reported as placed nodes. The node map is updated only from actual successful Figma operations.
## Completed FigJam placement — 2026-09-08

[Open Page 2 in FigJam](https://www.figma.com/board/tN2AM7RZD2InF1LYnN0zcn/Essentials-2.0---Inspiration?node-id=5-422): **32 references, 62 images, six question sections and one synthesis overview**. All 32 source hyperlinks, image order, section/row bounds and explicit omission notes passed inspection. All 62 actual image hashes match the uploaded assets and resolve to resident images; section and representative closeup screenshots were inspected. The report retains all **69 images** and complete collected sequences.

The original Page 1 baseline remained unchanged in the final read-only comparison; all writes were guarded to Page 2. Two thin Canvas documentation excerpts display at native width for readability while keeping the complete original images. Documentation-only evidence and screenshot zoom limitations remain explicit. Missing university-specific end-to-end evidence is documented in [research-notes.md](research-notes.md).

Actual IDs, upload/image state and verification receipts are recorded in [figjam/node-map.json](figjam/node-map.json) and [figjam/final-verification.json](figjam/final-verification.json). The initial connector failure is retained as history in [figjam/access-status.json](figjam/access-status.json); the existing authorized Claude cloud route completed the placement without authentication or configuration changes.
