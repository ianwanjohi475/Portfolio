/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, near-black teal-tinted background stack
        ink: '#07100f',
        surface: '#0b1614',
        panel: '#0f1d1a',
        line: '#1c302c',
        // Teal brand system — bright signature + supporting shades
        teal: {
          bright: '#2ff3d0', // the signature "pop" color (like Handshake's lime)
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          ink: '#04231e', // dark text placed on bright teal
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        heavy: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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
        marquee: 'marquee 26s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
