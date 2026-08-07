import { site } from '../data/site.js';
import { GitHubIcon, LinkedInIcon, XIcon, WhatsAppIcon } from './icons.jsx';
import { waLink } from '../data/site.js';

const items = [
  { key: 'github', label: 'GitHub', href: site.socials.github, Icon: GitHubIcon },
  { key: 'linkedin', label: 'LinkedIn', href: site.socials.linkedin, Icon: LinkedInIcon },
  { key: 'x', label: 'X (Twitter)', href: site.socials.x, Icon: XIcon },
  { key: 'whatsapp', label: 'WhatsApp', href: waLink(), Icon: WhatsAppIcon },
];

export default function Socials({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="icon-btn"
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
