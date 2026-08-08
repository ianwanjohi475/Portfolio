import { useEffect, useRef } from 'react';

/**
 * Hektor-style follower cursor:
 *  - a small dot pinned to the pointer
 *  - a ring that trails with easing, grows over interactive elements, and
 *    turns into a filled label disc ("View") over elements that declare
 *    data-cursor-label.
 * Desktop (fine pointer) + non-reduced-motion only.
 */
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const d = dot.current;
    const r = ring.current;
    const lab = label.current;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      d.style.transform = `translate(${mx}px, ${my}px)`;
      const labelled = e.target.closest('[data-cursor-label]');
      const interactive = e.target.closest('a, button, [data-cursor], [role="tab"], input, textarea');
      if (labelled) {
        r.dataset.mode = 'label';
        lab.textContent = labelled.getAttribute('data-cursor-label') || 'View';
      } else {
        r.dataset.mode = interactive ? 'active' : '';
        lab.textContent = '';
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      r.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    document.documentElement.classList.add('has-cursor');
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" data-mode="" aria-hidden="true">
        <span ref={label} className="cursor-label" />
      </div>
    </>
  );
}
