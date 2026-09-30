import {recount} from './figjam-state-common.mjs';
// Record actual tool results and prepare target-specific upload requests. No Figma calls.
import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),dir=path.join(root,'figjam');
const read=async p=>JSON.parse(await fs.readFile(p,'utf8')),write=async(p,d)=>fs.writeFile(p,JSON.stringify(d,null,2)+'\n');
const [mode,input,filter]=process.argv.slice(2);const map=await read(path.join(dir,'node-map.json'));
const plan=await read(path.join(root,'board-plan.json'));map.expectedReferenceCount=plan.rows.length;map.expectedImageCount=plan.rows.reduce((n,r)=>n+r.images.length,0);
if(mode==='record'){
 const r=await read(input);if(r.fileKey!=='tN2AM7RZD2InF1LYnN0zcn'||r.pageId!=='5:422')throw Error('Unexpected result destination');
 map.sections??={};map.references??={};map.allAffectedNodeIds??=[];
 for(const s of r.sectionRecords||[])map.sections[s.question]=s;
 for(const ref of r.referenceRecords||[]){const previous=map.references[ref.id];ref.images=ref.images.map(im=>({... (previous?.images?.find(x=>x.index===im.index&&x.nodeId===im.nodeId)||{}),...im}));map.references[ref.id]={...previous,...ref};}
 map.allAffectedNodeIds=[...new Set([...map.allAffectedNodeIds,...(r.createdNodeIds||[]),...(r.mutatedNodeIds||[])])];map.status='in_progress';map.verified=false;recount(map);map.lastRecordedAt=new Date().toISOString();await write(path.join(dir,'node-map.json'),map);console.log(JSON.stringify({references:map.placedReferenceCount,images:map.placedImageCount}));
}else if(mode==='requests'){
 const available=Object.values(map.references).filter(r=>!input||r.id===input).flatMap(r=>(r.images||[]).filter(i=>!['uploaded','fill_present','verified','attempting','ambiguous'].includes(i.status)).map(i=>({...i,referenceId:r.id})));
 if(available.some(i=>!i.nodeId))throw Error('Cannot request upload without actual target node IDs');const batches=[];for(let i=0;i<available.length;i+=20){const items=available.slice(i,i+20);batches.push({request:{fileKey:'tN2AM7RZD2InF1LYnN0zcn',count:items.length,nodeIds:items.map(i=>i.nodeId),scaleMode:'FIT'},items});}
 await write(path.join(dir,'upload-requests.json'),batches);console.log(JSON.stringify({batches:batches.length,images:available.length,path:'figjam/upload-requests.json'}));
}else if(mode==='record-verification'){
 const r=await read(input);if(r.fileKey!=='tN2AM7RZD2InF1LYnN0zcn'||r.pageId!=='5:422')throw Error('Unexpected verification destination');
 for(const observed of r.images||[]){const item=map.references[observed.referenceId]?.images?.find(i=>i.index===observed.index&&i.nodeId===observed.nodeId);if(!item)continue;item.actualImageHash=observed.imageHash;item.fillVerified=!!(observed.hasImageFill&&item.imageHash&&observed.imageHash===item.imageHash&&observed.residentVerified!==false);if(typeof observed.residentVerified==='boolean')item.residentVerified=observed.residentVerified;item.fillCheckedAt=new Date().toISOString();if(item.fillVerified)item.status='fill_present';else if(item.uploadedAt)item.status='uploaded';}
 for(const observed of r.references||[]){const ref=map.references[observed.id];if(ref)ref.annotationVerified=!!(observed.hasAnnotation&&observed.hasSource);}
 recount(map);map.structuralVerification={...r,structuralPassed:r.structuralPassed===true&&map.placementComplete,allExpectedReferencesAndImageHashesVerified:map.placementComplete};map.lastStructuralCheckAt=new Date().toISOString();await write(path.join(dir,'node-map.json'),map);console.log(JSON.stringify({structuralPassed:map.structuralVerification.structuralPassed,issues:r.issues,placementComplete:map.placementComplete,visualStillRequired:true}));
}else if(mode==='recount'){recount(map);await write(path.join(dir,'node-map.json'),map);console.log(JSON.stringify({referenceRowsCreated:map.referenceRowsCreatedCount,uploadedAssets:map.uploadedAssetCount,placedReferences:map.placedReferenceCount,placedImages:map.placedImageCount}));
}else throw Error('Usage: figjam-state.mjs record <unwrapped-result.json> | requests [referenceId] | record-verification <result.json>');
