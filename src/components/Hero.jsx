import { Suspense, lazy, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton.jsx';

// The 3D canvas is code-split so the hero text paints immediately (good FCP).
const HeroScene = lazy(() => import('./three/HeroScene.jsx'));

const NAME = 'Ian Wanjohi';

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray('.hero-char');
      if (prefersReduced) {
        gsap.set(['.hero-char', '.hero-fade'], { opacity: 1, y: 0 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from(chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.04,
        duration: 1,
      }).from(
        '.hero-fade',
        { y: 24, opacity: 0, stagger: 0.15, duration: 0.8 },
        '-=0.5',
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Suspense fallback={<div className="h-full w-full bg-ink" />}>
          <HeroScene />
        </Suspense>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink" />
      </div>

      <div className="container-x">
        <p className="eyebrow hero-fade">Creative Developer · 3D Web Engineer</p>
        <h1 className="section-title !text-6xl font-display font-bold leading-[0.95] sm:!text-8xl">
          <span className="block overflow-hidden">
            {NAME.split('').map((c, i) => (
              <span
                key={i}
                className="hero-char inline-block will-change-transform"
                aria-hidden="true"
              >
                {c === ' ' ? ' ' : c}
              </span>
            ))}
          </span>
          <span className="sr-only">{NAME}</span>
        </h1>
        <p className="hero-fade mt-6 max-w-xl text-lg text-white/70">
          I craft cinematic, high-performance web experiences — blending 3D,
          motion and thoughtful engineering into products people remember.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href="#projects"
            className="inline-block rounded-full bg-white px-7 py-3 font-medium text-ink transition hover:bg-white/90"
          >
            View my work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-block rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Get in touch
          </MagneticButton>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/50"
        aria-label="Scroll to explore"
      >
        <span className="mb-2 block">Scroll</span>
        <span className="mx-auto block h-10 w-[1px] animate-pulse bg-white/40" />
      </a>
    </section>
  );
}
