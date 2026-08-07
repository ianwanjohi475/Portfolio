const items = [
  'React',
  'TypeScript',
  'Next.js',
  'Node',
  'GSAP',
  'Framer Motion',
  'Tailwind',
  'Vite',
  'WebGL',
  'GraphQL',
  'Figma',
  'Accessibility',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="border-y border-line bg-surface py-5" aria-hidden="true">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-10 pr-10">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-xl uppercase tracking-tight text-white/25"
            >
              {t}
              <span className="text-teal-bright">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
