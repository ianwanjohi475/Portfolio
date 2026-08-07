import { Suspense, lazy } from 'react';
import Reveal from './Reveal.jsx';

const FeaturedObject = lazy(() => import('./three/FeaturedObject.jsx'));

export default function FeaturedScene() {
  return (
    <section
      id="featured"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-surface py-28"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-2 h-[380px] lg:order-1 lg:h-[520px]">
          <Suspense fallback={<div className="h-full w-full" />}>
            <FeaturedObject />
          </Suspense>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Featured experience</p>
            <h2 className="section-title">
              Real-time 3D, <span className="text-gradient">right in the browser</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70">
              Every featured build ships with interactive WebGL — configurable
              products, data made tangible, or worlds you can move through.
              Rendered at 60fps with a strict frame budget so it stays smooth on
              phones as well as flagship GPUs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3 text-white/70">
              {[
                'React Three Fiber + Drei scene graph',
                'GSAP & ScrollTrigger scroll choreography',
                'Instanced geometry & DPR capping for mobile',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-accent2">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
