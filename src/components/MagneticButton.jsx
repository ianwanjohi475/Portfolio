import { useRef } from 'react';
import { gsap } from 'gsap';

/**
 * A button/link that magnetically follows the cursor within its bounds — a
 * classic award-site micro-interaction. Falls back to a plain button when
 * reduced-motion is preferred.
 */
export default function MagneticButton({
  children,
  as = 'a',
  className = '',
  strength = 0.4,
  ...props
}) {
  const ref = useRef(null);
  const Tag = as;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
