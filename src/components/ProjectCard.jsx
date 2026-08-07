import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Placeholder from './Placeholder.jsx';

/** Project card with a cursor-tracked 3D tilt (disabled for reduced-motion). */
export default function ProjectCard({ project }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateY: px * 10,
      rotateX: -py * 10,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group [transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-2xl hover:shadow-teal-500/20"
      >
        <div className="relative overflow-hidden">
          <Placeholder seed={project.image} label={project.category} />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex flex-wrap gap-2 p-4">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-semibold">{project.title}</h3>
            <span className="text-[11px] uppercase tracking-widest text-teal-bright">
              {project.category}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/60">{project.description}</p>
          <div className="mt-4 flex gap-4 text-sm">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                Live ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/60 underline-offset-4 transition hover:text-white hover:underline"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
