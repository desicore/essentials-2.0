# Review · 10-08 afternoon · 5A-r1, 6A(-r1), 7A, 8A, 9A, Recording (Daniel), Debrief draft (Daniel) → v2 round

Page: `wireframe test - astryx` unless noted. **Rule for this round (Daniel, 10-08): never edit an existing frame.** Every prompt duplicates its source and changes the copy, named `… · v2`. The originals stay so the good ideas from each version can be merged in the final pass.

## Verdicts

| Round | Frames | Verdict | Notes |
|---|---|---|---|
| 5A-r1 | S2a 174:5349, S2b 177:3879 | **Accept** | All four fixes landed. One stale line on S2b: "You can untick anyone later" → should be "remove" (no checkboxes any more). Folded into V2-1 only if you want it; not worth its own run. |
| 6A + 6A-r1 | S6 211:4748, S6c 221:5663, S6b 216:5204 | **Accept with fixes** | Content and charts are right. (1) "Compare with same period last year" is a grey button with the **dashed-circle placeholder icon**, so on/off can't be read. (2) S6b has no "Customize" button (r1 didn't touch it). (3) S6c "Reset to default" is indented 12 px more than the checkboxes. |
| 7A | S7b 223:14782 | **Accept** | All six states correct. Timecodes use a monospace font, not tabular Inter figures (same on the SRV). S7a not reviewed: the link pointed at the page (40:48), not the frame. |
| 8A | S8a 227:7026, S8b 227:12967, S8c 228:7076 | **Accept, realism pass in V2-5** | (1) The shutter is a 36 px button on a camera screen: too small for a tablet held in two hands; I'm overruling my own brief here (see V2-5). (2) S8c: badge "From your notes" **and** "From Maya's notes:" say the same thing twice. Keep the badge, drop the bold prefix. |
| 9A | S9a 229:14022, S9b 230:9854 | **Rework in V2-4** | Your four points below. Also: S9b repeats the title "Share with participants" above "Shared with 4 learners", and the expiry row is scrolled out of view in S9a (that's why it looked missing). |
| Recording (Daniel) | 207:13908, 207:15974 | **Two real problems** | See below. |
| Debrief draft (Daniel) | 207:18763 | **Right direction, not far enough** | See below. |

## Recording view · your final state

What's good: the Stop dialog (default focus on "Keep recording", clear copy), the camera toolbar, the Room audio strip reads well, tabs match today's SRV.

Where I disagree:
1. **Recording controls are there twice**: Recording · 08:00 · Pause · Stop recording sits in the header *and* in the camera toolbar. Two Stop buttons on a screen whose main risk is a misclick is the one thing we can't ship. Keep **one**. I'd keep the **header** set: the S7 banner puts recording state at the top of every other screen, so the header keeps it in the same place, and the header is just as far from the note input as the toolbar is. The toolbar then holds only the layout control and camera count.
2. **The Yes/No pairs went back to a segmented control** (white raised segment on grey). The brief locked this after E1–E3b for a reason: rows 5–7 (unanswered) look almost the same as rows 1–3 (answered) at a glance, and Maya ticks these mid-scenario under stress. Selected must be a solid dark fill; unselected outline. Same equal width, no icons.
3. Smaller: "Voice modulator" is a button **plus** an "On" pill, i.e. two controls for one switch. "Auto gain" reads as a label, not a button. The Notes tab lost its count ("Notes 2").

## Debrief · why shadcn feels calmer, and what your draft fixes

I agree with you, and it isn't really the library. Side by side, the shadcn version (96:981) is calmer for three reasons:
- **No cards on a grey canvas.** Astryx's debrief wraps video, summary, checklist and every clip in its own white card on grey. That's 7+ borders on one screen. shadcn is one white surface with a single divider. The Recording view (yours) already uses the flat, divider-based layout, so a flat debrief would also make the two screens match.
- **Compact clips.** shadcn's clip is one row (thumbnail · title · range) plus a small inline control. Astryx's has a full-width "Approve" button, which makes the card ~35 px taller and adds three equally loud buttons.
- **Learners take one line** (avatars + "Olivia Grant absent") at the top of the right panel.

Your draft moves learners right (good) but gives them a ~100 px block with full names, keeps all the cards, keeps the tall clips, and drops the AI summary to the bottom. I'd keep the summary **above** the checklist: it's the "what happened" opening of the debrief conversation (PEARLS: description → analysis), and it's where "Add photo of notes" lives. Also a bug in the draft: all three clips say 03:50–04:40.

**Bigger question for you + Patrik (Q-28):** if sharing approves AI items, the per-clip "Approve" on the debrief is a second place to make the same decision. If Q-28 is "yes", remove Approve from the clips entirely and the clip row gets even smaller. V2-2 keeps a compact Approve (the spec still has it); say the word and I'll drop it.

## 9A · your four points, my take

1. **No remove button → agree.** Add an `x` per learner row, same as Edit event. Rename "Add" to "Add learner" (it's ambiguous on its own).
2. **No indicator of what learners will see → agree, as a preview, not a step.** A dedicated screen inside the share flow would add a step to every share. Instead: a "Preview as learner" button in the sheet footer that opens one full-screen preview (S9c). It also earns its place for another reason: ticking an AI item *approves* it, so seeing the result before sending builds trust. This does pull the learner page into scope (the brief had it out); I've noted it as a scope change.
3. **Link expiry → it's already there, but hidden**, scrolled below the fold, with the setting tucked under "More options". Agree it should be visible: an inline select "Link expires in 14 days" with the date under it. Learner video is sensitive, so expiry shouldn't be a buried option.
4. **Faculty / other roles → I disagree, and I think it is overkill.** The share link exists for people **without** a LearningSpace login (learners). Faculty, co-debriefers and sim staff already have accounts, and their LearningSpace role already decides what they see. Building per-share permissions on the tablet would duplicate the role system, and that's the kind of thing that breaks in an access audit. What the sheet should do is *say* this, with one muted line: "Faculty and sim staff see this recording in LearningSpace through their role. This link is for learners." If a real case comes up later (an external evaluator, say), that's a "Next" topic, not IMSH.

## Header · LearningSpace logo

Logo: `ls-essentials-logo-small` (component 207:12316 on the `components` page, the wordmark without the badge).
Proposal: top bar left = **logo · 1 px vertical divider · "Riverbend College of Nursing"** (secondary text). That's the usual co-branding pattern: the product owns the corner and the customer's name sits next to it. Then **remove the "Essentials" row at the top of the sidebar**: it repeats the brand, and its icon is the failed-swap placeholder anyway. The logo keeps its own navy (a brand asset; note it as the one colour exception besides recording red). Built on **S1 v2 only** as a shell proposal. Once you approve it, it rolls out to the other staff-app frames during the final merge.

## Why Cursor gets stuck on icons

It isn't the library connection. The Astryx icons are published and searchable as `icon/<lucide-name>` (I checked: `icon/camera`, `icon/pencil-line`, `icon/sparkles`, `icon/mail-check`, `icon/calendar-clock` and `icon/cast` all resolve). The evidence is on the canvas: the **dashed-circle icon** on Reports' compare toggle and in the sidebar's "Essentials" row is the default placeholder of Astryx's `Icon` wrapper ("Contains a default circle-dashed icon… Swap the Icon instance"). So Cursor imports fine and then fails the **swap**:
- Astryx icons sit **two levels deep** (Button → `Icon` wrapper → glyph instance). The agent swaps the wrong level or passes a name or key where Figma wants the imported component's **node id**.
- **Old lucide names miss.** Our brief says `more-horizontal`; Astryx ships the current lucide name `ellipsis`. Same family: `edit`→`pencil`, `check-circle`→`circle-check`, `alert-triangle`→`triangle-alert`, `help-circle`→`circle-help`.
- Generic searches like "pencil icon" return random hits (the query "icon" returned `pi`, `axe`, `cat`, `beer`), so the agent loops.

Fix: every V2 prompt below includes the **icon recipe** block. If it still fails twice on one icon, the agent places a plain `icon/<name>` instance at 16 px and logs it, and doesn't loop.

---

## Run order (all on the Astryx page → one at a time)

V2-1 Shell + switch → V2-2 Debrief → V2-3 Recording → V2-4 Share sheet → V2-5 Photo of notes. V2-2 and V2-4 both read the debrief, so keep that order. Each prompt is a **new Cursor chat**.

### Icon recipe (every prompt below points Cursor here)

```
ICON RECIPE (Astryx). Icons are published components named exactly "icon/<lucide-name>" (current lucide names: ellipsis not more-horizontal, pencil not edit, circle-check not check-circle, triangle-alert not alert-triangle, circle-help not help-circle).
1. search_design_system with the exact name, e.g. "icon/pencil-line". Never search generic words like "pencil icon".
2. In use_figma: const c = await figma.importComponentByKeyAsync("<componentKey>").
3. In a component that has an icon property (Button, Badge, ListItem…): read instance.componentProperties, find the INSTANCE_SWAP property and call instance.setProperties({ [thatPropertyName]: c.id }). Pass c.id (node id), never the key or the name.
4. In Astryx's "Icon" wrapper: the glyph is a NESTED instance. Find it (wrapper.findOne(n => n.type === "INSTANCE")) and call nested.swapComponent(c). Don't swap the wrapper itself.
5. Verify: screenshot. A dashed circle means the swap failed.
6. Max two attempts per icon. Then place a plain instance of icon/<name> at 16 px where the icon belongs, and list it under "Icon fallbacks" in your reply. Never loop.
```

### V2-1 · Shell with LearningSpace logo + one reusable switch

```
Create new frames in Figma using ONLY the Astryx library. NEVER edit, move or delete an existing frame. Work only on duplicates.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Ignore "🚫 wireframe archive".
Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Shells", "Screen 6") and @wireframe-benchmark/reviews/10-08-v2-round.md ("Header · LearningSpace logo"). Load the figma-use skill before any Figma tool call.

Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly (max two attempts per icon, then fall back and log).

Setup: create a Section named "v2 · 10-08 review round" below the lowest frame on the page, 400 px gap, left-aligned with it. Every v2 frame from this round goes inside it, left to right, 200 px gaps, one row per prompt.

1. CUSTOM · Switch (build once, reuse everywhere). Astryx's code library has a Switch but its Figma kit doesn't. Build ONE local component "CUSTOM · Switch" with variants State=On/Off (and Disabled=Yes/No): 36×20 track, 16 px knob, On = solid dark fill (#111111) with the knob right, Off = #E6E6E6 with the knob left, plus a text label to its right using Astryx's body text style. Put it in the Section's top-left corner. Every switch in this round uses an instance of it.
2. "S1 · Dashboard · Astryx · v2": duplicate "S1 · Dashboard · Astryx". In the top bar, replace the institution badge + name with: an instance of the component "ls-essentials-logo-small" (local component on the page "components", node 207:12316; keep its own colours, do not recolour it), then a 1 px vertical divider 20 px high, then "Riverbend College of Nursing" in Astryx secondary text, 14 px medium. Vertically centred, 12 px gaps. Remove the "Essentials" row at the top of the sidebar; the nav starts with Dashboard. Change nothing else.
3. "S6 · Reports · Astryx · v2": duplicate "S6 · Reports · Astryx" (211:4748). Apply the same top bar and sidebar change as step 2. Replace the "Compare with same period last year" button with a CUSTOM · Switch instance, State=On, same label. Keep the period control and range text as they are.
4. "S2a · Calendar · Astryx · v2": duplicate "S2a · Calendar · Astryx" (174:5349). Same shell change. Replace the "Only my events" toggle icon with a CUSTOM · Switch, State=Off.

After each frame, take a screenshot and fix on the new nodes before moving on. Reply in under 10 lines: what was CUSTOM, the icon fallbacks (if any), and anything you weren't sure about.
```

### V2-2 · Debrief, compact and flat

```
Create new frames in Figma using ONLY the Astryx library. NEVER edit, move or delete an existing frame. Work only on duplicates.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Put new frames in the Section "v2 · 10-08 review round", on a new row below the last one, 200 px gaps.
Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 2 · Debrief", "Screen 8" S8c) and @wireframe-benchmark/reviews/10-08-v2-round.md ("Debrief · why shadcn feels calmer"). Load the figma-use skill before any Figma tool call.
Reference, READ-ONLY, for layout only (don't copy its components): "S4 · Debrief · shadcn" (96:981) on the page "wireframe test - shadcn".

Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly (max two attempts per icon, then fall back and log).

Frame: "S8c · Debrief · Astryx · v2", 1194×834. Duplicate "S8c · Debrief · summary with notes · Astryx" (228:7076) and restructure the copy:
1. Flat, not cards. Page background white. Remove the card containers around the video block, the AI summary, the checklist and the AI clip row. Left column (video, timeline, controls, clips) sits directly on the page. Right panel: full height under the header, 400 wide, 1 px left divider, no card. Same pattern as the Recording view.
2. Right panel, top to bottom:
   a. Learners in ONE row: 4 small initials Avatars (EB PS MC NP) · "4 learners" · muted "Olivia Grant absent" with user-x icon. No full names (they live in the share sheet).
   b. Tabs: "Summary & checklist" (active) · "Annotations 6".
   c. AI summary: heading with sparkles icon, the S8c summary text, the "From your notes" Neutral badge INLINE before the added sentence, and drop the bold "From Maya's notes:" prefix (the badge already says it). Then the photo source row (48 px thumbnail · "Photo of notes · 10:31" · trash-2 ghost icon button). Then one line: muted "AI-generated · review before sharing" left, ghost/secondary "Add another photo" (camera) right.
   d. Checklist: heading "Checklist" + muted "7 items · yes/no · no score". 7 flat rows with dividers: status icon (circle-check / circle-x) + Yes/No label · item text · timestamp · play icon button. Row height as compact as Astryx's ListItem allows; no cards.
3. Video: give the freed height to the video (it should grow, not leave empty space).
4. AI clips: one row of 3 COMPACT cards, two rows each (decided 10-08 during the run, option B: labelled buttons over icon-only, no truncated titles): row 1 = 72×40 thumbnail placeholder · title + range under it (12 px muted, title may wrap to 2 lines); row 2 = secondary Button "Approve" (check icon, default size, hugging its content, left-aligned, NOT full width). Only the clip row keeps a light 1 px border per card; no full-width buttons. Ranges: The lactate result 03:50–04:40 · Fluids before cultures 08:30–09:30 · SBAR handoff 10:50–11:40.
5. Header unchanged.

After each step, take a screenshot and fix on the new nodes. Reply in under 10 lines: the height each clip card ended up at, what was CUSTOM, icon fallbacks.
```

### V2-3 · Recording view, one set of controls + solid Yes/No

```
Create new frames in Figma using ONLY the Astryx library. NEVER edit, move or delete an existing frame. Work only on duplicates.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Source frames: 207:13908 (Recording view) and 207:15974 (Stop confirmation). Put the new frames in the Section "v2 · 10-08 review round" on the page "wireframe test - astryx", new row, 200 px gaps. If the source frames live on another page, duplicate them across; don't move the originals.
Read first: @wireframe-benchmark/wireframe-brief.md ("Screen 3 · Recording view", especially "The Yes/No pair") and @wireframe-benchmark/reviews/10-08-v2-round.md ("Recording view · your final state"). Load the figma-use skill before any Figma tool call.

Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly (max two attempts per icon, then fall back and log).

1. "S3 · Recording view · Astryx · v2": duplicate 207:13908.
   a. Remove the recording state + Pause + Stop recording from the CAMERA TOOLBAR. Keep the header set (red dot + "Recording" + 08:00 + Pause + Stop recording). The camera toolbar keeps only the layout segmented control and "Sim Room 2 · 3 cameras".
   b. Checklist Yes/No: replace each SegmentedControl with TWO Astryx Buttons of equal fixed width (same size selected or not, no icons), all 14 forming one straight column at the panel's right padding. Selected = primary (solid dark). Unselected = secondary/outline. Rows 1–3 Yes selected, row 4 No selected, rows 5–7 both unselected. Answered and unanswered rows must differ at a glance.
   c. Voice modulator: replace the button + "On" pill with ONE instance of the local component "CUSTOM · Switch" (from the v2 Section), State=On, label "Voice modulator".
   d. "Auto gain": make it a ghost Button, size SM.
   e. Tab label "Notes" → "Notes 2".
2. "S3 · Stop confirmation · Astryx · v2": duplicate the new v2 frame from step 1 and add the same overlay and dialog as 207:15974 (copy the dialog node across, don't rebuild).

Screenshot after each step and fix on the new nodes. Reply in under 8 lines: what changed, icon fallbacks.
```

### V2-4 · Share sheet v2 + learner preview

```
Create new frames in Figma using ONLY the Astryx library. NEVER edit, move or delete an existing frame. Work only on duplicates.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". New frames go in the Section "v2 · 10-08 review round", new row, 200 px gaps.
Read first: @wireframe-benchmark/wireframe-brief.md ("Screen 9 · Share with participants") and @wireframe-benchmark/reviews/10-08-v2-round.md ("9A · your four points, my take"). Load the figma-use skill before any Figma tool call.

Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly (max two attempts per icon, then fall back and log).

1. "S9a · Share with participants · Astryx · v2": duplicate "S9a · Share with participants · Astryx" (229:14022). In the sheet:
   a. Each learner row gets a ghost icon Button "x" on the right (tooltip "Remove"), like Edit event.
   b. "Add" → "Add learner" (plus icon), same place.
   c. Under the learners, one muted 12 px line with an info icon: "Faculty and sim staff see this recording in LearningSpace through their role. This link is for learners."
   d. Move the Link block ABOVE "What to share" so it's visible without scrolling: link icon · "Secure link, opens in the browser without logging in" · a select "Expires in 14 days" (options would be 7 / 14 / 30 days / custom date) · muted "Feb 2, 2027" under it. Delete the "More options" row (expiry was the only thing hiding there).
   e. Footer: left a secondary Button "Preview as learner" (eye icon); right "Cancel" · primary "Share with 4 learners" (send). Footer stays pinned; the item list scrolls.
2. "S9b · Shared · Astryx · v2": duplicate "S9b · Shared · Astryx" (230:9854). Remove the repeated "Share with participants" title row so "Shared with 4 learners" is the sheet title (keep the close x on that row).
3. NEW "S9c · Learner preview · Astryx", 1194×834: full-screen on the tablet. Top: a neutral strip, eye icon + "Preview · this is what Emily Baker will see" + Button "Back to sharing" (right). Below it the learner page, read-only, with NO faculty controls:
   - Title "NURS 310 · Sepsis recognition" · muted "Riverbend College of Nursing · Jan 19, 2027 · shared by Dr. Maya Ortiz · link expires Feb 2, 2027"
   - Video placeholder with the timeline showing only the SHARED markers (faculty: 04:12, 11:05; AI: 02:40, 08:50, 12:30). The private 07:30 note is not shown.
   - Right column: "AI summary" with a Neutral badge "AI · reviewed by Dr. Maya Ortiz", the summary text; "Checklist results" (7 rows, Yes/No, no score); "Clips" with 2 items (The lactate result, SBAR handoff). Fluids before cultures is NOT shown (it was unticked).
   - No Approve buttons, no Share button, no Room display control.
   Build it from the debrief's parts (duplicate S8c and strip it down) rather than from scratch.

Screenshot after each frame and fix on the new nodes. Reply in under 10 lines: what was CUSTOM, icon fallbacks, anything unsure.
```

### V2-5 · Photo of notes with real photos

```
Create new frames in Figma using ONLY the Astryx library. NEVER edit, move or delete an existing frame. Work only on duplicates.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". New frames go in the Section "v2 · 10-08 review round", new row, 200 px gaps.
Images (generated 10-08, in the repo): @wireframe-benchmark/assets/s8a-camera-view-notes.png (1536×864, live camera view of the clipboard) and @wireframe-benchmark/assets/s8b-photo-of-notes.png (960×1280, the captured page).
Read first: @wireframe-benchmark/wireframe-brief.md ("Screen 8 · Photo of notes"). Load the figma-use skill before any Figma tool call.

Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly (max two attempts per icon, then fall back and log).

1. "S8a · Photo of notes · capture · Astryx · v2": duplicate 227:7026.
   a. Camera surface: make the camera area full-bleed between the top bar and the bottom controls, background #111111 (camera UIs are dark; still greyscale). Put the s8a image in it as a FILL image (aspect-filled, centred). Keep the 1 px dashed guide rectangle over the paper, in white at 60 %.
   b. Remove the camera icon + placeholder label.
   c. The hint "Hold the page flat and fill the frame." sits on the dark surface in white, 14 px, above the shutter.
   d. Shutter: replace the small "Take photo" button with "CUSTOM · Shutter": a 72 px circle (white fill, 4 px white ring with 4 px gap), centred at the bottom, with "Take photo" as a 12 px white label under it. This breaks the "largest native button" rule on purpose: a 36 px button is too small for a camera screen held in two hands. Log it.
2. "S8b · Photo of notes · review · Astryx · v2": duplicate 227:12967. Replace the grey placeholder with the s8b image, FIT (whole page visible), centred on #F4F4F4. Remove the file-text icon + label. Everything else stays.
How to place the images: create the target rectangles first, then call the Figma MCP tool upload_assets with count=2, nodeIds=[<s8a rect id>, <s8b rect id>] and scaleMode FILL for s8a / FIT for s8b (two calls if the modes differ). POST each PNG from the terminal: curl -X POST -H "Content-Type: image/png" --data-binary @wireframe-benchmark/assets/<file> "<upload url>".
Greyscale rule: after placing, set each image's saturation filter to -100. (Daniel can switch it back to colour with one click if he prefers the realism.)

Screenshot after each frame and fix on the new nodes. Reply in under 8 lines.
```

## Status
- [ ] V2-1 · [ ] V2-2 · [ ] V2-3 · [ ] V2-4 · [ ] V2-5 · [ ] reviewed
