# Storyboard prompts · IMSH demo story final (for Cursor image generation)

Written 2026-10-05 from `spec/flows/IMSH-demo-story-final.md`. The v1 and v2 prompts and images are kept as they are. Final images go to a **new folder, `png/imsh-final/`**.

**No numbers on the images.** The header and footer carry only the title, so a later reorder doesn't mean regenerating images. Step numbers go in the Confluence captions.

**What changed compared with v2** (12 panels, Maya in every one):

| Final panel | Status | Based on |
|---|---|---|
| dashboard | **New:** Maya, not Dana | v2 `IMSH-v2-01-dashboard.png` (composition only) |
| calendar | **New** | — |
| learner-assignment | **New** | v2 `IMSH-v2-05-edit-event.png` (composition only) |
| start-from-event | **New** | v2 `IMSH-v2-07-start-recording.png` |
| recording-view | Same scene, no number | v2 `IMSH-v2-08-recording-view.png` |
| stop-and-walk | Same scene, no number | v2 `IMSH-v2-10-stop-and-walk.png` |
| debrief-ready | Same scene, no number | v2 `IMSH-v2-11-debrief-ready.png` |
| big-screen | Same scene, no number | v2 `IMSH-v2-12-big-screen.png` |
| photo-of-notes | Same scene, no number | v2 `IMSH-v2-13-photo-of-notes.png` |
| share-no-login | Same scene, no number | v2 `IMSH-v2-14-share-no-login.png` |
| lab-usage-report | **Changed:** Maya, not Dana | v2 `IMSH-v2-15-lab-usage-report.png` (composition only) |
| weekly-report | **Changed:** Maya, not Dana | v2 `IMSH-v2-16-weekly-report.png` (composition only) |

---

## How to run this in Cursor

Use **Sonnet 5.5** (or Opus 5.5), not Auto. Each chat gets one line. The agent reads the AGENT INSTRUCTIONS below on its own.

**Step 1: the new scenes first (one chat).** Check these before starting the others:

```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-final.md and generate: dashboard, calendar, learner-assignment, start-from-event.
```

**Step 2: everything else, in two parallel chats:**

Chat A · the debrief:
```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-final.md and generate: recording-view, stop-and-walk, debrief-ready, big-screen, photo-of-notes.
```

Chat B · sharing and the report:
```
Follow the AGENT INSTRUCTIONS in storyboard/cursor-prompts-IMSH-final.md and generate: share-no-login, lab-usage-report, weekly-report.
```

Each chat writes only its own files, so the chats don't get in each other's way.

---

## AGENT INSTRUCTIONS (the Cursor agent reads this section)

> You are generating storyboard panels for a product demo. Use Cursor's built-in image generation. Do not write code and do not call external image services. **Generate only the panels named in the user's message** (by their slug).
>
> 1. Read this file: the STYLE, CHARACTERS and the PANELS table.
> 2. Use these images as references for every panel:
>    - **Identity:** `storyboard/png/00-character-sheet-v2.png`. Only Dr. Maya Ortiz appears as a main character, and her face, hair and clothing must match.
>    - **Style:** `storyboard/png/imsh/IMSH-03-column-mapping.png` (the painted look, the frame layout, and a zoomed UI callout bubble).
>    - **Composition:** the reference in the panel's row. "Same scene" means keep the scene, people, pose and callout, and change only what the row says. "Composition only" means reuse the setting and layout, but follow the row's prompt for the people and the screen.
> 3. For each panel, build the prompt as `STYLE + CHARACTERS (only the people in the panel) + the panel's prompt`, and fill in `{TITLE}` and `{WHO · WHERE}` from the table. Use 16:9, 1920×1080 or larger.
> 4. **No numbers anywhere in the frame:** no "N OF 12" in the header, and no "N ·" before the title. If the reference image has numbers, leave them out.
> 5. Save each image as `storyboard/png/imsh-final/IMSH-{slug}.png` (e.g. `IMSH-calendar.png`). Create the folder if it doesn't exist. Never write into `png/imsh/` or `png/imsh-v2/`.
> 6. Look at each result. Check that the header and footer have no numbers, the footer title matches the table, Maya's face matches the character sheet, and the on-screen text is spelled correctly. If something is wrong, regenerate once. If it's still wrong, keep the best version and note it.
> 7. At the end, list the files you created and anything that still looks off. Don't touch any other files.

---

## STYLE (in every panel)

> Semi-realistic digital painting for a product storyboard, 16:9, matching the reference panel exactly: soft painterly rendering, natural window light, muted slate-blue, grey and warm-neutral palette, teal accents (#2E7D7A), and red used only for recording indicators. Light grey page background. Header in small caps, dark grey: "STORYBOARD" on the left and "ESSENTIALS 2.0 · IMSH DEMO" on the right, with no numbers. Below it, a large rounded white card holds a rounded painted scene, with a teal pill label naming the location in the lower-left corner of the scene. Where a screen matters, show it as a **flat, clean UI callout bubble** (white rounded rectangle with a thin dark outline and a pointer to the device) overlapping the scene edge, with simplified UI: grey placeholder bars, teal buttons and only the short labels given. Footer inside the card: a thin circular outline icon on the left, a large dark-slate title "{TITLE}" with no number, and under it in teal "{WHO · WHERE} · Essentials 2.0". Calm, professional, healthcare-education setting. No photorealism, no extra text.

## CHARACTERS (only the people in the panel)

- **Dr. Maya Ortiz** (faculty): woman in her late 40s, shoulder-length dark wavy hair, dark-rimmed glasses, white lab coat over a teal blouse, ID lanyard. Often holds an iPad.
- **Learners:** five nursing students in navy scrubs (NURS 310 · Group A).
- **Manikin:** a full-body patient simulator in a hospital bed, with a vitals monitor.

Story time: dashboard, calendar and learner assignment are the week before, in Maya's faculty office. Start-from-event to share are on sim day. The report panels are back in her office afterwards.

---

## PANELS

| Slug | TITLE | WHO · WHERE | Composition ref | PANEL prompt |
|---|---|---|---|---|
| dashboard | A new dashboard | Faculty · Office | `imsh-v2/IMSH-v2-01-dashboard.png` (composition only) | **New.** Maya at her desk in a small faculty office with a laptop and a coffee mug, a bookshelf behind her. Callout: a clean new dashboard with an "Upcoming" list (top row highlighted teal: "NURS 310 · Sepsis recognition"), a small "Recent recordings" card and a mini month calendar with one day marked teal. Calm start-of-week mood. |
| calendar | The sim event in the calendar | Faculty · Office | — | **New.** Same office, Maya leaning toward the laptop, pointing at the screen. Callout: a week calendar view with a few grey event blocks and one teal block "NURS 310 · Sepsis recognition · Wed 14:00" that her cursor is clicking. |
| learner-assignment | Assign the learners | Faculty · Office | `imsh-v2/IMSH-v2-05-edit-event.png` (composition only) | **New.** Maya at the laptop, focused, one hand on the trackpad. Callout: an "Edit event" screen titled "NURS 310 · Sepsis recognition" with two small rotation cards side by side ("Rotation 1", "Rotation 2"), each with a sim-room thumbnail and a short list of learner name rows with small avatars. One learner chip is being dragged from a "Group A" list on the left into "Rotation 2". A teal button "Save". |
| start-from-event | Start from today's event | Faculty · Control room | `imsh-v2/IMSH-v2-07-start-recording.png` | **Changed.** Same control-room scene as the reference: Maya at the laptop, learners waiting in the corridor. Change the callout: today's event card "NURS 310 · Sepsis recognition · Today 14:00" with five learner rows and checkboxes, one unticked and greyed "Off sick", and a teal button "Start recording". |
| recording-view | Recording, annotating | Faculty · Control room | `imsh-v2/IMSH-v2-08-recording-view.png` | Same scene as the reference. No number. |
| stop-and-walk | Stop, then walk to debrief | Faculty · Corridor | `imsh-v2/IMSH-v2-10-stop-and-walk.png` | Same scene as the reference. No number. |
| debrief-ready | Ready in 30 seconds | Faculty · Debrief room | `imsh-v2/IMSH-v2-11-debrief-ready.png` | Same scene as the reference. No number. |
| big-screen | Video on the big screen | Faculty + Learners · Debrief room | `imsh-v2/IMSH-v2-12-big-screen.png` | Same scene as the reference. No number. |
| photo-of-notes | Paper notes, folded in | Faculty · Debrief room | `imsh-v2/IMSH-v2-13-photo-of-notes.png` | Same scene as the reference. No number. |
| share-no-login | Shared. No login needed | Faculty · Debrief room | `imsh-v2/IMSH-v2-14-share-no-login.png` | Same scene as the reference. No number. |
| lab-usage-report | Simulation Lab Usage | Faculty · Office | `imsh-v2/IMSH-v2-15-lab-usage-report.png` (composition only) | **Changed.** Maya (not Dana) in her faculty office, studying the laptop. Callout as in the reference: a report titled "Simulation Lab Usage" with a bar chart, a donut chart and three stat tiles ("Sim hours", "Students", "Room usage"), period chips "12 weeks · Quarter · YTD", and a small "Export" button. |
| weekly-report | Every week, automatically | Faculty · Office | `imsh-v2/IMSH-v2-16-weekly-report.png` (composition only) | **Changed.** Maya (not Dana) in her faculty office. Callout as in the reference: a small "Weekly report" dialog with an "Every Monday" chip, a recipient chip "Management" and a teal button "Schedule". Maya smiles, one less thing to do. |

**Booth cut** (if only 6 frames fit): calendar, learner-assignment, recording-view, debrief-ready, big-screen, lab-usage-report.

---

## After generation

- Make a contact sheet of all 12 panels, in story order, for Confluence: `png/imsh-final/IMSH-final-contact-sheet.jpg`.
- In Confluence, put each panel where the **"Visuals, in order"** list under each step of `IMSH-demo-story-final.md` says, and add the step number in the caption.
