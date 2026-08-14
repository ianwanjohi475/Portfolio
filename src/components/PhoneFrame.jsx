import { useState } from 'react';

/**
 * A phone mockup. As a poster it shows a screenshot; as `interactive` it shows
 * a "Launch" button that mounts the real app in an iframe so visitors can test
 * it right in the browser (ThemeForest-style), loading it only on demand.
 */
export default function PhoneFrame({ poster, src, title = 'App preview', interactive = false, className = '' }) {
  const [launched, setLaunched] = useState(false);

  return (
    <div className={`relative mx-auto w-full max-w-[340px] ${className}`} style={{ aspectRatio: '9 / 19' }}>
      {/* body */}
      <div className="absolute inset-0 rounded-[2.6rem] bg-[#0d0d10] p-[0.5rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
          {/* notch / island */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {launched && src ? (
            <iframe
              src={src}
              title={`${title} — live`}
              className="h-full w-full border-0"
              allow="clipboard-write; camera; fullscreen"
            />
          ) : (
            <>
              {poster && (
                <img src={poster} alt={title} loading="lazy" className="h-full w-full object-cover object-top" />
              )}
              {interactive && src && (
                <button
                  onClick={() => setLaunched(true)}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
