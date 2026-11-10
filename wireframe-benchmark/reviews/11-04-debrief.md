# 11-04 · Desktop debrief in the SRV

Figma: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Library page "⚙️ Components" (675:31351). Gabor's iPad debrief is on "Debriefing Tablet (G)" (706:22204).

## Context

After a recording, faculty can debrief on the tablet (Gabor's design) or on the same laptop they recorded on. This is the laptop version: Gabor's content in the SRV layout. On the iPad the video plays on the TV, so the tablet only shows information. On a laptop, the video and the information share one screen.

## Decisions (11-04, Daniel)

| Topic | Decision |
|---|---|
| Layout | Keep the SRV layout and move Gabor's content into it |
| Debrief vs Video Review | Debrief is the conversation right after the session. Video review is rewatching later, and it also shows the debrief information. The name "video review" may change |
| Recording/Debrief switch | Shows only after Stop. "Open debrief" stays the main button the first time, and the switch is the way back and forth |
| 30 seconds | An engineering goal, not a UI promise. The Ehli strip copy stays. The Stop confirmation drops "30 seconds" and "on the tablet" |
| AI clips | No send-to-TV button on the laptop |
| "AI annotations" switch on Gabor's frames | Removed, because Ehli is always on. Daniel tells Gabor (reminder annotation on 723:9857) |
| Tablet touch components | Part of the joint library review with Gabor, not this round |

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Call | Why |
|---|---|---|
| Five tabs | The panel stays, 560 px wide in Debrief, so all five fit as normal tabs | Daniel asked about hiding the panel and using a Toolbar or SegmentedControl. Video and information must be visible together, so the panel has to stay. Widening gives the same benefit, and Annotation cards and Checklist items already fill their parent. A SegmentedControl would also sit right under the Recording/Debrief one |
| No-sidebar variant | DB3 also builds a second preview with no side panel, at Daniel's request, so both can be compared side by side | Daniel wants to see it before deciding |
| AI feedback vs Facilitator feedback | A SegmentedControl inside the Feedback tab | Two views of one thing, which is what it's for |
| AI feedback columns | Stacked sections | 528 px is too narrow for three columns |
| Tag filter | Not ported. The panel keeps "All annotations" | Gabor's filter has "Safety concern" and "Communication", which the SRV doesn't have. Align tags in the joint review |
| Tagged learners popover | Not ported | Not needed for the IMSH flow |
| Sample content | Rewritten for NURS 310 · Sepsis recognition | Gabor's sample is Airway management, and the flow has to read as one session |

## Share dialog (11-04, Daniel)

Daniel's redesign (1075:41331) replaces the clone of Gabor's dialog. AI feedback stays unticked until faculty has shown it or opened Preview, because ticking it approves it and a share can't be recalled. Private annotations aren't a feature, so that line goes. The dialog says "learners" and "AI feedback" throughout. The AI source choices and "Learners can access each item separately" are gone.

## Reminders for Daniel

- Tell Gabor to remove the "AI annotations" switch (annotation on 723:9857).
- Tell Gabor about the new Share dialog, so the tablet matches: no AI source choices, no "Learners can access each item separately".

## How to run

**DB0, DB1 and DB2 run in parallel, one Cursor chat each.** Tell me when they're done. After the QA and your read of DB0, run DB3.

1. **DB0 · Adapt second opinion.** Model: **the strongest non-Anthropic model in your picker · High**. It's a review of a plan written by Claude, so a different model is more useful. Text only, no Figma changes.
   `Read @wireframe-benchmark/reviews/11-04-debrief.md, then run ONLY section "DB0 · Adapt second opinion".`
2. **DB1 · Header and dialogs.** Model: **Claude Sonnet 5.5 · High**.
   `Read @wireframe-benchmark/reviews/11-04-debrief.md. Apply "Shared rules", then run ONLY section "DB1 · Header and dialogs".`
3. **DB2 · Debrief parts.** Model: **Claude Opus 5.5 · Medium**.
   `Read @wireframe-benchmark/reviews/11-04-debrief.md. Apply "Shared rules", then run ONLY section "DB2 · Debrief parts".`
4. **DB3 · Debrief panel and preview.** Run it only after DB1 and DB2 pass QA. Model: **Claude Opus 5.5 · High**.
   `Read @wireframe-benchmark/reviews/11-04-debrief.md. Apply "Shared rules", then run ONLY section "DB3 · Debrief panel and preview".`

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Library page "⚙️ Components" (675:31351). Sources: the Drafts page (305:18292) and "Debriefing Tablet (G)" (706:22204).

Other Cursor chats are working in this file at the same time, so:
- Edit only what your section names, and build only inside your own Section. Don't move, tidy or rename anything else.
- "Debriefing Tablet (G)" and every other "(G)" page are read-only. You may clone from them, but never change them. The Drafts frames are source material too, unless your section says otherwise.
- Never delete a variant, layer or frame that your section doesn't name.

How to build:
- Greyscale only, including image fills (saturation -1). The only colour is the existing red variable for recording states.
- Bind fills, strokes, text styles and spacing to the variables and styles already in this file, as the existing "SRV / ..." components do. No hard-coded values.
- Use Astryx components (Button, SegmentedControl, Tabs, Divider and so on) as instances, and auto-layout everywhere.
- Name components "SRV / <Name>". Add each one to its Section with a label 24 px above it (16 px medium, its exact name), 120 px apart and top-aligned. New Sections have 80 px padding. Resize your Section to fit.
- When you edit a component that has instances, record its instance count first (sum over variants, with getInstancesAsync, with both pages loaded). It must not go down. If it does, stop and report.
- Say "Ehli", not "AI assistant". Use "annotation", never "note", for time-bound items. "Facilitator feedback" keeps its name.

When done, report the new component IDs, then screenshot your Section.
```

## DB0 · Adapt second opinion

```
Use the /impeccable adapt skill as a reviewer. Don't change anything in Figma.

Source: Gabor's iPad debrief on page "Debriefing Tablet (G)" (706:22204), landscape frames 723:8850, 723:9091, 723:9829, 725:9385 and 725:10732.
Target: a 1440 × 948 laptop with mouse and keyboard, used by faculty right after a simulation, often with learners around the screen. Shell: 48 px side rail, 48 px top bar, 64 px header. Video on the left, a 560 px panel on the right.
Plan under review: the sections "Context", "Decisions" and "Decisions in these prompts" in this file, plus the mapping in DB2 and DB3.

Answer these:
1. What does the plan get wrong for a laptop or for this use?
2. Is anything from the iPad version lost that faculty would miss?
3. Is 560 px right? Give a better width if not, with the reason.
4. What's the single biggest risk?
5. Which is better for this use: the 560 px side panel, or no side panel, with video and content at equal width and a SegmentedControl above both? Say why.

Don't redo decisions marked as Daniel's, unless one causes a real problem. Rank your points, keep it under 400 words, and write it to wireframe-benchmark/reviews/11-04-debrief-adapt.md.
```

## DB1 · Header and dialogs

```
You may add: a new Section "SRV · Debrief header" on "⚙️ Components" at x 0, y 13400.
You may edit: "SRV / Header actions" (565:29001), adding one variant only, and the body text of "SRV / Stop confirmation" (1024:8693).

1 · "SRV / Mode switch". Clone the SegmentedControl and the QR icon button from the header Start Content of D2 (472:25836).
   - Property Active = Recording | Debrief.
   - Annotation: "Shows only after Stop, because there's no debrief during recording. The QR button opens 'SRV / QR popup'."

2 · "SRV / QR popup". Clone "Popover · Open on a tablet" (474:12851) from D3. 320 px wide. Keep the text and "Expires in 10 min".

3 · In "SRV / Header actions", add State=Debrief, with these in order, from left to right:
   - "Voice memo: On" (Secondary, with icon/mic, from Gabor's header in 723:8850)
   - Layout & audio
   - Report a problem
   - 4 learners
   - "Share" (Primary, with the share icon, from 723:8850)
   Keep the other three variants as they are.

4 · "SRV / Share dialog". Clone "Share popup" (744:7045) from Gabor's page, 600 px wide. Keep the content and the Cancel and Share buttons. Change the learner count from 6 to 4.
   - Annotation: "Opens from Share in the header. Same content as the tablet."

5 · In "SRV / Stop confirmation", change the body text to: "This ends the recording for NURS 310 · Sepsis recognition. You can open the debrief here or on a tablet."

Check: State=Debrief fits next to the title and the Mode switch in a 1392 px header. Show this in a temporary frame, then delete it, and report the free space.
```

## DB2 · Debrief parts

```
You may add: a new Section "SRV · Debrief parts" on "⚙️ Components" at x 0, y 14800.

1 · "SRV / Feedback list". One titled block of bullets, 528 px wide, hug height. Take the icon, title and bullet style from a column in 723:8850, but with no fixed height and no inner scrollbar. Property Type = Went well | Improve | Reflect, with the titles "What went well", "Areas for improvement" and "Reflection questions" and their icons.

2 · "SRV / Feedback content". 528 px wide, hug height. At the top, a SegmentedControl with "AI feedback" and "Facilitator feedback". Property State = AI ready | AI processing | AI error | Facilitator empty | Facilitator filled.
   - AI ready: an intro line, "Written by Ehli from the transcript, annotations and checklist.", then three "SRV / Feedback list" instances, 12 px apart, with the sample text below.
   - AI processing: an "SRV / Ehli status" instance, State=Processing, text "Ehli is writing the feedback · 60 %". No lists.
   - AI error: an "SRV / Ehli status" instance, State=Error, text "Ehli couldn't write the feedback.", with Retry. No lists.
   - Facilitator empty: clone the card from 723:9091 with an empty text area and the hint "Type your feedback here, or upload a photo of your paper notes." Use an upload icon button instead of the camera, since this is a laptop. "Discard" and "Save to feedback" stay.
   - Facilitator filled: the same card with the sample text below.

   Sample text:
   What went well: "Vital signs were taken early and in full." / "Fluids were started as ordered at 07:30." / "The handoff to the charge nurse was clear and closed-loop."
   Areas for improvement: "Hand hygiene was skipped before the first patient contact." / "The lactate of 4.1 wasn't escalated to the provider." / "The SBAR handoff left out the background."
   Reflection questions: "What stopped the team from escalating the lactate result?" / "How can you make sure blood cultures are drawn before antibiotics?" / "What would help you give the background in an SBAR handoff?"
   Facilitator: "Good teamwork once fluids started" / "Who owns the lactate result? Escalate sooner" / "Practise SBAR next session"

3 · "SRV / AI clip row". 528 px wide, 72 px high. A 96 × 56 thumbnail with a greyscale camera image and the duration on it, then the title, then "<camera> · from an Ehli annotation". Take the style from the clip cards in 723:9829, but as a row, and with no send-to-TV button. Property State = Default | Playing | Seen. Text properties "Title" and "Meta".

4 · "SRV / Playback bar". 784 px wide. Left to right: play/pause button, "-10s" and "+10s" Secondary buttons (from Gabor's Video control in 723:8850), then an "SRV / Timeline" (570:56218) instance, Ehli=On, filling the rest. Property State = Paused | Playing.
   - Annotation: "Replaces the Recording button in Debrief. Clicking an annotation, chapter or clip jumps here."

Check: no fixed heights inside the lists, every text wraps inside 528 px, the Timeline markers stay in place at the narrower width, and the thumbnails are greyscale.
```

## DB3 · Debrief panel and preview

Run this only after DB1 and DB2 have passed QA. If DB0 changes something you agree with, I'll update this section first.

```
You may add: a new Section "SRV · Debrief panel" on "⚙️ Components" at x 0, y 16400.

0 · Small fixes from QA, before anything else. You may edit these components for this step only:
   - "SRV / Timeline" (570:56218): add a boolean "Show times", default true, bound to every "Marker time" text. In "SRV / Playback bar" (1065:27829), set it to false in both states, because 03:05 and 04:12 collide at 784 px.
   - "SRV / Feedback content" (1067:5364): in both Facilitator states, change the avatar initials from DS to MO.
   - "SRV / Feedback content" (1067:5364): add a new State "AI hidden", placed first in the State options. It has the same SegmentedControl as the other states, with AI feedback selected. Below it, a card with the same style as "SRV / Feedback list": the sparkle icon, "Ehli's feedback is ready", the line "Check it yourself first if others can see this screen.", and a Secondary button "Show feedback". No feedback text is visible in this state.
     Annotation on the set: "Laptop only. Learners may see this screen, so AI feedback stays hidden until faculty chooses to show it. It stays shown for the rest of this debrief. Ehli still runs as usual."
   - "SRV / Share dialog" (1065:27409): replace its contents with Daniel's new design, "[Impeccable] SRV / Share dialog FINAL" (1075:41331). Clone that frame's contents, and leave Section "[Refine] SRV ・ Share dialog" untouched. Keep the Astryx instances. Then turn the component into a set with a property AI = Not reviewed | Reviewed, with these changes in both variants:
     - Title: "Share with learners".
     - Recipients line: "Emily Baker, Priya Shah and 2 others". Keep the "4 learners" button.
     - Recording row: title "Recording with annotations", meta "Sepsis recognition · 18 min 42 s". Keep "Always included".
     - AI row title: "AI feedback and clips". Keep the AI label and Preview.
     - Footer: "Each learner gets an email link right away, and it can't be recalled. It opens without logging in and expires on Feb 2." Remove "Sharing also approves the AI summary."
     - AI=Not reviewed: the AI checkbox is unticked and disabled, with the meta "3 clips · 1 min 42 s · Preview it first to share it". The button stays "Share with 4 learners".
     - AI=Reviewed: the AI checkbox is ticked and enabled, with the meta "3 clips · 1 min 42 s · Sharing approves it".
     Replace the annotation on the set with: "Opens from Share in the header. AI feedback can only be ticked after faculty has shown it in the Feedback tab or opened Preview. Ticking it approves it. A long list of names shortens to two names and 'N others'."

1 · "SRV / Debrief tabs". 560 × 40. Same structure as "SRV / Side panel tabs" (565:28541): Tabs size md, plus the ⋯ Tab menu button with the "Dot" property. Five tabs: Feedback, Annotations, Checklist, Chapters, Transcript. Property Active with those five values.

2 · "SRV / Debrief panel". 560 × 836, same border, background and padding rules as "SRV / Side panel" (605:30863), so the content is 528 px wide. Property Tab = Feedback | Annotations | Clips | Checklist | Chapters | Transcript. Annotations and Clips are two views of the same tab.
   - Feedback: an "SRV / Feedback content" instance in the scroll area, State=AI hidden.
   - Annotations: clone the Content of the Annotations Debrief variant (605:30864). At the very top of the Content, above the toolbar, add a SegmentedControl with "Annotations" and "AI short clips · 3", styled and placed like the one in "SRV / Feedback content". Annotations is selected.
   - Clips: the same SegmentedControl with "AI short clips · 3" selected, then three "SRV / AI clip row" instances: "Hand hygiene skipped" (27 s, Camera 1), "Lactate result" (40 s, Camera 2), "SBAR handoff" (35 s, Camera 3). No toolbar.
   - Checklist: clone the Content of 633:32565.
   - Chapters: clone the Content of 711:26266.
   - Transcript: clone the Content of 734:26610.
   Every list item must FILL the 528 px width. Toolbars must show no Ehli switch.
   - Annotation: "Debrief and video review both use this panel. Feedback opens first."

3 · Add a "Preview · Debrief" frame to the Section, 1440 × 948. Clone the shell from L3 (468:12979) without its Layout & audio card: TopNav, SideNav and Header. Then:
   - Header Start: back arrow, title and meta, then "SRV / Mode switch", Active=Debrief. Header End: "SRV / Header actions", State=Debrief.
   - Left column, 832 px wide with 24 px padding: "SRV / Camera grid" (Layout=1 + 2, FILL width, keeping its proportions), then "SRV / Playback bar", then "SRV / Annotation input" (1024:8581).
   - Right: "SRV / Debrief panel", Tab=Feedback, with Feedback content on State=AI ready, so the Preview shows the feedback itself.

4 · Add a second frame, "Preview · Debrief (no sidebar)", 1440 × 948, 120 px to the right of the first. It has the same shell and header, but no "SRV / Debrief panel" and no tab bar:
   - Directly under the header, a full-width 48 px Astryx Toolbar with a SegmentedControl on the left: Feedback, Annotations, Checklist, Chapters, Transcript. Feedback is selected.
   - Below it, two equal columns with 24 px padding and a 24 px gap, and no panel border.
   - Left column: "SRV / Camera grid" (Layout=1 + 2, FILL width, keeping its proportions), then "SRV / Playback bar", then "SRV / Annotation input", all FILL width.
   - Right column: the Feedback content, with no panel chrome, scrolling inside the column.
   - Duplicate this frame as "Preview · Debrief (no sidebar) · Annotations", with Annotations selected and the Annotations view in the right column.

Check: both Share dialog variants fit at 600 px wide, and no "participants", "AI summary" or "Private annotations" text is left in them. The left column and panel fill 1392 px with no gaps, nothing is cut off at 948 px height, and all five tabs and the ⋯ button fit in 560 px. Switch the Preview's panel through all six Tab values to confirm each one fits, and leave it on Feedback. In the no-sidebar frames, check that nothing is cut off and that the video, playback bar and input all fit above 948 px.
Screenshot the Section, the Preview on Feedback and on Annotations, and both no-sidebar frames.
```

## DB0–DB2 QA (11-04, Claude)

**DB1 passed.** Only one set remains: Section 1065:26850 and State=Debrief (1065:26987). The Mode switch (1065:26880), QR popup (1065:26893) and Share dialog (1065:27409) are in place, and the Stop confirmation has the new text. Two sample-text leftovers in the Share dialog go into DB3 step 0.

**DB2 passed, with two small fixes.** Feedback list (1065:27734), Feedback content (1067:5364, five states), AI clip row (1065:27785) and Playback bar (1065:27829) are in place. Images are greyscale. The Timeline markers now sit in scaling slots and match their times at 784 px, with a constant 4 px offset. Two fixes go into DB3 step 0: the 03:05 and 04:12 labels touch, and the Facilitator avatar still says DS.

**DB0 review (GPT 5.6 Sol, Extra High), Claude's read:**

| # | Point | Call |
|---|---|---|
| 1 | Don't show AI feedback straight away, because learners may see the laptop | Agree, and Daniel approved it: new "AI hidden" state with Show feedback, default on the laptop. It doesn't cover Ehli's annotations, because faculty opens that tab themselves |
| 2 | Restore camera focus | Partly wrong: the grid isn't fixed, because Layout & audio changes it. Click-to-focus is the open Teams-pin item, so it stays there |
| 3 | Clips and reflection questions get buried | Clips: agree, added as a switch at the top of the tab. Index for the three lists: no, they fit in one view |
| 4 | Keep 560 px | Agree |
| 5 | Prefer the side panel over no sidebar | Agree, but DB3 still builds both, as Daniel asked |

## DB3 QA (11-04, Claude)

Passed. One sample-text nit, to fix in the flow: the input says "at 08:00" while the player shows 00:00.
- **Step 0:** "Show times" is on the Timeline and off in the Playback bar. `AI hidden` is in Feedback content, avatars say MO, and the Share dialog is set 1095:5841 with both AI variants and the agreed copy.
- **Components:** Debrief tabs 1097:5900, Debrief panel 1098:6263 (six Tab values).
- **Previews:** 1098:6920 (panel), 1098:7904 and 1098:8944 (no sidebar). All 48 images are greyscale.
- **Layout measure:** in the no-sidebar frames, the video is visibly smaller and the Toolbar takes extra height, as DB0 predicted. Claude recommends the panel; Daniel decides.
- **Seen on screen:** the three previews only. The rest was checked from file data.

**Layout decision (11-04, Daniel):** keep the 560 px panel. The no-sidebar previews stay as reference only.
