import Reveal from './Reveal.jsx';
import { testimonials } from '../data/content.js';
import { site } from '../data/site.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* cards */}
        <div className="order-2 space-y-6 lg:order-1">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="rounded-3xl border border-border/25 bg-card p-8">
                <span className="font-display text-4xl leading-none text-rust" aria-hidden="true">“</span>
                <blockquote className="mt-2 text-xl italic leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="text-fg">— {t.name}</span>
                  <span className="text-muted">, {t.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* sticky heading */}
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Testimonials</p>
              <h2 className="font-display text-6xl font-bold leading-[0.95] sm:text-7xl">
                What<br />They<br />Say
              </h2>
              <p className="mt-6 max-w-xs text-muted">
                Genuine words from the people I've had the pleasure to work with.
              </p>
              <a href={`mailto:${site.email}`} className="btn-outline mt-8" data-cursor>
                Work with me
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
