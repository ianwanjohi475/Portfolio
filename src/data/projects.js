// Real projects. Card images are tall full-page shots so they can "scroll"
// on hover. Replace the files in /public/img/projects with real screenshots
// any time (keep the same paths).
export const categories = ['All', 'Online Store', 'Mobile App', 'Web App', 'Company', 'Real Estate'];

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

// Add Converta (a real, testable mobile app) to the list.
projects.unshift({
  id: 'converta',
  year: '2024',
  title: 'Converta',
  subtitle: 'A mobile app that turns documents into editable files.',
  category: 'Mobile App',
  type: 'mobile',
  description:
    'A React Native app that scans an image or PDF and rebuilds it as an editable Word, Excel, PDF or TXT file, right on the phone.',
  tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
  image: '/img/projects/converta-s2.jpg', // home screen — poster for the card
  // Swipeable screenshots shown in the phone on the project page.
  screens: [
    '/img/projects/converta-s2.jpg',
    '/img/projects/converta-s3.jpg',
    '/img/projects/converta-s4.jpg',
    '/img/projects/converta-s5.jpg',
    '/img/projects/converta-s6.jpg',
    '/img/projects/converta-s1.jpg',
  ],
  client: 'Personal project',
  role: 'Solo — design & build',
  services: ['Mobile', 'OCR', 'File generation'],
  website: 'https://github.com/ianwanjohi475/word',
  // Android build. Point this at your APK once it's uploaded to a GitHub
  // Release (github.com/ianwanjohi475/word/releases). "latest" always
  // resolves to your newest release.
  apk: 'https://github.com/ianwanjohi475/word/releases/latest',
  overview: [
    'Converta takes a photo, a scan or a PDF and turns it into an editable file. You can pick a document, let it read the text and layout, then export it as Word, Excel, PDF or plain text.',
    'It runs on the phone, so there is no account and nothing is sent to a server of mine. If needed it reads text locally, and it keeps your files and history on the device.',
    'I built it with React Native and Expo, using Expo Router for navigation, TypeScript, Zustand for state, and SQLite for storage.',
  ],
  live: 'https://github.com/ianwanjohi475/word',
  repo: 'https://github.com/ianwanjohi475/word',
  featured: true,
});

// Sir Vert — an online store I'm currently building for Oraimo accessories.
// Still a work in progress, so no live link and no repo link are shown.
projects.unshift({
  id: 'sir-vert',
  year: '2026',
  title: 'Sir Vert',
  subtitle: 'An online store for Oraimo smart accessories.',
  category: 'Online Store',
  inProgress: true,
  description:
    'An online store for Oraimo smart accessories. It is still a work in progress.',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-commerce'],
  image: '/img/projects/sirvert-home.jpg', // tall home page — scrolls on hover
  gallery: [
    '/img/projects/sirvert-shop.jpg',
    '/img/projects/sirvert-product.jpg',
    '/img/projects/sirvert-categories.jpg',
  ],
  client: 'Personal project',
  role: 'Solo — design & build',
  services: ['Next.js', 'Tailwind CSS', 'Frontend', 'UI'],
  overview: [
    'Sir Vert is an online store I am building for Oraimo smart accessories like earbuds, smartwatches, power banks and chargers. It is still a work in progress, so I keep adding to it.',
    'I designed the whole look and built the front end. It has a full shop with search, filters and sorting, product pages with a gallery and reviews, a cart and a checkout flow, plus flash sales with countdowns, a wishlist, and light and dark mode.',
    'I built it with Next.js and Tailwind CSS. There is still more to come, so the store will keep growing over time.',
  ],
  featured: true,
});

export const getProject = (id) => projects.find((p) => p.id === id);
export const nextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id);
  return projects[(i + 1) % projects.length];
};
