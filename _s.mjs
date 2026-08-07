import { chromium } from 'playwright-core';
const SS = process.env.SS;
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--no-sandbox'] });
async function cap(theme){
  const p = await b.newPage({ viewport:{width:1440,height:860} });
  await p.addInitScript((t)=>localStorage.setItem('theme',t), theme);
  await p.goto('http://localhost:4173/',{waitUntil:'networkidle'});
  await p.waitForTimeout(1500);
  await p.evaluate(()=>document.querySelector('#work')?.scrollIntoView({block:'start'}));
  await p.waitForTimeout(1000);
  await p.screenshot({path:`${SS}/v8-${theme}-work.png`});
  await p.evaluate(()=>document.querySelector('#skills')?.scrollIntoView({block:'start'}));
  await p.waitForTimeout(900);
  await p.screenshot({path:`${SS}/v8-${theme}-skills.png`});
  await p.close();
}
await cap('light'); await cap('dark');
await b.close();
