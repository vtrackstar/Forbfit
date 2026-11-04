// Run with: node scripts/core-flows.mjs
// Uses temporary browser state and local HTTP server; no user data is changed.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const server=spawn('python3',['-m','http.server','8766','--bind','127.0.0.1'],{stdio:'ignore'});
const host='http://127.0.0.1:8766';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function boot(){for(let n=0;n<40;n++){try{if((await fetch(host+'/')).ok)return;}catch{}await sleep(200);}throw Error('Server did not start');}
let browser,failures=[];
async function test(name,fn){
 const p=await browser.newPage({acceptDownloads:true,viewport:{width:1280,height:900}});
 const errs=[];p.on('pageerror',e=>errs.push(e.message));
 try{await fn(p);if(errs.length)throw Error('Uncaught runtime error: '+errs.slice(0,2).join(' | '));console.log('PASS '+name);}
 catch(e){failures.push(name+': '+e.message);console.error('FAIL '+name+': '+e.message);}
 finally{await p.close();}
}
try {
 await boot();browser=await chromium.launch({headless:true});
 await test('Foundation create, save and export workout',async page=>{
   await page.goto(host+'/guides/foundation/',{waitUntil:'domcontentloaded'});
   await page.locator('#generalGoal').click();
   await page.locator('[data-key="days"][data-val="2"]').click();
   await page.locator('#nextChapter').click();
   await page.locator('[data-key="equipment"][data-val="minimal"]').click();
   await page.locator('select[data-answer="floorAnswer"]').selectOption('yes');
   await page.locator('#finishPlan').click();
   const body=await page.locator('#main').innerText();
   assert.match(body,/Your workout plan/i);
   assert.equal(await page.locator('[data-download]').count()>0,true);
   const state=await page.evaluate(()=>JSON.parse(localStorage.getItem('foundation-prototype-v1')||'null'));
   assert.equal(state?.equipment,'minimal');
   await page.locator('[data-download]').first().click();
   assert.equal(await page.locator('#exportDialog').evaluate(el=>el.open),true);
   const downloadPromise=page.waitForEvent('download',{timeout:15000});
   await page.locator('#saveWorkoutHtml').click();
   const download=await downloadPromise;
   assert.match(download.suggestedFilename(),/\.html$/i);
   await page.reload({waitUntil:'domcontentloaded'});
   assert.match(await page.locator('#main').innerText(),/Your workout plan/i);
 });
 await test('Athleticism choose training view',async page=>{
   await page.goto(host+'/guides/athleticism/',{waitUntil:'domcontentloaded'});
   await page.locator('button[data-action="nav"][data-to="build"]').first().click();
   assert.equal((await page.locator('#app').innerText()).length>180,true);
   await page.locator('button[data-action="nav"][data-to="workout"]').first().click();
   assert.equal((await page.locator('#app').innerText()).length>150,true);
 });
 await test('Gamer Fit download first workout',async page=>{
   await page.goto(host+'/guides/gamer-fit/',{waitUntil:'domcontentloaded'});
   await page.locator('.gg-first-cta').first().click();
   const b=page.locator('[data-workout-download="first"]').first();
   assert.equal(await b.count()>0,true);
   const downloadPromise=page.waitForEvent('download',{timeout:15000});
   await b.click();
   const download=await downloadPromise;
   assert.match(download.suggestedFilename(),/\.txt$/i);
 });
 await test('Run Strong download offline guide',async page=>{
   await page.goto(host+'/guides/run-strong/',{waitUntil:'domcontentloaded'});
   const downloadPromise=page.waitForEvent('download',{timeout:15000});
   await page.locator('a[download="BFit_Run_Strong_Guide.html"]').click();
   const download=await downloadPromise;
   assert.equal(download.suggestedFilename(),'BFit_Run_Strong_Guide.html');
 });
} catch(e){failures.push('Test runner: '+e.message);console.error('FAIL Test runner: '+e.message);}
finally{if(browser)await browser.close();server.kill();}
if(failures.length){console.error(failures.length+' core flow(s) failed.');process.exitCode=1;}
else console.log('PASS: Foundation state/export, Athleticism navigation, Gamer Fit text export, Run Strong offline download.');
