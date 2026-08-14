import { useRef, useState } from 'react';

/**
 * A phone mockup showing hardcoded app screenshots. When given multiple
 * `screens` it's a swipeable gallery (touch swipe, mouse drag, arrows, dots).
 * No iframe / live app — just images, so it always works.
 */
export default function PhoneFrame({ screens, poster, title = 'App', className = '' }) {
  const imgs = (screens && screens.length ? screens : poster ? [poster] : []).filter(Boolean);
  const track = useRef(null);
  const [idx, setIdx] = useState(0);
  const multi = imgs.length > 1;

  const goTo = (i) => {
    const t = track.current;
    if (!t) return;
    const n = Math.max(0, Math.min(imgs.length - 1, i));
    const child = t.children[n];
    if (child) t.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
  };
  const onScroll = () => {
    const t = track.current;
    if (!t) return;
    setIdx(Math.round(t.scrollLeft / t.clientWidth));
  };

  // mouse drag-to-swipe (desktop)
  const drag = useRef({ down: false, x: 0, left: 0 });
  const onDown = (e) => {
    const t = track.current;
    drag.current = { down: true, x: e.clientX, left: t.scrollLeft };
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    goTo(Math.round(track.current.scrollLeft / track.current.clientWidth));
  };

  return (
    <div className={`mx-auto w-full max-w-[340px] ${className}`}>
      {/* phone body */}
      <div className="relative" style={{ aspectRatio: '9 / 19' }}>
        <div className="absolute inset-0 rounded-[2.6rem] bg-[#0d0d10] p-[0.5rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
          <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
            {/* notch */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* screenshot track */}
            <div
              ref={track}
              onScroll={onScroll}
              onMouseDown={onDown}
              onMouseMove={onMove}
              onMouseUp={onUp}
              onMouseLeave={onUp}
              className={`flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                multi ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
            >
              {imgs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} screen ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                  className="h-full w-full flex-none snap-center select-none object-cover object-top"
                />
              ))}
            </div>

            {/* arrows */}
            {multi && (
              <>
                <button
                  onClick={() => goTo(idx - 1)}
                  className="absolute left-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-0"
                  aria-label="Previous screen"
                  disabled={idx === 0}
                  data-cursor
                >
                  ‹
                </button>
                <button
                  onClick={() => goTo(idx + 1)}
                  className="absolute right-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-0"
                  aria-label="Next screen"
                  disabled={idx === imgs.length - 1}
                  data-cursor
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* dots */}
      {multi && (
        <div className="mt-5 flex justify-center gap-2">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to screen ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-rust' : 'w-2 bg-fg/25'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
