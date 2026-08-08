import { waLink } from '../data/site.js';
import { WhatsAppIcon } from './icons.jsx';

/** Fixed WhatsApp button — CSS pop-in + pulse (no JS animation lib). */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      data-cursor
      className="wa-pulse wa-pop group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-xl shadow-[#25D366]/40 transition hover:scale-105"
    >
      <span className="grid place-items-center">
        <WhatsAppIcon width="26" height="26" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:max-w-[150px] sm:inline group-hover:pr-1">
        Chat with me
      </span>
    </a>
  );
}
