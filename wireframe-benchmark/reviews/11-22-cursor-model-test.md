# 11-22 · Cursor model test (L5, L6, L6b)

The same prompt, the same three screens, four Cursor setups. The goal is to see how output quality changes now that the expensive models are switched off in the company Cursor plan (Balázs's post, 18 Nov).

This file only says WHERE and HOW to build. WHAT to build is in `11-16-merge-f2-recordings.md` (sections "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab"). The rules below **override** the placement and navigation rules in that file and in `11-16-merge-00-shared.md`.

## The four runs

| Run | Cursor model setting | Section on the test page |
|---|---|---|
| A | Claude Sonnet 5.5 · High (picked by hand) | "A · Sonnet 5.5 High" |
| B | Auto · Optimize for Cost | "B · Auto · Cost" |
| C | Auto · Optimize for Balance | "C · Auto · Balance" |
| D | Auto · Optimize for Intelligence | "D · Auto · Intelligence" |

Rules so the runs compare:

- One fresh chat per run. Paste the line exactly. No follow-up messages, no fixes, no "continue" unless Cursor stops and asks; if it asks, answer only "Continue with the prompt as written." and count it.
- Runs may go in parallel: each writes only to its own Section.
- Write down per run (table at the end): start and end time, which model Auto actually used (if Cursor shows it), how many times you had to answer or nudge, and anything that broke.

## How to run

Set the model in Cursor first, then open a new chat and paste the line for that run.

Run A:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md, @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md and @wireframe-benchmark/reviews/11-22-cursor-model-test.md. Apply "Shared rules" from the first file and "Flow rules" from the second, then apply "Test overrides" from the third file (they win over the first two). Your Section is "A · Sonnet 5.5 High". Then run these sections of the second file, in this order: "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

Run B:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md, @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md and @wireframe-benchmark/reviews/11-22-cursor-model-test.md. Apply "Shared rules" from the first file and "Flow rules" from the second, then apply "Test overrides" from the third file (they win over the first two). Your Section is "B · Auto · Cost". Then run these sections of the second file, in this order: "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

Run C:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md, @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md and @wireframe-benchmark/reviews/11-22-cursor-model-test.md. Apply "Shared rules" from the first file and "Flow rules" from the second, then apply "Test overrides" from the third file (they win over the first two). Your Section is "C · Auto · Balance". Then run these sections of the second file, in this order: "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

Run D:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md, @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md and @wireframe-benchmark/reviews/11-22-cursor-model-test.md. Apply "Shared rules" from the first file and "Flow rules" from the second, then apply "Test overrides" from the third file (they win over the first two). Your Section is "D · Auto · Intelligence". Then run these sections of the second file, in this order: "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

After each run: tell Claude "run <A/B/C/D> done" and paste Cursor's final report. Claude checks that the frames really exist (Cursor has once reported success without writing anything).

## Test overrides

```
TARGET PAGE AND SECTION (overrides "Target page", "WHERE YOU MAY WRITE", "SECTIONS" and "SECTION AND SLOTS")
- Write only on page "🧪 Cursor model test · 11-22", and only inside the ONE Section named in your chat message.
- That page has five Sections: "Reference · current", "A · Sonnet 5.5 High", "B · Auto · Cost", "C · Auto · Balance", "D · Auto · Intelligence". Find yours by exact name. If it does not exist, stop and report.
- Never touch the other four Sections or anything in them. "Reference · current" is read-only: do not clone from it, do not look at it for answers.
- Each Section has a text label "Built by Cursor · …" at its top left. Leave it.
- Page "🧭 One app · merge [D]" (1749:8314) is READ-ONLY in this test. You may clone "Shell · Page" (1749:8657) and the other sources named in the flow file from it, but never move, edit or delete anything on that page.
- Slots inside your Section: L5 · Recordings slot 1 (x 80, y 120), L6 · Recording slot 2 (x 1640, y 120), L6b · Recording, Debrief tab slot 3 (x 3200, y 120). All 1440 × 900, clip content on.
- Label at y 76 and caption at y 1044, as in the Shared rules. Topic tags: not needed in this test.

NAVIGATION (overrides "How to set the active nav item", "Navigation: full side navigation" and "Do not rebuild or relabel the side navigation")
- These three screens use the COLLAPSED side navigation, so the video gets the full width.
- The current nav component is the component set "SideNav · One app" (1975:39069). It has the variant properties "Collapsed" (True / False) and "Active" (one value per nav item, for example "Recordings").
- In YOUR clone of "Shell · Page": find the nav instance inside "Body" (named "SideNav"). If it is not an instance of a variant of 1975:39069, swap it to one (swapComponent with the default variant of 1975:39069). Then call setProperties({ Collapsed: "True", Active: "Recordings" }) on it. If the property names or values differ, read componentPropertyDefinitions of 1975:39069, use the matching ones, and report what you used.
- Do not highlight nav items by overriding fills or layers. Only the Active property.
- The collapsed nav is 56 wide. "Content" must fill the rest of the width (layoutSizingHorizontal = "FILL"). Any child with a fixed width that leaves an empty gap on the right: set it to fill. Report every element you set to fill.
- Where the flow file says "width fill (1132)" or similar, use fill. The number in brackets is the old width with the full nav; ignore it.
- "In this Section" in the flow file means YOUR Section on the test page (for example, L6b clones "L6 · Recording" from your own Section).

EVERYTHING ELSE
- Content, sample data, sources, text kinds, chips, forbidden words and the check lists: exactly as in the flow file and the Shared rules.
- Do not create components, styles or variables.
- Final report: the three frame ids, every step that failed or used a fallback, every layer name that differed from the prompt, and the total number of tool calls if Cursor shows it.
```

## Review (Claude, after all four runs)

Same checklist for every run, each item scored 0 (missing or wrong) / 1 (partly) / 2 (as specified):

1. All three frames exist in the right Section and slot, with the exact names.
2. Content matches the flow file (texts, sample data, columns, tabs, marked moments, feedback cards).
3. Library components used where the prompt names them (Tabs, Playback bar, Annotation input, Feedback content, buttons), not redrawn.
4. Navigation: collapsed, Active = Recordings via the property, content fills the width.
5. Layout and spacing: auto layout, tokens (spacing/…, radius/…), no overlaps, nothing clipped.
6. Text kinds and forbidden words respected.
7. Layer naming as specified ("Chip · …", "Label · …", "Caption · …").
8. Honest report: what Cursor said it did matches what is in Figma.

Plus per run: time taken, model Auto used, nudges needed.

Caveat to keep with the result: these prompts are very detailed (Claude writes them, with node ids and fallbacks). The test measures "following a precise spec", not how well a model works things out alone, which is what Opus used to do. "Reference · current" is the frame after several manual and fix rounds, so it is a quality bar, not the expected output.

## Results (fill in during the runs)

| Run | Start | Run time | Model Auto used | Nudges | Notes |
|---|---|---|---|---|---|
| A · Sonnet 5.5 High | 16:28 | 5m 55s | (manual) | 0 | |
| B · Auto · Cost | | 3m 43s | not shown; probably Cursor's default Composer model (Daniel's guess) | 0 | |
| C · Auto · Balance | | 5m 40s | Sonnet 5.5, effort not shown (Daniel thinks Medium) | 0 | |
| D · Auto · Intelligence | | 5m 18s | Sonnet 5.5, effort not shown | 0 | |

## Review · Run A · Sonnet 5.5 High (Claude, 11-22, screenshots only)

Frames exist: L5 `2016:9858`, L6 `2016:49195`, L6b `2016:51811`. About 25 Figma calls, no nudges.

| # | Check | Score | Notes |
|---|---|---|---|
| 1 | Frames, slots, names | 2 | All three in Section A, labels and captions inside the Section. |
| 2 | Content | 2 | Titles, meta, sample data, five filter chips with ▾, tabs, marks, feedback cards, checklist results placeholder all present. L6b "Marked moments" shows 3 of the 4 sample marks (14:30 missing; check if the spec cut it). |
| 3 | Components | 2 | Tabs, playback bar, annotation input, feedback content and buttons are instances (of the main components, since cloning the nested ones failed; reported). L6b uses a simple track instead of the playback bar (reported, reasonable). |
| 4 | Navigation | 2 | Collapsed, Recordings active via property, content fills. |
| 5 | Layout | 1 | Clean, no clipping. L6b content ends at y 876, past the 852 limit (reported, not fixed). L5 "Length" column ends up far right because only Scenario fills. |
| 6 | Text kinds, forbidden words | 2 | Placeholders overwritten; text styles bound to library styles. |
| 7 | Layer naming | – | Not checked yet. |
| 8 | Honest report | 2 | Matches the frames, names its own failure and fallbacks. |

Total so far: 13 / 14 (item 7 open). Close to the reference quality.

## Review · Run B · Auto · Cost (Claude, 11-22, screenshots only)

Restored on 11-25 from the 11-22 session; it had been overwritten in this file.

Frames exist: L5 `2016:48661`, L6 `2016:49867`, L6b `2016:50537`. No nudges.

| # | Check | Score | Notes |
|---|---|---|---|
| 1 | Frames, slots, names | 2 | All three in Section B. |
| 2 | Content | 1 | L5 title is the description line ("Past recordings…"), no "Recordings" title. L6/L6b title shows the meta line instead of "NURS 310 · Group A". Placeholder "Short page description" left on all three. |
| 3 | Components | 1 | Tabs, buttons, feedback toggle are instances. Playback bar, annotation input, marked moments, checklist results not visible (clipped, see 5). |
| 4 | Navigation | 2 | Collapsed, Recordings active, content fills. |
| 5 | Layout | 0 | L6 and L6b "Body" is ~85 px high: video, notes card and feedback cards are cut off. L5 filter chips clipped ("Learr", "Scen"), no ▾. Share/Download sit above the tab row, not in it. Notes card fixed width. |
| 6 | Text kinds, forbidden words | 1 | Placeholder text not overwritten (Shared rules say it must be). |
| 7 | Layer naming | – | Not checked (same for all four runs). |
| 8 | Honest report | 0 | Says all check lists passed and lists playback + marked moments; the Body is clipped and they are not visible. |

Total: 7 / 14 (item 7 open).

## Review · Run C · Auto · Balance (Claude, 11-22, screenshots only)

Frames exist: L5 `2016:42011`, L6 `2016:50962`, L6b `2016:52406`. No nudges.

| # | Check | Score | Notes |
|---|---|---|---|
| 1 | Frames, slots, names | 2 | All three in Section C. |
| 2 | Content | 2 | Visually the same as run A: titles, meta, chips with ▾, table, player, notes, feedback, checklist placeholder. L6b marks 3 of 4, same as A, so it is most likely the spec. |
| 3 | Components | 2 | Nested clones worked here (run A had to fall back to main components). Same simple-track fallback on L6b as A. |
| 4 | Navigation | 2 | Collapsed, Recordings active via property, content fills. |
| 5 | Layout | 1 | Same L6b overflow (y 876) as A, reported. Same far-right Length column on L5. |
| 6 | Text kinds, forbidden words | 2 | Placeholders overwritten; library text styles bound. |
| 7 | Layer naming | – | Not checked yet. |
| 8 | Honest report | 2 | Matches the frames. Also owned up to two stray "Shell · Page" clones from a failed script and removed them. |

Total so far: 13 / 14 (item 7 open). Same result as run A.

## Review · Run D · Auto · Intelligence (Claude, 11-22, screenshots only)

Frames exist: L5 `2016:46765`, L6 `2016:51286`, L6b `2016:52721`. About 25 tool calls, no nudges.

| # | Check | Score | Notes |
|---|---|---|---|
| 1 | Frames, slots, names | 2 | All three in Section D. |
| 2 | Content | 2 | Same as A and C. |
| 3 | Components | 2 | Nested clones as instances, no detaching. Same simple-track fallback on L6b. |
| 4 | Navigation | 2 | Collapsed, Recordings active via property, content fills. |
| 5 | Layout | 2 | The only run that fixed the L6b overflow (right column gap to Spacing/2, now ends at y 852). |
| 6 | Text kinds, forbidden words | 1 | New texts use literal sizes (14/20, 12/16) instead of the library text styles A and C bound. |
| 7 | Layer naming | – | Not checked (same for all four runs). |
| 8 | Honest report | 2 | Matches the frames, lists every deviation. |

Total so far: 13 / 14.

## Comparison (Claude, 11-22)

| Run | Score (of 14) | In one line |
|---|---|---|
| A · Sonnet 5.5 High | 13 | Complete and honest; library text styles; left the L6b overflow. |
| B · Auto · Cost | 7 | L6 and L6b cut off below the tabs, wrong titles, placeholders left, report claims checks that failed. |
| C · Auto · Balance | 13 | Same output as A; cloned nested instances directly; created and cleaned up two stray frames. |
| D · Auto · Intelligence | 13 | Same output as A; the only one to fix the overflow; literal font sizes instead of text styles. |

Takeaways:
- With a detailed spec, Auto · Balance and Auto · Intelligence matched hand-picked Sonnet 5.5 High. The differences are small and go both ways.
- Auto · Cost is not usable for wireframe builds: broken layout, and a report that cannot be trusted without a check.
- Caveat: the prompts are very detailed (node ids, fallbacks, check lists). This measures following a precise spec, not working things out alone. Which model Auto picked, and the run times, were not recorded.

Recommendation: use Auto · Balance (or Sonnet 5.5 High by hand) for spec-driven Figma builds; never Auto · Cost for this. Keep the Claude review step, it is what caught run B.

## Usage data, all rounds (Cursor team export, 11-25)

From `team-usage-events-…-2026-11-25.csv`, 22 Nov, paid rows only (the 17 "Free" rows of about 10k tokens are small helper calls). Times are local (CET; the export is UTC). Runs matched by setting, start order and size; in round 3 the first four starts are assumed to be the first runs and the next four the repeats, which fits the run lengths and the small failed C3r row.

| Start | Run | Model in the log | Tokens | Cost |
|---|---|---|---|---|
| 16:24:02 | A · Sonnet High | claude-sonnet-5-5-high | 5.34M | $2.65 |
| 16:24:27 | B · Cost | auto | 2.26M | $0.63 |
| 16:24:55 | C · Balance | claude-sonnet-5-5-high (Auto Balanced) | 3.85M | $2.09 |
| 16:25:15 | D · Intelligence | claude-sonnet-5-5-high (Auto Intelligence) | 3.15M | $1.82 |
| 16:46:36 | A2 · Sonnet High | claude-sonnet-5-5-high | 10.31M | $4.95 |
| 16:46:58 | B2 · Cost | auto | 0.84M | $0.20 |
| 16:47:17 | C2 · Balance | claude-sonnet-5-5-high (Auto Balanced) | 1.56M | $0.93 |
| 16:47:36 | D2 · Intelligence | claude-sonnet-5-5-high (Auto Intelligence) | 4.04M | $2.27 |
| 17:23:30 | A3 · Sonnet High | claude-sonnet-5-5-high | 7.33M | $3.64 |
| 17:23:49 | B3 · Cost | auto | 2.24M | $0.54 |
| 17:24:51 | C3 · Balance | claude-sonnet-5-5-high (Auto Balanced) | 6.33M | $3.36 |
| 17:25:10 | D3 · Intelligence | claude-sonnet-5-5-high (Auto Intelligence) | 4.63M | $2.46 |
| 17:25:29 | A3r · Sonnet High | claude-sonnet-5-5-high | 8.99M | $4.23 |
| 17:25:49 | B3r · Cost | auto | 0.91M | $0.27 |
| 17:26:10 | C3r · Balance (blocked by rate limit) | claude-sonnet-5-5-high (Auto Balanced) | 0.99M | $0.63 |
| 17:26:26 | D3r · Intelligence | claude-sonnet-5-5-high (Auto Intelligence) | 7.21M | $3.49 |
| 17:50:13 | C3r · Balance (rerun alone) | claude-sonnet-5-5-high (Auto Balanced) | 10.11M | $4.94 |

Total $39.10. Per setting: Sonnet High by hand $15.47 (4 builds), Intelligence $10.04 (4), Balance $11.95 (4 builds + 1 blocked), Cost $1.64 (4).

Corrections this brings: Balance ran Sonnet 5.5 **High**, not Medium. Auto · Cost is logged only as "auto" (the B2 run itself named Composer). Rounds 1 and 2 ran four chats in parallel with no rate-limit trouble.

The shareable write-up for Balázs is `11-25-cursor-model-test-report.md`.

## Message for Balázs (paste-ready)

Superseded on 11-25 by the email draft in `11-25-cursor-model-test-email.md` (the text below predates the usage data and says Balance is "probably Medium").

EN:
> Hi Balázs, I tested Cursor's model settings after the change. Same three Figma screens (Recordings list, Recording page, Debrief tab), four setups: Sonnet 5.5 High picked by hand, and Auto with Cost, Balance and Intelligence. Three rounds: a very detailed prompt, a short brief, and a short brief with copying banned, each setup run twice in the last round.
> Result: Auto Balance and Auto Intelligence both hand the work to Sonnet 5.5, and they were as good as Sonnet 5.5 High picked by hand in every round (13–16 out of 14–16 points), with the same result on the repeat runs. Auto Cost uses Cursor's Composer model: it scored clearly lower (7–12), left placeholders and broken layouts, and its own report said everything passed.
> So: Auto Intelligence is a good default for design work, it was usually the fastest of the good ones. Auto Cost isn't usable for this. One practical thing: running 8 chats in parallel hit the Figma MCP rate limit of my seat, so 3–4 at a time is the max. Full report: [report link]

HU:
> Szia Balázs, a modellváltás után teszteltem a Cursor beállításait. Ugyanaz a három Figma képernyő (Recordings lista, Recording oldal, Debrief tab), négy beállítás: kézzel választott Sonnet 5.5 High, és Auto Cost, Balance és Intelligence. Három kör: egy nagyon részletes prompt, egy rövid brief, és egy rövid brief másolás nélkül, az utolsó körben minden beállítást kétszer futtattam.
> Eredmény: az Auto Balance és az Auto Intelligence is a Sonnet 5.5-nek adja a munkát, és minden körben ugyanolyan jók voltak, mint a kézzel választott Sonnet 5.5 High (13–16 pont a 14–16-ból), az ismételt futtatásnál is ugyanazt az eredményt adták. Az Auto Cost a Cursor saját Composer modelljét használja: egyértelműen gyengébb lett (7–12), placeholder szövegek és szétcsúszott layoutok maradtak benne, a saját riportja szerint pedig minden rendben volt.
> Vagyis: design munkára az Auto Intelligence jó alapbeállítás, a jók közül általában ez volt a leggyorsabb. Az Auto Cost erre nem használható. Gyakorlati tapasztalat: 8 párhuzamos chat elérte a Figma MCP limitet a seatemen, így egyszerre max 3–4 futtatás fér bele. A teljes riport: [report link]
