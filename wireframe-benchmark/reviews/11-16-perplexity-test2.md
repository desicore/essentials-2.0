# 11-16 · Perplexity Computer, test 2: shared core + the Live module

Second prototype test with Perplexity Computer. It builds the shared shell and one flow (Live, Start recording, Room view) as plain HTML, CSS and JavaScript with real, reusable components and no build step. The prompt to paste is the code block under "Prompt". Everything above it is for Daniel.

## For Daniel (English)

### What the first build shows

Folder: `~/Downloads/Rooms · LearningSpace Essentials` (built 11-13). I read the files, I did not run them.

| Question | What I found | Evidence |
|---|---|---|
| Framework, build setup | None. Plain HTML, CSS and JS. Opens from disk. | 3 files: `index.html` 37 KB, `styles.css` 8 KB, `app.js` 1 KB. No `package.json`. |
| File organisation | One page, one stylesheet, one script. | No folders. |
| Reusable components | No. There is only one screen, so nothing had to be reused. The four table rows are the same markup copied four times. The class names are tidy (`.btn`, `.badge`, `.card`, `.nav-item`, `.icon-btn`), so the CSS is reusable, but the markup is not. | `class="t-row"` appears 4 times as full copies. |
| Styling | Good. CSS variables in `:root` for colours, radii and nav width. Only 2 inline styles. Responsive breakpoints and a reduced-motion rule. | `styles.css` first lines. |
| Sample data | Hard-coded in the HTML. No data file. | Room names sit in the markup. |
| Navigation and state | Static. All 13 links are `href="#"` and the script cancels the click. The only working behaviour is collapsing the side navigation and the mobile menu. | `app.js`, 18 lines. |
| Closeness to the design | High. I compared it with the frame "AV0 · Rooms" (`1603:10516`): same top bar, same side navigation, same texts, same table columns, same badges. | Screenshot against the HTML text. |
| Extras nobody asked for | A 15 KB Perplexity "inline edit" script is embedded in `index.html`. It is the hook for the Edit button of the Perplexity preview and comes with the download. It does nothing outside Perplexity. Perplexity prototypes do not go to Git, so it can stay. The page also loads Figtree from Google Fonts, an external request. | `<script data-pplx-inline-edit>`, `<link href="https://fonts.googleapis.com/…">`. |

The prompt of the first build (told by Daniel on 11-16): one line, "Hey Perplexity, can you please build this screen from Figma?", plus the Figma frame link. Perplexity has Figma access. Prompt against result: it was asked for one screen and it built one screen, very close to the frame, from the link alone. It was not asked for components, data or navigation, so their absence says nothing about what it can do. Two things follow. Figma access works and is accurate, so no PNG exports are needed. And it copies the frame as it is, including what is wrong in it (the old menu, the "OpSpace" button).

Note: the first build has the old menu (Dashboard, Calendar, Scenarios, Reports) and the button "Manage rooms in OpSpace". Both are gone in the one-app concept. Do not attach the old folder to this test.

### Your two questions

**Can it use and reuse components, or does it make static pages?**
The first build cannot answer this. It was one page, and it came out as a static page. That it writes clean, token-based CSS is a fact. That it can keep a component structure across several screens is only my guess. Test 2 is built to answer exactly this question.

**One big prototype for the whole workflow, or separate modules?**
I agree with you on modules, with one correction.

- One run for all 30 screens is a bad idea. The first run had one page. Thirty screens in one overnight run will drift (the nav will differ between screens, as it did in Cursor), and you cannot review it step by step.
- But "modules built separately and joined later" is also risky if each module is its own small app. Each run would invent its own nav, buttons and sample data. Joining them means rewriting them.
- What I recommend: **one repository, built in steps.** Step 1 builds the core (tokens, shell, components, sample data, state) plus one module. Then the core is frozen. Every later run continues the same Perplexity task (or gets the folder as an attachment), adds one folder under `modules/`, and may not edit the core. If it needs a core change, it lists it in the report and you decide.
- This is the same pattern as your Cursor wireframes: F0 shell first, a review gate, then the flow chats.
- Joining is then trivial: modules register their own routes, so two modules built in parallel are merged by copying two folders into the same repository. The prototype lives in the Perplexity task and as a download. It does not go to Git (see the note below).

### Scope of this test

Core + the module "live": L2 Live, L3 Start recording, L3c several rooms recording, L4 Room view. I kept your starting suggestion. Reason: L2, L3 and L3c are one page in three states, so the test shows whether Perplexity builds one page driven by data and state, or three copies. L4 has a different shell (collapsed rail), so it shows whether the shell is a real component.

Left out on purpose: L3b and L3d (select several rooms). "Select rooms" is visible but does nothing. They are a good first test of "add to an existing module" later.

### How to run it

1. Nothing to attach. Perplexity reads the five frames through its Figma access. The prompt still lists every text, because it sets the behaviour and the few places where the build must differ from the frame (no photos in L4, stand-ins).
2. Paste the prompt.
3. Click through in the preview. Then download and double-click `index.html`.
4. Do not press Publish, do not make a pplx.app link and do not deploy through Vercel. All three put the prototype on a public host. Share is fine: Daniel confirmed on 11-16 that it only shares inside Elevate.

### How to judge the result (about 20 minutes)

1. **It runs in both places.** It works in the Perplexity preview. After download, a double-click on `index.html` opens it from disk and it works the same.
2. **Click path.** Live → "Start recording" → pick Skills Lab 1 → "Start recording" → Room view opens → back arrow → Live shows Skills Lab 1 as recording, with the banner → "Stop all" → all rooms ready again.
3. **One component, many uses.** Search `modules/` for `'button'`, `<button`, `'nav'` and `badge` as a class name. The count should be 0. The side navigation is defined in one file.
4. **One source of data.** Change "Sim Room 1" to "Sim Room X" in `core/data/rooms.js`. It must change on Live, in the sheet and in the room view.
5. **One source of style.** Change the radius token in `tokens.css`. Cards and buttons change everywhere.
6. **No network.** Open the downloaded `index.html`, browser dev tools, Network tab: only `file://` entries. No Google Fonts. Search the folder for `googleapis`: 0 hits. The only `pplx` hit may be the inline-edit script in `index.html`. That one is expected.
7. **Fidelity.** Open `#/live?preset=l2`, `?preset=l3`, `?preset=l3c` and `#/room/sim-room-2?preset=l4` next to the Figma frames.
8. **Honesty.** Read `REPORT.md`. Does it list what it could not match, or does it claim everything is perfect?

Pass = 1 to 6 all true. Then the module approach is proven and the next runs can add modules. If 3 or 4 fail, Perplexity copies markup even when told not to, and I would keep it for single screens and build the joined prototype in Cursor.

Things I decided that are not in Figma (marked "stand-in" in the prompt): what "Stop recording" does in the room view, and what the room view shows for an ad hoc recording. Change them if you disagree.

### Changed after Daniel's notes (11-16)

Daniel said two things after the first version of this file. Perplexity has Figma access, and the first prompt was one line with a frame link. And Perplexity Computer works like a design tool: it builds in the cloud, shows a live preview with an Edit button, and the download is a folder with `index.html`.

So the first version of this prompt was wrong to ask for a React and Vite project that runs with `npm`. I changed it to plain HTML, CSS and JavaScript with no build step. Reasons:

- A Vite project needs an install and a build. I do not know whether the Perplexity preview can show one. Plain files certainly work there, and the download opens with a double-click.
- The team's handoff is already "README + ZIP (prototype HTML/JS)" that Cursor maps to the real component library. A React prototype would be a second code style nobody asked for.
- The question of the test stays the same and can be answered without React: a component is a JavaScript function that every screen calls. Either the Live page calls `Button` and `Badge`, or it has its own copies.

What we give up: no TypeScript checks and no component library tooling. For a prototype that is fine.

Where the prototype sits in the workflow (Daniel, 11-16, from what Brent said): Perplexity is only for the ideation and exploration phase. It makes the Figma screens clickable. The real product is then built in Cursor. Perplexity prototypes do not go to Git. So the module structure in this prompt has one job: keeping a multi-screen prototype consistent while it grows. It is not the start of a codebase.

Edit in the preview: you pick an element on the page and describe the change in a prompt. It selects the element in the rendered page (the screenshot shows the path `main.content › … › span.c-room`), so it should also work when JavaScript draws the page. Not tested yet. Check it once on the test 2 result: pick a Badge on one room card, ask for a change, and see whether Perplexity changes the shared component or patches that one place.

### Shell change, 11-16 evening (no top bar)

The main session reported that the Figma shell changed after this prompt was written. I looked at the five frames again (Shell · Page, L2, L3, L3c, L4) and updated the prompt.

- No frame has a top bar. Page screens are 1440 × 900: side navigation plus content.
- The side navigation now holds the logo, the institution name, a search field, the nav groups, then Help, Settings and a separate user row.
- The room view (L4) is 1440 × 900, not 948. Its rail has the 11 icons, and Settings plus the avatar at the bottom.
- In the prompt: the TopBar component is gone, SideNav got the header, search, Help and user row, and the sizes are fixed. The search field is a visual placeholder only.
- The menu label "Live" may change to "Live/Capture". The prompt tells Perplexity to take the menu labels from the frame at build time.
- The global Recording banner (frames B1 `1767:16449` and B2 `1767:17142`) is not in this test. AppShell keeps an empty slot for it, so a later module can add it without touching the pages.

**Your run started before this change.** It used the prompt with the top bar, and Perplexity reads Figma at build time, so the frames it sees and the prompt disagree. The old prompt said "the prompt wins", so expect a result with a top bar. Two ways out: start a new task with the updated prompt, or send this follow-up in the same task when it finishes:

```
The Figma shell changed. Update the core shell to match the frames again. Open "Shell · Page" (node 1749-8657) and "L4 · Room view" (node 1752-40197) first.
- Remove the top bar everywhere. Delete its component file and its CSS.
- Side navigation, expanded: logo and institution name at the top, then a search field (placeholder "Search", visual only), the nav groups, then a footer with "Help" and "Settings", then a separate user row (avatar "MO", "Dr. Maya Ortiz", chevron down).
- Side navigation, rail: the 11 icons, and at the bottom the Settings icon, the avatar "MO" and the expand chevron.
- Page frames are 1440 × 900 with no top bar. The Room view header starts at the top of the page.
- Take the menu labels from the frame.
- Change only files in core/shell and tokens.css. If a file in modules/ needs a change, list it and tell me why before you change it.
```

The second way is also a useful extra test: a shell change should touch only `core/shell`. If Perplexity has to edit the pages to remove the top bar, the shell was not a real component.


## Danielnek (magyarul)

### Mit mutat az első build

Mappa: `~/Downloads/Rooms · LearningSpace Essentials` (11-13). A fájlokat elolvastam, nem futtattam.

- **Framework, build:** nincs. Sima HTML, CSS és JS, három fájl, `package.json` nélkül.
- **Komponensek:** nincsenek. Egy képernyő van, tehát nem volt mit újrahasználni. A táblázat négy sora négyszer bemásolt markup. A CSS osztályok rendezettek (`.btn`, `.badge`, `.card`), tehát a stílus újrahasználható, a markup nem.
- **Stílus:** jó. CSS változók a `:root`-ban, csak 2 inline stílus, reszponzív töréspontok.
- **Mintaadat:** a HTML-be van beírva, nincs adatfájl.
- **Navigáció, állapot:** statikus. Mind a 13 link `href="#"`, a script letiltja a kattintást. Csak az oldalmenü összecsukása működik.
- **Mennyire követi a tervet:** nagyon. Összevetettem az "AV0 · Rooms" frame-mel (`1603:10516`): ugyanaz a felső sáv, menü, szövegek, oszlopok, badge-ek.
- **Amit senki nem kért:** az `index.html`-ben van egy 15 KB-os Perplexity "inline edit" script. Ez a Perplexity előnézet Edit gombjának a horga, és a letöltéssel együtt jön. A Perplexityn kívül nem csinál semmit. A Perplexity prototípusok nem kerülnek Gitbe, tehát maradhat. A Figtree betűtípus a Google Fontsról töltődik, ez külső kérés.

Az első build promptja (Daniel mondta el 11-16-án): egy sor, "Hey Perplexity, can you please build this screen from Figma?", és a Figma frame link. A Perplexitynek van Figma hozzáférése. Prompt és eredmény: egy képernyőt kértél, egy képernyőt épített, a linkből, nagyon pontosan. Komponenst, adatot, navigációt nem kértél, tehát a hiányuk semmit nem mond arról, mire képes. Két következmény: a Figma hozzáférés működik és pontos, PNG export nem kell. És a frame-et úgy másolja, ahogy van, a hibáival együtt (régi menü, "OpSpace" gomb).

A régi buildben a régi menü van (Dashboard, Calendar, Scenarios, Reports) és a "Manage rooms in OpSpace" gomb. Ne csatold ehhez a teszthez.

### A két kérdésed

**Tud komponenseket használni, vagy statikus oldalakat gyárt?**
Az első buildből ez nem derül ki. Egy oldal volt, és statikus oldal lett. Tény, hogy tiszta, tokenes CSS-t ír. Az, hogy több képernyőn át megtartja a komponens-szerkezetet, csak feltevés. A 2. teszt pontosan ezt méri.

**Egy nagy prototípus az egész folyamatra, vagy külön modulok?**
A modulokban egyetértek veled, egy javítással.

- Mind a 30 képernyő egy futásban rossz ötlet. Szét fog csúszni, és nem tudod lépésenként ellenőrizni.
- A "külön megépített, később összerakott modulok" is kockázatos, ha minden modul külön kis app. Mindegyik futás saját menüt, gombot és mintaadatot találna ki. Az összerakás újraírás lenne.
- A javaslatom: **egy repó, lépésekben.** Az első lépés megépíti a magot (tokenek, shell, komponensek, mintaadat, állapot) és egy modult. Utána a mag be van fagyasztva. Minden későbbi futás ugyanazt a Perplexity feladatot folytatja (vagy csatolva megkapja a mappát), hozzáad egy mappát a `modules/` alá, és a maghoz nem nyúlhat. Ha a magban kell változás, a riportba írja, és te döntesz.
- Ez ugyanaz a minta, mint a Cursoros wireframe-eknél: F0 shell, ellenőrzés, utána a flow chatek.
- Az összerakás így egyszerű: a modulok maguk regisztrálják az útvonalaikat, két párhuzamosan épített modult két mappa bemásolásával lehet egyesíteni. A prototípus a Perplexity feladatban és letöltésként él. Gitbe nem kerül (lásd a lenti megjegyzést).

### A teszt tartalma

A mag és a "live" modul: L2 Live, L3 Start recording, L3c több szoba rögzít, L4 Room view. Megtartottam a kiinduló javaslatot. Az L2, L3 és L3c egy oldal három állapotban, tehát kiderül, hogy adatból és állapotból épít-e egy oldalt, vagy három másolatot. Az L4-nek más a shellje (összecsukott sáv), tehát kiderül, hogy a shell valódi komponens-e.

Szándékosan kimaradt: L3b és L3d (több szoba kijelölése). A "Select rooms" gomb látszik, de nem csinál semmit.

### Futtatás

1. Nem kell semmit csatolni. A Perplexity a Figma hozzáférésén át olvassa az öt frame-et. A promptban mégis benne van minden szöveg, mert az adja meg a viselkedést és azt a néhány helyet, ahol a build eltér a frame-től (nincs fotó az L4-ben, stand-inek).
2. Másold be a promptot.
3. Kattints végig az előnézetben. Utána töltsd le, és nyisd meg az `index.html`-t dupla kattintással.
4. Ne nyomd meg a Publish gombot, ne kérj pplx.app linket, és ne telepítsd Vercelre. Mindhárom nyilvános tárhelyre teszi a prototípust. A Share rendben van: 11-16-án megerősítetted, hogy csak az Elevate-en belül oszt meg.

### Hogyan ítéld meg (kb. 20 perc)

1. **Mindkét helyen fut.** Működik a Perplexity előnézetében. Letöltés után az `index.html` dupla kattintással megnyílik a lemezről, és ugyanúgy működik.
2. **Kattintási út.** Live → "Start recording" → Skills Lab 1 → "Start recording" → megnyílik a Room view → vissza nyíl → a Live-on a Skills Lab 1 rögzít, látszik a banner → "Stop all" → minden szoba újra kész.
3. **Egy komponens, sok helyen.** Keress a `modules/` alatt `'button'`, `<button`, `'nav'` szövegre és `badge` osztálynévre. A találat 0 legyen.
4. **Egy adatforrás.** Írd át a "Sim Room 1"-et a `core/data/rooms.js`-ben. A Live-on, a sheetben és a room view-ban is változnia kell.
5. **Egy stílusforrás.** Írd át a radius tokent a `tokens.css`-ben. Mindenhol változik.
6. **Nincs hálózat.** A letöltött `index.html`-nél a Network fülön csak `file://` sorok vannak. A mappában a `googleapis` keresés 0 találat. `pplx` találat csak az `index.html` inline-edit scriptje lehet. Az rendben van.
7. **Hűség.** Nyisd meg a `?preset=` címeket a Figma frame-ek mellett.
8. **Őszinteség.** Olvasd el a `REPORT.md`-t: felsorolja, amit nem tudott megcsinálni?

Sikeres, ha az 1–6. mind igaz. Akkor a modulos út működik. Ha a 3. vagy a 4. megbukik, a Perplexity akkor is másol, ha tiltjuk. Akkor csak egyedi képernyőkre használnám, és az összerakott prototípust Cursorban építeném.

Amit én döntöttem el, mert nincs a Figmában (a promptban "stand-in"): mit csinál a "Stop recording" a room view-ban, és mit mutat a room view ad hoc rögzítésnél. Írd át, ha nem értesz egyet.

### Mi változott Daniel megjegyzései után (11-16)

A fájl első változata után két dolgot mondtál. A Perplexitynek van Figma hozzáférése, és az első prompt egy sor volt egy frame linkkel. A Perplexity Computer pedig úgy működik, mint egy design eszköz: a felhőben épít, élő előnézetet ad Edit gombbal, a letöltés pedig egy mappa `index.html`-lel.

A prompt első változata tehát hibásan kért `npm`-mel futó React és Vite projektet. Átírtam build nélküli, sima HTML, CSS és JavaScript megoldásra. Az okok:

- A Vite projekthez telepítés és build kell. Nem tudom, hogy a Perplexity előnézete meg tud-e jeleníteni ilyet. A sima fájlok biztosan működnek ott, a letöltés pedig dupla kattintással megnyílik.
- A csapat átadási formája már most is „README + ZIP (prototype HTML/JS)", amit a Cursor képez le a valódi komponenskönyvtárra. A React prototípus egy második kódstílus lenne, amit senki nem kért.
- A teszt kérdése ugyanaz marad, és React nélkül is megválaszolható: a komponens egy JavaScript függvény, amit minden képernyő meghív. A Live oldal vagy a `Button` és a `Badge` függvényt hívja, vagy saját másolata van.

Amit feladunk: nincs TypeScript ellenőrzés. Prototípusnál ez belefér.

Hol a helye a prototípusnak a folyamatban (Daniel, 11-16, Brent elmondása alapján): a Perplexity csak az ötletelési és felfedező fázisra való. Végigkattinthatóvá teszi a Figma képernyőket. A valódi terméket utána Cursorban építjük. A Perplexity prototípusok nem kerülnek Gitbe. A promptban lévő modulos szerkezetnek tehát egy dolga van: egyben tartani a több képernyős prototípust, ahogy nő. Nem egy kódbázis kezdete.

Edit az előnézetben: kijelölsz egy elemet az oldalon, és prompttal leírod a változtatást. A kirajzolt oldalon jelöl ki (a képernyőképen az útvonal `main.content › … › span.c-room`), tehát akkor is működnie kell, ha az oldalt JavaScript rajzolja ki. Még nincs kipróbálva. A 2. teszt eredményén nézd meg egyszer: jelölj ki egy Badge-et egy szobakártyán, kérj változtatást, és figyeld meg, hogy a közös komponenst írja-e át, vagy csak azt az egy helyet foltozza.

### A shell változása, 11-16 este (nincs felső sáv)

A fő session jelezte, hogy a Figma shell megváltozott, miután ez a prompt elkészült. Újra megnéztem az öt frame-et (Shell · Page, L2, L3, L3c, L4), és frissítettem a promptot.

- Egyik frame-ben sincs felső sáv. Az oldalak 1440 × 900 méretűek: oldalmenü és tartalom.
- Az oldalmenüben van a logó, az intézmény neve, a keresőmező, a menücsoportok, majd a Help, a Settings és egy külön felhasználói sor.
- A room view (L4) 1440 × 900, nem 948. A sávjában a 11 ikon van, alul a Settings és az avatar.
- A promptban: a TopBar komponens megszűnt, a SideNav megkapta a fejlécet, a keresőt, a Helpet és a felhasználói sort, a méretek javítva. A keresőmező csak látvány.
- A "Live" menüfelirat "Live/Capture"-re változhat. A prompt azt kéri, hogy a menüfeliratokat építéskor a frame-ből vegye.
- A globális Recording banner (B1 `1767:16449` és B2 `1767:17142`) nincs ebben a tesztben. Az AppShell üres helyet tart fenn neki, így egy későbbi modul az oldalak módosítása nélkül hozzáadhatja.

**A futtatásod a változás előtt indult.** A felső sávos promptot kapta, a Perplexity pedig építéskor olvassa a Figmát, tehát a frame-ek és a prompt ellentmondanak egymásnak. A régi prompt szerint "a prompt nyer", ezért felső sávos eredményre számíts. Két megoldás van: új feladatot indítasz a frissített prompttal, vagy a futás végén ugyanabban a feladatban elküldöd az angol részben lévő rövid folytató promptot.

A második megoldás egy hasznos plusz teszt is: a shell változásának csak a `core/shell` mappát kellene érintenie. Ha a Perplexitynek az oldalakat is át kell írnia a felső sáv eltávolításához, akkor a shell nem volt valódi komponens.


## Prompt

Paste everything in the block. Nothing to attach.

```
Build a small clickable prototype of a web app here in Computer, as plain HTML, CSS and JavaScript. I will click through it in your preview and then download it. Read all of this before you start.

GOAL
A product for healthcare simulation centers. Staff see every room, start a video recording in a room, and watch the room while it records.
This test has two parts:
A. The core: design tokens, the app shell, a set of reusable components, sample data and a small state store.
B. One module called "live" that uses only the core: the Live page, the Start recording sheet, and the Room view.
More modules will be added later by other runs. So the structure matters as much as the look.

DONE MEANS
- The app works in your preview. The same files also work after download, when I double-click index.html on my disk (file://), with no server and no install.
- The click path in section "CLICK PATH" works from start to end.
- Every screen is built only from the core components. No screen has its own copy of a button, badge, card, nav, select or sheet.
- All sample data comes from core/data. No room name, event name or person name is typed inside a component or a page.
- The four preset URLs in section "PRESETS" show the four Figma frames.
- The folder has a README.md and a REPORT.md (section "DELIVERY").

HARD RULES
1. Do not publish this. No pplx.app link, no Vercel, no other deploy, no share link. The app stays in the preview of this task. I download it myself. Do not offer publishing as a next step.
2. The running app makes no network request. No CDN, no Google Fonts link, no analytics, no remote images, no remote scripts.
3. Do not add analytics or tracking code.
4. Copy every UI text exactly as written in this prompt, including capital letters, the middle dot "·" and the en dash "–".
5. Do not invent screens, features, menu items or texts. If something is not specified, do the simplest thing, and list it in REPORT.md under "Not specified".
6. These words must never appear in the UI: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard". One exception: the product logo at the top of the side navigation reads "LearningSpace Essentials". That is branding and stays.
7. Greyscale. Colour is allowed only in: status badges (green, yellow, red), the "Stop recording" button (red outline, red square icon), and the small red dot in a camera label.
8. No photos. A camera picture is a grey box with a centred muted text.
9. Desktop only. Design width 1440 px. It must not break between 1280 and 1920 px. No mobile layout.
10. English UI.

STACK (use exactly this)
- No framework and no build step. Plain HTML, CSS and JavaScript. No React, no npm, no bundler, no TypeScript, no JSX.
- Reason: the same files must run in your preview and from my disk by a double-click. So use classic <script src="..."> tags only. No type="module", no import or export, no fetch of local files. These fail on file://.
- One global namespace: window.App. Every file adds to it, for example App.components.Button = function (options) { ... }.
- A component is a function. It takes one options object and returns one DOM element. Components are built from other components.
- One helper, App.h(tag, attributes, children), creates DOM elements. Do not build screens from long innerHTML strings.
- Routing: location.hash and the hashchange event, in core/router.js.
- State: one store, App.store, with getState, dispatch and subscribe. No library.
- Styling: plain CSS. One tokens.css with CSS variables, plus one CSS file per component, next to its JS file. Class names start with the component name (button, button--primary).
- Icons: inline SVG paths copied from the Lucide icon set into core/icons.js. App.icon(name) returns an svg element. No other icon source, no icon font.
- Font: Figtree. Put the woff2 files for weights 400, 500, 600 and 700 in fonts/ and load them with @font-face in global.css. If you cannot get the files, use system-ui and say so in REPORT.md. Never link to Google Fonts.
- No localStorage. State resets on page reload.

PROJECT STRUCTURE (use exactly this)
index.html              only: the <link> tags, <div id="app">, and the <script> tags in two marked blocks
README.md               the folder map and how to add a module
REPORT.md
fonts/
core/
  styles/tokens.css     all CSS variables
  styles/global.css     reset, @font-face, base text styles
  h.js                  App.h
  icons.js              App.icon
  router.js             route table, hash handling, App.registerModule
  components/           one JS file and one CSS file per component: button.js, button.css, badge.js, badge.css, ...
  shell/                app-shell.js, side-nav.js, room-view-shell.js, logo.js, each with its CSS file
  data/                 rooms.js, events.js, people.js, checklist.js, nav.js
  state/                store.js (state, actions, selectors), presets.js
modules/
  live/
    module.js           calls App.registerModule({ name: "live", routes: [...] })
    live-page.js
    start-recording-sheet.js
    room-view-page.js
    live.css            layout only
    components/         parts used only by this module: room-card.js, recording-banner.js, checklist-panel.js
  placeholder/
    module.js
    placeholder-page.js

RULES FOR THE STRUCTURE
- index.html has two marked blocks of tags: <!-- CORE --> and <!-- MODULES -->. Adding a module later must need only a new folder under modules/ and new tags in the MODULES block. No edit in core/.
- Files in modules/ may use anything on App that core/ defines. Files in core/ never use anything that modules/ defines.
- Files in modules/ must not create a raw button, a, nav, select, input or dialog element (not with App.h, not with createElement, not in a string). They call core components. Their CSS has no colour, font-size or radius value. Layout CSS (flex, grid, gap with spacing tokens) is allowed.
- A module-only part (RoomCard) is built from core components (Card, Badge, Button, MediaPlaceholder).
- When the state changes, the page updates. A timer tick must not close an open sheet or an open select list, and must not lose keyboard focus or scroll position.

TOKENS (core/styles/tokens.css)
--text-primary: #171717;
--text-strong: #262626;
--text-secondary: #737373;
--surface-card: #ffffff;
--surface-page: #ffffff;
--surface-neutral: #f1f1f1;        (placeholder fill, selected nav item)
--border-default: rgba(0,0,0,0.08);
--border-input: #d4d4d4;
--fill-secondary: rgba(0,0,0,0.06); (secondary button)
--fill-secondary-hover: rgba(0,0,0,0.10);
--fill-primary: #171717;           (primary button, white text)
--status-success: #198100;         (white text)
--status-warning: #ffce2f;         (dark text)
--status-error: #e5484d;           (white text)
--status-neutral: #e5e5e5;         (dark text)
--radius-element: 10px;            (buttons, inputs, inner boxes)
--radius-container: 12px;          (cards)
--radius-full: 9999px;             (badges, avatar)
--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 20px; --space-6: 24px;
--sidenav-w: 260px; --rail-w: 48px; --sheet-w: 480px;
Text: font Figtree. Body 14/20 regular. Muted 12/16 regular in --text-secondary. Card title 14/20 bold. Label and button text 14/20 medium. Page title 20/28 semibold.
Every colour, radius and spacing in every CSS file uses these variables. No hex value outside tokens.css.

REQUIRED CORE COMPONENTS
Build each one once. Every screen reuses them.
1. Button. Options: variant "primary" | "secondary" | "ghost" | "danger-outline"; size "sm" (height 28); optional icon; disabled. Renders a <button>. With a "to" option it goes to that hash route on click.
2. IconButton. 28 × 28, icon only, needs an aria-label.
3. Badge. Options: tone "success" | "warning" | "error" | "neutral"; children. Height 20, full radius, 12 px text.
4. Card. White, 1 px border, container radius. Optional "selected" prop (2 px border in --text-primary).
5. PageHeader. Options: title, subtitle, actions (right side).
6. MediaPlaceholder. Grey box (--surface-neutral, element radius) with a centred muted label. Options: label, height or aspect ratio.
7. Sheet. Right-side panel, --sheet-w wide, full height, with a 50 % black dim layer behind it. Parts: header (title, subtitle, close IconButton), scrolling body, footer (buttons right-aligned). Closes on the close button, on Escape and on a click on the dim layer.
8. Select. A field that looks like a dropdown: placeholder or value, chevron, 1 px --border-input, element radius, height 32. It opens a simple list of options below it. Options: label, optionalTag (shows "optional" in muted text after the label), placeholder, options, value, onChange, hint (muted text under the field).
9. OptionCard. A selectable row: title, muted subtitle, a Badge on the right. Selected = 2 px border in --text-primary. Options: disabled.
10. Tabs. Underline style. The active tab has a 2 px bottom line in --text-primary.
11. SegmentedControl. A grey pill group. The active item is white.
12. TextInput. Single line, same border and radius as Select.
13. ProgressBar. Thin grey track with a darker fill. Options: value 0 to 1.
14. Avatar. 36 px circle with initials.
Shell components (core/shell):
15. Logo. The text "LearningSpace" in bold italic followed directly by "Essentials" in light italic, about 22 px. One component.
16. SideNav. Options: mode "expanded" | "rail"; active item. It renders from core/data/nav.js in both modes. There is no top bar anywhere in this app. The side navigation carries everything the top bar used to carry.
    Expanded = 260 px wide, full height, top to bottom:
    - header: Logo, and under it the institution name in muted 12 px text;
    - a search field, full width, placeholder "Search", search icon. It is a visual placeholder: the user can type, nothing happens;
    - the nav items in their groups, icon and label;
    - footer at the bottom, above a 1 px top border: "Help" (icon CircleHelp, does nothing), "Settings" (icon Settings, opens its placeholder page);
    - under that, above another 1 px top border, the user row: Avatar "MO", "Dr. Maya Ortiz", a chevron down on the right. It does nothing. It is a separate row, not part of Settings.
    Rail = 48 px wide, full height: the 11 nav icons from the top, each with a title tooltip. No logo, no search, no group headings, no Help. At the bottom: the Settings icon, the Avatar "MO", and an expand chevron (does nothing in this test).
    The active item has a --surface-neutral background.
17. AppShell. SideNav (expanded) on the left + a content area with 24 px padding. No top bar. The design frame is 1440 × 900. It also has one empty slot above the whole app, full width, for a global banner that a later module will add. Leave the slot empty: it takes no space now. Used by every normal page.
18. RoomViewShell. SideNav (rail, no active item) on the left + full-width content with no padding. No top bar. The design frame is 1440 × 900. Used by the Room view.

NAVIGATION MODEL
Routes (the part after # in the URL):
- "/"                redirects to "/live"
- "/live"            LivePage in AppShell. Nav item "Live" is active.
- "/room/:roomId"    RoomViewPage in RoomViewShell. No nav item is active.
- every other nav item goes to "/soon/:slug" = PlaceholderPage in AppShell, with that nav item active. It shows a PageHeader with the item's label as title and the subtitle "Not part of this prototype yet."
The Start recording sheet is not a route. It is state on the Live page.

Side navigation (core/data/nav.js), top to bottom, with Lucide icon names:
- Today (LayoutGrid), Notifications (MessageCircle), Events (Calendar)
- group heading "Sessions": Live (Play), Recordings (Video)
- group heading "Resources": Rooms (DoorOpen), Simulators & Equipment (SlidersHorizontal), People (Users), Inventory (LayoutGrid), Labels (Flag), Prep checklists (ListChecks)
- footer: Help (CircleHelp), Settings (Settings)
Menu labels: before you build, read the labels in the Figma frame "Shell · Page". If a label there differs from this list (for example the item after the heading "Sessions" reads something other than "Live"), use the label from the frame and note it in REPORT.md. This is the one place where the frame wins over this prompt. The routes stay the same (/live).
Group headings are 12 px muted text. In rail mode the headings are hidden.

SAMPLE DATA (core/data)
Institution: Riverbend College of Nursing. Signed-in user: Dr. Maya Ortiz, initials MO. The prototype's "now" is Tue 19 Jan 2027, 09:50.

rooms.js (id, name, type, meta line, sheet line, cameras, default state):
- sim-room-1 · "Sim Room 1" · meta "Simulation room · 3 cameras · 2 mics" · sheet line "3 cameras · 2 mics · Free until 13:00" · 3 cameras · state ready · free line "Free until 13:00" · next line "Next: NURS 340 · Postpartum hemorrhage · Group B"
- sim-room-2 · "Sim Room 2" · meta "Simulation room · 2 cameras · 1 device not found" · sheet line "2 cameras · 1 device not found" · 2 cameras · state needs-attention · next event: nurs-310-sepsis
- skills-lab-1 · "Skills Lab 1" · meta "Skills lab · 1 camera · Audio kit" · sheet line "1 camera · Audio kit · Free until 13:00" · 1 camera · state ready · free line "Free until 13:00" · next line "Next: NURS 340 · Postpartum hemorrhage · Group B"
- debrief-room-1 · "Debrief Room 1" · meta "Debrief room · no cameras" · 0 cameras · state no-cameras · badge "Next 11:30" · line 1 "11:30 · NURS 310 · Group A debrief" · line 2 "5 learners"

events.js:
- nurs-310-sepsis · "NURS 310 · Sepsis recognition" · 10:00–11:00 · room sim-room-2 · group "Group A" · 5 learners · faculty Dr. Maya Ortiz · scenario "Sepsis recognition" · date label "Tue, Jan 19 · 10:00–11:00"
- nurs-340-pph · "NURS 340 · Postpartum hemorrhage" · 13:00–14:30 · rooms sim-room-1 and skills-lab-1 · group "Group B" · 6 learners

people.js, learner groups: "NURS 310 · Group A" (5 learners), "NURS 310 · Group B" (6 learners), "NURS 340 · Group B" (6 learners), "Paramedic intake 3" (12 learners).

checklist.js, "Sepsis recognition checklist", 7 items:
1 "Performs hand hygiene and introduces self"
2 "Takes a full set of vital signs"
3 "Recognizes SIRS criteria"
4 "Escalates the lactate result to the provider"
5 "Starts IV fluids as ordered"
6 "Draws blood cultures before antibiotics"
7 "Uses SBAR in the handoff"

STATE (core/state/store.js)
State: for each room, recording = null, or { startedAtLabel: "09:48", elapsedSeconds, eventId or null, groupLabel or null }.
Actions: startRecording(roomId, { eventId, groupLabel }), stopRecording(roomId), stopAll(), loadPreset(name).
A timer adds 1 to elapsedSeconds of every running recording each second.
Derived values (selectors, never stored): number of rooms recording, longest elapsed time, the Live subtitle, the badge of each room.

SCREENS
Figma file "IMSH-MVP". You have Figma access. Open every link below before you build its screen. The Figma frame is the source for layout, sizes, spacing and look. The texts below are the source for content and behaviour. If a frame and this prompt disagree, this prompt wins, and you list the difference in REPORT.md. If you cannot open a link, stop and tell me. Do not build that screen from the text alone.

0. Shell · Page
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1749-8657
Shows: the expanded side navigation (logo, institution, search, nav groups, Help, Settings, user row) and an empty content area with a breadcrumb and a page header. There is no top bar. Clickable: every nav item (Live opens /live, the others open their placeholder page). Help, the search field and the user row do nothing.

1. L2 · Live
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-9232
Shows: all four rooms as cards in a 2 × 2 grid, 24 px gap. No breadcrumb.
PageHeader: title "Live". Subtitle is built from state: "4 rooms · none recording · 1 needs attention". When N rooms record it reads "4 rooms · N recording · 1 needs attention". Actions: Button secondary "Select rooms" (visible, does nothing, hidden while any room records), Button primary "Start recording" (opens the sheet).
RoomCard, top to bottom: header row (room name in card title style, Badge on the right), meta line (muted), MediaPlaceholder about 140 px high, line 1 (body), line 2 (muted), actions row.
Card content by state:
- ready: Badge success "Ready". Placeholder "Live picture". Line 1 = the room's free line. Line 2 = the room's next line. Actions: primary "Start recording".
- needs-attention (Sim Room 2): Badge warning "Needs attention". Placeholder "Live picture". Line 1 "Next 10:00 · NURS 310 · Sepsis recognition". Line 2 "Dr. Maya Ortiz · Group A · 5 learners". Actions: primary "Start recording", secondary "Room devices" (does nothing).
- no-cameras (Debrief Room 1): Badge neutral "Next 11:30". Placeholder "No cameras in this room". Line 1 "11:30 · NURS 310 · Group A debrief". Line 2 "5 learners". Actions: secondary "Open event" (does nothing). This room can never record.
- recording: see screen 3.
Clickable: "Start recording" in the header opens the sheet with the first ready room selected (Sim Room 1). "Start recording" on a card opens the sheet with that room selected.

2. L3 · Start recording
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-18339
Shows: the Live page under a dim layer, with the Sheet open on the right.
Sheet header: title "Start recording", subtitle "Pick a room. Event, learners and scenario are optional."
Body, four blocks with 24 px between them:
- Block "Room": label "Room" on the left, muted "Ready rooms first" on the right. Three OptionCards, in this order: Sim Room 1, Sim Room 2, Skills Lab 1. Each shows the room name, the room's sheet line, and the room's current Badge. A room that is recording is disabled and shows its recording Badge. Under the list, muted: "Rooms without cameras are not listed."
- Block "Event": Select, label "Event", optionalTag, placeholder "Select an event", hint "Pick today's event to fill in learners and scenario." Options: the two events, shown as "10:00 · NURS 310 · Sepsis recognition" and "13:00 · NURS 340 · Postpartum hemorrhage".
- Block "Learners": Select, label "Learners", optionalTag, placeholder "Add learners or a group", hint "Search by name or email. You can add learners during or after the recording." Options: the four learner groups, shown as "NURS 310 · Group A · 5 learners" and so on.
- Block "Scenario": Select, label "Scenario", optionalTag, placeholder "Select a scenario", hint "Pick a scenario to open its checklist. You can also choose one later." Options: "Sepsis recognition", "Postpartum hemorrhage".
Footer: Button ghost "Cancel", Button primary "Start recording" (no icon).
Behaviour:
- Exactly one room is selected at a time.
- Picking the event "NURS 310 · Sepsis recognition" fills Learners with "NURS 310 · Group A · 5 learners" and Scenario with "Sepsis recognition". Picking the other event fills "NURS 340 · Group B · 6 learners" and "Postpartum hemorrhage".
- When the sheet opens for Sim Room 2, nothing is prefilled. The user picks the event.
- "Cancel", the close button, Escape and a click on the dim layer close the sheet and change nothing.
- "Start recording" in the footer: calls startRecording for the selected room with the chosen event and group, closes the sheet, and opens "/room/<roomId>".

3. L3c · 3 rooms recording
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-38638
Shows: the same Live page while rooms record. This is NOT a separate page or component. It is LivePage with other state.
Changes while at least one room records:
- Subtitle: "4 rooms · 3 recording · 1 needs attention" (the number follows the state).
- "Select rooms" is hidden. "Start recording" stays.
- A RecordingBanner between the PageHeader and the grid: a Card with 4 px vertical and 16 px horizontal padding. Left, card title style: "3 rooms recording · longest 02:14". With one room: "1 room recording · longest 00:05". Right: Button secondary "Manage" (does nothing), Button secondary "Stop all".
- A recording RoomCard: Badge error "Recording 02:14" (mm:ss, counts up every second). Placeholder "Live picture". With an event: line 1 = event name ("NURS 310 · Sepsis recognition"), line 2 "Started 09:48 · Group A · 5 learners". Without an event: line 1 "Ad hoc recording, no event yet", line 2 "Started 09:48 · no learners yet". Actions: primary "Open recording", secondary "Stop".
Clickable: "Open recording" opens "/room/<roomId>". "Stop" stops that room; it returns to its default state. "Stop all" stops every room. When no room records, the banner disappears.

4. L4 · Room view
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-40197
Shows: the room while it records. RoomViewShell: no top bar, navigation as a 48 px icon rail with no active item, Settings icon and avatar "MO" at the bottom of the rail. The frame is 1440 × 900. The header row below starts at the very top of the page.
The frame shows photos in the camera tiles. Do not use photos. Use MediaPlaceholder with the label "Live picture".
Header row (1 px bottom border): IconButton back arrow; title = the room name ("Sim Room 2", 16 px semibold); under it one muted 12 px line with three items, each with a small icon: door icon + event name "NURS 310 · Sepsis recognition", people icon + "Group A", calendar icon + "Tue, Jan 19 · 10:00–11:00". Right side: Button secondary "Layout & audio" (sliders icon), Button ghost "Report a problem" (flag icon), Button secondary "5 learners" (people icon, chevron down). These three do nothing.
Main area, two columns. Left column (flexible):
- Camera grid: one large tile on the left and two smaller tiles stacked on the right, 12 px gap. Each tile has a small white label in its top-left corner with a red dot: "Camera 1", "Camera 2", "Camera 3". Show this same three-tile layout for every room. This is a known mismatch with the camera count of the room. Do not fix it.
- Timeline row: Button danger-outline "Stop recording" with a red square icon; the elapsed time in a monospace font ("02:11", counts up); a ProgressBar (elapsed of 20 minutes); muted "Planned 20 min".
- Annotation row: TextInput with placeholder "Add an annotation…" that fills the row; Buttons secondary "Discuss" (message icon), "Good practice" (thumbs-up icon), "Marker" (flag icon). These do nothing.
- Intercom row, above it a 1 px border: muted label "Intercom" with a mic icon; SegmentedControl "In-room" (active), "Simulator", "Facilitator" (switching works, nothing else happens); Select with placeholder "Announcements" (no options needed); IconButton play; on the far right Button secondary "Hold to talk" (mic icon) and an IconButton chevron down.
Right column (about 380 px, 1 px left border): Tabs "Annotations", "Checklist" (active), "Chapters", "Transcript", and an IconButton "more" (three dots). Only "Checklist" has content. The other tabs can be selected and show the muted text "Not part of this prototype yet."
Checklist tab: a row with a small Select showing "All items · 7" on the left and a Button ghost "Ehli" with a sparkle icon on the right (does nothing). Then the title "Sepsis recognition checklist" (card title style). Then a row: muted "0 of 7 answered" on the left, an outlined pill "Saved 08:12" with a check-circle icon on the right. Then the 7 items: muted number, the item text, and two Buttons secondary "Yes" and "No".
Behaviour:
- "Yes" or "No" marks the item: the chosen button becomes primary. Clicking it again clears it. The counter follows: "3 of 7 answered". This state lives in the page and resets when you leave.
- Back arrow: goes to "/live". The recording keeps running.
- "Stop recording" (stand-in, not in Figma): stops this room's recording and goes to "/live".
- Ad hoc recording, no event (stand-in, not in Figma): the muted line under the title shows only "Ad hoc recording" with the door icon and "Tue, Jan 19" with the calendar icon. The learners button reads "No learners". The Checklist tab shows the muted text "No scenario selected." in place of the checklist.
- If "/room/<roomId>" opens for a room that is not recording, redirect to "/live".

PRESETS
A query parameter loads a fixed state, so I can compare with Figma. Read it from the hash part of the URL.
- "#/live?preset=l2"   nothing records, sheet closed.
- "#/live?preset=l3"   nothing records, the sheet is open with Sim Room 1 selected and all three Selects empty.
- "#/live?preset=l3c"  three rooms record: Sim Room 1 (02:14, ad hoc), Sim Room 2 (02:11, event nurs-310-sepsis, "Group A"), Skills Lab 1 (02:09, ad hoc). All started 09:48.
- "#/room/sim-room-2?preset=l4"  Sim Room 2 records at 02:11 with event nurs-310-sepsis.
With a preset in the URL the timers do not count. Without a preset the app starts in the l2 state and timers count.

CLICK PATH (must work)
1. Open the app. It shows Live with four rooms, none recording.
2. Click "Start recording" on the card of Skills Lab 1. The sheet opens with Skills Lab 1 selected.
3. Click "Start recording" in the sheet. The Room view opens with the title "Skills Lab 1" and "Ad hoc recording". The timer counts.
4. Click the back arrow. Live shows Skills Lab 1 with "Recording 00:0x", the banner "1 room recording · longest 00:0x", and the subtitle "4 rooms · 1 recording · 1 needs attention".
5. Click "Start recording" in the header. In the sheet Skills Lab 1 is disabled. Select Sim Room 2. Pick the event "10:00 · NURS 310 · Sepsis recognition". Learners and Scenario fill in. Click "Start recording". The Room view shows "Sim Room 2", the event line and the checklist.
6. Answer two checklist items. The counter reads "2 of 7 answered".
7. Click the back arrow. The banner reads "2 rooms recording · longest …". Click "Stop" on Skills Lab 1. It shows "Ready" again. Click "Stop all". The banner is gone and the subtitle reads "4 rooms · none recording · 1 needs attention".
8. Click "Rooms" in the side navigation. A placeholder page opens, "Rooms" is active in the navigation, and the same shell is around it. Click "Live" to return.

DO NOT BUILD
- The Today, Notifications, Events, Recordings, Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists and Settings pages. They are placeholders only.
- Selecting several rooms ("Select rooms"), the selection bar, the "Record 3 rooms" sheet.
- Login, user menu, search behaviour and search results, notifications, help.
- The global recording banner above the whole app (Figma frames B1 and B2). A later module adds it into the empty AppShell slot.
- Real video, real audio, a real intercom, any device access (no camera or microphone permission).
- A backend, an API, a database, saved data.
- Dark mode, mobile layout, translations, animations beyond a 150 ms fade or slide for the sheet.
- Tests, Storybook, linters, a build step, a package.json.
- A component demo page.

DELIVERY
- The app is in the preview of this task, ready to click through and to download. Do not publish it and do not create a link.
- README.md: the folder map, and a section "How to add a module" in at most 10 lines.
- REPORT.md with these headings:
  "Built" (screens and components),
  "Not specified" (everything you had to decide, one line each),
  "Differences from Figma" (one line each),
  "Could not do" (one line each, or "Nothing"),
  "Self-check" (each line of the list below with pass or fail).
- In your last message, do not suggest publishing, a pplx.app link or Vercel.

SELF-CHECK (run it before you finish; fix what fails; report honestly)
1. The app works in the preview. It also works when index.html is opened from disk with file://. No script has type="module". No file uses import, export or fetch.
2. All eight steps of CLICK PATH work. During step 5 the open sheet stays open while the timer of the other room counts.
3. The four PRESETS URLs load the right state.
4. Search modules/ for "button", "<a", "'a'", "nav", "select", "input", "dialog" used as an element to create: 0 hits.
5. Search all .css files except tokens.css for "#" colour values and "rgb(": 0 hits.
6. Search modules/, core/components/ and core/shell/ for "Sim Room", "NURS", "Riverbend", "Maya": 0 hits. These strings exist only in core/data/ and in presets.js.
7. The side navigation exists once (core/shell/side-nav.js). Both modes (expanded, rail) render from nav.js. No screen has a top bar. Logo, institution name, search, Help, Settings and the user row are inside the side navigation.
8. The Live page is one function. There is no separate page or component for the "3 rooms recording" state.
9. Search all files for "googleapis", "gstatic", "cdn", "http://", "https://": the only hits are the SVG namespace string and README.md.
10. Search the UI texts for "OpSpace", "SRV", "Center overview", "Video review", "Dashboard": 0 hits. "Essentials" appears only in logo.js.
11. Nothing in core/ uses a name that modules/ defines.
12. Adding a folder modules/<x>/ with a module.js, plus its script tag in the MODULES block, adds its routes with no edit in core/. Say in the report how you checked this.
```

## After the run

- Daniel judges with the list above. If it passes, the next prompt is a module prompt: "here is the repository zip, add `modules/rooms/` (L7, L8, L9), do not edit `core`, list core change requests in the report".
- A good second module is the global Recording banner (B1 `1767:16449`, B2 `1767:17142`, Section "6 · Recording banner" `1767:16448`): it is small, it reuses the recording state of this test, and it fills the empty AppShell slot.
- The download stays on disk. Never on a public host.
