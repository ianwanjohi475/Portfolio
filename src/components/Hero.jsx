import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { site } from '../data/site.js';
import { GitHubIcon, LinkedInIcon, XIcon } from './icons.jsx';

const socials = [
  { href: site.socials.github, label: 'GitHub', Icon: GitHubIcon },
  { href: site.socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: site.socials.x, label: 'X', Icon: XIcon },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduce) { gsap.set('.hero-line, .hero-fade', { opacity: 1, y: 0, yPercent: 0 }); return; }
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-line', { yPercent: 108, opacity: 0, duration: 1, stagger: 0.12 })
        .from('.hero-fade', { y: 20, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.5');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={root} className="relative flex min-h-[100svh] items-center pb-24 pt-32">
      {/* vertical socials */}
      <div className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="text-fg/60 transition hover:text-rust" data-cursor>
            <Icon width="18" height="18" />
          </a>
        ))}
      </div>

      <div className="container-x">
        <p className="hero-fade eyebrow">{site.name}</p>

        <h1 className="mega max-w-5xl">
          {['Design & code', 'for brands that', 'refuse to be'].map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="hero-line inline-block will-change-transform">{l}</span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <span className="hero-line inline-block italic text-rust will-change-transform">forgettable.</span>
          </span>
        </h1>

        <p className="hero-fade mt-8 max-w-md text-lg text-muted">
          I'm Ian Wanjohi — a creative developer in Nairobi building fast,
          characterful websites and web apps. Design and development, done with
          passion and a little bit of mischief.
        </p>

        <div className="hero-fade mt-9 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-dark" data-cursor>See selected work</a>
          <a href="#contact" className="btn-outline" data-cursor>Start a project</a>
        </div>
      </div>

      <a href="#work" className="hero-fade absolute bottom-8 right-6 grid h-14 w-14 place-items-center rounded-full border border-border/40 text-fg transition hover:bg-fg hover:text-bg sm:right-10" aria-label="Scroll to work" data-cursor>
        ↓
      </a>
    </section>
  );
}
