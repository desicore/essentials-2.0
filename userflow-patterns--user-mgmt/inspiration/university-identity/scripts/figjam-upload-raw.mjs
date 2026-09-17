import {recount} from './figjam-state-common.mjs';
// POST each single-use upload URL once, to explicit existing targets. No multipart.
// Request upload_assets immediately before running. Never persist URLs in research files.
import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),dir=path.join(root,'figjam');
const [responsePath,batchIndex='0']=process.argv.slice(2);if(!responsePath)throw Error('Usage: figjam-upload-raw.mjs <temporary unwrapped upload_assets response JSON outside project> <batchIndex>');
if(path.resolve(responsePath).startsWith(root+path.sep))throw Error('Single-use upload URLs must be held outside the research folder (temporary file, mode 0600).');
const response=JSON.parse(await fs.readFile(responsePath,'utf8'));if(response.commitUrl)throw Error('Batch-commit responses unsupported; request default auto-commit URLs.');
const requests=JSON.parse(await fs.readFile(path.join(dir,'upload-requests.json'),'utf8'));const batch=requests[Number(batchIndex)];if(!batch)throw Error('Unknown upload request batch');
const uploads=response.uploads;if(!Array.isArray(uploads)||uploads.length!==batch.items.length)throw Error('Upload URL count mismatch');
const mapPath=path.join(dir,'node-map.json');const map=JSON.parse(await fs.readFile(mapPath,'utf8'));
const save=async()=>{recount(map);await fs.writeFile(mapPath,JSON.stringify(map,null,2)+'\n');};
for(let n=0;n<uploads.length;n++){
 const u=uploads[n],job=batch.items[n];if(u.targetNodeId!==job.nodeId)throw Error('Explicit targetNodeId missing or mismatched; inspect current tool response before upload');
 const url=new URL(u.submitUrl);if(url.protocol!=='https:')throw Error('Expected HTTPS submit URL');
 const item=map.references[job.referenceId]?.images?.find(i=>i.index===job.index&&i.nodeId===job.nodeId);if(!item)throw Error('Target missing from actual node map');
 if(['attempting','ambiguous','uploaded','fill_present','verified'].includes(item.status))throw Error('Already attempted target; inspect image fill before requesting a new URL. Do not replay URLs.');
 const file=path.resolve(root,job.relativePath);if(!file.startsWith(root+path.sep))throw Error('Asset outside research folder');const bytes=await fs.readFile(file);if(bytes.length>10*1024*1024)throw Error('Asset exceeds upload tool 10MB limit');
 const mime=/\.png$/i.test(file)?'image/png':/\.jpe?g$/i.test(file)?'image/jpeg':null;if(!mime)throw Error('Convert image to PNG/JPEG before Figma upload');
 item.status='attempting';item.attemptedAt=new Date().toISOString();item.sha256=createHash('sha256').update(bytes).digest('hex');await save();
 try{
  const res=await fetch(url,{method:'POST',headers:{'Content-Type':mime},body:bytes,redirect:'error',signal:AbortSignal.timeout(90000)});
  const body=await res.text();let parsed={};try{parsed=JSON.parse(body)}catch{}
  item.httpStatus=res.status;
  if(!res.ok){item.status='ambiguous';item.error='Upload did not return success; inspect target fill before retrying with a newly requested URL';await save();throw Error('Upload failed HTTP '+res.status);}
  item.status='uploaded';item.uploadedAt=new Date().toISOString();if(typeof parsed.imageHash==='string')item.imageHash=parsed.imageHash;
  item.fillVerified=false;item.responseKeys=Object.keys(parsed);item.hasCommitUrl=typeof parsed.commitUrl==='string';
  function responseShape(value){if(Array.isArray(value))return value.map(responseShape);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,responseShape(v)]));return typeof value;}
  item.responseShape=responseShape(parsed);item.placementResponse={};
  for(const k of ['committed','placed','success','ok','status','statusCode'])if(['boolean','number'].includes(typeof parsed[k]))item.placementResponse[k]=parsed[k];for(const k of ['imageHash','placedOnNodeId','targetNodeId','nodeId','pageId','fileKey'])if(typeof parsed[k]==='string')item.placementResponse[k]=parsed[k];
  await save();console.log(JSON.stringify({referenceId:job.referenceId,index:job.index,nodeId:job.nodeId,status:'uploaded',httpStatus:res.status}));
 }catch(error){item.status='ambiguous';item.error='Upload response uncertain; inspect target fill before further action';await save();throw new Error(item.error);}
}
await fs.unlink(responsePath);console.log('All URLs posted once; temporary URL file removed. Inspect actual screenshots before marking visual verification.');
