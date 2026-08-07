import Reveal from './Reveal.jsx';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-white/5 bg-surface py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">
            Services &amp; <span className="text-teal-grad">capabilities</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass p-6 transition-colors hover:border-teal-400/40">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                  <span aria-hidden="true">{s.icon}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
