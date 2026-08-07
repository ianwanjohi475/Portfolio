import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, categories } from '../data/projects.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-28 py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">
            Projects that <span className="text-teal-grad">move</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  filter === c ? 'text-ink' : 'text-white/70 hover:text-white'
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
