import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import Placeholder from './Placeholder.jsx';
import { stats } from '../data/content.js';
import { site, waLink } from '../data/site.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative">
            <div className="card animate-floaty overflow-hidden">
              <Placeholder seed="ian-portrait" label="Ian Wanjohi" ratio="4 / 5" />
            </div>
            <div className="card absolute -bottom-6 -right-4 px-5 py-4">
              <p className="font-display text-2xl text-teal-500 dark:text-teal-bright">
                <Counter value={6} suffix="+ yrs" />
              </p>
              <p className="text-xs text-muted">building for the web</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About me</p>
            <h2 className="section-title">
              Engineering meets <span className="text-teal-grad">art direction</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted">
              I'm Ian — a creative developer based in {site.location}, working
              where design and code overlap. I build fast, accessible websites and
              interactive experiences, obsessing over the details that make an
              interface feel alive: the easing curve, the frame budget, the first
              meaningful paint.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-muted">
              From scroll-driven storytelling to real-time dashboards, I partner
              with teams and founders to ship work that performs as well as it
              looks.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="card p-4">
                  <p className="font-display text-3xl text-fg">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer noopener" className="btn-teal">
                Message on WhatsApp
              </a>
              <a href="#work" className="btn-ghost">
                View my work
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
