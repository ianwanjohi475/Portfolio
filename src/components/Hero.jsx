import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import MagneticButton from './MagneticButton.jsx';
import { site } from '../data/site.js';
import { GitHubIcon, LinkedInIcon, XIcon } from './icons.jsx';

const socials = [
  { href: site.socials.github, label: 'GitHub', Icon: GitHubIcon },
  { href: site.socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: site.socials.x, label: 'X', Icon: XIcon },
];

const lines = ['Fast, striking', 'websites'];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('.hero-line, .hero-fade, .hero-card', { opacity: 1, y: 0, yPercent: 0, rotate: 0 });
        return;
      }
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-line', { yPercent: 108, opacity: 0, duration: 1, stagger: 0.12 })
        .from('.hero-card', { opacity: 0, y: 50, rotate: 10, scale: 0.94, duration: 1.1, ease: 'power3.out' }, '-=0.8')
        .from('.hero-fade', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.7');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={root} className="relative flex min-h-[100svh] items-center pb-24 pt-28 sm:pt-32">
      {/* vertical socials */}
      <div className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="text-fg/60 transition-all duration-300 hover:-translate-y-1 hover:text-rust" data-cursor>
            <Icon width="18" height="18" />
          </a>
        ))}
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* text */}
        <div>
          <p className="hero-fade eyebrow">{site.name}</p>
          <h1 className="mega">
            {lines.map((l, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="hero-line inline-block will-change-transform">{l}</span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <span className="hero-line inline-block will-change-transform">built to be</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line inline-block italic text-rust will-change-transform">remembered.</span>
            </span>
          </h1>

          <p className="hero-fade mt-8 max-w-md text-lg text-muted">
            I'm Ian Wanjohi — a creative developer in Nairobi. I design and build
            high-performance websites and web apps that look sharp, load fast and
            help brands grow.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#work" className="btn-dark">See my work</MagneticButton>
            <MagneticButton href="#contact" className="btn-outline">Start a project</MagneticButton>
          </div>
        </div>

        {/* slanted, elevated photo card */}
        <div className="hero-card relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:justify-self-end">
          <div
            className="relative rotate-[3deg] rounded-[1.75rem] border-2 border-border bg-card p-3 transition-transform duration-500 hover:rotate-0"
            style={{ boxShadow: '12px 14px 0 -1px rgb(var(--border) / 0.9)' }}
            data-cursor
          >
            <img
              src={site.photo}
              alt="Ian Wanjohi"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 rounded-full bg-fg px-4 py-2 font-mono text-xs text-bg">
              Ian Wanjohi · Nairobi
            </div>
          </div>
          {/* rotating "open to work" stamp */}
          <span className="absolute -left-5 -top-5 grid h-20 w-20 -rotate-6 place-items-center rounded-full bg-rust text-center font-mono text-[10px] uppercase leading-tight text-white shadow-lg sm:-left-6 sm:-top-6 sm:h-24 sm:w-24 sm:text-xs">
            Open to<br />work ✦
          </span>
        </div>
      </div>

      <a href="#work" className="hero-fade absolute bottom-8 right-6 grid h-14 w-14 place-items-center rounded-full border border-border/40 text-fg transition hover:bg-fg hover:text-bg sm:right-10" aria-label="Scroll to work" data-cursor>
        ↓
      </a>
    </section>
  );
}
