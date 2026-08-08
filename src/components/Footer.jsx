import Socials from './Socials.jsx';
import { site, waLink } from '../data/site.js';

const cols = [
  { title: 'Explore', links: [
    { label: 'Work', href: '#work' }, { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' }, { label: 'Awards', href: '#awards' },
  ] },
  { title: 'Sitemap', links: [
    { label: 'Testimonials', href: '#testimonials' }, { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: site.resume }, { label: 'GitHub', href: site.socials.github },
  ] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-border/25 pt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Ready to push<br />beyond limits?
            </h2>
            <a href={waLink()} target="_blank" rel="noreferrer noopener" className="btn-dark mt-7" data-cursor>
              Let's Connect ✉
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('#') ? undefined : '_blank'} rel={l.href.startsWith('#') ? undefined : 'noreferrer noopener'} className="rust-link text-fg/80 hover:!text-rust" data-cursor>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Contact</p>
            <p className="text-fg/80">Nairobi, Kenya</p>
            <a href={`mailto:${site.email}`} className="mt-2 block rust-link" data-cursor>{site.email}</a>
            <div className="mt-5"><Socials /></div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/20 py-6 text-sm text-muted sm:flex-row">
          <p>© {year} Ian Wanjohi. All rights reserved.</p>
          <a href="#hero" className="hover:text-fg" data-cursor>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
