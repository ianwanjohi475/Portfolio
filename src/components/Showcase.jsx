import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const cards = [
  { tag: 'CW', title: 'Aurora Commerce', meta: 'Headless storefront · 3D configurator', accent: '#2dd4bf' },
  { tag: 'PA', title: 'Pulse Analytics', meta: 'Realtime dashboard · WebGL charts', accent: '#5eead4' },
  { tag: 'OR', title: 'Orbit Runner', meta: 'Browser game · 60fps physics', accent: '#14b8a6' },
];

export default function Showcase() {
  return (
    <section className="scroll-mt-24 py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Bright teal panel with floating cards */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(120% 120% at 15% 10%, #2ff3d0, #14b8a6 45%, #0f766e 100%)',
              }}
            />
            <div className="relative space-y-4">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-teal-700/20 ${
                    i === 1 ? 'lg:translate-x-6' : ''
                  }`}
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm text-white"
                    style={{ background: c.accent }}
                  >
                    {c.tag}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base text-teal-ink">{c.title}</p>
                    <p className="truncate text-sm text-teal-700/80">{c.meta}</p>
                  </div>
                  <span className="ml-auto hidden shrink-0 rounded-full bg-teal-ink px-3 py-1 text-xs font-semibold text-teal-bright sm:block">
                    Live
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The work</p>
            <h2 className="section-title">
              Products that <span className="text-teal-grad">ship &amp; perform</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-white/70">
              From marketing sites that convert to full web apps, I build
              interfaces that look premium and load fast. Every project is
              measured — Core Web Vitals, accessibility, real devices.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3 text-white/70">
              {[
                'Design-led engineering, not just wiring frames together',
                'Motion & micro-interactions with GSAP + Framer Motion',
                'Lighthouse 90+ with code-splitting and lazy assets',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 text-teal-bright">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#work" className="btn-teal mt-9">
              Explore projects
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
