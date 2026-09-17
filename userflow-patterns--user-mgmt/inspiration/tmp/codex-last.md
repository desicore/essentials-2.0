Implemented without committing. Protected files are unchanged.

Files added:

- Root: `README.md`, `.gitignore`, `package.json`, `package-lock.json`
- `inspiration/schema.md`
- `inspiration/access-sharing/references.stub.json`
- `inspiration/scripts/`: `build-report.mjs`, `fetch-assets.mjs`, `crop.mjs`, `shared.mjs`

Run from the repo root:

```sh
npm install
references=inspiration/access-sharing/references.stub.json

npm run build-report -- "$references" --out inspiration/tmp/report.html
npm run build-report -- "$references" --out inspiration/tmp/report-embedded.html --embed
npm run fetch-assets -- "$references" --out inspiration/tmp/assets
npm run crop -- "$references" --assets inspiration/tmp/assets --out inspiration/tmp/cropped
```

Verified both report modes, five image downloads, five cache skips, a 400 × 300 crop, and DOM tests for filters, counts, reset, escaping, and missing fields.

Open the [embedded report](/Users/danielbrassnyo/Documents/dev-projects/elevate/essentials-2.0/inspiration/tmp/report-embedded.html).

Caveats: Sharp requires Node 20.9+. Images must be publicly fetchable; stub photographs are placeholders. Browser launch was blocked by the environment, so visual layout and native lightbox behavior remain unverified.