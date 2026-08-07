import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './icons.jsx';

/** Light/dark switch. Persists to localStorage; the initial class is set
 *  pre-paint by the inline script in index.html. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : true,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      /* ignore */
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="icon-btn"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
