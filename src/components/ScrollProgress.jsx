import { useEffect, useRef } from 'react';

/** Thin rust progress bar pinned to the top (no framer — plain rAF). */
export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const update = () => {
      const el = ref.current;
      if (el) {
        const max = document.documentElement.scrollHeight - innerHeight;
        el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
      raf = null;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      raf && cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-rust"
      style={{ transform: 'scaleX(0)' }}
      aria-hidden="true"
    />
  );
}
