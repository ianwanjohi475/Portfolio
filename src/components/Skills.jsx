import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skillGroups, skillTags } from '../data/skills.js';

function SkillBar({ name, level, color }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="font-mono text-xs text-white/50">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">stack</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1}>
              <div className="rounded-2xl glass p-6">
                <h3 className="mb-6 font-display text-lg font-semibold">
                  <span
                    className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
                    style={{ background: group.color }}
                  />
                  {group.label}
                </h3>
                <div className="space-y-5">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} {...s} color={group.color} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {skillTags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
