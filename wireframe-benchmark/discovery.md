# Discovery — Astryx vs shadcn (read-only pass, 2026-10-06)

Figma file: `maOZqRuLdksiPwUA43qSVI` (Essentials 2.0 – wireframes). Nothing was created, edited or deleted. Library components and variables were loaded by key in memory to read their properties; no nodes were placed.

## 1. File pages

| Page | ID | Contents |
|---|---|---|
| 🚫 wireframe archive | 0:1 | Ignored |
| wireframe test - astryx | 40:48 | Empty |
| wireframe test - shadcn | 70:2 | Empty |
| learningspace screenshots | 70:3 | 8 image rectangles (1624×1060) of LearningSpace User Manager: list, batch create 1–4, create group, new user, profile/edit |

## 2. Libraries

Both libraries are **subscribed to the file** and reachable through `search_design_system` (scoped with `includeLibraryKeys`) and `get_libraries`.

| Library | Library key |
|---|---|
| Astryx Library (Community) | `lk-2071991a38db45bcfbbae76a6cd4e5d741649dee37e38f227dbfa1fe632185ff9d7dea489a29d4b50fafd88abb3e7a50c4e7dc3da35603b3d34713aafa243ba2` |
| shadcn/ui components with variables & Tailwind classes – Sept 2026 (Community) | `lk-683011be14e94f751fa7a67f494c6e594d02abc3946bf17f3d77b25ab3f672dbb1e2b32c5023e6462676f9ab93a32373bdd2e69d9a852ddbae706cbc497da434` |

Other libraries are available to add (Material 3, Simple Design System, Apple kits, org libraries such as LS-Style-Fw UI, Cobalt DS 2.0, Oxygen UI), but none are added and none are in scope.

`search_design_system` processes at most **20 queries per call**; anything beyond that is silently dropped.

## 3. Component mapping

Status: **Found** = a library component fits the role. **Partial** = only sub-parts exist, so it needs a wrapper frame or a substitute. **MISSING** = nothing usable, so build a `CUSTOM ·` frame. Keys are `componentSetKey` unless marked *(component)*.

### 3a. Astryx: 15 found, 1 partial, 2 missing (of 18)

| # | Need | Status | Component · variant(s) to use | Key |
|---|---|---|---|---|
| 1 | App shell / sidebar nav | Found | `AppShell` · Nav Layout=TopNav + SideNav, Variant=Surface (1000×680; slots). `Navigation / SideNav` · State=Expanded (260 w) or Collapsed (48 w, icon-only); slots Top Content / Items / Footer | AppShell `0164ba1e51b89eac9dc323619f30df884e570a7e` · SideNav `6201f436131f8d67d9bb9694529c6be95a16b016` |
| 2 | Nav item | Found | `Navigation / .SideNavItem` · State=Selected (Dashboard) / Default, Size=md, Show Icon=true, Label text | `8aac3dc60f0560a70d46685c30dddfbcc9e17743` |
| 3 | Top bar | Found | `Navigation / TopNav` (1200×48) · slots Heading / Start / Center / End | `96580e8b3657e7494f7bab525de215d1e64dc049` *(component)* |
| 4 | Search input | Found | `Typeahead` · state=rest, size=sm (no dedicated search field; this is the closest input) | `daab58e1d583cf6e017c8ac74cc8c1a719a2c6d6` |
| 5 | Avatar / user menu | Found | `Avatar` · Size=Small, Content=Initials, Status=None. User menu trigger: `DropdownMenu` · Trigger=Label, State=Closed, Size=sm | Avatar `53b207bbaffe8f228d3b62e370906950c2f45100` · DropdownMenu `ff2c8450a75ab94a78468403d015d21b2a838603` |
| 6 | Card | Found | `Card` · Padding=default / compact, Elevation=none (slot Content). Also `ClickableCard` | `c10853d60e9d6d2ee7a21080757d397c6e09a549` |
| 7 | List item | Found | `List / .ListItem` · Density=Balanced, State=Default, Description=true, Start/End Content slots. Alt: `Item` · Density=Compact | ListItem `b00467a52d595ffa2e5160435aae6a2d55d3c51e` · Item `cad45f80774a74b684a040927e6683a1e21415ae` |
| 8 | Badge / status | Found | `Badge` · Variant=Neutral, Shape=Pill, Icon=true (Done / Up next / Planned / Ready / Debrief ready) | `d835899fdd40301689b1ce8a746f72a132b1e988` |
| 9 | Button (primary / secondary / ghost / icon) | Found | `Button` · Variant=Primary / Secondary / Ghost, Size=MD (staff) / LG (tablet), State=Rest, Type=Default or Icon Only, Elevation=none | `657ab879c90ece3d0f97f9c345d3b906b0a54a8e` |
| 10 | Segmented control | Found | `SegmentedControl` · Size=MD, Content=Text, texts Segment 1–3 = Single / Dual / Quad. **Only 3 segments**: for the 4 playback speeds use `Action / ButtonGroup` with Buttons, or 4× `SegmentedControl / SegmentedControlItem` (State=Selected on 1×) | SC `8c4babaf817a2434bf25e286aed7cb11f211ad04` · Item `4b280c31219fd2b41db0138ebbc76fe55e81e8f2` · ButtonGroup `94545fb69bc91a4154574c2a0a2a1a3618f8035d` |
| 11 | Tabs | Found | `Tabs / TabList` · size=md, hasDivider=true; slot Children holds 3× `Tabs / .Tab` (the tab item itself is not separately searchable) | `a8fe09e2665c185f2d5d426a94d387a58f284a7d` |
| 12 | Checkbox / yes-no | Found | `Checkbox / CheckboxInput` · Value=Checked/Unchecked, Size=md. For Yes/No without a score, prefer `Badge` Neutral + icon (check / x) | `26682a7dbbed7ad860922d519fc32eec2901365a` |
| 13 | Video / media placeholder | Partial | No player. `Thumbnail` · State=Placeholder (64×64) for clip/recording thumbs; `Skeleton` · Radius=2 or `Overlay` for big areas. Main player = `CUSTOM · Video player` | Thumbnail `75a1ecbef910e9de71d602edf483de50e3f610b3` · Skeleton `b15a7e0a9ac782f3b885a9bb83504fe7b679e65c` |
| 14 | Slider / progress (timeline) | Found | `Slider` · type=single, state=rest, Show Marks=true, Show Value=false. `ProgressBar` · Variant=**neutral** (accent = blue). Timeline markers (faculty vs AI icons) = CUSTOM | Slider `567bb6a0be792495b11c028755c4ee6ea9429f74` · ProgressBar `3b7d409d292d87b1e38a22657e219dfa3e262f93` |
| 15 | Calendar (mini month) | Found | `Calendar` · Mode=Single, Number Of Months=1 (248×320). `.CalendarDay` states: Default / Today / Selected / Outside…, **no event-dot state**, so dots on 14/20/21 need small CUSTOM marks | `698b6e3008727eeaad9e3b42fa8683e27e0df0f8` |
| 16 | Toggle / switch | **MISSING** | No switch. Nearest: `Button / ToggleButton` · isPressed=true/false (for "Approve" on AI clips); log as substitute | `bb1e6716027ffbd0572bcf7a757d82704711d300` |
| 17 | Tooltip | Found | `Tooltip` · Content text | `971f02cda2f7f384a1920464860d79d841046386` *(component)* |
| 18 | Dialog / sheet | **MISSING** | No Dialog, Modal or Sheet. Only `Popover` (260×152, title + Content slot) and `Example/Settings Dialog` (an example frame, not a primitive) | Popover `5b0f0696ea20bb27f1e5844ceff71d05e8ed5b42` *(component)* |

Also useful: `Toolbar` (Start/Center/End slots, Variant=Transparent, Density=Compact) for the debrief header (`05d80f73cf19c068b2826b17e77b08c32bb8ce06`). Icons: `icon/*` set, which uses **lucide names** (e.g. `icon/calendar-days`, `icon/circle-user`), so no icon mismatch is expected.

### 3b. shadcn: 10 found, 6 partial, 2 missing (of 18)

| # | Need | Status | Component · variant(s) to use | Key |
|---|---|---|---|---|
| 1 | App shell / sidebar nav | Partial | No Sidebar container or app shell. Parts only: `SidebarHeader` · Collapsed=False, Subtext=true; `SidebarGroupLabel` · State=Default. Shell and sidebar frame = `CUSTOM · Sidebar` | SidebarHeader `fc26b59be4db20f019af28c3a3800b0197159953` · GroupLabel `2262d32c65a1aeb1fec540c358d71c7eeaa929ab` |
| 2 | Nav item | Partial | No SidebarMenuButton. `SidebarMenuSubButton` (231×28) is **text-only, no icon**. Better: `Item` · Size=Extra small, Type=Default/Muted (selected), Left icon=true; or `Button` · Variant=Ghost / Secondary (active), Left icon=true | SubButton `18e06c4b2c5783a9e3049dc110c9d32f278e6b19` · Item `6835604e26de26e7c724171dbac0565eafa601de` |
| 3 | Top bar | **MISSING** | No header/navbar. `CUSTOM · Top bar` containing Input + Icon Buttons + Avatar | none |
| 4 | Search input | Found | `Input` · State=Default, Text=Placeholder, Left icon=true (lucide search). Alt `InputGroup` | `fdb030f081fe1950b60b3894694a6c1e32e6121d` |
| 5 | Avatar / user menu | Found | `Avatar` · Size=default (initials). Group of learners: `AvatarGroup` · Count=true. User-menu trigger = `Button` Ghost + Right icon (chevron-down); no DropdownMenu container (only `DropdownMenuLabel`) | Avatar `4e3735b851ad1d233f65e1977412d6a3bda3ca0c` · AvatarGroup `087fcc9bc12f3bbe823de5cf1c5806997975ea76` |
| 6 | Card | Found | `Card` · Layout=Vertical / Horizontal; `Card header` · Type=Button/Badge | Card `e354943a4aff4ef9fe7eb926cbbb7481a1687b20` · Card header `0d92a24d9d0e70640a7efa8d80c425941dcc3bf8` |
| 7 | List item | Found | `Item` · Type=Outline / Default, Size=Default, Image / Avatar / Left icon / Button / description toggles | `6835604e26de26e7c724171dbac0565eafa601de` |
| 8 | Badge / status | Found | `Badge` · State=Secondary or Outline, Left icon=true (avoid Destructive, which is red) | `ce17cab23b8fdc61388f9109b9006f5af787ddcd` |
| 9 | Button (primary / secondary / ghost / icon) | Found | `Button` · Variant=Default (primary) / Secondary / Outline / Ghost, Size=default / lg, Left icon. `Icon Button` · Variant=Ghost / Outline, Size=default / lg | Button `81412f92b37db43e61c6da46de077e3da012a76f` · Icon Button `c8967d005914fedd20f530e76d827341ebe396f5` |
| 10 | Segmented control / toggle group | Found | No ToggleGroup wrapper, but `Toggle` · Variant=Outline, Position=Left / Middle / Right, State=On/Off composes any count (works for 3 room modes and 4 speeds) | `e5e620dfc674c9abd8d76ed7da2ce2278c6d65cc` |
| 11 | Tabs | Partial | `Tab` · Variant=Underline (or Default), Selected=On/Off. No TabsList container: wrap in an auto-layout frame | `4ba5195b2b1d2e43cc13020484adcff769c1e6f6` |
| 12 | Checkbox / yes-no | Found | `Checkbox` (16×16) · Data state=Checked/Unchecked. Or `Badge` Outline + icon for Yes/No | `841ae2c9ea96207330dfa187f8da11ab246c4282` |
| 13 | Video / media placeholder | Partial | No media/aspect-ratio component. `Skeleton` · Skeleton=Card as a grey block; player = `CUSTOM · Video player` | `1f69a5307dcabc64924e281a38ed8599c8deee29` |
| 14 | Slider / progress (timeline) | Partial | No composed Slider and **no Progress**. Parts: `SliderTrack` · Orientation=Horizontal (+ `SliderRange`, `SliderThumb`) | Track `28058204727f15deb924dc73da9fbcbdb82bd3e1` · Range `881d27caff6e9ec62b37241e647b4148ee40f64f` · Thumb `a7764b4b80866fbb1d78f0ff345c38fe1f9314bf` |
| 15 | Calendar (mini month) | **MISSING** | Only `Calendar header` · Type=MonthYear, nav arrows. No day grid: `CUSTOM · Mini calendar` | header `2da83a1ff23a5bffdbd32de920597d780cf8de38` |
| 16 | Toggle / switch | Found | `Switch` · Size=Default, Data state=Checked/Unchecked | `103417af729a786201e48b114b03cbc47047cdf7` |
| 17 | Tooltip | Found | `Tooltip` · Placement=Top | `46b7ed365c14c513a5182eda9068c72cdea3fa78` |
| 18 | Dialog / sheet | Partial | Header/footer parts only: `Dialog header`, `DialogFooter`, `SheetHeader`, `SheetFooter`; container = frame | Dialog header `bfccf6b7b03261be2468e82015ca5260565d1654` · DialogFooter `763f76e4aa60337a39ad9fb6154d8572274b9443` · SheetHeader `82ef1f4ff3cfeaa9f0dc0b054d5be046723f90b6` |

Icons: `lucide/*` is included (alongside tabler, remix, hugeicons, phosphor), so use the `lucide/` ones.

## 4. Variables and modes

### Astryx

| Collection | Vars | Modes | Notes |
|---|---|---|---|
| **Color** | 108 COLOR | **Neutral Light**, Neutral Dark | Default light mode is neutral: Text/Primary #171717, Text/Secondary #737373, Core/Accent (primary button) #262626, Surface/Card #FFFFFF, Core/Background Body #F1F1F1 |
| Typography | 30 FLOAT + 3 STRING | Neutral | Font sizes / line heights |
| Spacing | 15 | Default | |
| Radius | 6 | Neutral | Container / Inner / Element / Full |
| Size | 3 | Default | Element S/M/L |
| Border | 1 | Default | Border Width |
| Y2K, Chocolate, Matcha, Butter, Gothic, Stone (×3–4 each) | **0 published** | n/a | Theme collections exist but expose no variables, so they can't be used |

**Greyscale mode: yes.** "Neutral Light" is already the default and is greyscale. Expected colour leaks: `Badge` Info/Success/Warning/Error vivid backgrounds (#0074E2, #198100, #FFCE2F, #E33F4A), `ProgressBar` accent fill (#0074E2 blue), Status/* colours and the coloured palettes (Blue/Red/…). Text styles: `Heading/Heading 1–6` and body styles exist.

### shadcn

| Collection | Vars | Modes | Notes |
|---|---|---|---|
| **mode** (semantic) | 37 COLOR + 12 FLOAT | **light mode**, dark mode | primary #171717, primary-foreground #FAFAFA, background #FFFFFF, muted #F5F5F5, muted-foreground #737373, border #E5E5E5, sidebar #FAFAFA |
| rdx/colors | 396 COLOR | light mode, dark mode | Radix scales (gray, slate, sage, violet…) |
| tw/colors | 244 COLOR | Mode 1 | Tailwind palette |
| tokens, tw/font, tw/padding, tw/margin, tw/gap, tw/space, tw/border-radius, tw/border-width, tw/width, tw/height, tw/min/max-*, tw/size, tw/opacity, tw/stroke-width | FLOAT/STRING | Mode 1 | Tailwind scale tokens |

**Greyscale mode: yes.** "light mode" is the default and is neutral. Expected leaks: `destructive` #E7000B (Destructive button/badge), chart-1…5 blues, and any Radix/Tailwind palette use. Text styles: `Text-xs/sm/base/lg/xl` × weights.

Neither library has the brief's recording red #D92D20. Astryx Status/Error is #A50C25 / #E33F4A and shadcn destructive is #E7000B, so the recording dot/banner will need a literal #D92D20 fill on a CUSTOM element.

## 5. Current Essentials shell (page "learningspace screenshots")

Measurements are estimated from the 1624×1060 screenshots, which include a browser-window frame, and normalised to a 1440-wide app.

- **Left nav rail, about 86 px wide**, full height under the top bar: icon **above** a small label, 8 items (Events, Recording, Video Review, Reports, SCE Management, Calendar, User Manager, System). The active item is a solid filled block (blue) with white icon and label. A collapse chevron "‹" sits at the bottom.
- **Top bar, about 40 px high**, full width over the nav. Left: LS logo + "LearningSpaceEssentials" wordmark. Right: "Start AI Assistant Trial" button (purple), help "?", notifications bell, contrast/theme toggle, user menu "Admin ▾". **No global search in the top bar.**
- **No page H1.** The active module is shown by the nav selection plus a **tab row** at the top of the content (Groups & Users · Batch User Create · Check-In), about 40 px high, active tab underlined.
- Under the tabs is a **toolbar row** (about 50 px): scope dropdown "All ▾" joined to a search field ("Search users, groups, etc.") on the left, a "Show hidden groups" checkbox, and an info icon on the far right.
- **Content is full-bleed** (no max width). It uses a two-pane layout: a fixed left pane "Groups" (about 500 px) with a list, and a fluid right pane "Users" with a data table. Pane titles sit top-left with action buttons right-aligned (Edit / + New / Export; Open / + New).
- **High density:** table rows about 35 px, 12–13 px text, sortable column headers, row icons for role, footer "Showing entries: 1 – 23 / 50".
- Surfaces: white panels on a light grey canvas, thin 1 px dividers, small radii, blue primary buttons with grey disabled buttons.
- Dialogs (Edit User): centred modal about 630 px wide. Header has an icon + uppercase title with ⋯ and ✕ on the right. Fields are on top, with vertical sub-tabs (Account / Groups) on the left of the body, and the footer has Save (primary) + Cancel.

**Implication for the wireframes:** keep a left rail plus a full-width top bar. Neither library has an icon-over-label rail at about 86 px. Astryx SideNav is 260 px (icon beside label) or 48 px (icon only), and shadcn has no sidebar container. Each run should log which compromise it made.

## 6. Risks and blockers for building

1. **Astryx relies on native slots** (AppShell, SideNav, TopNav, Card, TabList, Toolbar, Popover, ListItem start/end). The first build must check early that `use_figma` can put content into a slot without detaching. If it can't, Astryx runs will be forced into detaches or CUSTOM frames, and that would skew the benchmark.
2. **shadcn has no shell, top bar or calendar grid.** Screen 1 will carry 3+ large CUSTOM frames (sidebar, top bar, mini calendar) for shadcn compared with roughly 1 for Astryx (calendar dots). Expect a large gap in CUSTOM-frame counts.
3. **Video player and timeline markers are CUSTOM in both** (the brief already allows grey placeholders). Faculty-vs-AI markers need icons, which both icon sets provide.
4. **4-option playback speed:** Astryx SegmentedControl only has 3 text props, so use ButtonGroup or SegmentedControlItem×4. shadcn Toggle Position handles any count.
5. **Recording red #D92D20 is in neither library**, so it needs a literal fill.
6. Not blocking: dialog/sheet isn't needed for either screen. Astryx is missing it and shadcn only has header/footer parts.
