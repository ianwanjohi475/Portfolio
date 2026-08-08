/** Fixed, full-viewport backdrop: flat theme background + a faint grid,
 *  Hektor-style. */
export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-bg" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />
    </div>
  );
}
