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
            Experiments &amp; <span className="text-teal-grad">play</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            A sandbox of shaders, prototypes and creative-coding studies — where
            the next production idea usually starts.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {labExperiments.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group flex h-60 flex-col justify-between p-6"
              >
                <div
                  className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      i % 2
                        ? 'radial-gradient(130% 130% at 85% 15%, rgba(47,243,208,0.28), transparent 60%)'
                        : 'radial-gradient(130% 130% at 15% 85%, rgba(20,184,166,0.28), transparent 60%)',
                  }}
                />
                <div className="absolute inset-0 grid-tex opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="chip border-teal-500/25 uppercase tracking-widest text-teal-bright">
                      {exp.tag}
                    </span>
                    <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{exp.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{exp.blurb}</p>
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
