import { Reveal, RevealImage } from './anim.jsx';
import Counter from './Counter.jsx';
import { stats, tools } from '../data/content.js';

export default function WhyMe() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow">A little about me</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.15] sm:text-5xl">
            I like building things that are simple to use and nice to look at.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            I recently finished my studies and I work as a fullstack developer.
            I handle both the design and the code, and I care about the small
            details that make an app feel good to use.
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

        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-border/20 py-12 sm:mx-auto sm:max-w-xl">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* tools & languages */}
        <div className="mt-14 text-center">
          <Reveal>
            <p className="eyebrow">Tools I work with</p>
          </Reveal>
          <Reveal stagger={0.04} className="mt-4 flex flex-wrap justify-center gap-2.5">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-border/40 px-4 py-2 text-sm text-fg/80 transition hover:border-rust hover:text-rust" data-cursor>
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
