# 10-22 · Dashboard + SRV after the 10-21 DDC with Gabor

Source: the 10-21 DDC (Gabor + Daniel). The vault has the record: `raw/meetings/2026-10-21-wed--DDC-Abbott-Essentials.md` and the wiki section "DDC: who touches which screen…" in `wiki/work/essentials-2.0-prototype-plan.md`.

Target: Figma file **IMSH-MVP** (`dbJVpAusLJCtreiz0jlEh3`), page **"Dashboard (D)"** (305:18292).
Sources: Daniel's frames, already copied into the same file on page **"Wireframe (D)"** (0:1). The plugin can't clone across files, so that copy is the source and the "Essentials 2.0 - wireframes" file is not touched.

## How to run

One Cursor chat per line, in this order. Paste the line exactly:

1. `Read @wireframe-benchmark/reviews/10-22-dashboard-srv-after-ddc.md. Apply "Shared rules", then run ONLY section "D · Dashboard".`
2. `Read @wireframe-benchmark/reviews/10-22-dashboard-srv-after-ddc.md. Apply "Shared rules", then run ONLY section "S · SRV".`

## What's already done in Daniel's SRV (no work needed)

Checked against `5 · Recording view` (1:2221) and `4b · Participants popover` (1:1911):
- The note input is already under the timeline ("Add a note at 08:00…" + Discuss / Good practice / Marker).
- Layout is a segmented control on the screen (1+2 / Single / Grid). There is no layout tab.
- Learners can be changed **during** the recording, in a popover that doesn't blur the video. It has a searchable "Add learner" field and the copy "Changes apply to this recording only".
- "Report a problem" is in the header.
- Simulator control widget: not in the design, and it stays out (10-21: view-only).

## Decisions behind these prompts

| # | Item | Call | Why |
|---|---|---|---|
| 1 | Dashboard Customize | Take Gabor's **idea** (hide boxes + choose the report per box). Use **Daniel's own popover pattern** from `16c · Customize report` (1:5808), not Gabor's UI | Same pattern as Reports; Daniel doesn't want Gabor's layouts |
| 2 | Bottom control strip | Keep **Intercom + Hold to talk** visible. Move simulator voice, microphones and send-to-screen behind an **"Audio" button** | Gergely 10-14: "audio behind a button". Gives the camera back the height the note row takes (Gabor's 10-21 worry) |
| 3 | Audio settings | A **side panel that replaces the right column only**. No scrim, and the video stays live | 10-21: settings must not hide or blur the video |
| 4 | Simulator voice | Basic: on/off, Female / Male, Age, Mood. **The pitch knob goes** | Gabor 10-21. ⚠️ Check with Bence (Maestro presets) before this is final |
| 5 | Mic gain | **Auto gain on by default**: meters only. Manual sliders only when Auto is off | Daniel 10-21: "it just has to work" |
| 6 | Right panel | Collapsible, with a collapsed state | Gabor 10-21 |
| 7 | Transcript / Chapters | **Stay as tabs** (Notes · Checklist · Chapters · Transcript) | Unanswered on 10-21. Recommendation: no new pattern for the IMSH demo |
| 8 | Simulator waveforms | **View-only video source** ("Patient monitor · Simulator") in the layout, not a new strip | View-only scope; a strip would take camera space again |
| 9 | SP / facilitator | Not editable on the SRV. A read-only line in the participants popover | 10-21: changed in Center overview, calendar or Video Review |

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3).
TARGET = page "Dashboard (D)" (305:18292). The Section "Gabor" (305:21628) on that page is READ-ONLY: never edit, move or clone into it.
SOURCE = page "Wireframe (D)" (0:1), READ-ONLY. Build every new frame by cloning a source frame (node.clone()), appending the clone to the target Section, and editing the clone. Never edit anything on the source page.
Components: reuse the instances inside the cloned frames (Astryx, Neutral Light, greyscale; recording red is the one exception). If you need a component that isn't in the clone, clone an instance from another frame on "Wireframe (D)" rather than drawing one. Never rebuild TopNav / SideNav.
Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Layout: one Section per prompt (name given below). Place Section "Dashboard · Daniel" at x=-186, y=1600. Place Section "SRV · Daniel" 400 px below the bottom of "Dashboard · Daniel". Frames in ONE horizontal row inside the Section, top-aligned, 160 px gaps, 120 px padding. Above each frame, 96 px up, a 24 px text label "<#> · <Screen>".
Naming: "<#> · <Screen>", no version suffix. One frame per screen state.
Copy: sentence case, plain English, same demo world (Riverbend College of Nursing, Dr. Maya Ortiz, Tue Jan 19 2027, NURS 310/340, Sim Room 1–4, learners Emily Baker, Priya Shah, Marcus Chen, Olivia Grant, Noah Patel).
Delete duplicated Dev Mode annotations on every clone. Add the new annotations given in the prompt.
When done: screenshot each new frame and check that nothing overlaps or is clipped and that the text fits.
```

---

## D · Dashboard

```
Assumes: Shared rules from this file.
Section name: "Dashboard · Daniel". Base frame: "4 · Dashboard (sim day)" (1:1799).

D1 · Dashboard: clone 1:1799. In the header row, at the right edge of the content column (aligned with the right edge of the calendar card), add a ghost Button with a sliders icon: "Customize". Nothing else changes.

D2 · Customize dashboard: clone D1. "Customize" in the pressed state. Under it, right-aligned, a Popover (320 px) built from "Popover · Show on this report" in "16c · Customize report" (1:5808): same structure, new content.
 - Title "Show on dashboard". Subtitle 12 px muted: "Drag to reorder."
 - Rows, each with a drag handle (left), the label, and a Checkbox (right): "Today" (checked), "Recent recordings" (checked), "Report" (checked), "Calendar" (checked), "Upcoming" (unchecked).
 - Divider, then a ghost Button "Reset to default".
 - Annotation on the popover: "Per user. Auto-saves. Unchecked boxes leave the layout; the other cards reflow."

D3 · Choose the report: clone D1. In the "Simulation hours" card, the title becomes a Select/dropdown trigger "Simulation hours ▾", shown open. Menu items: "Simulation hours" (selected, check icon), "Room usage", "Checklist results", "Learner attendance". If "16 · Reports" (1:5092) lists different report names, use those instead. The menu has the same style as the other Select menus in the file.
 - Annotation: "One report per dashboard box. The card keeps its size; the chart swaps."

D4 · Dashboard, customized: clone D1. Show the result of D2 + D3: the "Upcoming" card is gone and the calendar column ends after the calendar card. The report card shows "Checklist results · Last 4 weeks" with a horizontal bar chart (greyscale, 4 bars): "Hand hygiene 92%", "Vital signs 88%", "SBAR handoff 71%", "Blood cultures before antibiotics 64%", plus a "View report →" link like the original. Keep "Customize" visible.
```

---

## S · SRV

```
Assumes: Shared rules from this file.
Section name: "SRV · Daniel". Base frame: "5 · Recording view" (1:2221), 1440×948.

S1 · Recording view (quieter): clone 1:2221.
 - Bottom strip: keep ONLY the Intercom group (In-room / Facilitator segmented control, Announcements select + play, the round "Hold to talk" button). Delete the Simulator voice, Microphones and Send to screen groups. At the right end of the strip, add a secondary Button with a sliders icon: "Audio". Make the strip a single row (~64 px tall).
 - Give the freed height to the video area: grow the camera tiles so the timeline + note row sit right above the slimmer strip. The note row stays as it is.
 - Right panel: tabs stay "Notes 2 · Checklist · Chapters · Transcript". Add a small IconButton with a panel-collapse icon at the right end of the tab row.
 - Annotation on the Audio button: "Simulator voice, microphones and send-to-screen live here (Gergely 10-14: audio behind a button)."

S2 · Panel collapsed: clone S1. Remove the right panel. A 48 px rail remains on the right edge, holding a panel-expand IconButton and the four tab icons stacked (notes, checklist, chapters, transcript). The video area grows into the freed width. The camera tiles keep their aspect ratio, and the 1+2 layout gets wider.

S3 · Audio settings: clone S1. "Audio" in the pressed state. The right column (tabs + checklist) is REPLACED by a side panel the same width, with no scrim: the video, timeline and note row stay fully visible and usable.
 Panel header: "Audio" + close IconButton (X).
 Group 1, 12 px muted uppercase "SIMULATOR VOICE":
  - Switch "Voice changer" (on).
  - "Voice": segmented control "Female" / "Male" (Male selected).
  - "Age": segmented control "Child" / "Adult" / "Older" (Adult selected).
  - "Mood": Select "Calm ▾" (options for Dev Mode only: Calm, Anxious, In pain, Confused).
  - No pitch control.
 Group 2, "MICROPHONES":
  - Switch "Auto gain" (on), helper 12 px muted: "Levels adjust automatically."
  - Three rows, read-only level meters with no sliders: "Bed mic", "Room mic", "Manikin". Reuse the meter bars from the source frame, with the dB numbers removed.
 Group 3, "SEND TO SCREEN": the two Selects from the source ("Patient monitor", "No decoder added to room", the second one disabled).
 Annotations on the panel: "Side panel, not a modal: never cover or blur the video (DDC 10-21)." and "⚠️ Voice presets: confirm with Bence how Maestro does it per simulator/manikin before final."

S3b · Audio, manual gain: clone S3. "Auto gain" is off. Each mic row now has a Slider next to its meter and a value on the right ("+6 dB", "0 dB", "−3 dB"). Helper text: "Manual levels for this room."

S4 · Participants during recording: clone "4b · Participants popover" (1:1911) and apply the S1 changes to the clone (slim bottom strip with the Audio button, taller video). Keep the popover exactly as it is (learner checkboxes, Absent tag, Add learner + search field, "Changes apply to this recording only."). Add a divider and a read-only block at the bottom of the popover:
  - 12 px muted uppercase "STAFF".
  - "Facilitator · Dr. Maya Ortiz" and "SP · none" as plain text rows, no controls.
  - 12 px muted: "Change staff in the event or in Center overview."
 Annotation: "Learners can change while recording; no 'no modification during recording' lock (DDC 10-21). Staff stays read-only here."

S5 · Simulator monitor (view only): clone S1. In the 1+2 layout, the top-right tile shows the simulator instead of Camera 2: a dark tile with three greyscale waveform lines (ECG, SpO2 pleth, resp) and big numbers "HR 118", "SpO2 89%", "BP 92/58", "RR 26". Tile chip "Simulator · view only". No controls on the tile (no state skip, no play buttons).
 Annotation: "Waveforms from the simulator, view only. No simulator control and no sim logs in this release (DDC 10-21: '2.0')."
```

## After these run

- Send Daniel's review screenshot round to Claude for QA, as with the earlier rounds.
- Still open with Gabor: who designs "add learner" in his Learner Assignment flow? And is he building the SRV or only Center overview?
- Bence: Maestro voice presets (S3).
