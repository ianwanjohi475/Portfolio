import { motion } from 'framer-motion';

/**
 * Lightweight scroll-reveal wrapper built on Framer Motion's viewport
 * detection. Fades + slides children in once, when they enter the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as = 'div',
  className = '',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
