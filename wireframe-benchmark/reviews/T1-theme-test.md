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
