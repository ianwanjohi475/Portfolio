const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Lab', href: '#lab' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/ianwanjohi475' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ianwanjohi' },
      { label: 'X / Twitter', href: 'https://x.com' },
      { label: 'Email', href: 'mailto:hello@ianwanjohi.dev' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface pt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl uppercase leading-tight">
              Creative developer <br />
              <span className="text-teal-grad">for the modern web</span>
            </h2>
            <a href="#contact" className="btn-teal mt-6">
              Start a project
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('#') ? undefined : '_blank'}
                      rel={l.href.startsWith('#') ? undefined : 'noreferrer noopener'}
                      className="text-white/70 transition hover:text-teal-bright"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line py-6 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} Ian Wanjohi. Built with React, Vite &amp; GSAP.
          </p>
          <a href="#hero" className="text-sm text-white/60 transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Giant signature wordmark */}
      <div
        className="pointer-events-none select-none px-4 pb-2 text-center font-display uppercase leading-none text-teal-bright"
        style={{ fontSize: 'clamp(3rem, 19vw, 20rem)' }}
        aria-hidden="true"
      >
        Ian Wanjohi
      </div>
    </footer>
  );
}
