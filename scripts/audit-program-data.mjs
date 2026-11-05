// Validate BFit Athleticism prescriptions without changing workouts.
// Run: node scripts/audit-program-data.mjs
import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync('guides/athleticism/index.html','utf8');
const match = html.match(/<script\s+id="program-data"\s+type="application\/json">([\s\S]*?)<\/script>/);
assert.ok(match, 'Athleticism program-data JSON must be present');
const data = JSON.parse(match[1]);
const programs = ['sprint','field','jump','multi'];
const loads = ['contacts','pogo','running','brakes','cuts','react','strength','iso','aerobic','throws','lifting_sets','isometric_sets'];
const problems = [];
const flag = (s) => problems.push(s);
let weeksChecked = 0, rowsChecked = 0;
assert.equal(data.summary.length, 32, 'Four programs x two schedules x four weeks');
for (const p of programs) {
  for (const days of ['3','4']) {
    const rows = data.programs[p]?.schedules?.[days];
    if (!Array.isArray(rows)) { flag(p+'/'+days+': missing schedule'); continue; }
    for (const r of rows) {
      rowsChecked++;
      if (![1,2,3,4].includes(r.week)) flag(p+'/'+days+': invalid week '+r.week);
      for (const k of loads) {
        if (!Number.isFinite(r.load?.[k]) || r.load[k] < 0)
          flag(p+'/'+days+' W'+r.week+' '+r.exercise+': invalid '+k);
      }
      if (r.load?.iso !== r.load?.isometric_sets)
        flag(p+'/'+days+' W'+r.week+' '+r.exercise+': iso alias differs from isometric_sets');
      if (r.load?.strength !== r.load?.lifting_sets + r.load?.isometric_sets)
        flag(p+'/'+days+' W'+r.week+' '+r.exercise+': strength differs from lifting + isometric');
      if (r.load?.contacts < r.load?.pogo)
        flag(p+'/'+days+' W'+r.week+' '+r.exercise+': pogo exceeds jump contacts');
    }
    for (let week=1;week<=4;week++) {
      weeksChecked++;
      const wrows = rows.filter(r=>r.week===week);
      const sums = data.summary.filter(s=>s.program===p && String(s.days)===days && s.week===week);
      if(sums.length!==1){flag(p+'/'+days+' W'+week+': missing or duplicate summary');continue;}
      const summary=sums[0];
      const sessions=new Set(wrows.map(r=>r.day)).size;
      if(wrows.length!==summary.rows) flag(p+'/'+days+' W'+week+': row count mismatch');
      if(sessions!==Number(days)||sessions!==summary.sessions)
        flag(p+'/'+days+' W'+week+': session count mismatch');
      for(const k of loads){
        const computed=wrows.reduce((n,r)=>n+(r.load?.[k]||0),0);
        if(Math.abs(computed-summary[k])>1e-8)
          flag(p+'/'+days+' W'+week+': '+k+' totals '+computed+' != '+summary[k]);
      }
    }
  }
}
// Independent check of the Starter adjustments against the published contact targets.
// Count warm-up pogos, and keep cuts / brakes out of plyometric jump contacts.
const expectedStarter=[65,77,74,52];
for(const days of ['3','4']) {
  const rows=data.programs.jump.schedules[days];
  for(let week=1;week<=4;week++){
    const cfg=data.jumpStarter[String(week)];
    let contacts=0;
    for(const row of rows.filter(r=>r.week===week)) {
      const e=row.exercise,day=row.day;
      if(['Friday','Saturday'].includes(day)&&e==='Lateral Bound')continue;
      if(['Wednesday','Thursday'].includes(day)&&e==='Standing Broad Jump'&&cfg.omit.includes('Wednesday|Standing Broad Jump'))continue;
      let n=row.load.contacts;
      if(e==='Two-Foot Pogos'&&cfg.pogoReductionPerDay>0)n=Math.max(0,n-cfg.pogoReductionPerDay);
      if(week===3&&cfg.reduceOneSet?.includes(e))n-=e==='One-Foot Short-Approach Jump'?4:2;
      contacts+=n;
    }
    if(contacts!==expectedStarter[week-1])
      flag('Jump Starter '+days+' days W'+week+' expected '+expectedStarter[week-1]+' contacts, got '+contacts);
  }
}
if(!html.includes('contacts:getStarterCount(i,d)'))
  flag('Starter chart should use calculated contacts, not fixed counts');
if(problems.length) {
  problems.forEach(e=>console.error('FAIL '+e));
  process.exitCode=1;
} else console.log('PASS Athleticism: '+rowsChecked+' rows, '+weeksChecked+' program-weeks; workload sums and Starter contacts consistent.');
