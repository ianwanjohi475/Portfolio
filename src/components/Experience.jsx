import Reveal from './Reveal.jsx';
import { timeline } from '../data/timeline.js';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 border-y border-line bg-surface/40 py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Journey</p>
          <h2 className="section-title">
            Experience <span className="text-teal-grad">timeline</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-teal-bright via-teal-400 to-transparent sm:left-1/2" />

          <ol className="space-y-12">
            {timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li key={item.year} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                  {/* node */}
                  <span className="absolute left-[-1.55rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-teal-bright bg-ink sm:left-1/2 sm:-translate-x-1/2" />

                  <div className={left ? 'sm:col-start-1 sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}>
                    <Reveal y={20}>
                      <p className="font-mono text-xs uppercase tracking-widest text-teal-bright">
                        {item.year}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold">
                        {item.role}
                      </h3>
                      <p className="text-sm text-white/50">{item.org}</p>
                      <p className="mt-2 text-white/70">{item.description}</p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
