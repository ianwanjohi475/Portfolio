import Reveal from './Reveal.jsx';
import { skillCards } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow">Toolkit</p>
              <h2 className="section-title">
                Skills &amp; <span className="text-teal-grad">stack</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted">
              A focused set of tools I know deeply — so I can move fast without
              cutting corners.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <article className="card group flex items-center gap-4 p-4 sm:p-5">
                <div className="absolute inset-0 grid-tex opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mono-tile h-14 w-14 text-lg">{s.code}</div>
                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate font-display text-lg">{s.name}</h3>
                    <span className="shrink-0 rounded-full border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 font-mono text-[11px] text-teal-600 dark:text-teal-bright">
                      {s.level}
                    </span>
                  </div>
                  <p className="truncate text-sm text-muted">
                    {s.note} · <span className="text-fg/50">{s.group}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
