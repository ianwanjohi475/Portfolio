/**
 * Fixed, full-viewport backdrop shared by every section: a teal grid that
 * fades toward the top, plus soft teal glows. Theme-aware via CSS vars.
 */
export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-bg" />

      {/* teal grid, masked to fade at the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(130% 100% at 50% 0%, #000 35%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(130% 100% at 50% 0%, #000 35%, transparent 92%)',
        }}
      />

      {/* ambient teal glows */}
      <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[130px] dark:bg-teal-600/25" />
      <div className="absolute bottom-0 right-[-10%] h-[50vh] w-[50vh] rounded-full bg-teal-400/10 blur-[130px]" />
      <div className="absolute left-[-10%] top-1/3 h-[45vh] w-[45vh] rounded-full bg-teal-500/10 blur-[130px]" />
    </div>
  );
}
