export function recount(map){
 const refs=Object.values(map.references||{}),images=refs.flatMap(r=>r.images||[]);
 map.referenceRowsCreatedCount=refs.length;
 map.uploadedAssetCount=images.filter(i=>i.uploadedAt&&i.imageHash).length;
 map.placedImageCount=images.filter(i=>i.fillVerified===true).length;
 for(const r of refs){r.placementVerified=r.annotationVerified===true&&(r.images||[]).every(i=>i.fillVerified===true);if(r.placementVerified&&r.status!=='verified')r.status='placed';}
 map.placedReferenceCount=refs.filter(r=>r.placementVerified===true).length;
 map.placementComplete=map.placedReferenceCount===map.expectedReferenceCount&&map.placedImageCount===map.expectedImageCount;
 return map;
}
