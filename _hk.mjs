import { chromium } from 'playwright-core';
const SS = process.env.SS;
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--no-sandbox'] });
let errs=[];
async function cap(theme){
  const p = await b.newPage({ viewport:{width:1440,height:900} });
  p.on('pageerror', e=>errs.push(theme+': '+e.message));
  await p.addInitScript((t)=>localStorage.setItem('theme',t), theme);
  await p.goto('http://localhost:4173/',{waitUntil:'networkidle'});
  await p.waitForTimeout(1800);
  const h = await p.evaluate(()=>document.body.scrollHeight);
  let y=0,i=0;
  while(y<h && i<9){ await p.evaluate(yy=>window.scrollTo(0,yy), y); await p.waitForTimeout(650); await p.screenshot({path:`${SS}/hk-${theme}-${String(i).padStart(2,'0')}.png`}); y+=880; i++; }
  await p.close();
}
await cap('light'); await cap('dark');
console.log('ERRORS:', errs.length?errs.join(' | '):'none');
await b.close();
