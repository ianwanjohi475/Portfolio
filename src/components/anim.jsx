import { useEffect, useRef } from 'react';
import { gsap, prefersReduced } from '../lib/gsap.js';

/** Fade + slide up on scroll. If `stagger` is set, animates direct children. */
export function Reveal({ children, as = 'div', className = '', y = 26, delay = 0, stagger }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger ? el.children : el;
    if (prefersReduced()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        stagger: stagger || 0,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, stagger, y]);
  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/** Heading that rises out of a mask (Hektor-style). Splits into words so the
 *  reveal staggers word by word. */
export function MaskText({ text, as = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll('.mask-inner');
    if (prefersReduced()) {
      gsap.set(inners, { yPercent: 0, opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(inners, {
        yPercent: 115,
        opacity: 0,
        duration: 1,
        delay,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, text]);

  const Tag = as;
  const words = String(text).split(' ');
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="mask-inner inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Image that reveals with a clip-path wipe + subtle scale on scroll.
 *  `full` renders the image at its natural height (good for tall full-page
 *  screenshots); otherwise it fills the given `ratio`. */
export function RevealImage({ src, alt = '', className = '', imgClass = '', ratio, full = false }) {
  const wrap = useRef(null);
  const img = useRef(null);
  useEffect(() => {
    const w = wrap.current;
    const im = img.current;
    if (!w || !im) return;
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {
      gsap.set(w, { clipPath: 'inset(0 0 100% 0)' });
      if (!full) gsap.set(im, { scale: 1.25 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: w, start: 'top 85%', once: true } });
      tl.to(w, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.inOut' });
      if (!full) tl.to(im, { scale: 1, duration: 1.4, ease: 'power3.out' }, 0);
    }, w);
    return () => ctx.revert();
  }, [src, full]);
  return (
    <div ref={wrap} className={className} style={!full && ratio ? { aspectRatio: ratio } : undefined}>
      <img
        ref={img}
        src={src}
        alt={alt}
        loading="lazy"
        className={full ? `block w-full ${imgClass}` : `h-full w-full object-cover ${imgClass}`}
      />
    </div>
  );
}
