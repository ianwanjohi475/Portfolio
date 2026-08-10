// Central place for personal + contact details. Edit these once.
export const site = {
  name: 'Ian Wanjohi',
  role: 'Fullstack Developer',
  location: 'Nairobi, Kenya',
  email: 'hello@ianwanjohi.dev',
  phone: '+254 758 950 370',
  // WhatsApp: international format, digits only (0758950370 -> 254758950370)
  whatsapp: '254758950370',
  whatsappMessage: "Hi Ian, I saw your portfolio and I'd love to work with you.",
  resume: '/resume.pdf', // lives in /public
  photo: '/img/ian.jpg', // your headshot — replace this file in /public/img
  socials: {
    github: 'https://github.com/ianwanjohi475',
    linkedin: 'https://www.linkedin.com/in/ianwanjohi',
    x: 'https://x.com',
  },
};

export const waLink = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
