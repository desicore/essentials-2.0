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
return {fileKey:FILE_KEY,pageId:page.id,topLevel:page.children.map(n=>({id:n.id,name:n.name,type:n.type,x:n.x,y:n.y,width:n.width,height:n.height})),researchNodes:page.findAll(n=>n.name.startsWith(PREFIX)).map(n=>({id:n.id,name:n.name,type:n.type,parentId:n.parent?.id}))};
