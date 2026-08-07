/**
 * Fixed, full-viewport backdrop shared by every section: a teal grid that
 * fades toward the edges, plus a few soft teal glows. Pure CSS — zero JS cost.
 */
export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />

      {/* teal grid, masked to fade at the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(45,212,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 90%)',
        }}
      />

      {/* ambient teal glows */}
      <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-teal-600/25 blur-[130px]" />
      <div className="absolute bottom-0 right-[-10%] h-[50vh] w-[50vh] rounded-full bg-teal-bright/10 blur-[130px]" />
      <div className="absolute left-[-10%] top-1/3 h-[45vh] w-[45vh] rounded-full bg-teal-500/12 blur-[130px]" />

      {/* subtle vignette so text stays crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,transparent,rgba(7,16,15,0.6))]" />
    </div>
  );
}
