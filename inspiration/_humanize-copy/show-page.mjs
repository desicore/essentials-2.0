// Prints the visible text of a built page, one block per line, numbered like verify.mjs phase2 --details.
// Usage: node show-page.mjs <page.html> [from] [to]
import fs from 'node:fs';
import { visibleBlocks } from './verify-phase2.mjs';

const [file, from = 1, to = Infinity] = process.argv.slice(2);
if (!file) { console.error('Usage: node show-page.mjs <page.html> [from] [to]'); process.exit(2); }
visibleBlocks(fs.readFileSync(file, 'utf8')).forEach((b, i) => { if (i + 1 >= +from && i + 1 <= +to) console.log(`${i + 1}: ${b}`); });
