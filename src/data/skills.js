// Skills grouped for the Skills section. `level` (0-100) drives the meter bars.
export const skillGroups = [
  {
    label: 'Frontend',
    color: '#7c5cff',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    label: 'Motion & Animation',
    color: '#22d3ee',
    skills: [
      { name: 'GSAP', level: 92 },
      { name: 'ScrollTrigger', level: 90 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Lenis', level: 85 },
    ],
  },
  {
    label: 'Backend & Tooling',
    color: '#f472b6',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Vite', level: 90 },
      { name: 'Docker', level: 78 },
    ],
  },
];

// Flat list used by the orbiting skill sphere.
export const skillTags = [
  'React',
  'GSAP',
  'Node',
  'TypeScript',
  'Vite',
  'ScrollTrigger',
  'Tailwind',
  'Next.js',
  'Framer Motion',
  'GraphQL',
  'Figma',
  'Docker',
];
