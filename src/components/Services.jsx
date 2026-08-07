import Reveal from './Reveal.jsx';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow">What I do</p>
              <h2 className="section-title">
                Services &amp; <span className="text-teal-grad">capabilities</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-white/60">
              End-to-end product work — from the first wireframe to a fast,
              accessible build in production.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="card group h-full p-6 sm:p-8">
                <div className="absolute inset-0 grid-tex opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="mono-tile h-14 w-14 text-lg">{s.code}</div>
                    <span className="font-mono text-sm text-white/30">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-white/60">{s.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {s.tags.map((t) => (
                      <span key={t} className="chip border-teal-500/25 text-teal-bright">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
