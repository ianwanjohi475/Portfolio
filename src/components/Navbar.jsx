import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeGlyph } from './ThemeToggle.jsx';
import Socials from './Socials.jsx';
import { site, waLink } from '../data/site.js';
import { DownloadIcon } from './icons.jsx';

const links = [
  { href: '#work', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const top = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  const linkCls = top
    ? 'text-white/85 hover:text-white'
    : 'text-fg/75 hover:text-teal-600 dark:hover:text-teal-bright';
  const iconCls = top
    ? 'grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20'
    : 'icon-btn';

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={false}
        animate={{ maxWidth: scrolled ? 900 : 1280 }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className={`flex w-full items-center justify-between gap-3 rounded-full border py-2 pl-2 pr-2 transition-colors duration-300 ${
          scrolled ? 'border-border bg-card/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#hero" className="flex items-center gap-2.5 pl-1" aria-label={`${site.name} — home`}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-bright font-display text-base text-teal-ink">
            IW
          </span>
          <AnimatePresence initial={false}>
            {top && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.25 }}
                className="hidden overflow-hidden whitespace-nowrap font-display text-lg text-white sm:inline-block"
              >
                Ian Wanjohi
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium transition-colors ${linkCls}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 pr-1">
          <AnimatePresence initial={false}>
            {top && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="hidden overflow-hidden md:flex"
              >
                <Socials light />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => {
              const root = document.documentElement;
              const dark = root.classList.toggle('dark');
              try {
                localStorage.setItem('theme', dark ? 'dark' : 'light');
              } catch (e) {
                /* ignore */
              }
            }}
            className={iconCls}
            aria-label="Toggle theme"
            title="Toggle light / dark"
            data-cursor
          >
            <ThemeGlyph />
          </button>

          <a
            href={site.resume}
            download
            data-cursor
            className={
              top
                ? 'hidden items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:inline-flex'
                : 'hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-bright sm:inline-flex'
            }
          >
            <DownloadIcon /> Resume
          </a>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor
            className="hidden rounded-full bg-teal-bright px-5 py-2 text-sm font-semibold text-teal-ink transition hover:brightness-110 sm:inline-block"
          >
            Let's talk
          </a>

          <button
            className={`${iconCls} lg:hidden`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-3 top-[4.5rem] overflow-hidden rounded-3xl border border-border bg-card p-3 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-fg/80 transition hover:bg-fg/5 hover:text-teal-600 dark:hover:text-teal-bright"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between px-2">
              <Socials />
              <a href={site.resume} download className="inline-flex items-center gap-2 text-sm font-medium text-fg">
                <DownloadIcon /> Resume
              </a>
            </div>
            <a href={waLink()} target="_blank" rel="noreferrer noopener" className="btn-teal mt-3 w-full">
              Let's talk on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
