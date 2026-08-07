// Central place for personal + contact details. Edit these once.
export const site = {
  name: 'Ian Wanjohi',
  role: 'Creative Developer',
  location: 'Nairobi, Kenya',
  email: 'hello@ianwanjohi.dev',
  // WhatsApp: international format, digits only (no +, spaces or dashes).
  // TODO: replace with your real number.
  whatsapp: '254700000000',
  whatsappMessage: "Hi Ian, I saw your portfolio and I'd love to work with you.",
  resume: '/resume.pdf', // lives in /public
  socials: {
    github: 'https://github.com/ianwanjohi475',
    linkedin: 'https://www.linkedin.com/in/ianwanjohi',
    x: 'https://x.com',
  },
};

export const waLink = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
