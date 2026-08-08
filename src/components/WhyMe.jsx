import { Reveal, RevealImage } from './anim.jsx';
import Counter from './Counter.jsx';
import { stats } from '../data/content.js';

export default function WhyMe() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow">Why work with me</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.15] sm:text-5xl">
            I'm not an agency — I'm a hands-on partner who designs, builds and
            ships the whole thing, invested in the outcome.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            From strategy to execution, I blend design thinking with engineering
            to create work that's both beautiful and genuinely effective.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="#services" className="group mx-auto mt-10 grid h-28 w-28 place-items-center rounded-full bg-fg text-sm text-bg transition hover:bg-rust" data-cursor>
            More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>

      <div className="container-x mt-16">
        <RevealImage
          src="/img/misc/studio-1.jpg"
          alt="Ian Wanjohi at work"
          ratio="16 / 8"
          className="overflow-hidden rounded-3xl border-2 border-border"
        />

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border/20 pt-12 sm:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div>
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
