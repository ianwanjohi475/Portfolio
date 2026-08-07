import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, categories } from '../data/projects.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(() => {
    const list =
      filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    // Sort: featured first, then newest year first.
    return [...list].sort(
      (a, b) => Number(b.featured) - Number(a.featured) || b.year.localeCompare(a.year),
    );
  }, [filter]);

  return (
    <section id="work" className="scroll-mt-28 py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">
                Projects that <span className="text-teal-grad">move</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="inline-flex rounded-full border border-border bg-card p-1"
              role="tablist"
              aria-label="Filter projects"
            >
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    filter === c ? 'text-teal-ink' : 'text-fg/65 hover:text-fg'
                  }`}
                >
                  {filter === c && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-teal-bright"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} wide={filter === 'All' && p.featured} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
