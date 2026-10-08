# Recording view (SRV) · explorations round 3 (2026-10-07)

Review of the round-2 explorations and a new try at the recording controls (E3b).

## Verdicts

| # | Verdict | Notes |
|---|---|---|
| E1 · Yes/No | **Take Daniel's version without icons** (`165:10589` Astryx, `165:11815` shadcn), with one condition | Equal fixed widths and one right-aligned column work in both. The labels already say Yes/No, so the icons only added noise. **Condition:** the selected state must be a strong fill change. shadcn's dark fill vs outline reads at a glance. Astryx's segmented control (white raised segment on a grey track) is too subtle: an answered row and an unanswered row look almost the same. For Astryx use Primary (selected) / Secondary (unselected) Buttons at a fixed width. "Answered 00:40" under the item text is fine. |
| E2 · Tabs | **Take it** | Notes · Checklist · Chapters · Transcript fits 380 px in both libraries and leaves room for later tabs, close to today's SRV. One addition: a count on the Notes tab ("Notes 2"), so Maya sees her note landed without switching tabs. |
| E3 · Controls under the track | **Reject** | Daniel's point holds: Stop sits about 40 px above the note input, the target hit most often during a scenario. A misclick under stress ends the recording, and an event has only one recording (SPEC §6b), so it can't be restarted. |

## E3b · the proposal

Two changes together:

1. **Move the recording controls to the top of the camera area**, into the row that already holds the layout selector. Left: layout selector. Right: ● Recording · 08:00 / 20:00 · Pause · Stop recording. The cameras (about 350 px) separate it from the note bar, the checklist sits in another column, and the controls stay next to the video they control rather than in the global header.
2. **Stop always asks first.** SPEC §7 rule 4 already requires it ("stop … state the consequence in one line before confirming"). A dialog: "Stop the recording?" · "This ends the recording for NURS 310 · Sepsis recognition. The debrief will be ready on the tablet in about 30 seconds." · buttons "Keep recording" (secondary, default focus) and "Stop recording" (primary). With this, even a misclick costs one extra click, not the recording. Pause needs no dialog: a paused recording resumes as the same recording (CAP-07).

Not chosen: back to the header (safe, but it separates the controls from the video and the header is the global area), and press-and-hold to stop (safe, but nobody discovers it in a demo).

## Prompt · Astryx (paste first)

```
Design exploration in Figma (file https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes, page "wireframe test - astryx"). Do NOT touch any existing frame; you only create two new ones. Astryx instances only, never detached; CUSTOM frames only where the library has nothing. Greyscale rules from @wireframe-benchmark/wireframe-brief.md. Load the figma-use skill before any Figma call. Run `date +%H:%M` at the start and end.

1. Duplicate frame 164:5773 (the E3 exploration). Name the copy "E3b · Recording controls on top · Astryx" and place it to the right of 164:5773, 200 px gap.
2. In the copy:
   - Remove the control row under the timeline (Pause, Stop recording, the red dot, "Recording 08:00 / 20:00"). The track keeps its full width; move "Planned 20 min" to the right end of the track row, and "08:00 / 20:00" to the left end of the track row, as it was before E3.
   - In the row with the layout selector (above the cameras): keep the selector on the left. On the right, replace "Sim Room 2 · 3 cameras" with: red dot (#D92D20, the only colour) + "Recording" + "08:00" in tabular figures · 24 px gap · "Pause" (Secondary, `pause`) · "Stop recording" (Primary, `square`, NOT red). Move "Sim Room 2 · 3 cameras" next to the layout selector, muted.
   - The header stays as it is now (no recording controls in it).
   - The cameras fill the space freed by the removed row.
3. Duplicate the finished E3b frame. Name it "E3b · Stop confirmation · Astryx", place it below E3b, 200 px gap. Add a dark 40 % overlay over the whole frame and a centred dialog (Astryx dialog/modal if it has one; otherwise a CUSTOM frame built from Astryx parts), about 440 wide:
   - Title "Stop the recording?"
   - Body: "This ends the recording for NURS 310 · Sepsis recognition. The debrief will be ready on the tablet in about 30 seconds."
   - Buttons right-aligned: "Keep recording" (Secondary, shown with focus ring as the default) · "Stop recording" (Primary).
Screenshot after each step and fix on the existing nodes. Reply in under 8 lines: minutes, whether Astryx has a dialog, anything you changed beyond the prompt.
```

## Prompt · shadcn (paste after the Astryx run finishes)

```
Design exploration in Figma (file https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes, page "wireframe test - shadcn"). Do NOT touch any existing frame; you only create two new ones. shadcn instances only, never detached; CUSTOM frames only where the library has nothing. Greyscale rules from @wireframe-benchmark/wireframe-brief.md. Load the figma-use skill before any Figma call. Run `date +%H:%M` at the start and end.

1. Duplicate frame 164:6267 (the E3 exploration). Name the copy "E3b · Recording controls on top · shadcn" and place it to the right of 164:6267, 200 px gap.
2. In the copy:
   - Remove the control row under the timeline (Pause, Stop recording, the red dot, "Recording 08:00 / 20:00"). The track keeps its full width; move "Planned 20 min" to the right end of the track row, and "08:00 / 20:00" to the left end of the track row, as it was before E3.
   - In the row with the layout selector (above the cameras): keep the selector on the left. On the right, replace "Sim Room 2 · 3 cameras" with: red dot (#D92D20, the only colour) + "Recording" + "08:00" in tabular figures · 24 px gap · "Pause" (outline, `pause`) · "Stop recording" (default dark, `square`, NOT destructive). Move "Sim Room 2 · 3 cameras" next to the layout selector, muted.
   - The header stays as it is now (no recording controls in it).
   - The cameras fill the space freed by the removed row.
3. Duplicate the finished E3b frame. Name it "E3b · Stop confirmation · shadcn", place it below E3b, 200 px gap. Add a dark 40 % overlay over the whole frame and a centred dialog (shadcn has no Dialog in this Figma kit per discovery.md: build a CUSTOM frame from shadcn parts, Card-like, about 440 wide):
   - Title "Stop the recording?"
   - Body: "This ends the recording for NURS 310 · Sepsis recognition. The debrief will be ready on the tablet in about 30 seconds."
   - Buttons right-aligned: "Keep recording" (outline, shown with focus ring as the default) · "Stop recording" (default dark).
Screenshot after each step and fix on the existing nodes. Reply in under 8 lines: minutes, anything you changed beyond the prompt.
```

## After E3b: the merge

When Daniel accepts E3b, one merge prompt per library brings E1 (no-icon Yes/No, Astryx as Primary/Secondary buttons), E2 (tabs + "Notes 2") and E3b into the main frames 130:2098 / 141:4156, and the brief's Screen 3 gets updated.

## Status
- [x] E3b Astryx · [x] E3b shadcn · [x] accepted (188:4286, 188:9459, 189:8453, 189:8967) · merge prompts in `4-merge.md`
