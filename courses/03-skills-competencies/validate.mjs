import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const doc=JSON.parse(fs.readFileSync(path.join(dir,'references.json'),'utf8'));
const stub=JSON.parse(fs.readFileSync(path.join(dir,'references.stub.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(dir,'assets/manifest.json'),'utf8'));
const failures=[];const ids=new Set();const groups=new Map();
if(JSON.stringify(doc.questions.map(q=>[q.id,q.title]))!==JSON.stringify(stub.questions.map(q=>[q.id,q.title])))failures.push('Question titles differ from prompt');
for(const q of doc.questions)if(!q.answer?.trim())failures.push(q.id+' missing answer');
for(const r of doc.references){
 if(ids.has(r.id))failures.push('Duplicate '+r.id);ids.add(r.id);
 if(r.selected!==false)failures.push('Selected '+r.id);
 if(!r.take||!r.images.length||r.images.length>8)failures.push('Incomplete '+r.id);
 const key=r.app.toLowerCase()+'|'+r.question;const sources=groups.get(key)||new Set();sources.add(r.source);groups.set(key,sources);
 for(let i=0;i<r.images.length;i++)if(!manifest[r.id]?.[i]||!fs.existsSync(path.join(dir,'assets',manifest[r.id][i])))failures.push('Missing image '+r.id+'#'+i);
}
for(const [key,sources]of groups)if(sources.size>1)failures.push('Multiple sources '+key);
const synthesis=fs.readFileSync(path.join(dir,'synthesis.html'),'utf8');
for(const [,id] of synthesis.matchAll(/href="#((?:mobbin|refero):[^"]+)"/g))if(!ids.has(id))failures.push('Bad synthesis ref '+id);
const counters=doc.references.filter(r=>r.counter_example).length;
if(counters<1||counters>3)failures.push('Counter-example count '+counters);
if(failures.length)throw Error(failures.join('\n'));
console.log(JSON.stringify({references:ids.size,products:new Set(doc.references.map(r=>r.app)).size,counters,questions:doc.questions.length,valid:true}));
