#!/usr/bin/env node
// Module-local post-processing for 09-announcements-send-materials. The shared pipeline scripts
// (userflow-patterns--user-mgmt/inspiration/scripts) must not be edited, and merge-references.mjs
// hard-codes the previous module's header, so:
//   node post.mjs header     -> overwrite module/title/intro/questions in references.json from references.stub.json
//                               (keeps any non-empty answers already present in references.json)
//   node post.mjs synthesis <built.html> <synthesis.html>  -> insert the synthesis fragment right after </header>
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const [cmd, a, b] = process.argv.slice(2);

if (cmd === 'header') {
  const refsPath = path.join(here, 'references.json');
  const stub = JSON.parse(await readFile(path.join(here, 'references.stub.json'), 'utf8'));
  const refs = JSON.parse(await readFile(refsPath, 'utf8'));
  const existing = new Map((refs.questions || []).map(q => [q.id, q.answer || '']));
  const doc = {
    module: stub.module,
    title: stub.title,
    intro: stub.intro,
    questions: stub.questions.map(q => ({ id: q.id, title: q.title, answer: existing.get(q.id) || q.answer || '' })),
    references: refs.references,
  };
  await writeFile(refsPath, JSON.stringify(doc, null, 2) + '\n');
  console.log(`header patched: ${doc.module}, ${doc.questions.length} questions, ${doc.references.length} references`);
} else if (cmd === 'synthesis') {
  const html = await readFile(a, 'utf8');
  const frag = await readFile(b, 'utf8');
  const marker = '</header>';
  const i = html.indexOf(marker);
  if (i < 0) throw new Error('no </header> in built html');
  const clean = html.replace(/<!--synthesis:start-->[\s\S]*?<!--synthesis:end-->/, '');
  const j = clean.indexOf(marker) + marker.length;
  const out = clean.slice(0, j) + '\n<!--synthesis:start-->\n' + frag.trim() + '\n<!--synthesis:end-->\n' + clean.slice(j);
  await writeFile(a, out);
  console.log(`synthesis inserted into ${a} (${(out.length / 1048576).toFixed(1)} MB)`);
} else {
  console.error('usage: node post.mjs header | synthesis <built.html> <synthesis.html>');
  process.exit(1);
}
