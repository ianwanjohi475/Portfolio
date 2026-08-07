import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton.jsx';
import Socials from './Socials.jsx';
import { site, waLink } from '../data/site.js';
import { DownloadIcon } from './icons.jsx';

const LINE1 = 'IAN';
const LINE2 = 'WANJOHI';
const pills = ['Web Apps', 'Frontend', 'Motion Design', 'Performance'];

export default function Hero() {
  const root = useRef(null);

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
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px] animate-blob dark:bg-teal-600/30" />
        <div className="absolute right-[8%] top-[12%] h-[42vh] w-[42vh] rounded-full bg-teal-400/15 blur-[110px] animate-blob" />
        <div className="absolute bottom-[6%] left-[6%] h-[40vh] w-[40vh] rounded-full bg-teal-500/15 blur-[110px] animate-blob" />
      </div>

      <div className="container-x w-full text-center">
        <p className="eyebrow hero-fade">{site.role} · {site.location}</p>

        <h1 className="mega text-fg">
          {[LINE1, LINE2].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              {line.split('').map((c, i) => (
                <span
                  key={i}
                  className={`hero-char inline-block will-change-transform ${li === 1 ? 'text-teal-grad' : ''}`}
                  aria-hidden="true"
                >
                  {c}
                </span>
              ))}
            </span>
          ))}
          <span className="sr-only">Ian Wanjohi</span>
        </h1>

        <p className="hero-fade mx-auto mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          I design and build fast, professional web experiences — high-craft
          interfaces with motion that feels alive and performance that scores 90+.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="#work" className="btn-teal">
            View my work
          </MagneticButton>
          <MagneticButton
            href={site.resume}
            className="btn-ghost"
            target="_blank"
            rel="noreferrer noopener"
          >
            View résumé
          </MagneticButton>
          <a href={site.resume} download className="btn-ghost">
            <DownloadIcon /> Download CV
          </a>
        </div>

        <div className="hero-fade mt-8 flex items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted">Find me on</span>
          <Socials />
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-teal-bright"
          >
            WhatsApp →
          </a>
        </div>

        <ul className="hero-fade mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {pills.map((p) => (
            <li key={p} className="pill">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
