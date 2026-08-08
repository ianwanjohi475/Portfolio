import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { services } from '../data/content.js';

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow">What I do</p>
          <h2 className="mega">Services</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            End-to-end product work that elevates your presence, connects with
            your audience, and turns ideas into real, shipped results.
          </p>
        </Reveal>
      </div>

      <div className="container-x mt-16 border-t border-border/25">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.title} className="border-b border-border/25">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center gap-6 py-8 text-left"
                aria-expanded={isOpen}
                data-cursor
              >
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h3 className={`flex-1 font-display text-3xl font-bold transition-colors sm:text-5xl ${isOpen ? 'text-rust' : 'group-hover:text-rust'}`}>
                  {s.title}
                </h3>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">↓</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-8 pl-10 text-lg text-muted">{s.body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
