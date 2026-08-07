import { chromium } from 'playwright-core';
const SS = process.env.SS;
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--no-sandbox'] });
let errs=[];
async function cap(theme){
  const p = await b.newPage({ viewport:{width:1440,height:860} });
  p.on('pageerror', e=>errs.push(theme+': '+e.message));
  await p.addInitScript((t)=>localStorage.setItem('theme',t), theme);
  await p.goto('http://localhost:4173/',{waitUntil:'networkidle'});
  await p.waitForTimeout(1700);
  await p.screenshot({path:`${SS}/v5-${theme}-hero.png`});
  await p.evaluate(()=>document.querySelector('#work')?.scrollIntoView({block:'start'}));
  await p.waitForTimeout(1200);
  await p.screenshot({path:`${SS}/v5-${theme}-work.png`});
  await p.close();
}
await cap('light'); await cap('dark');
console.log('ERRORS:', errs.length? errs.join(' | '):'none');
await b.close();
