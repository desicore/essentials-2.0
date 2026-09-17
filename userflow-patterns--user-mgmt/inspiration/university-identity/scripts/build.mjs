/** Isolated university-identity merger, local asset verifier and Page 2 planner. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=async name=>JSON.parse(await fs.readFile(path.join(root,name),'utf8'));
const write=async(name,value)=>fs.writeFile(path.join(root,name),JSON.stringify(value,null,2)+'\n');
const inputs=['documentation-references.json','library-references.json'];
try{await fs.access(path.join(root,'mobbin-references.json'));inputs.push('mobbin-references.json')}catch{}
const refs=[]; for(const input of inputs){const data=await read(input);refs.push(...(Array.isArray(data)?data:data.references));}
const seen=new Set();for(const r of refs){if(seen.has(r.id))throw Error('Duplicate reference '+r.id);seen.add(r.id);if(!['mobbin','refero','documentation'].includes(r.source))throw Error('Invalid source '+r.id);if(!/^https?:\/\//.test(r.url))throw Error('Source link required '+r.id);}
refs.sort((a,b)=>a.question.localeCompare(b.question)||((a.source==='documentation')-(b.source==='documentation')));
const questions=[
{ id:'Q1', title:'How does university IT connect and scope institutional identity?', answer:'Separate the IT connection task from everyday user administration. Configuration guidance, attribute mapping, scoped groups and a dry run make the intended population and data transfer reviewable before enabling provisioning.',openQuestions:['Which identity systems and LDAP/Active Directory environments do participating universities operate?','Who owns the connection, and which groups and attributes may LearningSpace receive?','Is access assigned separately from account creation?']},
{ id:'Q2', title:'How do existing university users arrive and link to the right account?', answer:'Treat institutional sign-in, creating a user record and linking an existing record as distinct events. Establish a durable institutional identifier and make mismatches recoverable. A successful login can still leave a person without application or course access.',openQuestions:['Which immutable identifier survives email and affiliation changes?','What evidence permits linking an existing local account? Who resolves collisions?','What separate route should guests and external faculty use?']},
{ id:'Q3', title:'How are externally managed people, groups, and permissions represented?', answer:'Expose the source of managed fields and group membership, and explain where changes must be made. Keep course roles scoped to their course; an imported teacher role is not institutional administrator authority.',openQuestions:['Which fields and permissions can administrators override locally?','Can a person be faculty in one course and a learner in another?','How will the interface explain effective access from multiple sources?']},
{ id:'Q4', title:'What happens when users or connections change?', answer:'Show connection health and per-record outcomes separately. A failed sync is not evidence that users departed. Guard unusually large removals and distinguish suspending access, removing membership and deleting records.',openQuestions:['What grace period and escalation route apply when provisioning fails?','What happens to recordings, history and audit trails when someone leaves?','Can returning users recover the same identity and course history?']},
{ id:'Q5', title:'How can administrators safely import and update users in bulk?', answer:'Use the Canvas Provisioning export as a concrete data-source scenario, then separate upload, mapping, validation, preview and completion. Repeat imports need stable identifiers and explicit update rules. A file import remains a snapshot until a separate recurring process exists.',openQuestions:['Who may export from Canvas and import into LearningSpace?','Which identifiers are available, and how will rows match existing accounts?','Should valid rows proceed when other rows fail, and what downloadable error report is required?']},
{ id:'Q6', title:'How can Canvas complement university identity without creating duplicate users?', answer:'Canvas roster mechanisms establish a feasible membership source, subject to institution configuration and authorization. Match roster identities to existing users before applying course-scoped roles and enrollment changes.',openQuestions:['Which Canvas integration and permissions are available at each institution?','How do Canvas identifiers map to the university identifier?','Who controls identity, course membership, role overrides and retained history when sources disagree?']}
];
const gaps=[
'Library coverage is thin for actual LDAP setup, identifier collisions, externally managed fields and sync failures. Official documentation supplies technical evidence; screenshots of analogous SaaS interactions do not establish LearningSpace behavior.',
'No available screenshot or API establishes institutional permission to share personal data. Validate purpose, fields, roles, retention and operational responsibilities with university IT.',
'Guest identity, changed institutional identifiers, person merges and effective access across multiple courses require institution-specific validation.',
'Board sequences may select at most eight original steps. The report retains every collected step, including end states; documented omissions are in board-plan.json.'
];
const notes=await fs.readFile(path.join(root,'research-notes.md'),'utf8');
const priorityITQuestions=(notes.split('## Priority university IT interview questions')[1]||'').split('## ')[0].split('\n').filter(line=>/^\d+\. /.test(line)).map(line=>line.replace(/^\d+\. /,''));
const data={priorityITQuestions,module:'university-identity',title:'University identity, directory sync & user import',intro:'Internal evidence collection for Essentials 2.0 / LearningSpace. Directory-first research into university-managed identity, provisioning and recovery, with Canvas as a complementary course-membership source and CSV/manual routes for institutional exceptions. Product screenshots are observed examples or analogies; official documentation establishes specific technical behavior. All adaptations are proposals to validate.',questions,references:refs,gaps,accessedAt:'2026-09-08',destination:{fileKey:'tN2AM7RZD2InF1LYnN0zcn',pageId:'5:422'}};
const manifest={},metadata=[];
for(const r of refs){
 r.images??=[];r.selected??=false;r.counter_example??=false;r.kind??=r.images.length>1?'flow':'screen';r.evidenceType??=r.evidence_type || (r.source==='documentation'?'documentation':'analogy');r.accessedAt??=r.access_date || '2026-09-08';
 const locals=r.localAssets || r.local_assets || r.assetPaths || [];
 manifest[r.id]=[];
 for(let i=0;i<r.images.length;i++){
  const entry=locals[i];let rel=typeof entry==='string'?entry:entry?.path || entry?.localPath;
  if(!rel){manifest[r.id].push(null);metadata.push({referenceId:r.id,index:i,sourceUrl:r.images[i],status:'missing',reason:'No local asset collected'});continue;}
  const candidates=path.isAbsolute(rel)?[rel]:[path.resolve(root,rel),path.resolve(root,'assets',rel)];let file;
  for(const c of candidates)try{await fs.access(c);file=c;break;}catch{}
  if(!file)throw Error('Missing stated local asset '+rel+' for '+r.id);
  if(!file.startsWith(root+path.sep))throw Error('Assets must remain under university-identity: '+file);
  const b=await fs.readFile(file);const m=await sharp(b).metadata();if(!m.width||!m.height)throw Error('Image dimensions unavailable '+file);
  manifest[r.id].push(path.relative(path.join(root,'assets'),file));
  metadata.push({referenceId:r.id,index:i,stepId:r.steps?.[i]?.id || String(i),sourceStepIndex:r.steps?.[i]?.source_step_index ?? i,path:path.relative(root,file),sourceUrl:r.images[i],width:m.width,height:m.height,format:m.format,bytes:b.length,sha256:createHash('sha256').update(b).digest('hex'),status:'available'});
 }
}
await fs.mkdir(path.join(root,'assets'),{recursive:true});await write('references.json',data);await write('assets/manifest.json',manifest);await write('assets/metadata.json',{generatedAt:new Date().toISOString(),pathBase:'inspiration/university-identity',assets:metadata});
// Page-local geometry: six tall sections spread horizontally. No speculative node IDs.
const PAD=60,STICKY_W=280,STICKY_H=240,IMG_X=620,IMG_W=280,IMG_GAP=16,LABEL_H=74,ROW_GAP=80,TOP=500;
const rows=[],sections=[],all=[];let sectionX=0;
for(const q of questions){let y=TOP,maxWidth=2300;
 for(const r of refs.filter(r=>r.question===q.id)){
  const total=r.images.length;
  const selected=r.boardStepIndices || r.board_step_indices || (total<=8?Array.from({length:total},(_,i)=>i):[0,1,2,3,4,5,6,total-1]);
  if(selected.length>8||selected.some((n,i)=>!Number.isInteger(n)||n<0||n>=total||(i>0&&n<=selected[i-1])))throw Error('Invalid board step selection '+r.id);
  const omitted=Array.from({length:total},(_,i)=>i).filter(i=>!selected.includes(i));
  const row={ri:rows.length,id:r.id,question:q.id,sectionId:null,y,app:r.app,source:r.source,evidenceType:r.evidenceType,actor:r.actor,observed:r.observed || r.observed_behavior,adaptation:r.adaptation || r.proposed_adaptation,limitation:r.limitation || r.limitations,title:r.title,url:r.url,kind:r.kind,take:r.take,stickyText:r.sticky || r.stickyText || r.take,counter:!!r.counter_example,stickyColor:r.counter_example?'#FFB8A8':'#A8DAFF',totalImages:total,selectedStepIndices:selected,omittedStepIndices:omitted,sequenceNote:omitted.length?`Selected ${selected.length} of ${total} steps; omitted original step(s) ${omitted.map(i=>i+1).join(', ')}. Complete sequence: report.html#${r.id}`:total?(r.source==='documentation'?`${total} selected official documentation illustration(s); not a live product session.`:`Complete collected sequence: ${total} step(s).`):'Documentation evidence — no product screenshot.',images:[],reportAnchor:`report.html#${r.id}`,reportPathLabel:`inspiration/university-identity/report.html — reference ${r.id}`,h:STICKY_H};
  let x=IMG_X;
  for(const i of selected){const m=metadata.find(m=>m.referenceId===r.id&&m.index===i);if(m?.status!=='available')continue;const override=r.boardImageOverrides?.[i] || {};const w=override.width || IMG_W;if(!Number.isFinite(w)||w<=0)throw Error('Invalid board image width '+r.id+'#'+i);const h=Math.round(w*m.height/m.width);const im={i,originalStepIndex:i,stepId:r.steps?.[i]?.id || String(i),label:override.label || r.steps?.[i]?.label || r.steps?.[i]?.title || `Step ${i+1}`,path:path.resolve(root,m.path),relativePath:m.path,x,y:y+LABEL_H,w,h};row.images.push(im);all.push({name:`r${row.ri}_i${i}${path.extname(m.path)}`,src:im.path,ri:row.ri,i});x+=w+IMG_GAP;row.h=Math.max(row.h,h+LABEL_H+48);}
  maxWidth=Math.max(maxWidth,x+PAD);rows.push(row);y+=row.h+ROW_GAP;
 }
 sections.push({id:q.id,nodeId:null,title:q.title,answer:q.answer,openQuestions:q.openQuestions,x:sectionX,y:600,width:maxWidth,height:y+380});sectionX+=maxWidth+180;
}
const batches=[];for(let i=0;i<all.length;i+=50)batches.push(all.slice(i,i+50));
await write('board-plan.json',{destination:data.destination,status:'planned',introduction:data.intro,ownershipHypothesis:'University identity infrastructure supplies institutional identity and sign-in; Canvas supplies relevant course memberships and roles; LearningSpace controls local access rules, guests and product-specific information. Validate with university IT.',synthesis:{patterns:questions.map(q=>q.answer),gaps,questionsForIT:priorityITQuestions},layout:{PAD,STICKY_W,STICKY_H,IMG_X,IMG_W,IMG_GAP,LABEL_H,ROW_GAP,TOP},sections,sectionHeights:Object.fromEntries(sections.map(s=>[s.id,s.height])),rows,batches});
// Existing placement map is authoritative and never overwritten by a rebuild.
try{await fs.access(path.join(root,'figjam/node-map.json'));}catch{await write('figjam/node-map.json',{destination:data.destination,status:'pending',verified:false,sections:{},references:{},placedReferenceCount:0,placedImageCount:0});}
const child=spawnSync(process.execPath,[path.join(root,'scripts/build-report.mjs'),path.join(root,'references.json'),'--out',path.join(root,'report.html'),'--embed','--assets',path.join(root,'assets/manifest.json')],{stdio:'inherit'});if(child.status)process.exit(child.status);
console.log(JSON.stringify({references:refs.length,images:rereadCount(),availableImages:metadata.filter(m=>m.status==='available').length,plannedBoardImages:all.length,questions:questions.map(q=>({id:q.id,references:refs.filter(r=>r.question===q.id).length}))},null,2));
function rereadCount(){return refs.reduce((s,r)=>s+r.images.length,0)}
