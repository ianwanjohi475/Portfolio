import { marqueeItems } from '../data/content.js';

function Ribbon({ reverse = false, rotate = '-3deg' }) {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="absolute left-1/2 w-[140vw] -translate-x-1/2 overflow-hidden bg-fg py-4 text-bg" style={{ transform: `translateX(-50%) rotate(${rotate})` }}>
      <div className={`flex w-max gap-8 ${reverse ? 'animate-marqueeRev' : 'animate-marquee'}`}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-bold uppercase">
            {t} <span className="text-rust">→</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative my-20 h-40 overflow-hidden" aria-hidden="true">
      <Ribbon rotate="-3deg" />
      <Ribbon reverse rotate="3deg" />
    </section>
  );
}
