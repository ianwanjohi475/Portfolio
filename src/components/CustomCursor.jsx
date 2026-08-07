import { useEffect, useRef } from 'react';

/**
 * A soft follower ring that trails the mouse and grows over interactive
 * elements. Desktop (fine pointer) only, and disabled for reduced-motion.
 * Purely additive — the native cursor stays visible.
 */
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduce) return;

    const r = ring.current;
    const d = dot.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      d.style.transform = `translate(${mx}px, ${my}px)`;
      // grow when over something clickable
      const interactive = e.target.closest('a, button, input, textarea, [role="tab"], [data-cursor]');
      r.dataset.active = interactive ? 'true' : 'false';
    };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
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
      <div ref={ring} className="cursor-ring" data-active="false" aria-hidden="true" />
    </>
  );
}
