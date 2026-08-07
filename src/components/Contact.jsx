import { useState } from 'react';
import Reveal from './Reveal.jsx';
import MagneticButton from './MagneticButton.jsx';

const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) e.message = 'A little more detail, please.';
    return e;
  };

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Wire this to your form backend (Formspree / serverless / email API).
      setSent(true);
      setForm(initial);
    }
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-teal-bright/60';

  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              Let's build something <span className="text-teal-grad">unforgettable</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-white/70">
              Have a project in mind, or just want to talk shop about the craft
              of the web? Drop me a line — I reply within a day or two.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-3 text-white/70">
              <a href="mailto:hello@ianwanjohi.dev" className="block transition hover:text-white">
                ✉ hello@ianwanjohi.dev
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/ianwanjohi475" target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ianwanjohi" target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                  LinkedIn
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                  X / Twitter
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl glass p-6 sm:p-8">
            {sent && (
              <p
                role="status"
                className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
              >
                Thanks! Your message is on its way. I'll be in touch soon.
              </p>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className={field}
                  placeholder="Ada Lovelace"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
                {errors.name && (
                  <p id="name-err" className="mt-1 text-xs text-rose-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className={field}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                />
                {errors.email && (
                  <p id="email-err" className="mt-1 text-xs text-rose-300">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${field} resize-none`}
                  placeholder="Tell me about your project…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-err' : undefined}
                />
                {errors.message && (
                  <p id="message-err" className="mt-1 text-xs text-rose-300">
                    {errors.message}
                  </p>
                )}
              </div>

              <MagneticButton
                as="button"
                type="submit"
                className="btn-teal w-full"
              >
                Send message
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
