import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import Placeholder from './Placeholder.jsx';
import { stats } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="animate-floaty overflow-hidden rounded-3xl glass">
              <Placeholder seed="ian-portrait" label="Ian Wanjohi" ratio="4 / 5" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl glass px-5 py-4">
              <p className="font-display text-2xl font-bold text-gradient">
                <Counter value={6} suffix="+ yrs" />
              </p>
              <p className="text-xs text-white/60">building for the web</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About me</p>
            <h2 className="section-title">
              Engineering meets <span className="text-gradient">art direction</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70">
              I'm Ian — a creative developer who lives where design and code
              overlap. I build fast, accessible websites and immersive 3D
              experiences, obsessing over the details that make an interface
              feel alive: the easing curve, the frame budget, the first
              meaningful paint.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-white/70">
              From scroll-driven storytelling to WebGL product configurators, I
              partner with teams and founders to ship work that performs as well
              as it looks.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <div>
                  <p className="font-display text-3xl font-bold text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-white/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
