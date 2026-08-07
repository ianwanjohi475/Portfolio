import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './icons.jsx';

/** Reflects the current theme (Sun in dark, Moon in light). Watches the
 *  `dark` class on <html> so it stays in sync no matter who toggles it. */
export function ThemeGlyph() {
  const [dark, setDark] = useState(
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : true,
  );

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains('dark')));
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return dark ? <SunIcon /> : <MoonIcon />;
}

/** Standalone toggle button (used where a self-contained control is handy). */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      /* ignore */
    }
  };
  return (
    <button onClick={toggle} className="icon-btn" aria-label="Toggle theme" data-cursor>
      <ThemeGlyph />
    </button>
  );
}
