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
    label: '3D & Motion',
    color: '#22d3ee',
    skills: [
      { name: 'Three.js', level: 90 },
      { name: 'React Three Fiber', level: 88 },
      { name: 'GSAP', level: 92 },
      { name: 'Framer Motion', level: 87 },
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
  'Three.js',
  'GSAP',
  'Node',
  'TypeScript',
  'Vite',
  'WebGL',
  'Tailwind',
  'Next.js',
  'Framer',
  'GraphQL',
  'Docker',
];
