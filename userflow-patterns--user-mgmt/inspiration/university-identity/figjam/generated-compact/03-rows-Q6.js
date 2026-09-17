const FILE_KEY = 'tN2AM7RZD2InF1LYnN0zcn', PAGE_ID = '5:422', PREFIX = 'UIID/2026-09-08/';
if (figma.fileKey && figma.fileKey !== FILE_KEY) throw new Error('Wrong Figma file');
if (figma.editorType !== 'figjam') throw new Error('Expected existing FigJam board');
const page = await figma.getNodeByIdAsync(PAGE_ID);
if (!page || page.type !== 'PAGE') throw new Error('Required Page 2 is unavailable; do not create a substitute');
await figma.setCurrentPageAsync(page);
const SECTION_NAMES = {"Q1":"Q1 · How does university IT connect and scope institutional identity?","Q2":"Q2 · How do existing university users arrive and link to the right account?","Q3":"Q3 · How are externally managed people, groups, and permissions represented?","Q4":"Q4 · What happens when users or connections change?","Q5":"Q5 · How can administrators safely import and update users in bulk?","Q6":"Q6 · How can Canvas complement university identity without creating duplicate users?"};
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
const PLAN = {"sections":[{"id":"Q6","nodeId":null,"title":"How can Canvas complement university identity without creating duplicate users?","answer":"Canvas roster mechanisms establish a feasible membership source, subject to institution configuration and authorization. Match roster identities to existing users before applying course-scoped roles and enrollment changes.","openQuestions":["Which Canvas integration and permissions are available at each institution?","How do Canvas identifiers map to the university identifier?","Who controls identity, course membership, role overrides and retained history when sources disagree?"],"x":13304,"y":600,"width":2300,"height":1840}],"rows":[{"id":"documentation:canvas-nrps-roster","question":"Q6","app":"Canvas","title":"Retrieve a course roster through LTI NRPS","source":"documentation","evidenceType":"documentation","actor":"LearningSpace administrator","stickyText":"Use Canvas as a course-membership source while matching roster entries to existing institutional accounts.","limitation":"Technical feasibility only. Tool availability, institution authorization and identifier correspondence need validation; a normal LTI launch alone cannot reveal later departures.","observed":"Canvas documents NRPS for LTI 1.3 tools with a developer key, membership-read scope, installed tool, course context and OAuth client credentials. It can retrieve the course population beyond people who launched the tool. It cannot write enrollments back.","adaptation":"Let administrators select relevant courses and inspect role mapping before matching roster entries to institutional users.","counter":false,"url":"https://developerdocs.instructure.com/services/canvas/external-tools/lti/file.provisioning","totalImages":0,"sequenceNote":"Documentation evidence — no product screenshot.","reportPathLabel":"inspiration/university-identity/report.html — reference documentation:canvas-nrps-roster","selectedStepIndices":[],"omittedStepIndices":[],"images":[]},{"id":"documentation:canvas-nrps-identifiers","question":"Q6","app":"Canvas","title":"Respect roster identifier and privacy boundaries","source":"documentation","evidenceType":"documentation","actor":"university IT","stickyText":"Preview the identifiers and personal fields Canvas will actually share, and avoid requiring email for every roster match.","limitation":"An LTI user ID is not automatically the university directory ID. API capability and privacy settings do not establish legal permission for transfer.","observed":"NRPS membership objects contain a unique LTI user identifier and roles in the current context. Names, email and SIS identifiers depend on tool privacy settings. The documented course endpoint returns active memberships and supports role or resource-link filtering.","adaptation":"Map namespaced Canvas identifiers to established institutional identities; show unavailable optional fields and allow IT to review ambiguous matches.","counter":false,"url":"https://developerdocs.instructure.com/services/canvas/resources/names_and_role","totalImages":0,"sequenceNote":"Documentation evidence — no product screenshot.","reportPathLabel":"inspiration/university-identity/report.html — reference documentation:canvas-nrps-identifiers","selectedStepIndices":[],"omittedStepIndices":[],"images":[]},{"id":"documentation:canvas-enrollment-status","question":"Q6","app":"Canvas","title":"Course departure differs from account suspension","source":"documentation","evidenceType":"documentation","actor":"LearningSpace administrator","stickyText":"Reconcile course membership changes independently of institutional identity and historical work.","limitation":"The final retrieval safeguard is a proposed LearningSpace policy. Canvas status behavior varies with course settings; text documentation does not show the recovery interface.","observed":"Canvas distinguishes active, inactive, concluded and deleted enrollments. Inactive students lose course access while instructors retain submitted work; concluded access is generally read-only subject to settings. Account suspension controls login separately and does not change enrollment status.","adaptation":"Define a course-state mapping and preserve historical work when membership ends. Require a successful complete roster retrieval before interpreting absence as departure.","counter":false,"url":"https://community.instructure.com/en/kb/articles/387055-canvas-enrollment-status-comparison","totalImages":0,"sequenceNote":"Documentation evidence — no product screenshot.","reportPathLabel":"inspiration/university-identity/report.html — reference documentation:canvas-enrollment-status","selectedStepIndices":[],"omittedStepIndices":[],"images":[]}]};

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
 await figma.loadFontAsync(sticky.text.fontName);sticky.name=PREFIX+key+'/sticky';sticky.text.characters=r.app+'\n'+r.stickyText;sticky.authorVisible=false;sticky.isWideWidth=false;sticky.fills=[{type:'SOLID',color:r.counter?{r:0xFF/255,g:0xB8/255,b:0xA8/255}:{r:0xA8/255,g:0xDA/255,b:0xFF/255}}];parent.appendChild(sticky);sticky.x=60;sticky.y=y;affected(sticky,fresh);
 const label=await text(parent,key+'/source',r.app+' · '+r.title+'\n'+r.source+' · '+r.evidenceType,620,y,parent.width-680,20,r.url);
 const context=await text(parent,key+'/context','Actor: '+r.actor+'\nEvidence: '+r.evidenceType+'\nLimitation: '+r.limitation,330,y,250,16);
 let bottom=Math.max(sticky.y+sticky.height,context.y+context.height,label.y+label.height);
 const targets=[];
 for(const im of r.images){
  const name=PREFIX+key+'/image/'+im.i;let target=existing(parent,name,'SHAPE_WITH_TEXT'),newTarget=!target;if(!target)target=figma.createShapeWithText();await figma.loadFontAsync(target.text.fontName);target.text.characters='';target.name=name;target.shapeType='SQUARE';
  if(newTarget){target.fills=[{type:'SOLID',color:{r:0xED/255,g:0xED/255,b:0xED/255}}];target.strokes=[];}
  parent.appendChild(target);target.resize(im.w,im.h);target.x=im.x;target.y=label.y+label.height+24;affected(target,newTarget);
  const caption=await text(parent,key+'/caption/'+im.i,(r.source==='documentation'?'Illustration ':'Step ')+(im.i+1)+' of '+r.totalImages+' · '+im.label,im.x,target.y+im.h+10,im.w,16);
  bottom=Math.max(bottom,caption.y+caption.height);const rec={referenceId:r.id,index:im.i,nodeId:target.id,relativePath:im.relativePath,width:im.w,height:im.h,captionNodeId:caption.id,x:target.x,y:target.y};imageTargets.push(rec);targets.push(rec);
 }
 if(!r.images.length){const doc=await text(parent,key+'/documentation','Documentation evidence — no product screenshot.\nDocumented: '+r.observed+'\nPossible adaptation: '+r.adaptation,620,label.y+label.height+24,parent.width-680,20);bottom=Math.max(bottom,doc.y+doc.height);}
 const pointer=await text(parent,key+'/report',r.sequenceNote+'\n'+r.reportPathLabel,620,bottom+24,parent.width-680,16);bottom=pointer.y+pointer.height;
 referenceRecords.push({id:r.id,question:r.question,sectionId:parent.id,stickyNodeId:sticky.id,sourceNodeId:label.id,contextNodeId:context.id,reportNodeId:pointer.id,y,height:bottom-y,images:targets,status:'targets_created',selectedStepIndices:r.selectedStepIndices,omittedStepIndices:r.omittedStepIndices});return bottom+80;
}
const q=sections.find(q=>q.id==="Q6");const built=await section(q);let y=built.startY;for(const r of PLAN.rows.filter(r=>r.question===q.id))y=await row(built.node,r,y);built.node.resize(q.width,Math.max(q.height,y+100));
return {fileKey:FILE_KEY,pageId:page.id,createdNodeIds:[...new Set(createdNodeIds)],mutatedNodeIds:[...new Set(mutatedNodeIds)],sectionRecords,referenceRecords,imageTargets};
