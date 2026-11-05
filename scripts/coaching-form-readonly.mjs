// Public coaching form read-only prelaunch inspection.
// Does not fill in answers, sign in, submit responses, or trigger any automations.
// Intended to reveal whether visitors can see both plans and their details.
import { chromium } from 'playwright';
const FORM_URL = 'https://forms.gle/f11PGA7PCUKaxrgq9';
let browser;
try {
  browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:390,height:844},locale:'en-US'});
  const response = await page.goto(FORM_URL,{waitUntil:'domcontentloaded',timeout:35000});
  await page.waitForTimeout(1800);
  const finalUrl = page.url();
  const title = await page.title();
  const text = await page.locator('body').innerText({timeout:10000});
  const lines = text.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  const hints = lines.filter(x=>/premium|elite|[$£€]|per month|\/month|monthly|check-in|video feedback|exercise clip|onboarding|call|pricing|nutrition|coaching plan|which plan|individual coaching/i.test(x)).slice(0,70);
  const observed = {
    httpStatus:response?.status(),
    finalHost:new URL(finalUrl).host,
    title,
    visibleTextLength:text.length,
    premiumVisible:/\bPremium\b/i.test(text),
    eliteVisible:/\bElite\b/i.test(text),
    signInObstacle:/sign in to continue|you need permission|request access|you must sign in|access denied|form is no longer accepting responses/i.test(text),
    pricingMentions:[...new Set(text.match(/\$\s?\d{2,4}(?:\/month|\/mo| a month)?/gi)||[])].slice(0,10),
    publicPlanLines:hints
  };
  console.log('COACHING FORM READ-ONLY FINDINGS (publicly visible text; no submission)');
  console.log(JSON.stringify(observed,null,2));
  if(observed.premiumVisible && observed.eliteVisible && !observed.signInObstacle){
    console.log('PASS: Both plan names appear to a signed-out reader.');
  }else{
    console.warn('REVIEW: Could not confirm both plan names without an access obstacle. Inspect the form as a visitor.');
  }
  await page.close();
} catch(error){
  console.warn('REVIEW: Public form browser inspection was inconclusive: '+error.message);
} finally {
  if(browser) await browser.close();
}
console.log('Not tested: response submission, Zapier branching, notification emails, payment, or client enrollment.');
