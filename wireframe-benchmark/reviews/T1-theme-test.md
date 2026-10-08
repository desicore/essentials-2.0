# T1 · Theme test: can shadcn look like Astryx?

Added 2026-10-08. **Why:** Daniel prefers how Astryx looks (icons, buttons, overall polish); shadcn covers more components and is easier to customise. If shadcn can take on the Astryx look by changing only its theme (variables, type, radius, icons), we get both. If it can't, that's a strong argument for Astryx.

**What the test proves:** in code, a shadcn theme is just CSS variables plus an icon set, so if Figma variables can do it, the Next.js prototype can too.

**Decision rule:** put the two frames side by side. If Daniel can't tell at a glance which one is "the polished one", go with shadcn plus this theme. If the Astryx one still clearly looks better, go with Astryx and accept building the missing components (switch, dialog, charts) by hand.

**Runs on:** the shadcn page only. It doesn't count as a benchmark run (no log row). It can run in parallel with anything on the Astryx page.

---

## Prompt T1 · shadcn with an Astryx theme

```
Theme test in Figma. Goal: make one shadcn screen look like its Astryx twin by changing ONLY theme-level properties. Don't change the layout or the content.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Reference (read-only): "S2b · Edit event · Astryx" (177:3879) on page "wireframe test - astryx". Don't edit anything on that page.
Target: page "wireframe test - shadcn". Duplicate "S2b · Edit event · shadcn" (185:7749), rename the copy "T1 · Edit event · shadcn with Astryx theme", and place it 200 px below the original. Work ONLY in the copy.

Before any Figma tool call, load the figma-use skill. Run `date +%H:%M` at the start and at the end.

Step 1 · Measure Astryx (read-only). From the Astryx frame and its bound variables/styles, write down:
- font family, and the size/weight/line height for the title, section heading, label, body and muted text
- corner radius for buttons, inputs, cards and avatars
- control heights (button, input, select), and horizontal padding in buttons and inputs
- border colour and width, card border vs shadow, background and canvas greys
- primary button fill and text, secondary button style
- icon set, size and stroke weight (is it lucide? if not, which?)
- spacing between form rows and the list row height
Put this as a table in your reply.

Step 2 · Theme the copy, in this order of preference:
a) If the shadcn variables are local to this file: add a new variable mode "Astryx-like" to the relevant collections and set the copy to that mode. Don't change the default mode; the other shadcn frames must not change.
b) If modes aren't possible: override properties on the instances in the copy only (fills, radius, strokes, text styles), and log that this was needed.
- Swap icons to the Astryx icon set/stroke where the shadcn instance allows an icon swap.
- Keep the layout: don't move, add or remove anything. The learner list stays without checkboxes if the original already had them removed; otherwise leave it as it is.

Step 3 · Screenshot both frames side by side, and list the 3 biggest visible differences that remain, and whether each is theme-fixable (variables/icons) or structural (the component itself differs).

Reply in under 15 lines plus the token table: what could be themed, what couldn't, and how many minutes it took.
```

---

## Prompt T2 · Recording view (SRV), shadcn with the Astryx theme

Added 2026-10-08, Daniel's ask: a second, denser screen for a better-informed decision. The SRV has nearly every control type (buttons, segmented controls, Yes/No toggles, switch, sliders, selects, tabs-to-be, avatars, list rows), so it shows the theme on far more than the Edit event form did.

**Runs on:** page "IMSH · final". It can run in parallel with anything on the Astryx or shadcn benchmark pages. Not a benchmark run (no log row).

```
Theme test #2 in Figma. Goal: make one shadcn screen look like its Astryx twin by changing ONLY theme-level properties. Don't change layout or content.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Source (shadcn): node 202:10129 on page "IMSH · final" (the Recording view / SRV). Don't edit it.
Reference (read-only): "S3 · Recording view · Astryx" (130:2098) on page "wireframe test - astryx". Don't edit anything on that page.
Target: duplicate 202:10129, rename the copy "T2 · Recording view · shadcn with Astryx theme", place it 200 px to the right of the source. Work ONLY in the copy.

Before any Figma tool call, load the figma-use skill. Run `date +%H:%M` at the start and at the end.

Step 1 · Tokens. If T1 already created an "Astryx-like" variable mode (check the shadcn variable collections), reuse it and skip measuring. Otherwise measure from the Astryx SRV exactly as in T1 step 1 (font, sizes/weights, radius per control type, control heights and paddings, borders vs shadows, greys, primary/secondary buttons, icon set and stroke, row spacing) and create the mode.

Step 2 · Theme the copy:
a) Set the copy to the "Astryx-like" mode. The source frame and every other shadcn frame must stay unchanged.
b) Only where a property isn't variable-bound: override it on the instances in the copy, and log each override.
- Pay extra attention to the parts that differ most on this screen: the Yes/No pairs (Astryx's selected state vs shadcn's dark fill), the switch, the sliders and the level meters, the segmented controls ("1 + 2 / Single / Grid", "In-room / Facilitator"), the "Stop recording" and "Pause" buttons, and icon stroke weight.
- Swap icons to the Astryx icon set/stroke where the instance allows it.
- Keep the recording red (#D92D20) dot as the only colour.

Step 3 · Screenshot the copy next to the Astryx SRV. List the 5 biggest visible differences that remain, each marked theme-fixable (variables/icons) or structural (the component itself differs), and which one you'd call "more polished" for each of these: buttons, toggles/segmented controls, form fields, list rows, icons.

Reply in under 15 lines (plus the token table if you measured): what could be themed, what couldn't, overrides needed, minutes taken.
```
