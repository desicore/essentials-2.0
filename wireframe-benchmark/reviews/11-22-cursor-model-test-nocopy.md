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
