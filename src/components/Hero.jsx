import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton.jsx';
import Socials from './Socials.jsx';
import { site, waLink } from '../data/site.js';

const LINE1 = 'IAN';
const LINE2 = 'WANJOHI';
const pills = ['Web Apps', 'Frontend', 'Motion Design', 'Performance'];

export default function Hero() {
  const root = useRef(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(['.hero-char', '.hero-fade'], { opacity: 1, y: 0, yPercent: 0 });
        return;
      }
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-char', { yPercent: 115, opacity: 0, duration: 1, stagger: 0.05 })
        .from('.hero-fade', { y: 22, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.55');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <motion.div style={{ y, opacity: fade }} className="container-x w-full text-center">
        <p className="hero-fade mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-bright">
          {site.role} · {site.location}
        </p>

        <h1 className="mega">
          {[LINE1, LINE2].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              {line.split('').map((c, i) => (
                <span
                  key={i}
                  className="hero-char inline-block text-white will-change-transform"
                  aria-hidden="true"
                >
                  {c}
                </span>
              ))}
            </span>
          ))}
          <span className="sr-only">Ian Wanjohi</span>
        </h1>

        <p className="hero-fade mx-auto mt-8 max-w-2xl text-lg text-white/85 dark:text-muted sm:text-xl">
          I design and build fast, professional web experiences — high-craft
          interfaces with motion that feels alive and performance that scores 90+.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="#work" className="btn-teal">
            View my work
          </MagneticButton>
          <MagneticButton
            href={site.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10 dark:border-border dark:text-fg dark:hover:border-teal-400 dark:hover:text-teal-bright"
          >
            View résumé
          </MagneticButton>
        </div>

        <div className="hero-fade mt-8 flex items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-widest text-white/70 dark:text-muted">Find me on</span>
          <div className="dark:hidden">
            <Socials light />
          </div>
          <div className="hidden dark:block">
            <Socials />
          </div>
        </div>

        <ul className="hero-fade mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {pills.map((p) => (
            <li
              key={p}
              data-cursor
              className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20 dark:border-teal-500/25 dark:bg-teal-500/[0.07] dark:text-fg/85 dark:hover:border-teal-400"
            >
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
