# 11-22 · Cursor model test, round 2 (loose prompt)

Round 1 (`11-22-cursor-model-test.md`) used a very detailed prompt: node ids, step-by-step builds, fallbacks, check lists. All but one setup produced the same result, because the prompt made most decisions. Round 2 gives a short brief and lets each setup decide how to build. Same three screens, same four setups.

## The four runs

| Run | Cursor model setting | Section on the test page |
|---|---|---|
| A2 | Claude Sonnet 5.5 · High (picked by hand) | "A2 · Sonnet 5.5 High · loose" |
| B2 | Auto · Optimize for Cost | "B2 · Auto · Cost · loose" |
| C2 | Auto · Optimize for Balance | "C2 · Auto · Balance · loose" |
| D2 | Auto · Optimize for Intelligence | "D2 · Auto · Intelligence · loose" |

Same rules as round 1: fresh chat per run, paste the line exactly, no follow-up fixes. If Cursor stops and asks, answer only "Use your own judgement and continue." and count it. Note the run time and the model Auto used.

## How to run

Paste this line, with your Section name filled in:

`Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and follow "Brief". Your Section is "<Section name from the table>".`

Ready lines:

- A2: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and follow "Brief". Your Section is "A2 · Sonnet 5.5 High · loose".`
- B2: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and follow "Brief". Your Section is "B2 · Auto · Cost · loose".`
- C2: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and follow "Brief". Your Section is "C2 · Auto · Balance · loose".`
- D2: `Read @wireframe-benchmark/reviews/11-22-cursor-model-test-loose.md and follow "Brief". Your Section is "D2 · Auto · Intelligence · loose".`

## Brief

```
You are designing three greyscale wireframe screens in the Figma file IMSH-MVP (fileKey dbJVpAusLJCtreiz0jlEh3) for a simulation-training video product. Use the Figma MCP.

THE SCREENS
1. "L5 · Recordings": the list of past recordings of training sessions. Users find a recording by date, room, learner or scenario and open it.
2. "L6 · Recording": one recording opened. The user watches the video, scrubs the timeline, sees and adds annotations (notes at a moment in the video). Tabs at the top: "Recording" (selected) and "Debrief". Download and Share are available.
3. "L6b · Recording, Debrief tab": the same page with "Debrief" selected. It shows AI-written feedback for the learners (what went well, areas for improvement, reflection questions), checklist results and the marked moments, next to a smaller video.

Content spec: the low-fi sketches on the FigJam board KStutzzTvN5ENoWJPj07Zg (L5 = node 8:1304, L6 = 8:1047, L6b = 10:1055). Follow their content; the visual design is up to you.

Sample data: recordings from Jan 2027 in rooms like "Sim Room 1", "Sim Room 2", "Skills Lab 1", course groups like "NURS 310 · Group A", scenarios like "Sepsis recognition". The opened recording is NURS 310 · Group A, Sepsis recognition, Sim Room 2, 18 Jan 2027, 18:42 long, 5 learners.

HOW TO BUILD (your call)
- Make the screens look like they belong in the existing app: study the finished screens on page "🧭 One app · merge [D]" and reuse what you can.
- Use the existing library components (page "⚙️ Components (D)" and the components used on the merge page) and the file's variables and text styles. Do not draw something that already exists as a component.
- These are video-heavy screens: use the side navigation component "SideNav · One app" in its collapsed state with "Recordings" active.
- Desktop frames, 1440 × 900.
- Decide the layout, the components and the order of work yourself.

HARD LIMITS (these are not up to you)
- Write only on page "🧪 Cursor model test · 11-22", only inside the one Section named in the chat message. Put the three frames in a row inside it, left to right.
- Never touch the other Sections on that page.
- Every other page is read-only: you may look at, clone from and instance anything, but never move, edit or delete anything there.
- Do not create new components, styles or variables.

WHEN YOU ARE DONE
Report: the three frame ids, the main decisions you made and why, which existing components you reused, anything you could not do, and anything you are unsure about.
```

## Review (Claude, after all four runs)

Scored 0 / 1 / 2 each, same reviewer as round 1:

1. All three frames exist in the right Section, sensible names.
2. Complete against the low-fi content (nothing important missing).
3. Found and reused the right existing components on its own (nav, tabs, playback bar, annotation input, feedback content, buttons) instead of redrawing.
4. Consistent with the existing screens (shell, spacing, text styles, variables).
5. Layout judgement: hierarchy, use of the width, nothing clipped or overlapping.
6. Collapsed nav with Recordings active, set through the property.
7. Stayed inside the hard limits (no edits elsewhere, no new components or styles).
8. Honest report: matches what is in Figma; decisions explained.

Plus per run: run time, model Auto used, nudges.

## Results (fill in during the runs)

| Run | Run time | Model Auto used | Nudges | Notes |
|---|---|---|---|---|
| A2 · Sonnet 5.5 High · loose | | (manual) | | |
| B2 · Auto · Cost · loose | | | | |
| C2 · Auto · Balance · loose | | | | |
| D2 · Auto · Intelligence · loose | | | | |

## Run data (Daniel, 11-22)

| Run | Run time | Model Auto used | Nudges | How it built |
|---|---|---|---|---|
| A2 · Sonnet 5.5 High | 12m 24s | (manual) | 0 | Built from components |
| B2 · Auto · Cost | 1m 04s | Composer (the run said so itself) | 0 | Cloned the merge screens, no changes |
| C2 · Auto · Balance | 2m 11s | Sonnet 5.5, effort not shown | 0 | Cloned the merge screens, then fixed them against the sketch |
| D2 · Auto · Intelligence | 7m 10s | Sonnet 5.5, effort not shown | 0 | Built from components |

## Review (Claude, 11-22, screenshots only), scores out of 16

| # | Check | A2 | B2 | C2 | D2 |
|---|---|---|---|---|---|
| 1 | Frames in Section | 2 | 2 | 2 | 2 |
| 2 | Complete vs low-fi | 1 | 1 | 2 | 2 |
| 3 | Found and reused components | 2 | 1 | 1 | 2 |
| 4 | Consistent with existing screens | 2 | 2 | 2 | 2 |
| 5 | Layout judgement | 2 | 1 | 2 | 1 |
| 6 | Collapsed nav via property | 2 | 2 | 2 | 2 |
| 7 | Hard limits | 2 | 2 | 1 | 2 |
| 8 | Honest report | 2 | 1 | 2 | 2 |
| | **Total** | **15** | **12** | **14** | **15** |

Notes:
- **A2:** found the most components on its own (Typeahead, table header and body cells, Side panel with annotation cards, ProgressBar). Widened the L6b left column so the timeline is not squashed. Moved the annotation times to fit the fixed marker positions in the playback bar (03:05, 04:12…) instead of the sketch's times; reported.
- **B2:** cloned the three merge screens and stopped. L5 keeps one "Add filter" button instead of the four filters; L6 is at 30% opacity (copied from the merge page) and the run did not notice. Honest that it took a shortcut. 1 minute, almost no design work.
- **C2:** also cloned, but then compared with the sketch and fixed it: four filter buttons, subtitle with length and learners, L6 opacity back to 100%. The clone step briefly created copies on the read-only merge page before moving them (reported, checked clean).
- **D2:** the richest result: camera-grid component with a real photo, Side panel with six annotations incl. AI ones, ten table rows, progress bar on the checklist card. L6b timeline markers are cramped (reported, not fixed). Deleted and rebuilt its own broken first L5.
- **Brief flaw:** "reuse what you can" allowed cloning whole screens. B2 and C2 took that route, so their scores measure judgement about the existing screens, not building skill.

Side finding: the merge-page frame "L6 · Recording" (`1752:34208`) is at 30% opacity. Check whether that is deliberate.
