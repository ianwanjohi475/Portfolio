import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/70 py-2 pl-2 pr-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:pl-3"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-bright font-display text-lg text-teal-ink"
          aria-label="Ian Wanjohi — home"
        >
          IW
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-teal-bright px-5 py-2 text-sm font-semibold text-teal-ink transition hover:brightness-105 sm:inline-block"
          >
            Let's talk
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink/95 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-teal w-full"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
