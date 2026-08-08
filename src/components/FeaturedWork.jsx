import { useRef, useState } from 'react';
import { Reveal, MaskText } from './anim.jsx';
import { projects } from '../data/projects.js';

export default function FeaturedWork() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const items = projects;

  const scrollToCard = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    setActive(i);
  };
  const nudge = (dir) => scrollToCard(Math.min(items.length - 1, Math.max(0, active + dir)));

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    [...track.children].forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
      if (d < bestD) { bestD = d; best = i; }
    });
    setActive(best);
  };

  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="container-x mb-10 flex items-end justify-between gap-6">
        <div>
          <Reveal><p className="eyebrow">Selected work</p></Reveal>
          <MaskText as="h2" text="Featured work" className="section-title" />
        </div>
        <Reveal delay={0.1}>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => nudge(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-border text-fg transition hover:bg-fg hover:text-bg" aria-label="Previous" data-cursor>←</button>
            <button onClick={() => nudge(1)} className="grid h-12 w-12 place-items-center rounded-full border border-border text-fg transition hover:bg-fg hover:text-bg" aria-label="Next" data-cursor>→</button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-6 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
      >
        {items.map((p, i) => (
          <a
            key={p.id}
            href={`#/project/${p.id}`}
            data-cursor-label="View"
            className={`group relative w-[85%] shrink-0 snap-center rounded-3xl border-2 border-border bg-card p-3 transition-transform duration-300 sm:w-[62%] lg:w-[46%] ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'} hover:!rotate-0`}
            style={{ boxShadow: '6px 8px 0 -1px rgb(var(--border) / 0.9)' }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <img src={p.image} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <span className="mt-2 inline-block rounded-full border border-border/50 px-3 py-1 text-xs text-muted">{p.category}</span>
              </div>
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-fg text-bg transition group-hover:bg-rust group-hover:rotate-45">↗</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button key={i} onClick={() => scrollToCard(i)} aria-label={`Go to project ${i + 1}`} className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-rust' : 'w-2 bg-fg/25'}`} />
        ))}
      </div>
    </section>
  );
}
