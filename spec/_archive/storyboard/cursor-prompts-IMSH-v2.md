# Storyboard prompts · IMSH demo story v2 (for Cursor image generation)

Written 2026-10-05 from `spec/flows/IMSH-demo-story-v2.md`. The v1 prompts (`cursor-prompts-IMSH.md`) and images (`png/imsh/`) are kept as they are. v2 images go to a **new folder, `png/imsh-v2/`**.

**What changed compared with v1** (16 panels in both):

| v2 panel | Status | Based on |
|---|---|---|
| 1–4 | Same scene, regenerated | v1 panels 1–4 |
| 5 | **New:** edit event | — |
| 6–8 | Same scene, regenerated | v1 panels 6–8 |
| 9 | **New:** sound controls (voice modulator + background sounds) | — |
| 10–13 | Same scene, **new number** | v1 panels 9–12 |
| 14 | **Changed:** share without login | v1 panel 13 |
| 15–16 | Same scene, **new number** | v1 panels 14–15 |

Dropped: v1 panel 5 (sync with Canvas) and v1 panel 16 (learner on phone).

---

## How to run this in Cursor

Each Cursor chat gets a one-line prompt that says **which panels to make**. The agent reads the AGENT INSTRUCTIONS below on its own. Use **Sonnet 5.5** (or Opus 5.5) and not Auto.

**Step 1: the new panels first (one chat).** These are the only scenes without a v1 version, so check them before anything else:

```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-v2.md and generate panels 5, 9 and 14.
```

**Step 2: everything else, in three parallel chats:**

Chat A · Act 1 and the start of Act 2:
```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-v2.md and generate panels 1, 2, 3, 4, 6, 7 and 8.
```

Chat B · end of Act 2 and Act 3:
```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-v2.md and generate panels 10, 11, 12 and 13.
```

Chat C · Act 4:
```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-v2.md and generate panels 15 and 16.
```

Each chat writes only its own files, so the chats don't get in each other's way.

---

## AGENT INSTRUCTIONS (the Cursor agent reads this section)

> You are generating storyboard panels for a product demo. Use Cursor's built-in image generation. Do not write code and do not call external image services. **Generate only the panels named in the user's message.**
>
> 1. Read this file: the STYLE, CHARACTERS and the PANELS table.
> 2. Use these images as references for every panel:
>    - **Identity:** `storyboard/png/00-character-sheet-v2.png` (the faces, hair and clothing must match).
>    - **Style:** `storyboard/png/imsh/IMSH-03-column-mapping.png` (the painted look, the frame layout, and a zoomed UI callout bubble).
>    - **Composition:** the reference listed in the panel's row. When it is a v1 panel (`png/imsh/…`), **keep the same scene, people, pose and callout**, and change only what the row says, which is always the header number and footer title, plus any changes to the scene the row asks for.
> 3. For each panel you were asked for, build the prompt as `STYLE + CHARACTERS (only the people in the panel) + the panel's prompt`, and fill in `{N}`, `{TITLE}` and `{WHO · WHERE}` from the table. Use 16:9, 1920×1080 or larger.
> 4. Save each image as `storyboard/png/imsh-v2/IMSH-v2-{NN}-{slug}.png` (NN is zero-padded, e.g. `IMSH-v2-09-sound-controls.png`). Create the folder if it doesn't exist. Never write into `png/imsh/`.
> 5. Look at each result. Check that the header says "{N} OF 16", the footer number and title match the table, the faces match the character sheet, and the on-screen text is spelled correctly. If something is wrong, regenerate once. If it's still wrong, keep the best version and note it.
> 6. At the end, list the files you created and anything that still looks off. Don't touch any other files.

---

## STYLE (in every panel)

> Semi-realistic digital painting for a product storyboard, 16:9, matching the reference panel exactly: soft painterly rendering, natural window light, muted slate-blue, grey and warm-neutral palette, teal accents (#2E7D7A), and red used only for recording indicators. Light grey page background. Header in small caps, dark grey: "STORYBOARD — {N} OF 16" on the left and "ESSENTIALS 2.0 · IMSH DEMO" on the right. Below it, a large rounded white card holds a rounded painted scene, with a teal pill label naming the location in the lower-left corner of the scene. Where a screen matters, show it as a **flat, clean UI callout bubble** (white rounded rectangle with a thin dark outline and a pointer to the device) overlapping the scene edge, with simplified UI: grey placeholder bars, teal buttons and only the short labels given. Footer inside the card: a thin circular outline icon on the left, a large dark-slate title "{N} · {TITLE}", and under it in teal "{WHO · WHERE} · Essentials 2.0". Calm, professional, healthcare-education setting. No photorealism, no extra text.

## CHARACTERS (only the people in the panel)

- **Dana Whitfield** (sim coordinator): woman in her 50s, short silver bob, navy blazer or cardigan over a white collared blouse, reading glasses hanging from her collar. Office with a laptop.
- **Dr. Maya Ortiz** (faculty): woman in her late 40s, shoulder-length dark wavy hair, dark-rimmed glasses, white lab coat over a teal blouse, ID lanyard. Often holds an iPad.
- **Learners:** five nursing students in navy scrubs (NURS 310 · Group A).
- **Manikin:** a full-body patient simulator in a hospital bed, with a vitals monitor.

Story time: panels 1–5 are at the start of the semester (September). Panels 6–14 are on sim day, a few weeks later. Panels 15–16 are back in the office.

---

## PANELS

| N | Slug | TITLE | WHO · WHERE | Composition ref | PANEL prompt |
|---|---|---|---|---|---|
| 1 | dashboard | A new semester starts | Coordinator · Office | `imsh/IMSH-01-dashboard.png` | Same scene as the reference: Dana at her office desk, the dashboard callout with a teal "Import users" button. |
| 2 | import-from-excel | Drop in the class list | Coordinator · Office | `imsh/IMSH-02-import-from-excel.png` | Same scene as the reference: Dana drags an Excel file onto the "Import users" drop zone. |
| 3 | column-mapping | Columns matched | Coordinator · Office | `imsh/IMSH-03-column-mapping.png` | Same scene as the reference: columns linked to "Name", "Email", "Role". |
| 4 | fix-a-role | One role fixed in place | Coordinator · Office | `imsh/IMSH-04-fix-a-role.png` | Same scene as the reference: one amber row changing from "Learner" to "Faculty", and a teal "Confirm import" button. In the callout, a small secondary outline button "Sync with Canvas" sits in the top-right corner: visible but not highlighted, and nobody points at it. |
| 5 | edit-event | Fine-tune the first sim day | Coordinator · Office | `imsh/IMSH-05-sync-with-canvas.png` (Dana's pose and office only) | **New.** Dana at her laptop, pen in hand, making a small final adjustment. Callout: a simple "Edit event" screen titled "NURS 310 · Sepsis recognition" with three compact fields (a date and time chip "Wed 14:00", a room chip "Sim Room 2", a group chip "Group A" with five tiny avatars) and two small cards side by side, each with a thumbnail of a sim room. One field is highlighted teal as she changes it. A teal button "Save". A wall calendar behind her, with one day circled. |
| 6 | open-the-course | Everything is already set up | Faculty · Control room | `imsh/IMSH-06-open-the-course.png` | Same scene as the reference: the NURS 310 course page with the "Start new recording" button. |
| 7 | start-recording | Start from the course | Faculty · Control room | `imsh/IMSH-07-start-recording.png` | Same scene as the reference: everything prefilled, one learner unticked "Off sick". |
| 8 | recording-view | Recording, annotating | Faculty · Control room | `imsh/IMSH-08-recording-view.png` | Same scene as the reference: cameras, a red REC dot and timer, markers and a yes/no checklist. |
| 9 | sound-controls | The patient's voice, live | Faculty · Control room → Sim room | `imsh/IMSH-08-recording-view.png` (same control room) | **New.** Split panel with a teal arrow between the halves. Left, control room: Maya speaks into a desk microphone, looking through the window. Callout of the laptop: a compact "Sound" panel with a "Voice" row of three chips ("Adult", "Elderly", "Child"), "Elderly" highlighted teal, and a "Background" row with two toggles ("Ward noise" on, "Monitor alarm" on), plus a small sound-wave icon. Right, sim room: the manikin in bed "speaks" (small sound waves from its head), with a faint ward and alarm sound icon near the ceiling speaker. The learners lean in to listen. The red REC dot is still visible. Pill labels "CONTROL ROOM" and "SIMULATION ROOM". |
| 10 | stop-and-walk | Stop, then walk to debrief | Faculty · Corridor | `imsh/IMSH-09-stop-and-walk.png` | Same scene as the reference. Only the number changes (10). |
| 11 | debrief-ready | Ready in 30 seconds | Faculty · Debrief room | `imsh/IMSH-10-debrief-ready.png` | Same scene as the reference. Only the number changes (11). |
| 12 | big-screen | Video on the big screen | Faculty + Learners · Debrief room | `imsh/IMSH-11-big-screen.png` | Same scene as the reference. Only the number changes (12). |
| 13 | photo-of-notes | Paper notes, folded in | Faculty · Debrief room | `imsh/IMSH-12-photo-of-notes.png` | Same scene as the reference. Only the number changes (13). |
| 14 | share-no-login | Shared. No login needed | Faculty · Debrief room | `imsh/IMSH-13-share-with-participants.png` | **Changed.** Same debrief-room scene as the reference: Maya taps "Share with participants" on the iPad, five learners in the room, and five envelope icons fly out toward the panel edge. Change the callout: five small avatar chips already filled in, a teal line with a small open-padlock icon "Opens in the browser · no login needed", and a teal button "Share with participants". Next to the envelopes, one envelope opens into a small **laptop browser window** (not a phone) showing a video player. Nowhere a phone and no app icons. |
| 15 | lab-usage-report | Simulation Lab Usage | Coordinator · Office | `imsh/IMSH-14-lab-usage-report.png` | Same scene as the reference. Only the number changes (15). |
| 16 | weekly-report | Every week, automatically | Coordinator · Office | `imsh/IMSH-15-weekly-report.png` | Same scene as the reference. Only the number changes (16). |

**Booth cut** (if only 8 frames fit): 1, 3, 5, 6, 9, 11, 12, 14.

---

## After generation

- Make a contact sheet of panels 1–16 for Confluence: `png/imsh-v2/IMSH-v2-contact-sheet.jpg`.
- In Confluence, put each panel where the **"Visuals, in order"** list under each act of `IMSH-demo-story-v2.md` says, between Gabor's Figma screens.
- If the header or footer text keeps getting garbled, generate without text and add the header and footer in Figma.
