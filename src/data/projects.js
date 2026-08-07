// Data-driven project list. Swap this array for a headless-CMS fetch
// (Sanity / Contentful / Firebase) without touching any component.
//
// Project schema:
// { id, title, category, description, tags, image, video?, live?, repo?, featured? }

export const categories = ['All', 'Websites', 'Apps', 'Games'];

export const projects = [
  {
    id: 'aurora-commerce',
    title: 'Aurora Commerce',
    category: 'Websites',
    description:
      'A headless storefront with a scroll-driven 3D product configurator and sub-second navigation.',
    tags: ['React', 'Three.js', 'GSAP', 'Node'],
    image: 'aurora',
    live: 'https://example.com/aurora',
    repo: 'https://github.com/ianwanjohi475',
    featured: true,
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics',
    category: 'Websites',
    description:
      'Real-time analytics dashboard visualising millions of events with buttery WebGL charts.',
    tags: ['React', 'D3', 'WebGL', 'TypeScript'],
    image: 'pulse',
    live: 'https://example.com/pulse',
    repo: 'https://github.com/ianwanjohi475',
    featured: true,
  },
  {
    id: 'nomad-app',
    title: 'Nomad Travel',
    category: 'Apps',
    description:
      'A cross-platform travel companion with offline maps, itinerary sync and playful micro-interactions.',
    tags: ['React Native', 'Expo', 'Firebase'],
    image: 'nomad',
    live: 'https://example.com/nomad',
    repo: 'https://github.com/ianwanjohi475',
    featured: false,
  },
  {
    id: 'mindful-app',
    title: 'Mindful',
    category: 'Apps',
    description:
      'A meditation app with generative soundscapes and a breathing-guided animation engine.',
    tags: ['React Native', 'Reanimated', 'Web Audio'],
    image: 'mindful',
    live: 'https://example.com/mindful',
    repo: 'https://github.com/ianwanjohi475',
    featured: false,
  },
  {
    id: 'orbit-runner',
    title: 'Orbit Runner',
    category: 'Games',
    description:
      'A browser endless-runner set in orbit, built on a custom ECS with 60fps physics.',
    tags: ['Three.js', 'Cannon', 'WebGL'],
    image: 'orbit',
    live: 'https://example.com/orbit',
    repo: 'https://github.com/ianwanjohi475',
    featured: true,
  },
  {
    id: 'pixel-forge',
    title: 'Pixel Forge',
    category: 'Games',
    description:
      'A multiplayer pixel-art sandbox with authoritative server netcode and rollback.',
    tags: ['Node', 'WebSockets', 'Canvas'],
    image: 'pixel',
    live: 'https://example.com/pixel',
    repo: 'https://github.com/ianwanjohi475',
    featured: false,
  },
];
