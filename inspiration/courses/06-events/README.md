# Adding events to courses — research module

Open `../06-events.html`. Final: 50 references, 29 products, 177 unique embedded images, six question sections, three counter-examples (Preply refero:9226, Acuity refero:9872, Understory refero:023aed7b). All references unselected. Report is 6.2 MB.

Search/merge produced 103 references across 56 products; `cut.mjs` (keep-list, drops recorded in `cut.json`) took it to 59 before the pattern pass, and `annotate.mjs` applied the six pattern agents' drop recommendations, take corrections, counter-example flags and the six answers. `notes/Q1.md`–`Q6.md` hold the evidence review.

## Rebuild

From the workspace root:

```sh
PIPE=userflow-patterns--user-mgmt/inspiration/scripts; MOD=courses/06-events
node $PIPE/merge-references.mjs $MOD           # only for a fresh merge; then:
node $MOD/post.mjs header                      # restore module header (merger hard-codes the previous one)
node $MOD/cut.mjs && node $MOD/annotate.mjs    # reviewed keep-list, takes, flags, answers
node $PIPE/fetch-assets.mjs $MOD/references.json --out $MOD/assets
node $PIPE/build-report.mjs $MOD/references.json --embed --assets $MOD/assets/manifest.json --out courses/06-events.html
node $MOD/post.mjs synthesis courses/06-events.html $MOD/synthesis.html
```

`refero-build.mjs` is the Refero fetch helper the fetch agent wrote (moved here from the shared scripts folder). QA was done in Playwright over `python3 -m http.server`; `qa-top.jpg` is the viewport capture. Shared scripts and other modules were not edited.
