import { site } from '../data/site.js';
import { GitHubIcon, LinkedInIcon, XIcon, WhatsAppIcon } from './icons.jsx';
import { waLink } from '../data/site.js';

const items = [
  { key: 'github', label: 'GitHub', href: site.socials.github, Icon: GitHubIcon },
  { key: 'linkedin', label: 'LinkedIn', href: site.socials.linkedin, Icon: LinkedInIcon },
  { key: 'x', label: 'X (Twitter)', href: site.socials.x, Icon: XIcon },
  { key: 'whatsapp', label: 'WhatsApp', href: waLink(), Icon: WhatsAppIcon },
];

export default function Socials({ className = '', light = false }) {
  const btn = light
    ? 'grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-white hover:bg-white/20'
    : 'icon-btn';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={btn}
          aria-label={label}
          title={label}
          data-cursor
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
