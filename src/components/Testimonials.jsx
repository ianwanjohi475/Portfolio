import Reveal from './Reveal.jsx';
import { testimonials } from '../data/content.js';

const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow">Kind words</p>
              <h2 className="section-title">
                What clients <span className="text-teal-grad">say</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted">
              Selected feedback from founders and teams I've partnered with.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card group flex h-full flex-col p-7">
                <div className="absolute inset-0 grid-tex opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-1 flex-col">
                  <span className="font-display text-5xl leading-none text-teal-500/40" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-fg/85">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="mono-tile h-11 w-11 text-sm">{initials(t.name)}</span>
                    <span>
                      <span className="block font-display text-base">{t.name}</span>
                      <span className="block text-sm text-muted">{t.title}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
