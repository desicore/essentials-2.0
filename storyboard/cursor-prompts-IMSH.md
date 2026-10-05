# Storyboard prompts · IMSH demo story (for Cursor image generation)

Written 2026-10-05 from `spec/flows/IMSH-demo-story.md`. **Temporary:** the story is waiting for Balázs and Gergely's approval. Generate now, and expect changes.

16 panels: Acts 1–4 (panels 1–15) and the optional Act 5 (panel 16). The style matches the existing **painted** DF set in `png/painted/`, so the old and new panels read as one family.

---

## How to run this in Cursor

### Option A · Parallel (recommended, about 4× faster)

1. **Chat 0 (style lock, about 5 minutes).** Paste **AGENT BRIEF** with `PANELS = 1, 6`. Check that both images match the painted style and the faces from the character sheet. Fix STYLE here if anything drifts, before starting the other chats.
2. **Then open 4 chats in parallel** (new chat each, same workspace). Paste **AGENT BRIEF** with:
   - Chat 1: `PANELS = 2, 3, 4, 5` (Act 1, Dana)
   - Chat 2: `PANELS = 7, 8, 9` (Act 2, Maya)
   - Chat 3: `PANELS = 10, 11, 12, 13` (Act 3, Maya: the showpiece)
   - Chat 4: `PANELS = 14, 15, 16` (Act 4 + optional Act 5)
3. Each chat writes only its own files, so the chats can't collide.

### Option B · One chat

Paste **AGENT BRIEF** with `PANELS = 1–16`. This is simpler, but it runs one image at a time, and long chats tend to drift in style by the end.

---

## AGENT BRIEF (paste this into the Cursor chat)

> You are generating storyboard panels for a product demo. Use Cursor's built-in image generation. Do not write code and do not call external image services.
>
> **PANELS = {fill in, e.g. 2, 3, 4, 5}**
>
> 1. Read `storyboard/cursor-prompts-IMSH.md` (this file): the STYLE, CHARACTERS and the PANELS table.
> 2. Use these images as references for every panel:
>    - **Identity:** `storyboard/png/00-character-sheet-v2.png` (the faces, hair and clothing must match).
>    - **Style:** `storyboard/png/painted/DF-2-02-columns-matched.png` (the painted look, the frame layout, and a zoomed UI callout bubble).
>    - **Composition:** the extra reference listed in the panel row, if there is one.
> 3. For each panel in PANELS, build the prompt as `STYLE + CHARACTERS (only the people in the panel) + the panel's prompt`, and fill in `{N}`, `{TITLE}` and `{WHO · WHERE}` from the table. Use 16:9, 1920×1080 or larger.
> 4. Save each image as `storyboard/png/imsh/IMSH-{NN}-{slug}.png` (NN is zero-padded, e.g. `IMSH-03-column-mapping.png`). Create the folder if it doesn't exist.
> 5. Look at each result. If on-screen text is misspelled, a face doesn't match the character sheet, or the header or footer is wrong, regenerate once. If it's still wrong, keep the best version and note it.
> 6. At the end, list the files you created and anything that still looks off. Don't touch any other files.

---

## STYLE (in every panel)

> Semi-realistic digital painting for a product storyboard, 16:9, matching the reference panel exactly: soft painterly rendering, natural window light, muted slate-blue, grey and warm-neutral palette, teal accents (#2E7D7A), and red used only for recording indicators. Light grey page background. Header in small caps, dark grey: "STORYBOARD — {N} OF 16" on the left and "ESSENTIALS 2.0 · IMSH DEMO" on the right. Below it, a large rounded white card holds a rounded painted scene, with a teal pill label naming the location in the lower-left corner of the scene. Where a screen matters, show it as a **flat, clean UI callout bubble** (white rounded rectangle with a thin dark outline and a pointer to the device) overlapping the scene edge, with simplified UI: grey placeholder bars, teal buttons and only the short labels given. Footer inside the card: a thin circular outline icon on the left, a large dark-slate title "{N} · {TITLE}", and under it in teal "{WHO · WHERE} · Essentials 2.0". Calm, professional, healthcare-education setting. No photorealism, no extra text.

## CHARACTERS (only the people in the panel)

- **Dana Whitfield** (sim coordinator): woman in her 50s, short silver bob, navy blazer or cardigan over a white collared blouse, reading glasses hanging from her collar. Office with a laptop.
- **Dr. Maya Ortiz** (faculty): woman in her late 40s, shoulder-length dark wavy hair, dark-rimmed glasses, white lab coat over a teal blouse, ID lanyard. Often holds an iPad.
- **Emily Baker** (nursing student): woman around 21, long dark ponytail, navy student scrubs, backpack.
- **Learners:** five nursing students in navy scrubs (NURS 310 · Group A). Emily is one of them.
- **Manikin:** a full-body patient simulator in a hospital bed, with a vitals monitor.

Story time: panels 1–5 are at the start of the semester (September). Panels 6–13 are on sim day, a few weeks later. Panels 14–15 are back in the office. Panel 16 is that evening, on campus.

---

## PANELS

| N | Slug | TITLE | WHO · WHERE | Extra composition ref | PANEL prompt |
|---|---|---|---|---|---|
| 1 | dashboard | A new semester starts | Coordinator · Office | `painted/DF-1-01-open-essentials.png` | Dana at her office desk with a laptop and a coffee mug, a wall calendar showing "September". Callout of the laptop screen: a dashboard with a few simple stat tiles and a highlighted teal button "Import users". Fresh start-of-term mood, a stack of new student folders on the desk. |
| 2 | import-from-excel | Drop in the class list | Coordinator · Office | `painted/DF-2-01-drop-in-the-spreadsheet.png` | Dana drags a spreadsheet file (a green Excel-style icon) onto a dashed upload area on the laptop. Callout: a dashed drop zone with the label "Import users" and a small Excel icon landing in it. |
| 3 | column-mapping | Columns matched | Coordinator · Office | `painted/DF-2-02-columns-matched.png` | Same setup. Callout: two columns linked by thin teal lines, spreadsheet headings on the left and three fields on the right, labelled "Name", "Email", "Role". Each line has a small "Matched" tag. Dana checks it, pen in hand. |
| 4 | fix-a-role | One role fixed in place | Coordinator · Office | `painted/DF-2-04-fix-it-in-place.png` | Close-up of the laptop. Callout: a list of imported people, one row highlighted amber, and a small dropdown on that row changing from "Learner" to "Faculty". A teal button "Confirm import". Dana's finger on the trackpad. |
| 5 | sync-with-canvas | One click to sync | Coordinator · Office | `painted/DF-2-05-the-week-is-in.png` | Dana clicks a teal button "Sync with Canvas". Callout: a success card with a teal check and a short line "Courses and users up to date". Dana leans back, done with setup. |
| 6 | open-the-course | Everything is already set up | Faculty · Control room | `painted/DF-1-01-open-essentials.png` | Weeks later. Maya at the control-room laptop, the sim room visible through a one-way window behind it, five learners in navy scrubs waiting in the corridor. Callout: a course page titled "NURS 310" with three small sections (a scenario card "Sepsis recognition", a checklist icon, and five avatar chips "Group A") and a teal button in the top right "Start new recording". |
| 7 | start-recording | Start from the course | Faculty · Control room | `painted/DF-1-03-scenario-and-group.png` | Close-up over Maya's shoulder. Callout: a side panel with the room, scenario and group already filled in, five name rows with checkboxes, one of them unticked and greyed "Off sick". A teal button "Start recording". |
| 8 | recording-view | Recording, annotating | Faculty · Control room | `painted/DF-1-08-drop-a-marker.png` | The scenario is running. Through the window, learners work around the manikin. Callout: the recording view with three camera tiles, a red "REC" dot and timer, a small layout selector icon, marker flags on a timeline strip, and a short yes/no checklist on the right with two green ticks. |
| 9 | stop-and-walk | Stop, then walk to debrief | Faculty · Corridor | `painted/DF-1-12-saved-debrief-ready.png` | Split panel. Left: Maya clicks "Stop" on the laptop and a small card reads "Processing…". Right: Maya walks down the corridor with an iPad in hand toward a door labelled "DEBRIEF ROOM", with learners following. A teal arrow connects the halves. |
| 10 | debrief-ready | Ready in 30 seconds | Faculty · Debrief room | `painted/DF-3-01-its-already-waiting.png` | Debrief room: a table, chairs, a large wall TV. Maya holds the iPad in landscape and the learners sit down. Callout of the iPad: a video player with a yes/no checklist summary (green ticks, one red cross, no score), a short "AI summary" text card, and a row of three small "AI clip" thumbnails. A small timer badge "Ready · 0:28". |
| 11 | big-screen | Video on the big screen | Faculty + Learners · Debrief room | `painted/DF-3-04-video-on-the-wall.png` | The wall TV shows a quad camera view of the sim room, large. The learners watch the TV. In Maya's hands, the iPad shows a layout selector with four small icons (single, dual, quad) with "quad" highlighted teal. |
| 12 | photo-of-notes | Paper notes, folded in | Faculty · Debrief room | `painted/DF-3-05-add-a-moment.png` | Maya holds the iPad over a handwritten paper checklist on the table, taking a photo. Callout: the photo of the notes with a small teal "AI" sparkle icon, and an arrow into the "AI summary" card, which shows a new highlighted line. |
| 13 | share-with-participants | Share with participants | Faculty · Debrief room | `painted/DF-3-08-approve-is-the-send.png` | Maya taps a teal button "Share with participants" in the top right of the iPad screen. Five small envelope icons fly out of the iPad toward the edge of the panel. The learners pick up their bags, the session over. |
| 14 | lab-usage-report | Simulation Lab Usage | Coordinator · Office | `painted/DF-2-14-everything-adds-up.png` | Back in her office, Dana studies the laptop. Callout: a report titled "Simulation Lab Usage" with a bar chart, a donut chart and three stat tiles ("Sim hours", "Students", "Room usage"), period filter chips "12 weeks · Quarter · YTD", and a small "Export" button. |
| 15 | weekly-report | Every week, automatically | Coordinator · Office | — | Dana sets up a schedule. Callout: a small dialog "Weekly report" with a "Every Monday" chip, a recipient chip "Management", and a teal button "Schedule". In the background, a few envelope icons with a calendar icon suggest repeating weekly emails. Dana smiles, one less thing to do. |
| 16 | learner-phone *(optional)* | Her debrief, on her phone | Learner · Campus | `painted/DF-3-12-just-her-moment.png` | Optional Act 5. Emily on a campus bench in the evening, backpack beside her, looking at her phone. Callout of the phone: a video with marker flags on its timeline, a short "AI summary" card, two "AI clip" thumbnails, and a yes/no checklist with ticks. Thoughtful, engaged expression. |

**Booth cut** (if only 8 frames fit): 1, 3, 6, 8, 10, 11, 13, 14.

---

## After generation

- Make a contact sheet of panels 1–15 (and 16 if it's kept) for Confluence: `png/imsh/IMSH-contact-sheet.jpg`.
- If the header or footer text keeps getting garbled, generate without text and add the header and footer in Figma.
- The old `png/painted/DF-*` panels stay as they are. They're legacy, but they're used as composition references here.
