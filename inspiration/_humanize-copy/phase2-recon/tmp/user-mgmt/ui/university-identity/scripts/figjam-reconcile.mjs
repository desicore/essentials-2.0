// Prepare explicit reuse of image hashes returned by upload_assets in this file.
// Creates no images and performs no Figma calls. Never reuploads source bytes.
import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),dir=path.join(root,'figjam');
const map=JSON.parse(await fs.readFile(path.join(dir,'node-map.json'),'utf8'));
const filter=process.argv[2],questionFilter=filter&&/^Q[1-6](,Q[1-6])*$/.test(filter)?new Set(filter.split(',')):null;
const refs=Object.values(map.references||{}).filter(r=>!filter||(questionFilter?questionFilter.has(r.question):r.id===filter));
const images=refs.flatMap(r=>(r.images||[]).filter(i=>i.imageHash).map(i=>({referenceId:r.id,index:i.index,nodeId:i.nodeId,imageHash:i.imageHash,width:i.width,height:i.height})));
const referenceNodes=refs.map(r=>({id:r.id,stickyNodeId:r.stickyNodeId,sourceNodeId:r.sourceNodeId}));
const prelude=`const FILE_KEY='tN2AM7RZD2InF1LYnN0zcn',PAGE_ID='5:422';
if(figma.fileKey&&figma.fileKey!==FILE_KEY)throw new Error('Wrong Figma file');if(figma.editorType!=='figjam')throw new Error('Expected FigJam');
const page=await figma.getNodeByIdAsync(PAGE_ID);if(!page||page.type!=='PAGE')throw new Error('Page 2 unavailable');await figma.setCurrentPageAsync(page);
const items=${JSON.stringify(images)},referenceNodes=${JSON.stringify(referenceNodes)},mutatedNodeIds=[],images=[],references=[],issues=[];let residentCheck=null;
function onPage(n){let p=n;while(p&&p.type!=='PAGE')p=p.parent;return p?.id===PAGE_ID;}
`;
const tail=`
for(const r of referenceNodes){const s=await figma.getNodeByIdAsync(r.stickyNodeId),t=await figma.getNodeByIdAsync(r.sourceNodeId);references.push({id:r.id,hasAnnotation:!!s&&onPage(s),hasSource:!!t&&onPage(t)});}
return {fileKey:FILE_KEY,pageId:page.id,createdNodeIds:[],mutatedNodeIds,images,references,issues,residentCheck,structuralPassed:issues.length===0,visualVerificationRequired:true};`;
const loop=mutate=>`for(const it of items){const n=await figma.getNodeByIdAsync(it.nodeId);if(!n||!onPage(n)||n.name!=='UIID/2026-09-08/reference/'+it.referenceId+'/image/'+it.index)throw new Error('Target ownership or Page 2 mismatch '+it.nodeId);
${mutate?"if(n.type==='SHAPE_WITH_TEXT')await figma.loadFontAsync(n.text.fontName);n.fills=[{type:'IMAGE',imageHash:it.imageHash,scaleMode:'FIT'}];mutatedNodeIds.push(n.id);":''}
const fill=n.fills.find(f=>f.type==='IMAGE');const match=!!fill&&fill.imageHash===it.imageHash;images.push({referenceId:it.referenceId,index:it.index,nodeId:n.id,imageHash:fill?.imageHash||null,expectedImageHash:it.imageHash,hasImageFill:!!fill,hashMatches:match,width:n.width,height:n.height});if(!match)issues.push('Image fill/hash mismatch '+it.nodeId);if(Math.abs(n.height-n.width*it.height/it.width)>1)issues.push('Aspect ratio mismatch '+it.nodeId);}
`;
const residentRead=`const residentByHash=new Map();const residentErrors=[];for(const hash of [...new Set(items.map(it=>it.imageHash))]){try{const image=figma.getImageByHash(hash);if(!image)throw new Error('Hash unavailable after assignment');const size=await image.getSizeAsync();const positive=Number.isFinite(size.width)&&Number.isFinite(size.height)&&size.width>0&&size.height>0;if(!positive)throw new Error('Non-positive image dimensions');residentByHash.set(hash,true);}catch(error){residentByHash.set(hash,false);residentErrors.push({imageHash:hash,error:String(error.message||error)});issues.push('Resident image check failed '+hash);}}for(const im of images)im.residentVerified=residentByHash.get(im.expectedImageHash)===true;residentCheck={uniqueHashes:residentByHash.size,positiveDimensions:[...residentByHash.values()].filter(Boolean).length,errors:residentErrors};\n`;
for(const [name,mutate]of [['05-reconcile-uploaded-hashes',true],['06-verify-uploaded-images',false]]){const code=prelude+loop(mutate)+(mutate?'':residentRead)+tail;if(code.length>49000)throw Error('Filter to a reference batch to keep under tool limit');new vm.Script('(async function(){'+code+'})');await fs.writeFile(path.join(dir,'generated-compact',name+'.js'),code+'\n');await fs.writeFile(path.join(dir,'generated-compact',name+'.request.json'),JSON.stringify({fileKey:'tN2AM7RZD2InF1LYnN0zcn',skillNames:'figma-use,figma-use-figjam',description:name.replaceAll('-',' '),code},null,2)+'\n');}
console.log(JSON.stringify({uploadedHashes:images.length,references:refs.length,mutationsPerformed:false}));
