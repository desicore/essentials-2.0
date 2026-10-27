# LS Essentials 2.0 · file cover · Cursor prompt

**How to run:** paste into Cursor → `Read @wireframe-benchmark/reviews/10-28-library-file-cover.md and run section "Cover build".`

Context: per the 10-27 DDC Essentials call with Gábor, we're moving shared components into a new library file,
**LS Essentials 2.0**. The IMSH MVP file pulls them in via Add Library, so parallel wireframe work stops drifting.
The cover is that library's thumbnail. It should read as "shared component library for Essentials 2.0", not as a
marketing page.

---

## Cover build

### Target
- File: `ESiR2YvDaPQBTxYJYj7GVH` (LS Essentials 2.0), page `0:1`.
- Frame: `1:2` "Plugin / file cover - 1", 1920 × 1080. Build **inside** this frame. Don't resize, rename or move it.
- Source screens (read-only): file `dbJVpAusLJCtreiz0jlEh3` (IMSH-MVP), page/section `305:18292`. **Never write to the IMSH-MVP file.**

### Direction (pick this, no alternatives)
A hybrid of two references: the Astryx cover and the Relume kit cover.
- **Astryx structure:** a big wordmark in the middle band, with real UI fragments as floating cards in a top
  row and a bottom row. The cards are cropped by the frame edges so the canvas feels bigger than the frame.
- **Relume touch:** a bold, chunky title setting, plus one small pill label (like their "FREE" badge, here: "Component library").
- **Palette: grayscale only, for now.** Warm off-white background (#F4F2EE), with a very soft radial lightening
  behind the wordmark (#FFFFFF at 60% → transparent). Ink #111111. Cards white, 1px #E4E2DE border,
  radius 20, soft shadow (y 8, blur 32, #000 at 8%). No brand colour yet: put every colour in a local
  variable collection `cover/*` (`cover/bg`, `cover/ink`, `cover/card`, `cover/border`, `cover/accent` = #111111)
  so we can recolour later in one place.

### Layout (1920 × 1080)
Keep all text inside a centred **safe area of 1600 × 900**, because Figma crops thumbnails.

1. **Top row (y ≈ –40 to 300).** Three cards, cropped by the top edge, at x ≈ 250 / 770 / 1220 (Astryx spacing):
   - A: Dashboard: the **calendar + session list** area from the Dashboard screen.
   - B: SRV: the **multi-camera video grid** (2–3 tiles) from a recording/review screen.
   - C: SRV side panel: the **event / annotation list** from the same family of screens.
2. **Middle band (y ≈ 380–700).**
   - Wordmark **"Essentials 2.0"**, centred, Inter Display (fallback Inter) Black/ExtraBold, ~200px,
     letter-spacing –4%, `cover/ink`.
   - Above it, a pill: **"Component library"**. 18px Inter Semibold, ink fill, white text, radius 999, padding 8/16.
   - Below it, one line: **"LearningSpace · shared UI for Essentials 2.0 wireframes"**, 24px Inter Regular, #555.
3. **Bottom row (y ≈ 780 to 1120)**, cropped by the bottom edge, at x ≈ 250 / 770 / 1220:
   - D: **timeline / scrubber with markers** from an SRV screen.
   - E: a small **component sheet**: one primary and one secondary button, a toggle, a status chip, a text input.
     Build these as plain Figma layers in grayscale. They're illustrative only, don't make components.
   - F: a **table/list fragment** (learners or sessions) from a dashboard/debrief screen.
4. Bottom-left inside the safe area: a small meta line, 16px #777: **"v0 · Oct 2026 · Elevate Design"**.

### How to get the screen fragments
`use_figma` can't copy nodes across files, so:
1. `get_metadata` on `305:18292` in IMSH-MVP. List the top-level frames and choose the source for each of A, B, C, D, F
   by frame name. Prefer the latest variant in the red "Base flow" section. In chat, say which frame ID you used for each card.
2. Export each source with `get_screenshot` (maxDimension 2048), crop to the fragment, and upload it with `upload_assets`.
3. Place each one as an **image fill** in its card (scale mode FILL/CROP), and set image filter **saturation –1**
   so it's true grayscale, even where the source has colour (red recording dot, status chips).
   Don't fake grayscale by recolouring layers.
4. Each card shows **one** readable fragment at roughly 1:1 to 1.3:1 scale. Don't shrink a full screen into a card. Show a meaningful crop.

### Layer hygiene
- Inside `1:2`: `bg`, `glow`, `cards-top` (A–C), `title` (pill, wordmark, subline), `cards-bottom` (D–F), `meta`.
- Card names: `card / dashboard-calendar`, `card / srv-video-grid`, `card / srv-events`, `card / srv-timeline`,
  `card / component-sheet`, `card / list`.
- Auto layout for the title group and the component sheet. Absolute positioning for the cards.

### Don'ts
- No colour anywhere except the grayscale palette above.
- No lorem ipsum. Use the real copy from the source screens.
- No "FieldReady", "Abbott" or customer names in the cover text.
- Don't touch any other node in the LS Essentials 2.0 file.

### Done when
- `get_screenshot` of `1:2` at 1600px shows a readable wordmark, six grayscale cards and no clipped text in the safe area.
  Post that screenshot in chat.
- Then remind Daniel: **right-click the frame → "Set as thumbnail"** (this is manual, the API can't do it).
