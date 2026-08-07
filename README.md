# Ian Wanjohi — Portfolio

A cinematic, animated developer portfolio built with **React + Vite**, **Three.js /
React Three Fiber**, **GSAP + ScrollTrigger**, **Framer Motion** and **Lenis**
smooth scrolling. Fully responsive, accessible, and performance-minded
(code-splitting, DPR-capped WebGL, lazy 3D, reduced-motion support).

## Tech stack

| Area        | Choice |
|-------------|--------|
| Framework   | React 18 + Vite 6 |
| 3D / WebGL  | Three.js, @react-three/fiber, @react-three/drei |
| Motion      | GSAP (+ ScrollTrigger), Framer Motion, Lenis |
| Styling     | Tailwind CSS 3 |

> **Note on versions:** the original brief targeted the very latest majors
> (React 19, R3F v9, Tailwind 4, Vite 8). This build pins a mutually-compatible,
> production-proven set that installs and builds cleanly today. The architecture
> is identical — bump the versions in `package.json` when you're ready.

## Run it locally

You need **Node.js 18+** installed ([nodejs.org](https://nodejs.org)). Then:

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

Open the printed URL in your browser; edits hot-reload instantly. Other commands:

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally to test it
```

## Deploy to Safaricom (cPanel) shared hosting

Safaricom web hosting serves **static files** — it does not run a Node server,
and it doesn't need to: this site compiles to plain HTML/CSS/JS.

1. Build it locally: `npm run build`. This produces a `dist/` folder.
2. Log in to your Safaricom **cPanel → File Manager**.
3. Open `public_html` (for your main domain) — or a subfolder / the addon
   domain's folder if the site lives elsewhere.
4. Upload the **contents of `dist/`** (not the `dist` folder itself) — the
   `index.html`, the `assets/` folder, and the hidden `.htaccess`.
   - In File Manager, enable **Settings → Show Hidden Files (dotfiles)** so you
     can see and upload `.htaccess`.
   - Tip: zip the contents of `dist/`, upload the zip, then **Extract** it in
     cPanel — much faster than uploading files one by one.
5. Visit your domain. Done.

The build uses **relative asset paths** (`base: './'`), so it works at the
domain root *or* in a subfolder without any changes. The bundled `.htaccess`
turns on gzip compression and long-term caching for a better Lighthouse score.

> **Which React?** The server never runs React — it just serves the compiled
> files — so the React version has no effect on hosting. This project uses the
> current stable **React 18**, which is the safest, best-supported choice with
> the 3D/animation stack.

## Project structure

```
src/
  assets/                 # drop real WebP/AVIF/video/GLTF here
  components/
    three/                # R3F canvases (HeroScene, FeaturedObject)
    Navbar, Hero, About, Projects, ProjectCard, FeaturedScene,
    Skills, Experience, Lab, Services, Testimonials, Contact, Footer,
    Reveal, Counter, MagneticButton, Placeholder, ScrollProgress
  data/
    projects.js           # project list (swap for a CMS fetch)
    skills.js             # skill groups + tags
    timeline.js           # experience entries
    content.js            # services, lab, testimonials, stats
  hooks/
    useLenis.js           # Lenis <-> GSAP ScrollTrigger integration
  App.jsx                 # section composition
  main.jsx                # React entry
  index.css               # Tailwind + global styles
```

## Sections

Hero → About → Projects (filterable) → Featured 3D Scene → Skills → Experience
(timeline) → Ian Lab → Services → Testimonials → Contact → Footer.

## Customising

- **Content**: edit the files in `src/data/`. Everything is data-driven.
- **Media**: the `Placeholder` component draws sized gradient stand-ins so there's
  no layout shift. Replace it with `<img loading="lazy">` (WebP/AVIF) or `<video>`
  as you add real assets under `src/assets/`.
- **Contact form**: `Contact.jsx` validates client-side; wire `onSubmit` to your
  backend (Formspree, a serverless function, or an email API).
- **Analytics**: add a GA4 / Plausible snippet to `index.html`.
- **CMS**: replace the imports in components with a fetch to Sanity / Contentful /
  Firebase using the same object shapes.

## Accessibility & performance

- Semantic landmarks, labelled controls, visible focus rings, `sr-only` headings.
- `prefers-reduced-motion` disables Lenis, GSAP intros and heavy transitions.
- 3D canvases are lazy-loaded and DPR-capped; heavy libs are split into their own
  chunks via `vite.config.js`.
```
