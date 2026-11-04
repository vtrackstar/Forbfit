// Lightweight, non-blocking check of public destinations.
// An HTTP error or bot challenge does not necessarily prove a link is broken.
// Run: node scripts/public-links.mjs
const urls = [
  ['Hub', 'https://vtrackstar.github.io/bfit/'],
  ['Foundation', 'https://vtrackstar.github.io/bfit/guides/foundation/'],
  ['Athleticism', 'https://vtrackstar.github.io/bfit/guides/athleticism/'],
  ['Gamer Fit', 'https://vtrackstar.github.io/bfit/guides/gamer-fit/'],
  ['Run Strong', 'https://vtrackstar.github.io/bfit/guides/run-strong/'],
  ['Exercise library', 'https://bfit-exercise-movement-library.stormy-lamp-8931.chatgpt.site/'],
  ['Coaching inquiry', 'https://forms.gle/f11PGA7PCUKaxrgq9']
];
for (const [name,url] of urls) {
  try {
    let r=await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(12000)});
    if (r.status===405 || r.status===403) r=await fetch(url,{method:'GET',redirect:'follow',signal:AbortSignal.timeout(12000)});
    const label=r.ok?'OK':'REVIEW';
    console.log(label+' '+name+': HTTP '+r.status+'; destination '+r.url);
  }catch(e){console.log('REVIEW '+name+': '+e.message);}
}
console.log('Public-link results are observational; browser or provider restrictions may affect these statuses.');
