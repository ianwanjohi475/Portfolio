import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { labExperiments } from '../data/content.js';

export default function Lab() {
  return (
    <section id="lab" className="scroll-mt-24 py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Ian Lab</p>
          <h2 className="section-title">
            Experiments &amp; <span className="text-gradient">play</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            A sandbox of shaders, prototypes and creative-coding studies — where
            the next production idea usually starts.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {labExperiments.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-56 overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                  style={{
                    background:
                      i % 2
                        ? 'radial-gradient(120% 120% at 80% 20%, #7c5cff66, transparent 60%)'
                        : 'radial-gradient(120% 120% at 20% 80%, #22d3ee66, transparent 60%)',
                  }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-white/80">
                    {exp.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{exp.blurb}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
