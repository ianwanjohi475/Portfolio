/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (theme-aware via CSS vars — see index.css)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        // Hektor palette
        rust: { DEFAULT: '#9d2e13', hover: '#d5350e' },
        cream: '#e9e6de',
        ink: '#16171a',
      },
      fontFamily: {
        // Everything is monospace, Hektor-style
        display: ['"Cascadia Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Cascadia Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        mono: ['"Cascadia Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeRev: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        marqueeRev: 'marqueeRev 24s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
