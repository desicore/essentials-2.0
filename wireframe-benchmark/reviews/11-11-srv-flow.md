# 11-11 · SRV flow, recording half (S1–S9)

Figma: IMSH-MVP (`dbJVpAusLJCtreiz0jlEh3`). Target page "👤 SRV flow [D]" (960:51213), empty today. Library page "⚙️ Components (D)" (675:31351). Sources on the Drafts page (305:18292): "L3 · Layout and audio, top right" (468:12979) and "B2 · Ready to record" (461:22825).

Rewritten 11-11 for Claude Sonnet 5.5: every step names the exact layer, component and position, and the base screen is built in two smaller runs.

## State of the build (for a new Claude session)

Read this section first if you are picking the work up. It replaces reading the earlier chat.

**Who does what**
- Daniel runs each section below in Cursor on **Claude Sonnet 5.5 · High**. The company Cursor account is capped to lower-tier models since 11-11, so prompts must name exact layers, component IDs, sizes and positions.
- Claude plans, writes the prompts, and reviews the result in Figma. Reviews are read-only (`get_metadata`, `get_screenshot`). Claude only edits Figma for a one-off small fix, and only when Daniel asks.
- Every run gets its full one-line command and its model and effort, in this file and in the chat reply.

**Where things are**
- This file: the prompts for story steps 1–9. It lives in the main checkout `~/Documents/dev-projects/elevate/essentials-2.0` and is uncommitted.
- `11-04-srv-story.md` (same folder): the 18-step story and the off-path states.
- `11-03-components-page.md` and `11-04-debrief.md` (same folder): how the components were built, with the QA notes.
- Vault: `wiki/work/essentials-2.0-workshop-prep-2026-11-17.md` has the workshop dates, Daniel's other tasks and the SRV status. `wiki/work/essentials-2.0-srv-feedback-tracker.md` has the open feedback.
- Todoist task for this work: "Run the SRV flow prompt for S1-S9 on the empty SRV flow page" (project 🩻 Elevate, section Essentials [Vertex]).

**Done**
- **FL0a ran on 11-11 and passed.** Section "SRV flow · Recording" is 1343:3275. "S1 · Ready to record" is 1343:4038. In S1 these are real instances of the right components: Camera grid (1343:4744), Recording button (1343:4898), Annotation input (1343:4775), Intercom strip (1343:4822). The old L3 frames are gone, the tiles show no red dot, and the placeholder override worked.

- **FL0b passed on 11-11, on the second run.** The first run left no trace in the file. In S1: "SRV / Side panel" instance (1347:8173), "SRV / Header actions" instance in Header End Content (right-aligned, 413 × 28), "Caption · S1" (1347:8394), page title "Title · SRV flow" (1347:8395). Body has two children, Camera area (0–1012) and the Side panel (1012–1392), with no gap. Nothing is cut off.

- **FL1 ran on 11-11 and mostly passed.** S2 · Participants (1348:10885), S3 · Layout & audio (1348:11530), S4 · Recording (1348:12538), each with label and caption. All of FL1's own checks pass: the popover and panel sit inside their frames, S3 shows the 1 + 2 grid with 1 + 2 selected in the panel, S4 reads "Stop recording" at 144 px with a red dot on all three tiles and "00:42". Two problems, both in the prompt, not in Cursor's work:
  - **The Header actions states were the wrong way round.** In "SRV / Header actions" (565:29001), State=Open sets "Button · Layout & audio" to State=Pressed. It is the Layout & audio open state, not the learners one. So S2 shows Layout & audio pressed while the learners popover is open, and S3 shows nothing pressed while the Layout & audio panel is open. Fix: S2 → State=Default, and the nested "Button · 4 learners" → State=Pressed. S3 → State=Open.
  - **The learner count doesn't match the popover.** The popover reads "Participants · 5" and lists five learners, one of them Olivia Grant as Absent. So four are left, but the button reads "3 learners" in S2–S4 and "4 learners" in S1.
- **FL2 ran on 11-11 and passed.** S5 · Annotations, Live (1358:7934), S6 · Checklist, Live (1360:6148), S7 · Intercom in use (1360:7581), S8 · Stop confirmation (1360:8441), S9 · Stopped (1360:9390), each with label and caption. All of FL2's checks pass: S5's timeline has the 04:12 and 07:30 markers and reads 08:00, the button is 144 px in S5–S9 with "Elapsed" fixed at x 156, S7 has Simulator selected and Hold to talk Pressed, S8's dialog is centred (500, 375) over "Dim" (Core/Overlay, 50 %), and S9's Mode switch sits 12 px after the title, clear of the Header actions. The annotation placeholder could be overridden in every frame.
  - **S5 step 7, the annotation list:** "All annotations · 3": 04:12 Discuss "Lactate came back at 4.1, nobody escalated.", 06:05 Good practice (no text), 07:30 Marker "Fluids started.". The timeline only has the two L3 markers, so the list and the timeline disagree in S5–S9. FL1b adds the 06:05 marker.

- **FL1b ran on 11-11 and passed.** S2 has the learners button pressed, with the popover still on its right edge and 4 px below it. S3 has Layout & audio pressed. The other seven frames have neither pressed. The label reads "5 learners" in S1 and "4 learners" in S2–S9 (read back from the file). S5–S9 have three markers, at 04:12, 06:05 (thumbs-up) and 07:30, with no overlapping labels. "Caption · S5" mentions Good practice. **S1–S9 are done for this round.**

- **CR1 ran on 11-11 and passed.** Ready recording button: fill bound to Status/Error, label and icon bound to Core/On Accent, still 144 × 32. Stop confirmation: both buttons Secondary. Checklist · Live: items 1–4 have Ehli=None, status reads "4 of 7 answered" and Saved. Debrief unchanged. **Daniel, after seeing it:** "Stop recording" in the dialog should be **Primary**, not Secondary. His earlier instruction was wrong. FL4 fixes it.
- **FL3 ran on 11-11. Two of its four steps worked:**
  - ✅ S9: intercom hidden, Camera grid set to FILL (688 px), cameras look right. Caption · S9 updated.
  - ✅ S1–S4: status reads "0 of 7 answered" and all seven items are Unanswered.
  - ❌ **S1–S4 checklist text broke.** Switching items 1 and 4 to Answer=Unanswered reset their text to the variant's default. Both now read "6 · Draws blood cultures before antibiotics", so item 6 shows three times. Items 2, 3, 5, 6 and 7 are fine.
  - ❌ **The Progress fill didn't change.** It's still 236 px in S5–S9 and the names still say 08:00. In S1–S4 the ProgressBar has no "Fill" layer at all (B2's 00:00 version), so a fill can't be added there either. Fallback: replace the ProgressBar with two plain rectangles inside the loose timeline frame.

- **FL4 ran on 11-11 and passed.** S1–S4 checklist numbers run 1–7, each text once, all unanswered. In all nine frames the ProgressBar is replaced by a "Progress · <time> of 20:00" frame (Bar bound to Border/Default, Fill bound to Text/Disabled) at the old position, with the markers still on top. Fill widths: none in S1–S3, 23 in S4, 264 / 275 / 289 in S5–S7, 618 in S8–S9. S8: "Stop recording" in the dialog is Primary, "Keep recording" is Secondary and focused. **The S1–S9 recording half is complete for the 11-17 workshop.**

**Next**
1. A new prompt file for S10–S18 (Ehli processing, debrief, share) and the off-path states, from `11-04-srv-story.md`.
2. After the workshop: a component round closes the gaps, starting with an "SRV / Live timeline" component and a pre-recording Checklist state (see below).
3. A new prompt file covers S10–S18 and the off-path states.

**Open, for Daniel to decide**
- The Recording button's Ready state is black-filled. B2's "Start recording" was red.
- **Confirmed: "SRV / Side panel" Tab=Checklist, Mode=Live shows debrief content.** S1 shows "4 of 7 answered", "Saving…", Ehli AI labels with confidence stars on items 1, 3 and 4, and "Changed from Ehli's Yes" on item 4. Ehli only runs after the recording stops (story step 10), so no Live frame should show Ehli answers. S1–S4 need 0 of 7 answered. S6 needs Maya's own answers with no Ehli. This is a component fix. The frames use instances, so the fix carries over to them unless an instance is overridden.
- ~~The Header's "Layout & audio" button has no active state in "SRV / Header actions".~~ Resolved: State=Open is that state (see FL1 above). The learners button has no variant of its own, but its nested State=Pressed can be set on the instance.

**Component gaps after FL0–FL2 (for the component round)**
1. **"SRV / Live timeline"** doesn't exist. All nine frames use the loose "CUSTOM · Live timeline" frame.
2. **Progress position.** The Progress instance in "Track" has no property for its fill. S8 and S9 read 18:42 but the bar stops at 08:00. S1–S4 read 00:00–00:42 and the bar is empty, which happens to look right.
3. **Side panel, Checklist · Live** shows debrief content in S1–S4 and S6–S8: "4 of 7 answered", "Saving…", Ehli AI labels with stars, "Changed from Ehli's Yes". It needs a live state with no Ehli: 0 answered before recording (S1–S4), Maya's own answers only during recording (S6–S8).
4. **Header actions** has no state for the learners popover. FL1b works around it by setting the nested button to Pressed.

**Decisions (11-11, Daniel)**
- Ready recording button: red, as in B2, for now. Today it's the black Primary button.
- S9 after Stop: hide the intercom. Keep the annotation input.
- S8 dialog: "Stop recording" becomes a Secondary button. The pale red was the Astryx Destructive variant, not intended.

**What the component check found (11-11, Claude)**
- **Progress is fixable in the frames.** The Progress instance is the Astryx "ProgressBar" (remote library, can't be edited), but its nested "Track > Fill" layer has a plain width. Scale: 661 px = 20:00, the same scale the markers use. Today S5–S9 draw the fill at 236 px, which ends before the 07:30 marker. At 08:00 it should be 264 px.
- **The Checklist fix is part component, part frame.** "SRV / Checklist item" (565:28998) already has Ehli=None variants for Yes and No, and "SRV / Checklist status" (936:6959) has a Count text property. So the Live variant only needs its items and status switched, and S1–S4 can override to unanswered.
- **I'd drop "SRV / Live timeline" and the Header actions learners state for now.** The loose timeline works in all nine frames and nothing on screen would change, so building it before 11-17 means a rebuild pass with no visible result. The nested-Pressed workaround in S2 looks exactly like a variant would. Both stay on the list for after the workshop.

**Component IDs** are written into each section below. They were read from the file on 11-11.

## Context

The story is in `11-04-srv-story.md`. This round builds steps 1–9 as full screens, from Start recording on the dashboard to Recording stopped. Steps 10–18 (Ehli processing, debrief, share) and the off-path states come in a later round.

The screens are for the workshop on 11-17, so they have to read as one story. Each frame gets a two-line caption that says what Maya does and what the system does.

This round only assembles screens. It doesn't change any component. Where a state can't be shown with what the components offer, Cursor reports it and I turn the list into a component round.

## What I found in the file (11-11)

- **There is no live timeline component.** "SRV / Timeline" (570:56218) is the playback timeline, with a play button and "00:00 / 18:42". The live timeline with the record button only exists as the frame "CUSTOM · Live timeline" in B2 and L3. This round reuses those two frames and swaps in the "SRV / Recording button" component. A proper "SRV / Live timeline" component is the first item for the component round.
- **L3 is built from loose frames**, not from the components: the cameras, the annotation bar, the intercom bar and the side panel. The prompts replace each one with its component instance.
- **The Header is an instance with slots**, and its End Content holds three separate buttons where "SRV / Header actions" should be.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Starting layout | S1 and S2 use 2 × 2, so the change to 1 + 2 in S3 is visible. S3–S9 keep 1 + 2 |
| Side panel before recording | Checklist tab, as in B2. Annotations would show sample annotations before anything was recorded |
| Mode switch | Hidden in S1–S8, shown in S9 next to the title. Before a recording exists there is no debrief to switch to |
| Learner count | "3 learners" from S2 on, because Olivia Grant is marked Absent |
| Clock | S1–S3 00:00, S4 00:42, S5 08:00, S6 08:20, S7 08:45, S8 and S9 18:42. S5–S7 stay close to 08:00 because L3's progress bar is drawn at 08:00 |
| Annotations | The two from L3: Discuss at 04:12 and Marker at 07:30, from S5 on |
| Stop dialog | Centred on a dimmed screen. The recording keeps running behind it |

## Gaps I expect in Cursor's report

- **Live timeline** is a loose frame, not a component.
- **Progress bar** at 18:42 in S8 and S9, if the Progress instance has no property for it.
- **Hold to talk** pressed in S7, if the button has no pressed state.
- **Annotation input** placeholder says "at 08:00" in every frame, if the text can't be overridden.
- **Layout & audio button** has no active state in "SRV / Header actions" for S3.

## How to run

All four runs: **Claude Sonnet 5.5 · High**. One new Cursor chat per run.

1. **FL0a · Section and camera area.** Run this first, alone.
   `Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL0a · Section and camera area".`
2. **FL0b · Header, side panel and caption.** Run it when FL0a's screenshot shows a whole screen.
   `Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL0b · Header, side panel and caption".`
3. **Tell me when FL0b is done.** I check S1 before the rest is cloned from it.
4. **FL1 and FL2 run in parallel.** Each one writes only in its own slots.
   - **FL1 · S2 to S4.**
     `Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL1 · S2 to S4".`
   - **FL2 · S5 to S9.**
     `Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL2 · S5 to S9".`

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Target page "👤 SRV flow [D]" (960:51213). Library page "⚙️ Components (D)" (675:31351). Source frames on the Drafts page (305:18292): L3 (468:12979) and B2 (461:22825).

Where you may write:
- Only on page "👤 SRV flow [D]", and only in the frames your section names.
- "⚙️ Components (D)", the Drafts page and every "(G)" page are read-only. You may clone frames from them and create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything on those pages.
- Never delete or move a frame on the target page that your section doesn't name.

How to replace a layer with an instance (used in every section):
1. Find the old layer by its exact name inside the frame you are working on. IDs in this file refer to the source frames. A clone has new IDs, so in a clone always search by name.
2. Create the instance from the component ID given.
3. Insert it into the same parent, at the same index as the old layer.
4. If the parent has auto-layout, the position follows by itself. If it doesn't, set the x, y given in the step.
5. Set the width and height given in the step.
6. Delete the old layer.

How to change an instance:
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if ... is not possible, report it", don't build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.

Style:
- Greyscale only, including image fills (saturation -1). The only colour is the existing red variable for recording states.
- Anything you add yourself (labels, captions, the dim layer) uses the variables and text styles already in this file. No hard-coded values.
- Each screen is 1440 × 948 with clip content on.

Section "SRV flow · Recording":
- Position x 0, y 0 on the page. Size 14080 × 1220.
- Nine slots in one row. The screen of slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to the Section.
- Label: a text 24 px above each screen, left-aligned with it, 16 px medium, with the frame's exact name.
- Caption: a text 24 px below each screen, left-aligned with it, 1440 px wide, body text style, two lines: "Maya: ..." and "System: ...". The exact text is given in each section.

Sample data, the same in every frame: faculty Maya Ortiz (MO), NURS 310 · Sepsis recognition, Group A, Sim Room 2.

Report when done: the new frame IDs, the "Component gaps" list, and every step you could not do exactly as written. Then screenshot each frame you built.
```

## FL0a · Section and camera area

```
Assumes: Shared rules from this file.

1 · On page "👤 SRV flow [D]" create the Section "SRV flow · Recording" with the position and size from Shared rules.

2 · Clone L3 (468:12979) into slot 1 (x 80, y 120 in the Section). Rename the clone "S1 · Ready to record". Add its label.

3 · In the clone, delete the layer "CUSTOM · Layout & audio card". It is a direct child of the frame, 356 × 784 at x 1068, y 100.

4 · In the clone, go to Shell row > Main > Body > Camera area > Camera content. It has three children. Replace them in this order:

   a. "Cameras" (980 × 624 at x 16, y 16)
      Replace with an instance of "SRV / Camera grid", variant Layout=2 × 2 (1029:6930).
      Size 980 × 624, position x 16, y 16.

   b. "CUSTOM · Live timeline" (980 × 60 at x 16, y 652)
      Replace with a clone of the frame "CUSTOM · Live timeline" from B2 (461:22849). This is a frame clone, not an instance.
      Size 980 × 60, position x 16, y 652.
      Inside that clone, replace the layer "Start recording" (144 × 32 at x 0, y 14) with an instance of "SRV / Recording button", variant State=Ready (1024:8556). Size 144 × 32, position x 0, y 14.
      Leave "Elapsed" (it reads 00:00), "Track" and "Planned" as they are.

   c. "Quick annotations bar" (980 × 32 at x 16, y 724)
      Replace with an instance of "SRV / Annotation input" (1024:8581).
      Size 980 × 32, position x 16, y 724.
      Its input placeholder reads "Add an annotation at 08:00…". Change it to "Add an annotation…" with a text override on the nested input. If that is not possible, report it.

5 · In the clone, go to Camera area. Replace "EXPLORATION · Room audio" (1012 × 64 at x 0, y 772) with an instance of "SRV / Intercom strip", variant State=Expanded (565:29096). Size 1012 × 64, position x 0, y 772.

6 · In the Camera grid instance from step 4a, find the layer "Recording dot" inside "Camera chip" on every camera tile, and set it to hidden. No camera is recording yet. If the layer can't be hidden on an instance, report it.

Don't touch the Header or the Side panel in this run.

Check:
- Camera content has exactly three children, in this order: the Camera grid instance, the Live timeline frame, the Annotation input instance.
- The Camera grid shows four tiles and no red dots.
- The button in the timeline reads "Start recording".
- Nothing is cut off at 948 px height.
Screenshot S1.
```

## FL0b · Header, side panel and caption

```
Assumes: Shared rules from this file. "S1 · Ready to record" exists in slot 1 of Section "SRV flow · Recording", built by FL0a.

Work only in "S1 · Ready to record".

1 · Side panel. Go to Shell row > Main > Body. Replace the frame "Side panel" (380 × 836 at x 1012, y 0) with an instance of "SRV / Side panel", variant Tab=Checklist, Mode=Live (633:32980). Size 380 × 836, position x 1012, y 0.

2 · Header. Go to Shell row > Main > Header > Toolbar > End Content. End Content is a slot with three children: "Button · Layout & audio", "Report a problem" and "Button · 4 learners".
   Delete those three, and put one instance of "SRV / Header actions", variant State=Default (565:29002), into the slot. Size 413 × 28, right-aligned in the slot.
   Don't change Start Content. Its title already reads "NURS 310 · Sepsis recognition".

3 · Caption under S1:
   Maya: Clicks Start recording on today's session on the dashboard.
   System: Opens the SRV with the room, scenario and group filled in.

4 · Above the Section, at x 0, y -80 on the page, add a title text, 24 px medium: "SRV flow · steps 1–9 of the story (recording). Steps 10–18 follow."

Check:
- Body has exactly two children: Camera area (1012 wide) and the Side panel instance (380 wide), with no gap or overlap.
- The Header shows, from left to right at its right end: Layout & audio, Report a problem, 4 learners. Each appears once.
- Apart from TopNav, SideNav, Header, the Live timeline frame and plain layout frames, every part of S1 is an instance of an "SRV / ..." component. List anything that isn't.
Screenshot S1 and the whole Section.
```

## FL1 · S2 to S4

```
Assumes: Shared rules from this file. "S1 · Ready to record" exists in slot 1 of Section "SRV flow · Recording" and has passed review.

Build slots 2, 3 and 4. Don't touch S1 or slots 5–9.

S2 · Participants (slot 2, x 1640, y 120 in the Section)
   1. Clone S1 into the slot. Rename it "S2 · Participants". Add its label.
   2. Header actions instance: set State=Open.
   3. Inside the Header actions instance, the button "Button · 4 learners": override its label text to "3 learners". If that is not possible, report it.
   4. Add an instance of "SRV / Participants popover" (1048:5499), 320 × 377, as a direct child of the S2 frame, on top of everything else. Position: its right edge aligned with the right edge of the learners button, its top 4 px below the bottom of that button.
   5. Caption:
      Maya: Opens the learner list and unticks Olivia Grant, who is off sick.
      System: The count changes to 3. People can still be added during the recording.

S3 · Layout & audio (slot 3, x 3200, y 120)
   1. Clone S2 into the slot. Rename it "S3 · Layout & audio". Add its label.
   2. Delete the Participants popover instance. Header actions: set State=Default. Keep the "3 learners" label.
   3. Camera grid instance: set Layout=1 + 2. Check that "Recording dot" is still hidden on every tile, and hide it again where it isn't.
   4. Add an instance of "SRV / Layout & audio panel", variant Length=Scroll (1036:4579), 356 × 784, as a direct child of the S3 frame, on top of everything else, at x 1068, y 100.
   5. In that panel, the selected "SRV / Layout option" must be Layout=1 + 2, State=Selected, and the other four State=Default.
   6. Caption:
      Maya: Opens Layout & audio and picks 1 + 2.
      System: The grid changes. Cameras that are off screen still record.

S4 · Recording (slot 4, x 4760, y 120)
   1. Clone S3 into the slot. Rename it "S4 · Recording". Add its label.
   2. Delete the Layout & audio panel instance.
   3. Recording button instance (in "CUSTOM · Live timeline"): set State=Recording.
   4. In "CUSTOM · Live timeline", set the text "Elapsed" to "00:42".
   5. Camera grid instance: set "Recording dot" to visible on every tile.
   6. Caption:
      Maya: Clicks Start recording.
      System: The timer runs, the cameras show the red dot, and the button becomes Stop recording.

Check:
- S2: the popover sits fully inside the frame and lists Olivia Grant as Absent.
- S3: the panel sits fully inside the frame, and the grid shows one large tile and two small ones.
- S4: the button reads "Stop recording" and is still 144 px wide, and every tile has a red dot.
Screenshot S2, S3 and S4.
```

## FL2 · S5 to S9

```
Assumes: Shared rules from this file. "S1 · Ready to record" exists in slot 1 of Section "SRV flow · Recording" and has passed review.

Build slots 5 to 9. Build S5 first. S6, S7, S8 and S9 are each a clone of the frame before them. Don't touch S1 or slots 2–4.

S5 · Annotations, Live (slot 5, x 6320, y 120 in the Section)
   1. Clone S1 into the slot. Rename it "S5 · Annotations, Live". Add its label.
   2. Camera grid instance: set Layout=1 + 2. Set "Recording dot" to visible on every tile.
   3. Timeline. In Camera content, replace the frame "CUSTOM · Live timeline" with a clone of the frame "CUSTOM · Live timeline" from L3 (468:13003). Size 980 × 60, position x 16, y 652. This one has the progress at 08:00 and two markers, 04:12 Discuss and 07:30 Marker.
      Inside it, replace the layer "Stop recording" (144 × 32 at x 0, y 14) with an instance of "SRV / Recording button", variant State=Recording (1024:8557). Size 144 × 32, position x 0, y 14.
      "Elapsed" must read "08:00".
   4. Annotation input instance: set the input placeholder back to "Add an annotation at 08:00…". If FL0a reported that this text can't be overridden, skip this step.
   5. Side panel instance: set Tab=Annotations, Mode=Live.
   6. Header actions: override the label of "Button · 4 learners" to "3 learners". If that is not possible, report it once and skip it in the later frames.
   7. Look at the annotations listed in the Side panel. Report their times and types. Don't change them.
   8. Caption:
      Maya: Taps Discuss at 04:12 and types a comment. Adds a Marker at 07:30.
      System: The annotations appear in the list and on the timeline.

S6 · Checklist, Live (slot 6, x 7880, y 120)
   1. Clone S5 into the slot. Rename it "S6 · Checklist, Live". Add its label.
   2. Side panel instance: set Tab=Checklist, Mode=Live.
   3. "Elapsed": "08:20". Annotation input placeholder: "Add an annotation at 08:20…" (skip if not overridable).
   4. Caption:
      Maya: Opens Checklist and answers items as they happen.
      System: Each answer saves by itself.

S7 · Intercom in use (slot 7, x 9440, y 120)
   1. Clone S6 into the slot. Rename it "S7 · Intercom in use". Add its label.
   2. "Elapsed": "08:45". Annotation input placeholder: "Add an annotation at 08:45…" (skip if not overridable).
   3. Intercom strip instance, in "CUSTOM · Talk-to toggle": read the variant property values of the item "In-room" (it is the selected one) and of the item "Simulator". Then swap them: give "Simulator" the values "In-room" had, and give "In-room" the values "Simulator" had. "Simulator" is now the selected channel.
   4. Intercom strip instance, "Button · Hold to talk": if this button has a state property with a value such as Pressed or Active, set it. If it has none, leave it and report it.
   5. Caption:
      Maya: Holds Hold to talk on the Simulator channel and speaks as the patient.
      System: Her voice goes to the selected channel only.

S8 · Stop confirmation (slot 8, x 11000, y 120)
   1. Clone S7 into the slot. Rename it "S8 · Stop confirmation". Add its label.
   2. Intercom strip instance: undo the swap from S7, so "In-room" is selected again, and reset "Button · Hold to talk" to its default.
   3. "Elapsed": "18:42". Annotation input placeholder: "Add an annotation at 18:42…" (skip if not overridable).
   4. In "CUSTOM · Live timeline" > "Track", the instance whose name starts with "Progress": if it has a property for its value or position, set it to 18:42 of 20:00. If it has none, leave it and report it.
   5. Add a rectangle named "Dim" as a direct child of the S8 frame, 1440 × 948 at x 0, y 0, on top of everything else. Fill: the overlay or scrim variable that the Astryx Dialog uses in this file. If you can't find one, use the darkest neutral variable at 40% opacity and report which one you used.
   6. On top of "Dim", add an instance of "SRV / Stop confirmation" (1024:8693), 440 × 198, at x 500, y 375.
   7. Caption:
      Maya: Clicks Stop recording.
      System: Asks her to confirm. Keep recording returns to the session with nothing lost.

S9 · Stopped (slot 9, x 12560, y 120)
   1. Clone S8 into the slot. Rename it "S9 · Stopped". Add its label.
   2. Delete "Dim" and the Stop confirmation instance.
   3. Recording button instance: set State=Stopped. It now reads "Open debrief".
   4. Camera grid instance: set "Recording dot" to hidden on every tile.
   5. Side panel instance: set Tab=Annotations, Mode=Live.
   6. Header > Toolbar > Start Content: add an instance of "SRV / Mode switch", variant Active=Recording (1065:26861), 202 × 32, as the last child of the slot, after "Title". For reference, "Preview · Debrief" (1098:6920) on the Components page has it in the same slot at x 374, y 6.
   7. Caption:
      Maya: Confirms Stop recording.
      System: The recording ends and Ehli starts processing. The button becomes Open debrief.

Check:
- S5: the timeline shows two markers, 04:12 and 07:30, and "Elapsed" reads 08:00.
- S5–S8: the button reads "Stop recording". S9: it reads "Open debrief". It is 144 px wide in all five, so "Elapsed" stays at the same x.
- S8: the dialog is centred and nothing else sits above "Dim".
- S9: the Mode switch doesn't overlap the title or the Header actions.
Screenshot S5, S6, S7, S8 and S9.
```

## FL1b · Fixes across S1–S9

Run after FL1 and FL2. Claude Sonnet 5.5 · High, new chat:
`Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL1b · Fixes across S1–S9".`

Why 5 → 4 learners: the Participants popover is a component and reads "Participants · 5" with Olivia Grant Absent, so four are left. This round doesn't change components, so the button label follows the popover.

```
Assumes: Shared rules from this file. Frames S1 to S9 exist in Section "SRV flow · Recording" (1343:3275), built by FL0a, FL0b, FL1 and FL2.

Work only in these nine frames and in "Caption · S5". Don't add, delete, move or rename any frame.

1 · Header actions in S2 · Participants (1348:10885). Do the steps in this order.
   a. Set the "SRV / Header actions" instance to State=Default.
   b. Inside it, the nested instance "Button · 4 learners": set its State property to Pressed. Don't change its Variant.
   c. Check the popover "SRV / Participants popover" still sits with its right edge on the button's right edge and its top 4 px below the button. Move it if the button moved.

2 · Header actions in S3 · Layout & audio (1348:11530): set the "SRV / Header actions" instance to State=Open. "Button · Layout & audio" now shows as pressed. Leave the Layout & audio panel where it is.

3 · Learner label. Inside "SRV / Header actions", the nested button "Button · 4 learners" has a text layer "Label". Set it with a text override:
   - S1 · Ready to record (1343:4038): "5 learners"
   - S2 to S9: "4 learners"
   Do this after steps 1 and 2, because changing State can reset the override. Then read the label back in all nine frames and report what each one says.

4 · Third timeline marker, in S5 to S9. In each frame, go to "CUSTOM · Live timeline" > "Track". It holds "Marker · 04:12 · Discuss" (x 124) and "Marker · 07:30 · Marker" (x 232).
   a. Duplicate "Marker · 04:12 · Discuss" inside "Track". Rename the copy "Marker · 06:05 · Good practice". Set its x to 186 and y to 0. Keep it between the other two markers in the layer order.
   b. In the copy, set the text "Marker time" to "06:05".
   c. In the copy, swap the icon instance "icon/message-circle" to the icon component "icon/thumbs-up". To find that component, open the "SRV / Annotation input" instance in the same frame, find the nested "icon/thumbs-up" inside "Good practice", and use its main component. Keep the size at 16 × 16.
   d. Check that no two marker labels ("Marker time") overlap.

5 · Caption · S5: replace its text with these two lines.
   Maya: Taps Discuss at 04:12 and types a comment. Taps Good practice at 06:05 and adds a Marker at 07:30.
   System: The annotations appear in the list and on the timeline.

Check:
- S2: learners button pressed, Layout & audio not pressed. S3: Layout & audio pressed, learners button not pressed. All other frames: neither pressed.
- Learner label: "5 learners" in S1, "4 learners" in S2 to S9.
- S5 to S9: three markers at 04:12, 06:05 and 07:30, no overlapping labels.
Screenshot S2, S3 and S5.
```

## CR1 · Three component fixes

Edits on the Components page only. Runs in parallel with FL3. Claude Sonnet 5.5 · High, new chat:
`Read @wireframe-benchmark/reviews/11-11-srv-flow.md, then run ONLY section "CR1 · Three component fixes". It has its own rules; don't apply "Shared rules".`

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Library page "⚙️ Components (D)" (675:31351).

Rules for this run:
- Edit only the three components named below. Don't add, delete, rename or move any variant, layer or component, and don't touch any other page. Another Cursor chat is editing the "👤 SRV flow [D]" page at the same time.
- Change instances only through their variant properties, component properties and fills. Never detach.
- No hard-coded colours. Bind every fill you change to an existing variable from this file.
- Before you edit each component, record its instance count (sum over all variants, getInstancesAsync). After the edit it must be the same. If it isn't, stop and report.

1 · "SRV / Recording button", variant State=Ready (1024:8556). It holds one Astryx "Button" instance, Variant=Primary, label "Start recording".
   a. Look at variant State=Recording (1024:8557). Its button stroke and label are bound to the variable "Status/Error". That is the red to use.
   b. In State=Ready, keep the Button at Variant=Primary. Bind its fill to "Status/Error".
   c. Bind the label text fill and the icon fill to the variable the Primary button already uses for its label (the white on-primary text colour). Check it in the Button's own text layer and report its name.
   d. Leave State=Recording and State=Stopped as they are.

2 · "SRV / Stop confirmation" (1024:8693). Inside its "Dialog" > "Footer Actions" there are two buttons.
   a. "Stop recording": change Variant from Destructive to Secondary. Keep State=Rest, Size=MD and the label.
   b. "Keep recording (default, focused)": leave it as it is (Secondary, State=Focused).

3 · "SRV / Side panel", variant Tab=Checklist, Mode=Live (633:32980). This is the live checklist, so nothing in it may come from Ehli.
   a. In "Content" > "Scroll area" > "List", set these items through their variant properties (component "SRV / Checklist item", 565:28998):
      - "Item 1 · Yes · Ehli 3★" → Answer=Yes, Ehli=None, Stars=None. Rename the layer "Item 1 · Yes".
      - "Item 3 · Yes · Ehli 3★" → Answer=Yes, Ehli=None, Stars=None. Rename it "Item 3 · Yes".
      - "Item 4 · No · changed from Ehli" → Answer=No, Ehli=None, Stars=None. Rename it "Item 4 · No".
      - Items 2, 5, 6 and 7 stay as they are.
   b. "SRV / Checklist status" (936:7006 inside this variant): set Save=Saved. Leave Count at "4 of 7 answered".
   c. Leave the toolbar, the heading and the tabs as they are.
   d. Don't change Tab=Checklist, Mode=Debrief (633:32565). The debrief keeps the Ehli answers.

Check:
- Recording button Ready: red fill, white label and icon, still 144 × 32.
- Stop confirmation: both footer buttons are Secondary, and "Keep recording" is still the focused one.
- Side panel Checklist · Live: no AI label, no stars, no "Changed from Ehli" text anywhere. Status reads "4 of 7 answered" and "Saved …".
- Instance counts unchanged for all three components.
Report the variable names you bound, then screenshot the three components.
```

## FL3 · Frame fixes after the decisions

Edits on the SRV flow page only. Runs in parallel with CR1. Claude Sonnet 5.5 · High, new chat:
`Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL3 · Frame fixes after the decisions".`

```
Assumes: Shared rules from this file. Frames S1 to S9 exist in Section "SRV flow · Recording" (1343:3275). Another Cursor chat is editing components on the "⚙️ Components (D)" page at the same time. Don't touch that page.

Work only inside the frames named below.

1 · Progress fill. In each frame, go to "CUSTOM · Live timeline" > "Track" > the instance whose name starts with "Progress". Inside it is "Track" > "Fill". The track is 661 px wide and stands for 20:00, the same scale the markers use.
   Set the width of "Fill" and rename the Progress instance:
   - S4 · Recording: Fill 23 px. Name "Progress · 00:42 of 20:00".
   - S5 · Annotations, Live: Fill 264 px. Name "Progress · 08:00 of 20:00".
   - S6 · Checklist, Live: Fill 275 px. Name "Progress · 08:20 of 20:00".
   - S7 · Intercom in use: Fill 289 px. Name "Progress · 08:45 of 20:00".
   - S8 · Stop confirmation and S9 · Stopped: Fill 618 px. Name "Progress · 18:42 of 20:00".
   - S1, S2, S3: don't change. Check the bar shows no fill and report what you see.
   Resize "Fill" as an override on the instance. Never detach. If its width can't be overridden, change nothing and report it.
   In S5 to S9, check that the fill now ends after the 07:30 marker, and that the markers are still drawn on top of the bar.

2 · Empty checklist before recording, in S1, S2, S3 and S4. In the "SRV / Side panel" instance:
   a. Set every nested "SRV / Checklist item" instance in "List" to Answer=Unanswered, Ehli=None, Stars=None. Find them by the layer name prefixes "Item 1" to "Item 7", because their full names may change while this runs.
   b. Nested "SRV / Checklist status": set its Count property to "0 of 7 answered" and Save=Saved.
   S2 and S3 show the side panel partly under the popover and the Layout & audio panel. Do it there too.

3 · S9 · Stopped: hide the intercom.
   a. Set the "SRV / Intercom strip" instance (in "Camera area") to hidden.
   b. "Camera content" fills the freed 64 px. Set the "SRV / Camera grid" instance to fill the height of "Camera content" (layoutSizingVertical FILL), so the empty space goes to the cameras.
   c. If the camera tiles don't stretch with it, or the grid looks wrong, set the grid back to 624 px fixed and report it.
   d. The annotation input stays as it is.

4 · Caption · S9: replace its text with these two lines.
   Maya: Confirms Stop recording.
   System: The recording ends and Ehli starts processing. The intercom closes and the button becomes Open debrief.

Check:
- The Progress fill matches the clock in S4 to S9.
- S1 to S4: Checklist shows "0 of 7 answered" and no answered item.
- S9: no intercom, nothing cut off at 948 px, annotation input visible.
Screenshot S4, S5, S8 and S9.
```

## FL4 · Checklist text, progress bar, dialog button

Runs alone. Claude Sonnet 5.5 · High, new chat:
`Read @wireframe-benchmark/reviews/11-11-srv-flow.md. Apply "Shared rules", then run ONLY section "FL4 · Checklist text, progress bar, dialog button". Step 3 is the one exception to Shared rules and may edit one component.`

```
Assumes: Shared rules from this file. Frames S1 to S9 exist in Section "SRV flow · Recording" (1343:3275).

1 · Checklist text in S1, S2, S3 and S4. In the "SRV / Side panel" instance > "List", two items lost their text when they were switched to Unanswered. Fix them with text overrides on the nested text layers. Don't change their variant.
   - Layer "Item 1 · Yes": text "Number" → "1", text "Item" → "Performs hand hygiene and introduces self".
   - Layer "Item 4 · No": text "Number" → "4", text "Item" → "Escalates the lactate result to the provider".
   Rename those two layers "Item 1 · Unanswered" and "Item 4 · Unanswered".
   Then read back Number and Item for all seven items in each of the four frames and report them. Numbers must run 1 to 7 with no repeated text.

2 · Progress bar, in all nine frames. The Astryx ProgressBar can't show the times we need, so replace it with two plain rectangles. In each frame go to "CUSTOM · Live timeline" > "Track". Its first child is an instance whose name starts with "Progress".
   a. Read from that instance, before deleting it: the corner radius and the fill variable of its nested "Track" (Border/Default), and, in S5, of its nested "Fill" (Text/Disabled).
   b. Create a frame named "Progress · <time> of 20:00" (times below), no fill, no auto-layout, 661 × 10, at x 0, y 24 inside the outer "Track". Insert it at index 0, where the old instance was, so the markers stay on top.
   c. Inside it, add a rectangle "Bar", 661 × 10 at 0, 0, fill bound to Border/Default, the same corner radius.
   d. Add a rectangle "Fill" on top of "Bar", height 10 at 0, 0, fill bound to Text/Disabled, the same corner radius, width from the list. In S1 to S3 leave "Fill" out.
   e. Delete the old ProgressBar instance.
   Times and Fill widths (661 px = 20:00):
   - S1, S2, S3: "Progress · 00:00 of 20:00", no Fill.
   - S4: "Progress · 00:42 of 20:00", Fill 23.
   - S5: "Progress · 08:00 of 20:00", Fill 264.
   - S6: "Progress · 08:20 of 20:00", Fill 275.
   - S7: "Progress · 08:45 of 20:00", Fill 289.
   - S8, S9: "Progress · 18:42 of 20:00", Fill 618.

3 · The one component edit in this run. On page "⚙️ Components (D)" (675:31351), in "SRV / Stop confirmation" (1024:8693) > "Dialog" > "Footer Actions": set the button "Stop recording" to Variant=Primary. Keep State=Rest, Size=MD and its label. Don't change anything else on that page. Record the component's instance count before and after; it must stay the same.

Check:
- S1 to S4: checklist numbers 1 to 7, each text once, all unanswered.
- In every frame the bar sits where the old one was (compare with the marker ticks), and the fill ends at the right point: after the 07:30 marker in S5 to S7, near the end in S8 and S9, at the start in S4, none in S1 to S3.
- S8: "Stop recording" in the dialog is the Primary button, "Keep recording" is still Secondary and focused.
Screenshot S1, S5, S8 and S9.
```

## After these run

1. Claude reviews all nine frames and the "Component gaps" lists.
2. A short component round closes the gaps, starting with an "SRV / Live timeline" component, and the affected frames are updated.
3. The next round builds S10–S18 and the off-path states from the story file.
