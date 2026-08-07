import { useMemo } from 'react';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, categories } from '../data/projects.js';

export default function Projects() {
  // Group by category, newest first (featured bubble up) within each group.
  const groups = useMemo(() => {
    const order = categories.filter((c) => c !== 'All');
    return order
      .map((cat) => ({
        cat,
        items: projects
          .filter((p) => p.category === cat)
          .sort(
            (a, b) => Number(b.featured) - Number(a.featured) || b.year.localeCompare(a.year),
          ),
      }))
      .filter((g) => g.items.length > 0);
  }, []);

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
            <p className="max-w-sm text-muted">
              Grouped by type and sorted with my latest, featured work first.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-16">
          {groups.map((g) => (
            <div key={g.cat}>
              <Reveal>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-display text-xl uppercase tracking-tight">{g.cat}</h3>
                  <span className="font-mono text-sm text-teal-600 dark:text-teal-bright">
                    {String(g.items.length).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 3) * 0.08}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
