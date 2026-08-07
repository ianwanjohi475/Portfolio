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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={false}
        animate={{
          maxWidth: scrolled ? 760 : 1280,
          backgroundColor: scrolled ? 'rgba(7,16,15,0.72)' : 'rgba(7,16,15,0)',
          borderColor: scrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0)',
          paddingLeft: scrolled ? 10 : 8,
          paddingRight: scrolled ? 10 : 8,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className="flex w-full items-center justify-between gap-3 rounded-full border py-2 backdrop-blur-xl"
      >
        {/* Logo: full wordmark → compact monogram */}
        <a href="#hero" className="flex items-center gap-2.5 pl-2" aria-label="Ian Wanjohi — home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-bright font-display text-base text-teal-ink">
            IW
          </span>
          <AnimatePresence initial={false}>
            {!scrolled && (
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

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-teal-bright"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 pr-1">
          <a
            href="#work"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:text-white lg:inline-block"
          >
            View work
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-teal-bright px-5 py-2 text-sm font-semibold text-teal-ink transition hover:brightness-110 sm:inline-block"
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
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-3 top-[4.5rem] overflow-hidden rounded-3xl border border-white/10 bg-ink/95 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-teal-bright"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-teal w-full">
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
