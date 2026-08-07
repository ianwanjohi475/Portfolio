import Socials from './Socials.jsx';
import { site } from '../data/site.js';

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Projects', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: site.socials.github },
      { label: 'LinkedIn', href: site.socials.linkedin },
      { label: 'X / Twitter', href: site.socials.x },
      { label: 'Email', href: `mailto:${site.email}` },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <a href="#hero" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white font-display text-base text-teal-ink shadow-sm">
                IW
              </span>
              <span className="font-display text-lg">Ian Wanjohi</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Creative developer building fast, professional web experiences.
              Available for freelance & collaborations.
            </p>
            <div className="mt-5">
              <Socials />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('#') ? undefined : '_blank'}
                      rel={l.href.startsWith('#') ? undefined : 'noreferrer noopener'}
                      className="text-fg/70 transition hover:text-teal-bright"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} Ian Wanjohi. Built with React, Vite &amp; GSAP.
          </p>
          <a href="#hero" className="text-sm text-muted transition hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
