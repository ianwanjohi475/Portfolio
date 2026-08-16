import { site } from '../data/site.js';
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon, WhatsAppIcon } from './icons.jsx';
import { waLink } from '../data/site.js';

const items = [
  { key: 'github', label: 'GitHub', href: site.socials.github, Icon: GitHubIcon },
  { key: 'linkedin', label: 'LinkedIn', href: site.socials.linkedin, Icon: LinkedInIcon },
  { key: 'x', label: 'X (Twitter)', href: site.socials.x, Icon: XIcon },
  { key: 'instagram', label: 'Instagram', href: site.socials.instagram, Icon: InstagramIcon },
  { key: 'whatsapp', label: 'WhatsApp', href: waLink(), Icon: WhatsAppIcon },
];

export default function Socials({ className = '', variant = 'circle' }) {
  const cls =
    variant === 'bare'
      ? 'grid h-9 w-9 place-items-center text-fg/70 transition-all duration-300 hover:-translate-y-1 hover:text-rust'
      : 'grid h-10 w-10 place-items-center rounded-full border border-border/40 text-fg/80 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-fg hover:bg-fg hover:text-bg';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ key, label, href, Icon }) => (
        <a key={key} href={href} target="_blank" rel="noreferrer noopener" className={cls} aria-label={label} title={label} data-cursor>
          <Icon />
        </a>
      ))}
    </div>
  );
}
