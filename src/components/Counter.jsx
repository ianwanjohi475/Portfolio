import { useEffect, useRef, useState } from 'react';
import { gsap, prefersReduced } from '../lib/gsap.js';

/** Counts up to `value` the first time it scrolls into view (GSAP tween). */
export default function Counter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setDisplay(value);
      return;
    }
    const obj = { v: 0 };
    let tween;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tween = gsap.to(obj, {
            v: value,
            duration,
            ease: 'power2.out',
            onUpdate: () => setDisplay(Math.round(obj.v)),
          });
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween && tween.kill();
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
