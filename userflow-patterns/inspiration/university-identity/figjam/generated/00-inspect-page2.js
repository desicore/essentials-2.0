const FILE_KEY = 'tN2AM7RZD2InF1LYnN0zcn', PAGE_ID = '5:422', PREFIX = 'UIID/2026-09-08/';
if (figma.fileKey && figma.fileKey !== FILE_KEY) throw new Error('Wrong Figma file');
if (figma.editorType !== 'figjam') throw new Error('Expected existing FigJam board');
const page = await figma.getNodeByIdAsync(PAGE_ID);
if (!page || page.type !== 'PAGE') throw new Error('Required Page 2 is unavailable; do not create a substitute');
await figma.setCurrentPageAsync(page);
return {fileKey:FILE_KEY,pageId:page.id,topLevel:page.children.map(n=>({id:n.id,name:n.name,type:n.type,x:n.x,y:n.y,width:n.width,height:n.height})),researchNodes:page.findAll(n=>n.name.startsWith(PREFIX)).map(n=>({id:n.id,name:n.name,type:n.type,parentId:n.parent?.id}))};
