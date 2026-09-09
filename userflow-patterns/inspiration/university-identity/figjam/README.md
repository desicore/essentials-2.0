# Page 2 — resumable execution

Destination is fixed: file `tN2AM7RZD2InF1LYnN0zcn`, existing Page `5:422`. Nothing here creates a file or page. Actual progress lives in `node-map.json`; `expected-state.json` contains the plan and null IDs until execution.

The generated scripts create six tall white sections matching Page 1's question layout, short square blue/red stickies to the left, neutral evidence/limitation text, clickable original-source labels, and full screenshots in original order. Fonts are loaded before text changes. Positions are recalculated from actual rendered text/sticky dimensions to prevent row overlap. Images use explicit existing `SHAPE_WITH_TEXT` targets and original aspect ratios. FigJam supports these native shape nodes; the uploaded image becomes their fill. The test row verifies this route before bulk work.

Canvas sections have human-readable names (`Q1 · <question>` and `University identity · Overview`). Inner nodes retain exact `UIID/2026-09-08/` names. Re-running a batch resolves a section through its human name, legacy internal name, or prefixed heading child; multiple matches cause an error rather than duplicate placement. The next upsert renames a legacy section in place. Origin discovery and verification use the same aliases. Scripts only mutate owned names on Page 2. Every affected ID is returned. A new top-level location is chosen to the right of unrelated existing content. The parent section coordinates are set after append. These research sections use the requested Page 1 arrangement rather than a redesigned workshop template.

## Prepare and inspect

From project root:

```sh
node inspiration/university-identity/scripts/build.mjs
node inspiration/university-identity/scripts/figjam-prepare.mjs
```

Load the installed `figma-use` and `figma-use-figjam` skills before using MCP; use current tool metadata, saved for audit in `tool-metadata.json`. `generated-compact/*.request.json` contains reviewable `use_figma` arguments, and adjacent `.js` files contain the code. Each request embeds only its required section/rows; the older `generated/` files are retained for the already-started test run and must not be used for subsequent batches. The generator only writes local artifacts; it does not invoke Figma.

1. Use `get_figjam` with the exact file key and `nodeId: "5:422"`, then run `00-inspect-page2`. Inspect the current destination and Page 1 conventions again if state has changed. Stop on a wrong page, permissions error or unexpected duplicate research nodes.
2. Run `01-test-reference`. It creates Q1 and the stable Zendesk reference, with a single pending image target. Save the **unwrapped returned object** to `receipts/test-reference.json`. Preserve returned IDs, not only a prose success message.
3. Record actual result:

```sh
node inspiration/university-identity/scripts/figjam-state.mjs record inspiration/university-identity/figjam/receipts/test-reference.json
node inspiration/university-identity/scripts/figjam-state.mjs requests refero:91dab9ae-9676-49b6-8b26-01dde539cb0e
```

## Upload current image assets

`upload-requests.json` now contains actual existing node IDs and matching local assets in order. For each batch, call `upload_assets` with the batch's `request` object. It uses `nodeIds`, `count`, and `scaleMode: "FIT"`. Targets always belong to Page 2, so upload placement cannot drift to the default page. Do not omit target node IDs.

Current tool metadata requires **raw image bytes** with `Content-Type: image/png` or `image/jpeg`. The previous round's multipart helper and a stale skill-reference example are not used. Each URL is single-use. Request at most 60 URLs; these helpers cap batches at 20. POST every returned URL before requesting the next batch. Default auto-commit is used; do not request `batchCommit`.

Save the unwrapped upload response temporarily **outside research files**, using mode 0600. Do not place upload URLs or tokens in this collection. Run:

```sh
node inspiration/university-identity/scripts/figjam-upload-raw.mjs /tmp/university-identity-upload-response.json 0
```

The uploader requires matching returned `targetNodeId`, validates PNG/JPEG and the 10MB limit, posts each raw asset once, and logs only sanitized IDs/statuses/hashes. It records `attempting` before sending; an uncertain response becomes `ambiguous`, never an automatic retry. Inspect the target fill before resolving an ambiguous upload and requesting a new URL. Successful completion removes the temporary response file. Never reuse a single-use URL.

Get a screenshot of the actual test section, inspect the complete row, source link, sticky text and actual image pixels, and retain the screenshot/verification result. A filled shape alone is not proof that the screenshot rendered correctly. Fix the tested code before continuing if anything is wrong.

## Finish in small batches

After the test row passes, regenerate local scripts if reference inputs changed. The stable named Zendesk nodes will be reused.

1. Run `02-create-sections-and-intro`.
2. Run `03-rows-Q1` through `03-rows-Q6`, one call at a time. Save and record every unwrapped returned object with `figjam-state.mjs record ...`. Inspect batches while building. The full Q1 pass reuses the test row and adds remaining rows.
3. Run `figjam-state.mjs requests` without a reference filter. Call `upload_assets` and the raw uploader for each current batch in order. Regenerating requests skips uploaded/verified and ambiguous targets. Do not run the request builder midway through an outstanding URL batch.
4. Run `04-verify-page2`; save its returned object, then record it with `figjam-state.mjs record-verification <result.json>`. It checks expected annotations, images, aspect ratios and section bounds. It reports actual image hashes.
5. Inspect section and representative full-row screenshots after uploads, including long flows and final states. Verify source hyperlinks, all images, ordering, omissions, readable labels and no overlaps. Only then mark actual verified completion in the node map, with evidence pointers. Do not report planned counts as placed counts.

Full sequences remain embedded in `../report.html`. The board shows up to eight selected original steps and states omissions explicitly, with a readable local report path/reference ID. Only original source links are clickable URLs; no nonexistent hosted report URL is invented.

## Recovery and final state

`node-map.json` tracks actual section/reference/image IDs and upload status. A placeholder target counts as a created node. HTTP 200 only increments `uploadedAssetCount`; it does not establish a placed image. `placedImageCount` requires actual readback of an IMAGE fill matching the hash returned by that upload. A reference counts as placed only after its annotations and every selected image pass readback. `placementComplete` requires the full expected reference and image counts. Visual verification remains a separate requirement. Counts are recalculated from recorded actual results. Structural checks and visual verification remain distinct. Generated code and request files are safe to regenerate; receipt and node-map files must be preserved.

After any `use_figma` error, read and correct it before retrying. The current tool documents atomic script execution. After an upload network error, inspect existing image fills; an uncertain HTTP response may follow a completed placement. On resume, run `00-inspect-page2` and compare names/IDs with the local node map before additional work.

## Upload placement reconciliation

The first test returned HTTP 200 and an image hash while its intended target retained a solid fill. Inspect actual target readback; do not infer placement from the HTTP result. The uploader now saves sanitized response keys, nested value types, commit-URL presence and placement IDs/hashes without preserving capability URLs.

When an image hash has been returned by a real upload to this file, the supported image-hash reuse route can explicitly assign it to the existing target. Prepare reviewable scripts after the upload batch:

```sh
node inspiration/university-identity/scripts/figjam-reconcile.mjs
```

This creates new `05-reconcile-uploaded-hashes` and `06-verify-uploaded-images` compact requests. `05` assigns existing hashes with FIT; it never uploads bytes. `06` performs a separate read-only inspection of actual fills, expected hashes, page ownership and aspect ratios. Save the unwrapped `06` result and record it with `figjam-state.mjs record-verification ...`. The structural result is complete only when every expected reference and image is accounted for. Inspect actual screenshots too. An optional reference ID argument limits reconciliation to one reference for a test or repair; comma-separated question IDs such as `Q3,Q4` select a batch. The separate readback also resolves each referenced image and checks positive resident dimensions. Do not gate assignment on `getImageByHash` first: the tested upload returns an unreferenced hash that becomes resident after its first explicit fill assignment. Fonts are loaded before changing the shape fill.

If assignment errors or still renders blank, inspect the actual upload response and current tool instructions before requesting new single-use URLs. Do not replay an old URL. `figjam-state.mjs recount` recalculates counts without assuming an uploaded blob is placed.
