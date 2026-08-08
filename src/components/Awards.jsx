import Reveal from './Reveal.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">Recognitions</p>
              <h2 className="mega">Awards</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-muted lg:pb-4">
              A curated list of awards and recognitions that highlight milestones
              in my work and growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border/25">
          {awards.map((a, i) => (
            <Reveal key={a.name}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border/25 py-6 sm:grid-cols-[3rem_1fr_1fr_auto]">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <span className="font-display text-2xl font-bold transition-colors group-hover:text-rust sm:text-3xl">{a.name}</span>
                <span className="col-span-2 text-muted sm:col-span-1">{a.note}</span>
                <span className="font-mono text-sm text-rust">{a.count}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
