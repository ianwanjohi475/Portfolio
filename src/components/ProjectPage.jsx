import { Reveal, MaskText, RevealImage } from './anim.jsx';
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

      {/* hero image */}
      <div className="container-x mt-14">
        <RevealImage
          src={p.image}
          alt={p.title}
          ratio="16 / 9"
          className="overflow-hidden rounded-3xl border-2 border-border"
        />
      </div>

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

      {/* gallery */}
      <section className="container-x mt-20 space-y-8">
        {p.gallery.map((src, i) => (
          <RevealImage
            key={i}
            src={src}
            alt={`${p.title} — ${i + 1}`}
            ratio={i % 2 ? '16 / 10' : '16 / 8'}
            className="overflow-hidden rounded-3xl border-2 border-border"
          />
        ))}
      </section>

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
