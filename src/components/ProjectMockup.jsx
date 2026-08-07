// Lightweight, CSS-only "screenshot" mockups so project previews read as real
// products (a browser site, a phone app, a game screen) instead of flat
// gradients. Deterministic per category; swap for a real <img> when you have
// screenshots (drop them in /src/assets and render an <img> here).

const bar = (w, c = 'bg-black/15') => (
  <span className={`block h-1.5 rounded-full ${c}`} style={{ width: w }} />
);

function BrowserMock({ accent }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[#0d1712] p-4">
      <div className="absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(70% 60% at 30% 0%, ${accent}22, transparent 60%)` }} />
      <div className="relative w-[86%] overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/40 ring-1 ring-black/10">
        {/* chrome */}
        <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#f3f4f2] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 h-3 flex-1 rounded-full bg-black/[0.06]" />
        </div>
        {/* page */}
        <div className="p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="h-3 w-3 rounded" style={{ background: accent }} />
            <div className="flex items-center gap-2">
              {bar(18)} {bar(18)} {bar(18)}
              <span className="h-3 w-8 rounded-full" style={{ background: accent }} />
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="block h-3 w-3/5 rounded bg-black/20" />
            <span className="block h-3 w-2/5 rounded bg-black/20" />
            {bar('55%')}
            <span className="mt-1 block h-4 w-16 rounded-full" style={{ background: accent }} />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md bg-black/[0.05] p-2">
                <span className="mb-1 block h-6 rounded" style={{ background: `${accent}33` }} />
                {bar('80%')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ accent }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[#0d1712] p-3">
      <div className="absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(70% 60% at 70% 10%, ${accent}22, transparent 60%)` }} />
      <div className="relative h-[92%] w-[132px] overflow-hidden rounded-[1.4rem] bg-white p-2 shadow-2xl shadow-black/40 ring-1 ring-black/10">
        <div className="mx-auto mb-2 mt-0.5 h-1.5 w-10 rounded-full bg-black/20" />
        <div className="mb-2 flex items-center justify-between">
          <span className="block h-3 w-10 rounded bg-black/20" />
          <span className="h-5 w-5 rounded-full" style={{ background: accent }} />
        </div>
        <div className="mb-2 h-5 rounded-full bg-black/[0.06]" />
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-black/[0.05] p-1.5">
              <span className="h-6 w-6 rounded-md" style={{ background: `${accent}44` }} />
              <div className="flex-1 space-y-1">
                {bar('70%')} {bar('45%')}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-around rounded-full bg-black/[0.06] py-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full" style={{ background: i === 0 ? accent : 'rgba(0,0,0,0.2)' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GameMock({ accent }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, #0b2a3a 0%, #0f1c22 60%, #0b1712 100%)` }} />
      <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(60% 50% at 50% 22%, ${accent}33, transparent 60%)` }} />
      {/* stars */}
      {[[18, 20], [70, 14], [45, 30], [85, 40], [30, 55]].map(([l, t], i) => (
        <span key={i} className="absolute h-1 w-1 rounded-full bg-white/70" style={{ left: `${l}%`, top: `${t}%` }} />
      ))}
      {/* planet + player */}
      <span className="absolute right-6 top-6 h-10 w-10 rounded-full" style={{ background: `${accent}66`, boxShadow: `0 0 24px ${accent}55` }} />
      <span className="absolute bottom-8 left-10 h-6 w-6 rounded-full bg-white shadow-lg" />
      {/* ground platforms */}
      <span className="absolute bottom-5 left-6 h-2 w-16 rounded-full" style={{ background: accent }} />
      <span className="absolute bottom-10 left-28 h-2 w-12 rounded-full" style={{ background: `${accent}aa` }} />
      {/* HUD */}
      <div className="absolute inset-x-3 top-3 flex items-center justify-between">
        <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-white/90">SCORE 04820</span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => <span key={i} className="text-[10px]" style={{ color: accent }}>♥</span>)}
        </div>
      </div>
    </div>
  );
}

const accents = { Websites: '#3ddc84', Apps: '#2dd4bf', Games: '#7c9cff' };

export default function ProjectMockup({ project }) {
  const accent = accents[project.category] || '#3ddc84';
  if (project.category === 'Apps') return <PhoneMock accent={accent} />;
  if (project.category === 'Games') return <GameMock accent={accent} />;
  return <BrowserMock accent={accent} />;
}
