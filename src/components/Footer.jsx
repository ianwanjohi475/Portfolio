export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#hero" className="font-display text-lg font-bold">
          <span className="text-gradient">Ian Wanjohi</span>
        </a>
        <p className="text-sm text-white/50">
          © {year} Ian Wanjohi. Built with React, Three.js &amp; GSAP.
        </p>
        <div className="flex gap-5 text-sm text-white/60">
          <a href="https://github.com/ianwanjohi475" target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ianwanjohi" target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="#hero" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
