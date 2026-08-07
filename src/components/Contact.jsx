import Reveal from './Reveal.jsx';
import Socials from './Socials.jsx';
import { site, waLink } from '../data/site.js';
import { WhatsAppIcon } from './icons.jsx';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden p-8 text-center sm:p-14">
            <div className="absolute inset-0 grid-tex opacity-60" />
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[90px]" />
            <div className="relative">
              <p className="eyebrow">Let's talk</p>
              <h2 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-[0.98] sm:text-6xl">
                Have a project in mind?{' '}
                <span className="text-teal-500 dark:text-teal-bright">Let's build it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                The fastest way to reach me is WhatsApp — I usually reply within a
                few hours. Prefer email? That works too.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-105"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="btn-ghost">
                  ✉ {site.email}
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <Socials />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
