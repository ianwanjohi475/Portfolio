import { useEffect, useState } from 'react';
import { ThemeGlyph } from './ThemeToggle.jsx';
import { site, waLink } from '../data/site.js';
import { DownloadIcon, MailIcon, PhoneIcon } from './icons.jsx';

const telHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`;

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'border-b border-border/15 bg-bg/80 backdrop-blur-md' : ''}`}>
      {/* top contact ribbon — email + phone */}
      <div className="bg-fg text-bg">
        <div className="container-x flex items-center justify-between gap-4 py-1.5 font-mono text-[11px] sm:text-xs">
          <a href={`mailto:${site.email}`} className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-rust" data-cursor>
            <MailIcon className="shrink-0" />
            <span className="truncate">{site.email}</span>
          </a>
          <a href={telHref} className="inline-flex shrink-0 items-center gap-1.5 transition-colors hover:text-rust" data-cursor>
            <PhoneIcon className="shrink-0" />
            <span>{site.phone}</span>
          </a>
        </div>
      </div>

      <nav className="container-x flex items-center justify-between py-4" aria-label="Primary">
        <a href="#hero" className="font-display text-2xl font-bold tracking-tight" aria-label={`${site.name} — home`} data-cursor>
          IW<span className="text-rust">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm text-fg/75 transition-colors hover:text-fg" data-cursor>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-border/30 text-fg transition hover:bg-fg hover:text-bg" aria-label="Toggle theme" title="Toggle light / dark" data-cursor>
            <ThemeGlyph />
          </button>
          <a href={site.resume} download className="hidden items-center gap-2 rounded-full border border-border/30 px-4 py-2 text-sm text-fg transition hover:bg-fg hover:text-bg sm:inline-flex" data-cursor>
            <DownloadIcon /> Resume
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer noopener" className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-rust sm:inline-block" data-cursor>
            Let's Talk
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-border/30 text-fg lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* mobile menu (CSS height transition) */}
      <div className={`overflow-hidden border-t border-border/15 bg-bg transition-[max-height] duration-300 ease-out lg:hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="container-x flex flex-col py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-fg/80 transition hover:text-rust">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={waLink()} target="_blank" rel="noreferrer noopener" onClick={() => setOpen(false)} className="btn-dark w-full">
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
