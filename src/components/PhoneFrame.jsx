import { useEffect, useRef, useState } from 'react';

/**
 * A phone mockup.
 *  - default: shows a screenshot poster.
 *  - `autoLoad`: mounts the real app in an iframe as soon as the phone scrolls
 *    into view, so the live app "just runs" (loaded lazily to keep the page fast).
 *  - `interactive`: shows a tap-to-launch button instead of auto-loading.
 */
export default function PhoneFrame({
  poster,
  src,
  title = 'App preview',
  interactive = false,
  autoLoad = false,
  className = '',
}) {
  const wrap = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // auto-mount the iframe when the phone enters the viewport
  useEffect(() => {
    if (!autoLoad || !src || mounted) return;
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoLoad, src, mounted]);

  const showIframe = mounted && src;

  return (
    <div ref={wrap} className={`relative mx-auto w-full max-w-[340px] ${className}`} style={{ aspectRatio: '9 / 19' }}>
      {/* body */}
      <div className="absolute inset-0 rounded-[2.6rem] bg-[#0d0d10] p-[0.5rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
          {/* notch / island */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* poster stays underneath as a loading frame / fallback */}
          {poster && (
            <img
              src={poster}
              alt={title}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                showIframe && loaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}

          {showIframe && (
            <iframe
              src={src}
              title={`${title} — live`}
              onLoad={() => setLoaded(true)}
              className="absolute inset-0 h-full w-full border-0"
              allow="clipboard-write; camera; fullscreen"
            />
          )}

          {/* loading hint while the app boots */}
          {showIframe && !loaded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center">
              <span className="rounded-full bg-ink/85 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                Loading live app…
              </span>
            </div>
          )}

          {/* tap-to-launch (only when not auto-loading) */}
          {interactive && !autoLoad && !mounted && src && (
            <button
              onClick={() => setMounted(true)}
              className="group absolute inset-0 z-10 grid place-items-center bg-black/25 transition hover:bg-black/35"
              aria-label="Launch live demo"
              data-cursor
            >
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg transition group-hover:scale-105">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-rust text-white">▶</span>
                Launch live demo
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
