/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens driven by CSS vars — flip per theme (see index.css)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        // Handshake-style palette: lime accent + deep teal-forest + sage.
        // (Kept under the `teal` key so existing token classes keep working.)
        teal: {
          bright: '#cdf24a', // lime / chartreuse — signature accent
          400: '#8bbf63', // sage / olive green
          500: '#4f8060', // mid green
          600: '#2f5645', // deep teal-green
          700: '#1f3f36', // forest
          ink: '#152a0d', // dark text placed on lime
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        heavy: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.96)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
