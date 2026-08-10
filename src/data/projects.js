// Real projects. Card images are tall full-page shots so they can "scroll"
// on hover. Replace the files in /public/img/projects with real screenshots
// any time (keep the same paths).
export const categories = ['All', 'Web App', 'Company', 'Real Estate'];

export const projects = [
  {
    id: 'devsy-tech',
    year: '2024',
    title: 'Devsy Tech',
    subtitle: 'A software company I co-founded.',
    category: 'Company',
    description:
      'A mobile app and website development company. I co-founded it and helped design the site and the Devsy AI page.',
    tags: ['Web Design', 'Branding', 'UI'],
    image: '/img/projects/devsytech.jpg',
    gallery: [1, 2, 3, 4, 5].map((n) => `/img/projects/devsytech-${n}.jpg`),
    client: 'Devsy Tech',
    role: 'Co-founder & Design',
    services: ['Web Design', 'Branding', 'UI'],
    website: 'https://devsytech.com',
    overview: [
      "Devsy Tech is a software company that builds websites and mobile apps for businesses. I'm one of the co-founders.",
      'I worked on the design of the main site and the Devsy AI page — the layout, the colours, and the way everything flows. The aim was a clean, friendly site that shows what the team can do and makes it easy to get in touch.',
      'The site introduces our AI tool and our web and app services in one place, so a visitor can go from "what is this" to "let me try it" in a few clicks.',
    ],
    live: 'https://devsytech.com',
    repo: 'https://github.com/ianwanjohi475',
    featured: true,
  },
  {
    id: 'esto',
    year: '2024',
    title: 'Esto',
    subtitle: 'A real estate web app for Nairobi.',
    category: 'Real Estate',
    description:
      "A property platform for Nairobi where every listing has a data-driven TrustScore, so buyers know what they can trust.",
    tags: ['Vanilla JS', 'Node', 'MongoDB', 'PWA', 'M-Pesa'],
    image: '/img/projects/esto.jpg',
    gallery: [1, 2, 3, 4, 5, 6].map((n) => `/img/projects/esto-${n}.jpg`),
    client: 'Personal project',
    role: 'Solo — design & build',
    services: ['Frontend', 'Backend', 'UX'],
    website: 'https://real-estate-beta-fawn.vercel.app/',
    overview: [
      'Esto is a real estate web app for Nairobi. I designed and built the whole thing myself — both the front end and the back end.',
      'Every listing carries a data-driven TrustScore, so buyers can tell which homes are worth their time. It also has live chat with agents, saved homes, M-Pesa payments, and a dark and light mode.',
      "It installs like a normal app (PWA). The front end is plain JavaScript, and the back end runs on Node with a MongoDB database. No frameworks — just built from scratch.",
    ],
    live: 'https://real-estate-beta-fawn.vercel.app/',
    repo: 'https://github.com/ianwanjohi475',
    featured: true,
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
export const nextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id);
  return projects[(i + 1) % projects.length];
};
