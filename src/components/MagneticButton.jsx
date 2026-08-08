import { useRef } from 'react';
import { gsap, prefersReduced } from '../lib/gsap.js';

/** A button/link that magnetically leans toward the cursor. */
export default function MagneticButton({ as = 'a', className = '', children, strength = 0.4, ...props }) {
  const ref = useRef(null);
  const Tag = as;

  const onMove = (e) => {
    if (prefersReduced()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
      duration: 0.5,
      ease: 'power3.out',
    });
  };
  const onLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });

  return (
    <Tag ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave} data-cursor {...props}>
      {children}
    </Tag>
  );
}
