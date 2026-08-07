import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton.jsx';

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
        .from('.hero-char', {
          yPercent: 115,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
        })
        .from('.hero-fade', { y: 22, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.55');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Soft blurred teal gradient backdrop (cheap, GPU-light) */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-teal-600/40 blur-[120px] animate-blob" />
        <div className="absolute right-[8%] top-[12%] h-[42vh] w-[42vh] rounded-full bg-teal-bright/20 blur-[110px] animate-blob" />
        <div className="absolute bottom-[6%] left-[6%] h-[40vh] w-[40vh] rounded-full bg-teal-500/25 blur-[110px] animate-blob" />
        {/* fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="container-x w-full text-center">
        <p className="eyebrow hero-fade">Creative Developer · Nairobi, Kenya</p>

        <h1 className="mega text-white">
          {[LINE1, LINE2].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              {line.split('').map((c, i) => (
                <span
                  key={i}
                  className={`hero-char inline-block will-change-transform ${
                    li === 1 ? 'text-teal-grad' : ''
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

        <p className="hero-fade mx-auto mt-8 max-w-2xl text-lg text-white/70 sm:text-xl">
          I design and build fast, cinematic web experiences — high-craft
          interfaces with motion that feels alive and performance that scores 90+.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="#work" className="btn-teal">
            View my work
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            Get in touch
          </MagneticButton>
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
