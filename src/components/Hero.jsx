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
      {/* LIGHT: Handshake-style green/teal gradient. DARK: deep glows. */}
      <div className="absolute inset-0 -z-10 dark:hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 30%, #3ec79a 0%, #23987a 38%, #12645420 70%, transparent 100%), linear-gradient(160deg, #1f7a62, #0e5748)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 hidden dark:block" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-teal-600/30 blur-[120px] animate-blob" />
        <div className="absolute right-[8%] top-[12%] h-[42vh] w-[42vh] rounded-full bg-teal-400/15 blur-[110px] animate-blob" />
        <div className="absolute bottom-[6%] left-[6%] h-[40vh] w-[40vh] rounded-full bg-teal-500/15 blur-[110px] animate-blob" />
      </div>
      {/* fade into the sections below */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" aria-hidden="true" />

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
                  className={`hero-char inline-block will-change-transform ${
                    li === 1
                      ? 'text-white dark:bg-gradient-to-r dark:from-teal-bright dark:via-teal-400 dark:to-teal-500 dark:bg-clip-text dark:text-transparent'
                      : 'text-white'
                  }`}
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
