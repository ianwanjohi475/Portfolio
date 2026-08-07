import { useRef } from 'react';
import { gsap } from 'gsap';
import ProjectMockup from './ProjectMockup.jsx';

const initials = (title) =>
  title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

/** Premium project card with a subtle cursor tilt. Entrance is handled by
 *  the parent <Reveal> wrapper. */
export default function ProjectCard({ project }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * 5,
      rotateX: -py * 5,
      transformPerspective: 1200,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const handleLeave = () =>
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' });

  const link = project.live || project.repo || '#';

  return (
    <article className="h-full">
      <a
        ref={ref}
        href={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noreferrer noopener' : undefined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor
        className="card group block h-full [transform-style:preserve-3d]"
      >
        {/* Banner — realistic product mockup */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
          <ProjectMockup project={project} />
          {/* monogram */}
          <div className="absolute left-4 top-4 mono-tile z-10 h-11 w-11 text-sm shadow-lg">
            {initials(project.title)}
          </div>
          <span className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
            {project.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="font-mono">{project.year}</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-3 flex items-start justify-between gap-3">
            <h3 className="font-display text-xl leading-tight">{project.title}</h3>
            <span
              aria-hidden="true"
              className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-fg/70 transition-all duration-300 group-hover:border-teal-bright group-hover:bg-teal-bright group-hover:text-teal-ink"
            >
              ↗
            </span>
          </div>

          <p className="mt-3 text-sm text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
