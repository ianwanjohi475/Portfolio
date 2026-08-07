/**
 * Fixed, full-viewport backdrop shared by every section.
 * LIGHT: one continuous deep-teal → sage/olive gradient (Handshake-style),
 * top to bottom. DARK: near-black green with soft glows. Grid overlay + var.
 */
export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* LIGHT gradient */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(80% 70% at 82% 88%, rgba(150,168,99,0.55) 0%, transparent 55%), linear-gradient(157deg, #143029 0%, #21453a 32%, #375641 62%, #587a4f 100%)',
        }}
      />
      {/* DARK base + glows */}
      <div className="absolute inset-0 hidden bg-bg dark:block">
        <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-teal-600/25 blur-[130px]" />
        <div className="absolute bottom-0 right-[-10%] h-[50vh] w-[50vh] rounded-full bg-teal-bright/10 blur-[130px]" />
        <div className="absolute left-[-10%] top-1/3 h-[45vh] w-[45vh] rounded-full bg-teal-500/12 blur-[130px]" />
      </div>

      {/* grid overlay (theme-aware via --grid) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* gentle darken at the very bottom so footer text stays readable in light */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-black/25 dark:to-transparent" />
    </div>
  );
}
