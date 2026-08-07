import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--no-sandbox'] });
const p = await b.newPage();
p.on('console', m => console.log('CONSOLE:', m.type(), m.text()));
p.on('pageerror', e => console.log('PAGEERROR:', e.message));
await p.goto('http://localhost:4173/',{waitUntil:'networkidle'});
await p.waitForTimeout(1000);
await b.close();
