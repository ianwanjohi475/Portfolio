import { useEffect, useRef, useState } from 'react';

// The iframe renders the site at a desktop width, then we scale it down to the
// card and translate it upward on hover so you watch the *live* site scroll.
const BASE_W = 1440; // desktop layout width
const FULL_H = 3200; // tall enough to reveal most of a landing page

export default function LivePreview({ url, poster, title, scrollSeconds = 7 }) {
  const win = useRef(null);
  const scaler = useRef(null);
  const frame = useRef(null);
  const [armed, setArmed] = useState(false); // mount iframe after first hover
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // keep the scale + scroll distance correct for the card's current size
  useEffect(() => {
    const el = win.current;
    if (!el) return;
    const apply = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const scale = w / BASE_W;
      if (scaler.current) scaler.current.style.transform = `scale(${scale})`;
      if (frame.current) {
        const winUnscaled = h / scale; // window height in the iframe's own units
        frame.current.style.setProperty('--sy', `${-(FULL_H - winUnscaled)}px`);
      }
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [armed]);

  return (
    <div
      ref={win}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => {
        setArmed(true);
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* screenshot fallback (also shown until the iframe paints, or if the
          site refuses to be embedded) */}
      <img
        src={poster}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {armed && (
        <div
          ref={scaler}
          className="pointer-events-none absolute left-0 top-0 origin-top-left"
          style={{ width: BASE_W }}
          aria-hidden="true"
        >
          <iframe
            ref={frame}
            src={url}
            title={`${title} — live preview`}
            width={BASE_W}
            height={FULL_H}
            loading="lazy"
            scrolling="no"
            tabIndex={-1}
            onLoad={() => setLoaded(true)}
            className="block border-0 will-change-transform"
            style={{
              transform: hovered ? 'translateY(var(--sy))' : 'translateY(0)',
              transition: `transform ${hovered ? scrollSeconds : 1.2}s linear`,
              opacity: loaded ? 1 : 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
