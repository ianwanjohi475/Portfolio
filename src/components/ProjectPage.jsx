import { Reveal, MaskText, RevealImage } from './anim.jsx';
import PhoneFrame from './PhoneFrame.jsx';
import { getProject, nextProject } from '../data/projects.js';

function Meta({ label, children }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 text-fg">{children}</p>
    </div>
  );
}

export default function ProjectPage({ id }) {
  const p = getProject(id);
  if (!p) {
    return (
      <section className="container-x flex min-h-[60svh] flex-col items-center justify-center pt-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mega">Not found</h1>
        <a href="#work" className="btn-dark mt-8" data-cursor>Back to work</a>
      </section>
    );
  }
  const next = nextProject(id);

  return (
    <article className="pt-32">
      {/* header */}
      <header className="container-x">
        <Reveal>
          <a href="#work" className="rust-link mb-8 inline-block text-sm" data-cursor>← All work</a>
        </Reveal>
        <MaskText as="h1" text={p.title} className="mega max-w-5xl" />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-xl text-muted">{p.subtitle}</p>
        </Reveal>

        <Reveal stagger={0.08} className="mt-12 grid grid-cols-2 gap-8 border-y border-border/25 py-8 sm:grid-cols-4">
          <Meta label="Client">{p.client}</Meta>
          <Meta label="Year">{p.year}</Meta>
          <Meta label="Role">{p.role}</Meta>
          <Meta label="Website">
            <a href={p.website} target="_blank" rel="noreferrer noopener" className="rust-link" data-cursor>Visit ↗</a>
          </Meta>
        </Reveal>
      </header>

      {/* hero — live phone for mobile apps, big screenshot otherwise */}
      {p.type === 'mobile' && p.demo ? (
        <section className="container-x mt-14 grid items-center gap-12 rounded-3xl border-2 border-border bg-card p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Try it live</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              This is the real app, running in your browser.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Converta is a React Native app. I also build it for the web, so you
              can tap Launch and use it right here, no install needed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={p.demo} target="_blank" rel="noreferrer noopener" className="btn-dark" data-cursor>Open in a new tab ↗</a>
              <a href={p.repo} target="_blank" rel="noreferrer noopener" className="btn-outline" data-cursor>View code</a>
            </div>
          </div>
          <PhoneFrame poster={p.image} src={p.demo} title={p.title} interactive />
        </section>
      ) : (
        <div className="container-x mt-14">
          <RevealImage
            src={p.image}
            alt={p.title}
            ratio="16 / 9"
            imgClass="object-top"
            className="overflow-hidden rounded-3xl border-2 border-border"
          />
        </div>
      )}

      {/* overview */}
      <section className="container-x mt-20 grid gap-10 lg:grid-cols-[0.4fr_1fr]">
        <Reveal>
          <p className="eyebrow">Overview</p>
        </Reveal>
        <div className="space-y-6">
          {p.overview.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-xl leading-relaxed text-fg/90">{para}</p>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex flex-wrap gap-2 pt-2">
              {p.services.map((s) => (
                <span key={s} className="rounded-full border border-border/40 px-4 py-1.5 text-sm text-muted">{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* gallery — phone screens for mobile, full pages otherwise */}
      {p.type === 'mobile' ? (
        <section className="container-x mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {p.gallery.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1}>
              <PhoneFrame poster={src} title={`${p.title} screen ${i + 1}`} className="!max-w-[240px]" />
            </Reveal>
          ))}
        </section>
      ) : (
        <section className="container-x mt-20 space-y-8">
          {p.gallery.map((src, i) => (
            <RevealImage
              key={i}
              src={src}
              alt={`${p.title} — full page ${i + 1}`}
              full
              className="overflow-hidden rounded-3xl border-2 border-border"
            />
          ))}
        </section>
      )}

      {/* next project */}
      <section className="container-x mt-24">
        <a href={`#/project/${next.id}`} className="group block border-t border-border/25 pt-10" data-cursor data-cursor-label="Open">
          <p className="eyebrow">Next project</p>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-5xl font-bold transition-colors group-hover:text-rust sm:text-7xl">{next.title}</h2>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-fg text-2xl text-bg transition group-hover:bg-rust">→</span>
          </div>
        </a>
      </section>
    </article>
  );
}
