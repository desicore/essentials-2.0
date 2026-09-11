import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));
const data=await read('references.json'),plan=await read('board-plan.json'),assets=(await read('assets/metadata.json')).assets;
const html=await fs.readFile(path.join(root,'report.html'),'utf8');
const assert=(test,msg)=>{if(!test)throw Error(msg)};
assert(data.questions.length===6,'Expected six questions');assert(plan.destination.fileKey==='tN2AM7RZD2InF1LYnN0zcn'&&plan.destination.pageId==='5:422','Incorrect destination');
assert(data.references.length===plan.rows.length,'Plan reference mismatch');
assert((html.match(/<article class="card"/g)||[]).length===data.references.length,'HTML reference mismatch');
assert((html.match(/<img src="data:image\//g)||[]).length===assets.filter(a=>a.status==='available').length,'Embedded image count mismatch');
assert(!/<img src="https?:/i.test(html),'Report unexpectedly hotlinks image');
assert(html.includes('Documentation evidence — no product screenshot'),'Missing explicit docs block');
for(const s of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(s[1]);
for(const r of data.references){
 assert(r.observed&&r.adaptation&&r.limitation&&r.actor&&r.evidenceType,'Missing evidence metadata: '+r.id);
 assert(r.steps.length===r.images.length,'Image/step count mismatch: '+r.id);
 const row=plan.rows.find(x=>x.id===r.id);assert(row.selectedStepIndices.length<=8,'Too many board steps: '+r.id);
 assert(row.selectedStepIndices.every((n,i,a)=>i===0||n>a[i-1]),'Board sequence order: '+r.id);
 if(r.images.length)assert(row.selectedStepIndices.includes(r.images.length-1),'Final state omitted: '+r.id);
 for(const im of row.images){const m=assets.find(x=>x.referenceId===r.id&&x.index===im.i);assert(Math.abs(im.h-im.w*m.height/m.width)<1,'Aspect ratio changed: '+r.id);}
}
for(let i=0;i<plan.sections.length;i++){
 const section=plan.sections[i];if(i)assert(section.x>=plan.sections[i-1].x+plan.sections[i-1].width,'Section overlap');
 const rows=plan.rows.filter(r=>r.question===section.id);for(let j=1;j<rows.length;j++)assert(rows[j].y>=rows[j-1].y+rows[j-1].h,'Row overlap');
 assert(rows.every(r=>r.y+r.h<section.height),'Row beyond section bounds');
}
const old=JSON.parse(await fs.readFile(path.join(root,'../access-sharing/references.json'),'utf8'));
const reused=data.references.filter(r=>old.references.some(o=>o.id===r.id));
let parentQA;try{parentQA=await read('evidence/parent-verification.json')}catch{}
const result={validatedAt:new Date().toISOString(),staticChecks:'passed',uiChecks:parentQA?.status==='passed'?{status:'passed',source:'evidence/parent-verification.json',checks:parentQA.uiChecks}: 'pending separate browser inspection',references:data.references.length,images:assets.filter(a=>a.status==='available').length,plannedBoardImages:plan.rows.reduce((n,r)=>n+r.images.length,0),reportBytes:Buffer.byteLength(html),page1RepeatedIds:reused.map(r=>({id:r.id,newRelevance:r.reuseRationale||r.reuse_rationale||null}))};
await fs.writeFile(path.join(root,'verification.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
