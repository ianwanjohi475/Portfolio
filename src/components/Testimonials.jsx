import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="scroll-mt-24 py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Kind words</p>
          <h2 className="section-title">
            What clients <span className="text-teal-grad">say</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-3xl rounded-3xl glass p-8 sm:p-12">
            <span className="pointer-events-none absolute left-6 top-2 font-display text-7xl text-white/10">
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">
                  {active.quote}
                </p>
                <footer className="mt-6">
                  <p className="font-display font-semibold">{active.name}</p>
                  <p className="text-sm text-white/50">{active.title}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/5"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/5"
                aria-label="Next testimonial"
              >
                ›
              </button>
              <div className="ml-2 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-teal-bright' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
