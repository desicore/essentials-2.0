# 11-22 · Cursor model test, round 3 (no copying, run twice)

Round 2 (`11-22-cursor-model-test-loose.md`) let the runs "reuse what you can", and Auto · Cost and Auto · Balance copied the finished screens instead of building. Round 3 uses the same brief with one extra hard limit: no copying screens, build from library components only. Each setup runs **twice**, to see how consistent it is.

## The eight runs

| Run | Cursor model setting | Section on the test page |
|---|---|---|
| A3 | Claude Sonnet 5.5 · High (picked by hand) | "A3 · Sonnet 5.5 High · no copy" |
| B3 | Auto · Optimize for Cost | "B3 · Auto · Cost · no copy" |
| C3 | Auto · Optimize for Balance | "C3 · Auto · Balance · no copy" |
| D3 | Auto · Optimize for Intelligence | "D3 · Auto · Intelligence · no copy" |
| A3r | Claude Sonnet 5.5 · High (picked by hand) | "A3r · Sonnet 5.5 High · no copy · repeat" |
| B3r | Auto · Optimize for Cost | "B3r · Auto · Cost · no copy · repeat" |
| C3r | Auto · Optimize for Balance | "C3r · Auto · Balance · no copy · repeat" |
| D3r | Auto · Optimize for Intelligence | "D3r · Auto · Intelligence · no copy · repeat" |

Same rules as before: fresh chat per run, paste the line exactly, no follow-up fixes. If Cursor asks, answer only "Use your own judgement and continue." and count it. Note the run time and the model Auto used. Runs may go in parallel; a repeat run must not look at its twin's Section (the limits below say so).

## How to run

- A3: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "A3 · Sonnet 5.5 High · no copy".`
- B3: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "B3 · Auto · Cost · no copy".`
- C3: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "C3 · Auto · Balance · no copy".`
- D3: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "D3 · Auto · Intelligence · no copy".`
- A3r: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "A3r · Sonnet 5.5 High · no copy · repeat".`
- B3r: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "B3r · Auto · Cost · no copy · repeat".`
- C3r: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "C3r · Auto · Balance · no copy · repeat".`
- D3r: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and @wireframe-benchmark/reviews/11-22-cursor-model-test-nocopy.md. Follow "Brief" from the first file and "Round 3 limits" from the second (they win where the two differ). Your Section is "D3r · Auto · Intelligence · no copy · repeat".`

## Round 3 limits

```
NO COPYING (added for round 3, a hard limit)
- Do not clone, duplicate or copy any frame, group or section from any page, including "🧭 One app · merge [D]" and every Section on the test page. Build each screen yourself.
- Allowed: create instances of existing components (from "⚙️ Components (D)" or any main component in the file), and use the file's variables and text styles.
- You may LOOK at the finished screens on the merge page to match the app's look, but do not copy nodes from them.
- Do not look at, read or open any other Section on page "🧪 Cursor model test · 11-22". Only your own.
- Do not create anything on another page, not even temporarily.

EVERYTHING ELSE
- Same as "Brief" in 11-22-cursor-model-test-loose.md: the three screens, the FigJam content spec, sample data, collapsed nav with Recordings active, 1440 × 900, the hard limits, and the final report.
- Where the brief says "reuse what you can", read it as: reuse components, not screens.
```

## Review (Claude, after the runs)

Same 8-point checklist as round 2 (out of 16), plus:

- **No-copy check:** any frame built by cloning a screen scores 0 on item 3 and 0 on item 7.
- **Consistency per setup:** the score gap between the run and its repeat, and whether both made the same main layout decisions.

## Results (fill in during the runs)

| Run | Run time | Model Auto used | Nudges | Notes |
|---|---|---|---|---|
| A3 | | (manual) | | |
| B3 | | | | |
| C3 | | | | |
| D3 | | | | |
| A3r | | (manual) | | |
| B3r | | | | |
| C3r | | | | |
| D3r | | | | |

## Run data and review (Claude, 11-22)

Checked from screenshots: L6 of every run, plus L5 and L6b of the Cost runs. Times and models from Daniel. Scores out of 16, same checklist as round 2.

| Run | Run time | Model | Score | Notes |
|---|---|---|---|---|
| A3 · Sonnet 5.5 High | 9m 08s | (manual) | 15 | 1+2 camera grid, side panel, table from TableCell. Annotation times are the component's, not the sketch's; checklist "4 of 12" invented to match the bar. |
| A3r · Sonnet 5.5 High | 9m 21s | (manual) | 15 | Same layout decisions as A3. Reported a stray node at the page root that is not its own. |
| B3 · Auto · Cost | 4m 43s | Composer | 11 | Built from instances, but placeholders left: tabs read "Tab Tab Tab", Typeahead shows "Label / Description text", placeholder icons on buttons. No breadcrumb, no annotation input; Share/Download under the video. Report gave a wrong run time (8–10 min). |
| B3r · Auto · Cost | 2m 51s | Composer | 7 | Buttons read "Button". Uses the live "Recording" banner and mode switch on a past recording. Playback bar and checklist clipped at the bottom. Table text crammed. A stray "SRV / Annotation input" (`2024:147128`) sits at the page root, very likely from this run. |
| C3 · Auto · Balance | 9m 24s | Sonnet 5.5, effort not shown | 16 | Best run of the round: edited the side-panel annotations to the sketch's four notes and times, relabelled the timeline markers, breadcrumb, everything as instances. |
| C3r · Auto · Balance | 1m 33s | Sonnet 5.5, effort not shown | – | Did not build: the Figma MCP rate limit for the seat blocked every write. Nothing created. Rerun needed. |
| D3 · Auto · Intelligence | 7m 17s | Sonnet 5.5, effort not shown | 15 | Like A3; 10 table rows; L6b marked moments use the sketch's times. Progress bar fixed at 300 px. |
| D3r · Auto · Intelligence | 9m 04s | Sonnet 5.5, effort not shown | 15 | Single camera instead of 1+2; otherwise the same decisions as D3. Share is Secondary, not Primary. |

Consistency (run vs repeat): Sonnet High 15 / 15, Intelligence 15 / 15, both with the same main layout decisions. Cost 11 / 7, with different approaches each time. Balance: one run only.

No run copied a screen; all passed the no-copy check.

Practical finding: eight parallel runs hit the Figma MCP rate limit of the seat (one run failed, four were slowed down). Run at most three or four at a time.
