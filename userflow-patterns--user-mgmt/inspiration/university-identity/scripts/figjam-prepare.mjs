// Generate reviewable use_figma calls; this program never calls Figma.
import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const plan=JSON.parse(await fs.readFile(path.join(root,'board-plan.json'),'utf8'));
if(plan.destination.fileKey!=='tN2AM7RZD2InF1LYnN0zcn'||plan.destination.pageId!=='5:422')throw Error('Unexpected destination');
const out=path.join(root,'figjam/generated-compact');await fs.mkdir(out,{recursive:true});
const prefix='UIID/2026-09-08/';
const prelude=`const FILE_KEY = 'tN2AM7RZD2InF1LYnN0zcn', PAGE_ID = '5:422', PREFIX = '${prefix}';
if (figma.fileKey && figma.fileKey !== FILE_KEY) throw new Error('Wrong Figma file');
if (figma.editorType !== 'figjam') throw new Error('Expected existing FigJam board');
const page = await figma.getNodeByIdAsync(PAGE_ID);
if (!page || page.type !== 'PAGE') throw new Error('Required Page 2 is unavailable; do not create a substitute');
await figma.setCurrentPageAsync(page);
const SECTION_NAMES = ${JSON.stringify(Object.fromEntries(plan.sections.map(q=>[q.id,q.id+' · '+q.title])))};
const INTRO_NAME = 'University identity · Overview';
function ownedSection(id) {
 const matches=page.children.filter(n=>n.type==='SECTION' && (n.name===PREFIX+'section/'+id || n.name===SECTION_NAMES[id] || n.children.some(c=>c.name===PREFIX+id+'/heading')));
 if(matches.length>1)throw new Error('Duplicate research sections for '+id+'; inspect before continuing');return matches[0];
}
function ownedIntro() {
 const matches=page.children.filter(n=>n.type==='SECTION' && (n.name===PREFIX+'introduction' || n.name===INTRO_NAME || n.children.some(c=>c.name===PREFIX+'intro/title')));
 if(matches.length>1)throw new Error('Duplicate research overview; inspect before continuing');return matches[0];
}
function researchTop(n){return n.name.startsWith(PREFIX) || (n.type==='SECTION' && (Object.values(SECTION_NAMES).includes(n.name) || n.name===INTRO_NAME || n.children.some(c=>c.name.startsWith(PREFIX))));}
`;
const runtime=`
const createdNodeIds = [], mutatedNodeIds = [], sectionRecords = [], referenceRecords = [], imageTargets = [];
const fontList = await figma.listAvailableFontsAsync();
const font = fontList.find(f => f.fontName.family === 'Inter' && f.fontName.style === 'Regular')?.fontName;
if (!font) throw new Error('Inter Regular unavailable; inspect fonts before proceeding');
await figma.loadFontAsync(font);
const charcoal = {r:0x1E/255,g:0x1E/255,b:0x1E/255};
function existing(parent,name,type) { const found = parent.children.filter(n => n.name === name); if(found.length > 1) throw new Error('Duplicate research nodes; inspect before resuming: '+name); if(found[0] && found[0].type !== type) throw new Error('Node type changed: '+name); return found[0]; }
function affected(n,fresh) { (fresh ? createdNodeIds : mutatedNodeIds).push(n.id); }
async function text(parent,key,characters,x,y,width,size=16,url) {
 const name = PREFIX+key; let n=existing(parent,name,'TEXT'),fresh=!n; if(!n)n=figma.createText();
 if(!fresh){const segments=n.getStyledTextSegments(['fontName']);for(const s of segments)await figma.loadFontAsync(s.fontName);}else await figma.loadFontAsync(n.fontName);
 n.fontName=font;n.fontSize=size;n.characters=characters;n.fills=[{type:'SOLID',color:charcoal}];n.textAutoResize='HEIGHT';n.resize(width,Math.max(n.height,1));n.name=name;
 if(url && characters.length)n.setRangeHyperlink(0,characters.length,{type:'URL',value:url});
 parent.appendChild(n);n.x=x;n.y=y;affected(n,fresh);return n;
}
const first=ownedSection('Q1');
const foreign=page.children.filter(n=>!researchTop(n));
const anchorX=first ? first.x : Math.max(600,...foreign.map(n=>n.x+n.width+600));
const anchorY=first ? first.y-600 : 600;
const sections = PLAN.sections;
async function section(q) {
 let s=ownedSection(q.id),fresh=!s;if(!s)s=figma.createSection();s.name=SECTION_NAMES[q.id];s.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];page.appendChild(s);s.x=anchorX+q.x;s.y=anchorY+q.y;s.resize(q.width,Math.max(q.height,s.height));affected(s,fresh);
 const title=await text(s,q.id+'/heading',q.id+' — '+q.title,60,60,q.width-120,40);
 const synthesis=await text(s,q.id+'/synthesis','Section synthesis: '+q.answer,60,title.y+title.height+30,q.width-120,24);
 const questions=await text(s,q.id+'/questions','Open questions: '+q.openQuestions.join(' '),60,synthesis.y+synthesis.height+22,q.width-120,16);
 sectionRecords.push({question:q.id,nodeId:s.id,headingNodeId:title.id,synthesisNodeId:synthesis.id,questionsNodeId:questions.id,x:s.x,y:s.y,width:s.width,height:s.height});return {node:s,startY:Math.max(500,questions.y+questions.height+80)};
}
async function row(parent,r,y) {
 const key='reference/'+r.id;let sticky=existing(parent,PREFIX+key+'/sticky','STICKY'),fresh=!sticky;if(!sticky)sticky=figma.createSticky();
 await figma.loadFontAsync(sticky.text.fontName);sticky.name=PREFIX+key+'/sticky';sticky.text.characters=r.app+'\\n'+r.stickyText;sticky.authorVisible=false;sticky.isWideWidth=false;sticky.fills=[{type:'SOLID',color:r.counter?{r:0xFF/255,g:0xB8/255,b:0xA8/255}:{r:0xA8/255,g:0xDA/255,b:0xFF/255}}];parent.appendChild(sticky);sticky.x=60;sticky.y=y;affected(sticky,fresh);
 const label=await text(parent,key+'/source',r.app+' · '+r.title+'\\n'+r.source+' · '+r.evidenceType,620,y,parent.width-680,20,r.url);
 const context=await text(parent,key+'/context','Actor: '+r.actor+'\\nEvidence: '+r.evidenceType+'\\nLimitation: '+r.limitation,330,y,250,16);
 let bottom=Math.max(sticky.y+sticky.height,context.y+context.height,label.y+label.height);
 const targets=[];
 for(const im of r.images){
  const name=PREFIX+key+'/image/'+im.i;let target=existing(parent,name,'SHAPE_WITH_TEXT'),newTarget=!target;if(!target)target=figma.createShapeWithText();await figma.loadFontAsync(target.text.fontName);target.text.characters='';target.name=name;target.shapeType='SQUARE';
  if(newTarget){target.fills=[{type:'SOLID',color:{r:0xED/255,g:0xED/255,b:0xED/255}}];target.strokes=[];}
  parent.appendChild(target);target.resize(im.w,im.h);target.x=im.x;target.y=label.y+label.height+24;affected(target,newTarget);
  const caption=await text(parent,key+'/caption/'+im.i,(r.source==='documentation'?'Illustration ':'Step ')+(im.i+1)+' of '+r.totalImages+' · '+im.label,im.x,target.y+im.h+10,im.w,16);
  bottom=Math.max(bottom,caption.y+caption.height);const rec={referenceId:r.id,index:im.i,nodeId:target.id,relativePath:im.relativePath,width:im.w,height:im.h,captionNodeId:caption.id,x:target.x,y:target.y};imageTargets.push(rec);targets.push(rec);
 }
 if(!r.images.length){const doc=await text(parent,key+'/documentation','Documentation evidence — no product screenshot.\\nDocumented: '+r.observed+'\\nPossible adaptation: '+r.adaptation,620,label.y+label.height+24,parent.width-680,20);bottom=Math.max(bottom,doc.y+doc.height);}
 const pointer=await text(parent,key+'/report',r.sequenceNote+'\\n'+r.reportPathLabel,620,bottom+24,parent.width-680,16);bottom=pointer.y+pointer.height;
 referenceRecords.push({id:r.id,question:r.question,sectionId:parent.id,stickyNodeId:sticky.id,sourceNodeId:label.id,contextNodeId:context.id,reportNodeId:pointer.id,y,height:bottom-y,images:targets,status:'targets_created',selectedStepIndices:r.selectedStepIndices,omittedStepIndices:r.omittedStepIndices});return bottom+80;
}
`;
const emit=async(name,code)=>{if(process.argv[2] && process.argv[2]!==name)return;if(code.length>49000)throw Error('use_figma code exceeds safe 49000-character limit: '+name);new vm.Script('(async function(){\n'+code+'\n})');await fs.writeFile(path.join(out,name+'.js'),code+'\n');await fs.writeFile(path.join(out,name+'.request.json'),JSON.stringify({fileKey:plan.destination.fileKey,skillNames:'figma-use,figma-use-figjam',description:name.replaceAll('-',' '),code},null,2)+'\n');};
await emit('00-inspect-page2',prelude+`return {fileKey:FILE_KEY,pageId:page.id,topLevel:page.children.map(n=>({id:n.id,name:n.name,type:n.type,x:n.x,y:n.y,width:n.width,height:n.height})),researchNodes:page.findAll(n=>n.name.startsWith(PREFIX)).map(n=>({id:n.id,name:n.name,type:n.type,parentId:n.parent?.id}))};`);
const completion=`return {fileKey:FILE_KEY,pageId:page.id,createdNodeIds:[...new Set(createdNodeIds)],mutatedNodeIds:[...new Set(mutatedNodeIds)],sectionRecords,referenceRecords,imageTargets};`;
const slim=(sections,rows,extra={})=>({sections,rows:rows.map(r=>({id:r.id,question:r.question,app:r.app,title:r.title,source:r.source,evidenceType:r.evidenceType,actor:r.actor,stickyText:r.stickyText,limitation:r.limitation,observed:r.images.length?undefined:r.observed,adaptation:r.images.length?undefined:r.adaptation,counter:r.counter,url:r.url,totalImages:r.totalImages,sequenceNote:r.sequenceNote,reportPathLabel:r.reportPathLabel,selectedStepIndices:r.selectedStepIndices,omittedStepIndices:r.omittedStepIndices,images:r.images.map(({i,x,w,h,label,relativePath})=>({i,x,w,h,label,relativePath}))})),...extra});
const planData=(sections,rows,extra)=>`const PLAN = ${JSON.stringify(slim(sections,rows,extra))};\n`;
const firstRow=plan.rows.find(r=>r.question==='Q1'&&r.images.length);
await emit('01-test-reference',prelude+planData(plan.sections.filter(q=>q.id==='Q1'),[firstRow])+runtime+`const q=sections.find(q=>q.id==='Q1');const built=await section(q);const bottom=await row(built.node,PLAN.rows.find(r=>r.id===${JSON.stringify(firstRow.id)}),built.startY);built.node.resize(q.width,Math.max(q.height,bottom+100));\n`+completion);
await emit('02-create-sections-and-intro',prelude+planData(plan.sections,[],{introduction:plan.introduction,ownershipHypothesis:plan.ownershipHypothesis,synthesis:plan.synthesis})+runtime+`for(const q of sections)await section(q);
let intro=ownedIntro(),fresh=!intro;if(!intro)intro=figma.createSection();intro.name=INTRO_NAME;intro.fills=[{type:'SOLID',color:{r:1,g:1,b:1}}];page.appendChild(intro);intro.x=anchorX;intro.y=anchorY-800;intro.resize(4200,1200);affected(intro,fresh);
const heading=await text(intro,'intro/title','University identity, directory sync & user import',60,60,4080,64);
const body=await text(intro,'intro/body',PLAN.introduction+'\\n\\nOwnership hypothesis to validate: '+PLAN.ownershipHypothesis,60,heading.y+heading.height+30,4080,24);
const findings=await text(intro,'intro/findings','Strongest patterns to explore\\n'+PLAN.synthesis.patterns.join('\\n')+'\\n\\nDecisions: which source owns each field; which local overrides are permitted; how a teacher/learner role varies by course; how conflicting or changed identifiers are reviewed.\\n\\nTechnical and privacy assumptions: no LearningSpace integration mechanism is established. Confirm supported identity providers, stable IDs, source permissions, fields shared, retention, and the people authorized to export or import.',60,body.y+body.height+30,4080,20);
const prompts=await text(intro,'intro/questions','Priority university IT questions\\n'+PLAN.synthesis.questionsForIT.join('\\n'),60,findings.y+findings.height+30,4080,20);
intro.resize(4200,prompts.y+prompts.height+60);intro.y=anchorY+500-intro.height;
`+completion);
for(const q of plan.sections){await emit('03-rows-'+q.id,prelude+planData([q],plan.rows.filter(r=>r.question===q.id))+runtime+`const q=sections.find(q=>q.id===${JSON.stringify(q.id)});const built=await section(q);let y=built.startY;for(const r of PLAN.rows.filter(r=>r.question===q.id))y=await row(built.node,r,y);built.node.resize(q.width,Math.max(q.height,y+100));\n`+completion);}
const verifyPlan={sections:plan.sections.map(q=>({id:q.id})),rows:plan.rows.map(r=>({id:r.id,images:r.images.map(({i,w,h})=>({i,w,h}))}))};
await emit('04-verify-page2',prelude+`const PLAN=${JSON.stringify(verifyPlan)};\n`+`const sections=[],references=[],images=[],issues=[];
for(const r of PLAN.rows){const key=PREFIX+'reference/'+r.id;const nodes=page.findAll(n=>n.name.startsWith(key+'/'));const sticky=nodes.find(n=>n.name===key+'/sticky'),source=nodes.find(n=>n.name===key+'/source');references.push({id:r.id,stickyNodeId:sticky?.id||null,sourceNodeId:source?.id||null,hasAnnotation:!!sticky,hasSource:!!source});if(!sticky||!source)issues.push('Missing reference nodes: '+r.id);for(const im of r.images){const n=nodes.find(n=>n.name===key+'/image/'+im.i);const fill=n?.fills?.find(f=>f.type==='IMAGE');images.push({referenceId:r.id,index:im.i,nodeId:n?.id||null,imageHash:fill?.imageHash||null,hasImageFill:!!fill,width:n?.width,height:n?.height});if(!n||!fill)issues.push('Missing image fill '+r.id+'#'+im.i);if(n&&Math.abs(n.height-n.width*im.h/im.w)>1)issues.push('Aspect ratio '+r.id+'#'+im.i);}}
for(const q of PLAN.sections){const s=ownedSection(q.id);sections.push({question:q.id,nodeId:s?.id||null});if(s){for(const n of s.children)if(n.x<0||n.y<0||n.x+n.width>s.width+1||n.y+n.height>s.height+1)issues.push('Out of section bounds '+n.id);}}
return {fileKey:FILE_KEY,pageId:page.id,sections,references,images,issues,structuralPassed:issues.length===0,visualVerificationRequired:true};`);
const expected={fileKey:plan.destination.fileKey,pageId:plan.destination.pageId,status:'prepared_not_executed',testReferenceId:firstRow.id,referenceCount:plan.rows.length,imageCount:plan.rows.reduce((n,r)=>n+r.images.length,0),references:plan.rows.map(r=>({id:r.id,question:r.question,status:'pending',nodeId:null,images:r.images.map(i=>({index:i.i,nodeId:null,relativePath:i.relativePath,status:'pending'}))})),workflow:['inspect exact page2','test reference targets','upload test image(s)','verify test screenshot','create sections and intro','create remaining reference batches','upload image batches to explicit nodeIds','structural and visual verification']};
await fs.writeFile(path.join(root,'figjam/expected-state.json'),JSON.stringify(expected,null,2)+'\n');console.log(JSON.stringify({generated:true,references:expected.referenceCount,images:expected.imageCount,testReference:firstRow.id}));
