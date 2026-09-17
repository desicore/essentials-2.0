const {chromium}=require('/Users/danielbrassnyo/.npm/_npx/9833c18b2d85bc59/node_modules/playwright');
const fs=require('fs');const path=require('path');
(async()=>{
const root=path.resolve(__dirname,'..');const report=path.resolve(root,'../05-scenarios.html');
const browser=await chromium.launch({headless:true,executablePath:'/Users/danielbrassnyo/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'});const page=await browser.newPage({viewport:{width:1440,height:1050}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('file://'+report);await page.locator('.card img').evaluateAll(xs=>xs.forEach(x=>x.loading='eager'));
await page.waitForFunction(()=>[...document.querySelectorAll('.card img')].every(x=>x.complete));
const info=await page.evaluate(()=>({h2:[...document.querySelectorAll('h2')].map(x=>x.textContent),cards:document.querySelectorAll('.card').length,images:document.querySelectorAll('.card img').length,broken:[...document.querySelectorAll('.card img')].filter(x=>!x.naturalWidth).map(x=>x.alt),externalImages:[...document.querySelectorAll('.card img')].filter(x=>!x.src.startsWith('data:')).length,synthesis:!!document.querySelector('#synthesis'),overflow:document.documentElement.scrollWidth>innerWidth}));
await page.screenshot({path:path.join(root,'notes/qa-desktop.png')});
await page.locator('#search').fill('unlikely-no-match-928');info.searchWorks=await page.locator('#no-results').isVisible();await page.getByRole('button',{name:'Reset filters'}).click();
await page.locator('.preview').first().click();info.lightboxWorks=await page.locator('#lightbox').isVisible();await page.locator('#close-lightbox').click();
await page.locator('.question-section').nth(1).scrollIntoViewIfNeeded();await page.screenshot({path:path.join(root,'notes/qa-cards.png')});await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:path.join(root,'notes/qa-mobile.png')});info.mobileOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
info.errors=errors;info.bytes=fs.statSync(report).size;fs.writeFileSync(path.join(root,'notes/qa.json'),JSON.stringify(info,null,2));console.log(JSON.stringify(info));await browser.close();
if(info.h2.length!==6||info.broken.length||info.externalImages||!info.synthesis||errors.length||!info.searchWorks||!info.lightboxWorks||info.overflow||info.mobileOverflow)process.exitCode=1;
})();
