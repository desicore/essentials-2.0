# Recording view (SRV) · design explorations, round 2 (2026-10-07)

4A-r1 and 4B-r1 are accepted; the main frames (`130:2098` Astryx, `141:4156` shadcn) stay as they are. Daniel duplicated parts of them to try three changes without touching the main frames. These are **design explorations, not benchmark runs**: no new rows in `benchmark-log.md`; Cursor reports minutes in its reply.

| # | Change | Astryx node | shadcn node | Reference |
|---|---|---|---|---|
| E1 | Checklist Yes/No: equal sizes, flush right; timestamp moves under the item text | `164:4476` (side panel only) | `164:4623` (side panel only) | Daniel's marked-up screenshots `164:6744` (Astryx) and `164:6748` (shadcn) |
| E2 | Back to tabs in the side panel, ready for more tabs later (current SRV has Annotation · Data Entry · Chapters · Transcript · Layout) | `164:5279` | `164:4804` | Current LearningSpace Enterprise SRV: `165:9539` (Chapters tab), `165:8962` (Transcript tab) |
| E3 | Pause and Stop recording move from the header to a control row under the timeline | `164:5773` | `164:6267` | Current SRV `126:1841`: controls sit under the track, left |

The three changes are kept apart on purpose. Once Daniel picks, one merge prompt brings the chosen ones into the main frames and the brief.

Decisions made for E2: tab labels **Notes · Checklist · Chapters · Transcript**; Checklist is the active tab; Chapters and Transcript are tab labels only (no content designed). The Layout tab is dropped because the layout selector already sits above the cameras.

## Prompt · Astryx (paste first)

```
Design exploration on three DUPLICATE frames in Figma (file https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes, page "wireframe test - astryx"). Touch ONLY the nodes named below. Do NOT touch the main frame "S3 · Recording view · Astryx" (130:2098) or anything else. Astryx instances only, never detached; CUSTOM frames only where the library has nothing. Same greyscale rules as @wireframe-benchmark/wireframe-brief.md. Work on existing nodes; don't rebuild a frame from scratch.
Load the figma-use skill before any Figma call. Run `date +%H:%M` at the start and end.

E1 · Checklist Yes/No (node 164:4476, a duplicated side panel). Daniel's marked-up screenshot of the problem: node 164:6744 (screenshot it first, read-only).
Problem: the Yes and No segments change size with their state (the selected one is wider and raised), so the targets shift and you have to look before you click.
- In every row, the Yes/No pair has two segments of EQUAL, FIXED width (same width selected or not, same in all 7 rows), both always showing icon + label: `check` Yes and `x` No. Selected = the library's selected/pressed style (dark or filled); unselected = the plain style. If the Astryx segmented control can't keep both segments equal and unchanged in size, use two Button instances side by side (selected = Primary, unselected = Secondary) and log that.
- Move the pairs flush right: the right edge of every pair aligns with the panel's right padding, so all 14 targets form one straight column.
- Move the timestamp out of that column: under the item text, muted 12 px, "Answered 00:40". Unanswered rows show nothing there (drop the "—").
- Keep: the header, "4 of 7 answered", the Notes and markers section below.

E2 · Tabs (node 164:5279, a duplicated full screen). References, read-only: 165:9539 and 165:8962 (today's LearningSpace SRV with its tabs: Annotation · Data Entry · Chapters · Transcript · Layout). Don't copy their styling; take the idea that the side panel is a tab bar with room for more tabs.
- Side panel: replace the two stacked sections with the library's tabs at the top of the panel: "Notes" · "Checklist" · "Chapters" · "Transcript". Checklist is active.
- The Checklist tab shows the checklist exactly as it is now (header, 7 rows). It may use the full panel height.
- Notes, Chapters and Transcript are tab labels only: build no content for them.
- Everything outside the side panel stays as it is.

E3 · Recording controls under the timeline (node 164:5773, a duplicated full screen). Reference, read-only: 126:1841 (today's SRV: play/stop/record and the timecode sit under the track, left).
- Header right: remove the recording state, "Pause" and "Stop recording". The header keeps back, title + meta (left) and the learners (centre); move the learners to the right if that balances it better.
- Under the cameras, two rows instead of one:
  1. The track, full width of the camera area, with the two markers exactly as now (04:12, 07:30).
  2. A control row: left: "Pause" (Secondary, `pause`) · "Stop recording" (Primary, `square`, NOT red) · then the red dot (#D92D20) + "Recording" + "08:00 / 20:00" in tabular figures. Right: muted "Planned 20 min".
- The quick notes bar and the Room audio strip stay below, unchanged. Cameras keep fill height and get smaller to make room; don't let the frame grow.

After each E, take a screenshot and fix on the existing nodes. Reply in under 10 lines: minutes per E, what Astryx couldn't do (especially equal-width Yes/No), anything you changed beyond the prompt.
```

## Prompt · shadcn (paste after the Astryx run finishes)

```
Design exploration on three DUPLICATE frames in Figma (file https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes, page "wireframe test - shadcn"). Touch ONLY the nodes named below. Do NOT touch the main frame "S3 · Recording view · shadcn" (141:4156) or anything else. shadcn instances only, never detached; CUSTOM frames only where the library has nothing. Same greyscale rules as @wireframe-benchmark/wireframe-brief.md. Work on existing nodes; don't rebuild a frame from scratch.
Load the figma-use skill before any Figma call. Run `date +%H:%M` at the start and end.

E1 · Checklist Yes/No (node 164:4623, a duplicated side panel). Daniel's marked-up screenshot of the problem: node 164:6748 (screenshot it first, read-only).
Problem: the Yes and No buttons have different widths ("✓ Yes" is wider than "No"), so the targets shift from row to row and you have to look before you click.
- In every row, the Yes/No pair has two buttons of EQUAL, FIXED width (same width selected or not, same in all 7 rows), both always showing icon + label: `check` Yes and `x` No. Selected = the dark (default) style; unselected = the outline style.
- Move the pairs flush right: the right edge of every pair aligns with the panel's right padding, so all 14 targets form one straight column.
- Move the timestamp out of that column: under the item text, muted 12 px, "Answered 00:40". Unanswered rows show nothing there (drop the "—").
- Keep: the header, "4 of 7 answered", the Notes and markers section below.

E2 · Tabs (node 164:4804, a duplicated full screen). References, read-only: 165:9539 and 165:8962 on the page "wireframe test - astryx" (today's LearningSpace SRV with its tabs: Annotation · Data Entry · Chapters · Transcript · Layout). Don't copy their styling; take the idea that the side panel is a tab bar with room for more tabs.
- Side panel: replace the two stacked sections with the library's Tabs at the top of the panel: "Notes" · "Checklist" · "Chapters" · "Transcript". Checklist is active.
- The Checklist tab shows the checklist exactly as it is now (header, 7 rows). It may use the full panel height.
- Notes, Chapters and Transcript are tab labels only: build no content for them.
- Everything outside the side panel stays as it is.

E3 · Recording controls under the timeline (node 164:6267, a duplicated full screen). Reference, read-only: 126:1841 (today's SRV: play/stop/record and the timecode sit under the track, left).
- Header right: remove the recording state, "Pause" and "Stop recording". The header keeps back, title + meta (left) and the learners (centre); move the learners to the right if that balances it better.
- Under the cameras, two rows instead of one:
  1. The track, full width of the camera area, with the two markers exactly as now (04:12, 07:30).
  2. A control row: left: "Pause" (outline, `pause`) · "Stop recording" (default dark, `square`, NOT destructive) · then the red dot (#D92D20) + "Recording" + "08:00 / 20:00" in tabular figures. Right: muted "Planned 20 min".
- The quick notes bar and the Room audio strip stay below, unchanged. Cameras keep fill height and get smaller to make room; don't let the frame grow.

After each E, take a screenshot and fix on the existing nodes. Reply in under 10 lines: minutes per E, what shadcn couldn't do, anything you changed beyond the prompt.
```

## Status
- [x] Astryx run · [x] shadcn run · review + E3b in `4-explorations-r3.md`
