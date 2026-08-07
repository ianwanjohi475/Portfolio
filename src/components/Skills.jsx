import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skillGroups, skillTags } from '../data/skills.js';

function Bar({ level }) {
  return (
    <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-bright"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">Toolkit</p>
              <h2 className="section-title">
                A stack tuned for <span className="text-teal-grad">craft &amp; speed</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/60 lg:pb-2">
              I go deep on a focused set of tools so I can move fast without
              cutting corners — strong fundamentals in the browser, a modern
              React stack, and motion done right.
            </p>
          </Reveal>
        </div>

        {/* Bento of category cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1}>
              <div className="card group h-full p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-bright to-transparent opacity-60" />
                <div className="absolute inset-0 grid-tex opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-display text-xl">{group.label}</h3>
                    <span className="font-mono text-sm text-teal-bright">
                      0{gi + 1}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {group.skills.map((s) => (
                      <li key={s.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-white/85">{s.name}</span>
                          <span className="font-mono text-xs text-white/40">{s.level}</span>
                        </div>
                        <Bar level={s.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools row */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            <span className="mr-2 font-mono text-xs uppercase tracking-widest text-white/40">
              Also fluent in
            </span>
            {skillTags.map((t) => (
              <span key={t} className="pill py-2 text-[13px]">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
