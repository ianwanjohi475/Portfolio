import Reveal from './Reveal.jsx';
import { site, waLink } from '../data/site.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28 text-center">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Creative power</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mega mx-auto max-w-5xl">
            Time to make <span className="italic text-rust">boring</span> illegal
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            Let's make something great together. The fastest way to reach me is
            WhatsApp — I usually reply within a few hours.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer noopener" className="btn-dark" data-cursor>Chat on WhatsApp</a>
            <a href={`mailto:${site.email}`} className="btn-outline" data-cursor>{site.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
