# Plain-language rewrite: Phase 1 report

All 8 product-first reports (03 to 10) are rewritten for non-designer readers and rebuilt, along with `inspiration/index.html`. `node verify.mjs all` passes for every module: no structural change against `backup/`, no sentence over 30 words, no banned words, no leftover "(step ...)" references, no dashes or curly quotes, every listed abbreviation spelled out on first use, and every "(screen N)" inside its flow. `build-gallery.mjs --check` shows 0 errors for every module. Nothing is committed.

## Word counts (rewritten fields only)

| Module | Before | After | Change |
|---|---|---|---|
| 03-scenario-manager | 5053 | 5978 | +18% |
| 04-recording | 5116 | 5750 | +12% |
| 05-inventory | 3614 | 3951 | +9% |
| 06-scheduling | 5099 | 5750 | +13% |
| 07-reports | 3733 | 5202 | +39% |
| 08-debrief-review | 4417 | 5285 | +20% |
| 09-mobile-ipad | 5042 | 5947 | +18% |
| 10-dashboard | 5459 | 6025 | +10% |
| Total | 37533 | 43888 | +17% |

The growth comes from spelling out jargon and abbreviations and from giving each sentence a subject and a verb. The longer text was approved after the pilot. 03, 07 and 08 grew most because their notes got a second, hand-written pass (see below); the original notes there were the most compressed.

## Five before/after pairs

1. Worth borrowing bullet (04-recording, Riverside)
   - Before: "Toast with absolute timestamp: 00:03:59 Clip created from marker, dismissible (step Toast Clip created)."
   - After: "A short pop-up message gives the exact time in the recording ('00:03:59 Clip created from marker') and can be closed (screen 2)."
2. Product "why" (04-recording, Grain)
   - Before: "The only product that makes auto-record a scoped choice (all meetings vs. next only) and grades one speaker at a time under the video, including AI-filled criteria with evidence timestamps."
   - After: "Grain is the only product that lets you choose where auto-record applies (all meetings, or just the next one). It grades one speaker at a time under the video, and its AI links each score to the moment that supports it."
3. Product "why" (10-dashboard, Fresha)
   - Before: "The closest match to a sim coordinator's day: a home with two sales KPIs and a 7-day trend above today's next appointments (time, status, staff), plus a staff-as-columns day grid with a now line that reads like rooms-as-columns. Its agenda rows show status only, with no Start action."
   - After: "Fresha is the closest match to a sim coordinator's day. Its home shows two sales headline numbers and a 7-day trend above today's next appointments (time, status, staff). It also has a day grid with one column per staff member and a line marking the current time, which could work with one column per room. Its agenda rows show status only, with no Start action."
4. Pattern (09-mobile-ipad)
   - Before: "The timer lives outside the app, but only natively. ... It is also native-only: a web client or a phone-banned exam gets none of it, so a large in-app full-screen timer is the fallback that must work everywhere."
   - After: "The timer lives outside the app, but only in an installed phone app. ... It also only works in an installed phone app (a native app), so a web page or a phone-banned exam gets none of it. A large in-app full-screen timer is the fallback that must work everywhere."
5. Worth borrowing bullet with a corrected screen number (05-inventory, Luma)
   - Before: "Green Check In Successful banner that keeps the camera live (steps 3–4) — high-throughput continuous scan."
   - After: "A green 'Check In Successful' message keeps the camera live for continuous scan (screens 4–5)."

## Fixed along the way: wrong screen numbers in the originals

Many original notes counted steps from 0, while the page numbers screenshots from 1, so "(step 3)" sent readers to the wrong screenshot. This affected at least 22 flows, including every numbered flow in 10-dashboard and eight in 07-reports. The rewrite checks each reference against the step labels and uses the page's numbering. `verify.mjs` flags any screen number outside a flow, and lists mismatches for review. `show-flow.mjs` prints a flow's numbered labels next to the old and new text. The flows reviewed by hand are listed in `accepted.json`.

## Left technical on purpose

- "Summative" and "formative": sim-center directors use these words daily, and plain substitutes lost meaning.
- Product feature names stay as the product calls them: Dynamic Island (explained once), Live Activity, HiLight, Drop In, Mark Clip, gadget (Jira, explained), Participant Minutes (Whereby).
- Essentials names stay: SRV, Center Overview, Data Entry, Abbott checklist, TouchPro, SimCreate, Maestro, Case Manager.
- The 'check' words in the style guide (banner, badge, sidebar, toggle, tile, roster) remain where the sentence makes them clear.

## Known weak spots

- The notes for 03, 07 and 08 got a second, hand-written pass after the roll-out, because the Sonnet rewrite there still had shorthand bullets ("Tolerance (15 min) control before loading adherence", "Format choice PDF versus IMAGE before send", "D-pad and Assistant chrome"). The edits are kept as patch files in `polish/` and applied with `patch-notes.mjs`, which refuses any change to list lengths. The notes of 04, 05, 06, 09 and 10 had only the Sonnet rewrite plus the checker; they read better but were not read line by line. All `module.json` files got a full read and edit.
- A second copy of this orchestrator ran in parallel for part of the session and edited `module.json` in 03, 05, 06, 07, 08 and 09 plus the index builder. It was stopped. Its edits were kept after review. The final text of every `module.json` was read after it stopped.
- The Haiku checker added entries to `accepted.json` against its brief. Each entry was checked by hand against the step labels; all point at the right screens.

## Files

`style-guide.md`, `glossary.md`, `brief.md` (roll-out brief), `verify.mjs`, `show-flow.mjs`, `dump-notes.mjs` (prints a module's notes compactly), `patch-notes.mjs` and `polish/` (hand-written note edits), `accepted.json`, `backup/` (originals of all module JSON, both builder scripts and `index.html`), `pilot-top.png`, `pilot-card.png`, this report. Builder label changes are in `userflow-patterns--user-mgmt/inspiration/scripts/build-gallery.mjs` and `build-gallery-index.mjs`.

# Phase 2: Courses and User management reports

The 9 Courses reports, User management R1 and R2, both shortlist files and `inspiration/index.html` are rewritten and rebuilt. `node verify.mjs phase2 all` passes for all 13 pages: no structural change against `backup/phase2/`, the same `<img>` counts, links and headings as before, and no long sentences, banned words, dashes, curly quotes or unexpanded abbreviations. `node verify.mjs all` still passes for 03 to 10, and `phase1-guard.mjs check` confirms that none of the 3,866 Phase 1 files changed. No generator script was rerun (the stub files, `annotate.json`, notes and assets are untouched, and every edit survived its rebuild). Nothing is committed.

## Word counts (whole visible page, including labels)

| Report | Before | After | Change | `<img>` |
|---|---|---|---|---|
| Courses 01: objectives, outcomes and requirements | 2969 | 3385 | +14% | 38 |
| Courses 02: files, links and media | 3067 | 3407 | +11% | 62 |
| Courses 03: skills and competencies | 3233 | 3487 | +8% | 54 |
| Courses 04: learner groups | 2941 | 3376 | +15% | 44 |
| Courses 05: scenarios | 3463 | 3929 | +13% | 87 |
| Courses 06: events | 5341 | 5450 | +2% | 184 |
| Courses 07: share with participants | 3422 | 3704 | +8% | 57 |
| Courses 08: recordings and course reports | 3144 | 3485 | +11% | 61 |
| Courses 09: announcements and sending materials | 4806 | 5233 | +9% | 125 |
| R1: access, roles and sharing | 9154 | 10265 | +12% | 616 |
| R2: university sign-in, directory sync and user import | 6565 | 7355 | +12% | 70 |
| User Manager shortlist | 2127 | 2908 | +37% | 47 |
| Index | 393 | 452 | +15% | 0 |
| Total | 50625 | 56436 | +11% | |

Every page gained about 65 words from the new "How to read this page" box. The shortlist grew most because its "Next step" section now shows text (see below) and its terse notes became full sentences.

## Five before/after pairs

1. Top example (Courses 01, Udemy)
   - Before: "The strongest direct course-outcome editor: separate required items, visible counters and an explicit public destination."
   - After: "Udemy has the clearest editor for course outcomes. Each outcome is a separate required item, with a character counter, and it says where learners will see them."
2. Question title (Courses 05, Q3)
   - Before: "Instance vs. reference semantics (edits to master propagate? per-course overrides?)"
   - After: "When you add a library item, is it a copy or a link: do later edits to the original reach the course, and can the course change its own settings?"
3. Card note (R1, Better Stack)
   - Before: "Magic link is the primary CTA, password is a secondary text link, SSO is a separate block: a clear hierarchy that makes passwords the exception."
   - After: "Better Stack puts the magic link (a sign-in link sent by email) as the main button, makes password a secondary text link, and keeps SSO in a separate block. Passwords become the exception."
4. Table legend (Courses 04)
   - Before: "✓ = the named behavior is visible; partial = incomplete evidence or an analogy; ✗ = not demonstrated by the retained collection. These are evidence labels, not product feature scores."
   - After: "A check mark (✓) means the screenshots show the named behavior. Partial means the evidence is incomplete, or comes from a similar idea in another kind of product. A cross (✗) means none of the kept examples shows it. These labels describe what the screenshots show, not how good a product is."
5. Shortlist intro
   - Before: "Result: 169 refs → 41 keeps + 10 counter-examples."
   - After: "We looked at 169 examples and kept 41, plus 10 examples of what not to do."

## The `nextStep` finding

The recon was right: `build-shortlist.mjs` read `meta.nextStep`, but the data keeps `nextStep` at the top level, so the "Next step" section of the shortlist was an empty paragraph in both shortlist files. I changed that one lookup to `meta.nextStep ?? data.nextStep`. The section now reads: "The final selection step in `PLAN.md` is still open: nothing in either `references.json` is marked `selected: true`. This shortlist is the proposed selection. Marking these 41 kept examples and 10 examples of what not to do as shortlisted, then regenerating both reports, would produce the version for the client."

## Left technical on purpose

- Reference ids (such as "mobbin:3558619c-...") still show on cards and as the link text in the summaries. They are the jump links to each card and are generated by the post-processors.
- The eyebrow line still shows the folder name (for example "04-learner-groups"), as in Phase 1.
- R2 stays more technical than the rest. Its readers include university IT. SAML, LDAP, SCIM, LTI, NRPS, JIT and IdP are spelled out once and then kept, and the "Priority questions for university IT" stay worded for IT.
- Product labels stay as the products name them, explained once where needed: Teachable's 'drip', Figma's 'Insert instance', Understory's 'Experience', Kajabi's 'Lock'. "Magic link" stays in R1 card titles; the notes explain it.
- The comparison tables keep short phrases in their cells rather than full sentences.
- The shortlist intro keeps the file names (`user-manager-map-index.md`, `.context/user-manager-shortlist/node-*.md`, `PLAN.md`) because they tell the team where the reasoning lives.
- The Courses 07 method note (collapsed, "What the examples cover, and how we found them") still names the research agents (Luna, Sol, Astra), because it records how the evidence was gathered. It now says in plain words what each one did.
- R1 notes on examples of what not to do still start with "What not to copy:", followed by a full sentence.

## Changes to how things are built

- Shared labels in `scripts/build-report.mjs`: "Search examples", "Shortlisted only", "Show questions", "N examples", "Example of what not to do", "View original ↗", "Screen N of M", "Single screen" / "Screen sequence", plus a "How to read this page" box under the intro. The box is a single paragraph so that the Courses 05 post-processor, which inserts after `</p></header>`, still works. R2's own builder got the same labels and box.
- `build-gallery-index.mjs`: the earlier reports have readable names (for example "Courses: share with participants"), the "Flows" column is now "Screen sequences", and the earlier-reports list has a one-line intro. The Phase 1 gallery rows are byte-identical.
- The recon had the shortlist data path one folder off. `build-shortlist.mjs` reads `inspiration/.context/user-manager-shortlist/shortlist-data.json`, not `userflow-patterns--user-mgmt/.context/...`. The copy is there now. `.context/` is ignored by git, so this file does not show in `git diff`; its backup is in `backup/phase2/shortlist/`.
- `share/01` could not be rebuilt with its Python step (that needs the network). `patch-share01.mjs` does what the Python does, offline: it swaps each image source for the embedded image already in the old `share/01`, and rewrites the two sibling-report links. It writes only after checking that the same steps applied to the old page reproduce the old `share/01` byte for byte. The result has the same 47 images and visible text identical to `user-manager-shortlist.html`, and it is 0.2% larger.
- R2's `build.mjs` also rewrote `references.json` and `board-plan.json` (both now carry the new wording). `assets/metadata.json` changed only in its `generatedAt` stamp and was restored from the backup; `assets/manifest.json` came out unchanged.

## Not updated

- `share/user-management-inspiration-research.zip` and `share/verify/*.png` still hold the old wording (not regenerated, as instructed).
- `user-manager-shortlist.md` (hand-written) and `user-manager-map-index.md` were left alone and now differ in wording from the shortlist pages.
- The generator scripts (`synthesise.py`, `annotate.mjs`, `annotate.json` and the rest) still hold the old wording. Rerunning any of them would bring the old text back.

## Known weak spots

- I read every report's intro, question answers and summary block myself and fixed what I found. Courses 01, 05, 06 and 09 got a second agent pass on their summaries. The card notes (about 600 in total) were written by the agents and checked by the verifier and by spot checks, but I did not read them all line by line.
- R1 was split between two agents. The second half (Q4 to Q6) is a lighter edit than the first; some card titles stay close to the library's names, for example "Lesson status Draft Published Scheduled".
- The verifier only splits sentences before a capital letter, so a sentence that starts with a symbol or a lowercase word can hide inside a longer one. Phase 2 adds its own list of banned researcher words (for example "counterexample", "converge pass", "analogue", "unverified"), in addition to the style guide's list.

## Files (Phase 2)

`brief-phase2.md` (roll-out brief), `glossary.md` ("Added in Phase 2" section), `verify-phase2.mjs` (loaded by `verify.mjs phase2`), `show-page.mjs` (prints a page's visible text with verifier line numbers), `replace-text.mjs` (exact-match review edits), `patch-share01.mjs`, `phase1-guard.mjs`, `backup/phase2/` (originals, the baseline stats of every page, and Phase 1 checksums), `accepted.json` (index entries for the unchanged Phase 1 gallery rows), and the screenshots `phase2-courses-04-top.png`, `phase2-r1-cards.png` and `phase2-r2-cards.png`.
