// Deterministic gradient "media" placeholders so the layout is fully sized
// (good CLS) before you drop in real WebP/AVIF art or video. The `seed`
// picks a stable gradient; swap the whole component for <img>/<video> later.

const palettes = [
  ['#2ff3d0', '#0f766e'],
  ['#5eead4', '#0d9488'],
  ['#14b8a6', '#0b3b36'],
  ['#2dd4bf', '#134e4a'],
  ['#22d3ee', '#0f766e'],
  ['#34d399', '#115e59'],
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

export default function Placeholder({ seed = 'x', label, className = '', ratio = '16 / 10' }) {
  const [a, b] = palettes[hash(seed) % palettes.length];
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label ? `${label} preview` : 'Project preview'}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at 20% 15%, ${a}55, transparent 60%), radial-gradient(120% 120% at 85% 90%, ${b}55, transparent 60%), linear-gradient(135deg, ${a}, ${b})`,
        }}
      />
      {/* subtle grid overlay for a techy feel */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {label && (
        <span className="absolute bottom-3 left-4 font-mono text-xs uppercase tracking-widest text-white/80">
          {label}
        </span>
      )}
    </div>
  );
}
