#!/usr/bin/env node
// Cut pass for 09-announcements-send-materials (run after merge + `post.mjs header`).
// Drops references that are off-topic for course communication, duplicates within one source
// (screen when a flow of the same product/question exists), and generic chat read receipts.
// Usage: node cut.mjs   (rewrites references.json in place; prints counts)
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(here, 'references.json');
const doc = JSON.parse(await readFile(file, 'utf8'));

// [question, app, kind|'*'] tuples to drop (Mobbin side; Refero side is cleaned in refero.json itself)
const DROP = [
  ['Q1', 'Confluence', 'screen'],   // keep the Confluence flow
  ['Q1', 'Slack', 'screen'],        // keep the Slack flow
  ['Q1', 'Substack', 'screen'],     // Substack is better represented in Q2
  ['Q1', 'Dialpad', '*'],           // phone/SMS scheduling; Slack covers it
  ['Q2', 'TikTok', '*'],            // social cross-posting, not course communication
  ['Q3', 'Dropbox', 'screen'],      // keep the Dropbox flow
  ['Q3', 'Salesforce', '*'],        // CRM data share; Proton/Mural/Dropbox cover the controls
  ['Q3', 'Craft', '*'],             // invite dialog, no link controls
  ['Q4', 'beehiiv', '*'],           // beehiiv kept in Q2; Mailchimp/HubSpot/Outseta cover Q4
  ['Q4', 'Klaviyo', '*'],           // duplicate of HubSpot/Mailchimp campaign analytics
  ['Q4', 'Mercury', '*'],           // invoice reminders; Navan/Docusign cover the pattern
  ['Q4', 'Superhuman Mail', 'flow'],// keep the read-status screen
  ['Q4', 'Badoo', '*'],             // generic chat read receipt; WhatsApp is the representative
  ['Q4', 'Telegram', '*'],
  ['Q4', 'LINE', '*'],
  ['Q6', 'Future Pro', '*'],        // event timeline, not course announcements
  ['Q6', 'Preply', '*'],            // 1:1 tutoring chat
];

const norm = s => (s || '').toLowerCase().trim();
const shouldDrop = r => DROP.some(([q, app, kind]) => r.question === q && norm(r.app) === norm(app) && (kind === '*' || r.kind === kind));
const before = doc.references.length;
const dropped = doc.references.filter(shouldDrop).map(r => `${r.question} ${r.app} ${r.kind}`);
doc.references = doc.references.filter(r => !shouldDrop(r));
// Cap flows at 8 images (report-size rule): keep first 8 steps.
for (const r of doc.references) if (r.kind === 'flow' && r.images.length > 8) r.images = r.images.slice(0, 8);
await writeFile(file, JSON.stringify(doc, null, 2) + '\n');
const counts = {}; for (const r of doc.references) counts[r.question] = (counts[r.question] || 0) + 1;
const products = new Set(doc.references.map(r => norm(r.app)));
console.log(JSON.stringify({ before, after: doc.references.length, counts, products: products.size, dropped }, null, 0));
