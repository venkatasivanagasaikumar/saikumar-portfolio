# Sai Kumar — AI & Software Developer Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide.
Builds to a **fully static site** (`out/`) that can be hosted anywhere.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # writes the deployable site to ./out
npx serve out        # optional: preview the production build
```

## Deploy (pick one)

| Host | Steps |
|------|-------|
| **Vercel** | Push to GitHub → vercel.com → *Add New Project* → import repo → *Deploy*. No settings needed. |
| **Netlify** | Push to GitHub → *Add new site* → build command `npm run build`, publish directory `out`. Or drag the contents of `out/` onto app.netlify.com/drop. |
| **Firebase Hosting** | `npm i -g firebase-tools && firebase login && firebase init hosting` (public dir: `out`, single-page app: **No**, don't overwrite `firebase.json`) → `npm run build && firebase deploy`. |
| **GitHub Pages / Cloudflare Pages** | Publish the `out/` folder. |

After you have a live URL, set `NEXT_PUBLIC_SITE_URL=https://your-domain` (in the host's environment settings) so the
Open Graph / social-share image resolves to an absolute URL.

## Replace the hero video with your Higgsfield clip

`public/hero.mp4` and `public/hero.webm` currently hold a **stand-in loop made from your photo** (slow push-in).
To use the real clip:

```bash
bash scripts/make-loop.sh path/to/higgsfield.mp4   # needs ffmpeg
```

This crossfades the end into the start (seamless loop), writes optimised `hero.mp4` + `hero.webm`, and a new
`hero-poster.jpg`. Or export your own files with those names into `public/`. Target ≤ 3 MB per file.
The page falls back to the poster image (with a slow zoom) if the video can't load, and shows only the poster for
visitors with *reduce motion* enabled.

## Where to edit things

| What | File |
|------|------|
| All copy: skills, projects, timeline, certifications, links | `lib/data.ts` |
| Hero | `components/Hero.tsx` |
| Project covers (SVG artwork) | `components/Covers.tsx` |
| Colors / fonts | `tailwind.config.ts`, `app/globals.css` |
| Page title, description, social image | `app/layout.tsx`, `public/og.jpg` |

## Notes

* Everything on the page comes from the resume; nothing is invented. Project links are the exact hyperlinks embedded in
  the resume PDF.
* Your phone number is intentionally **not** shown on the site (public pages get scraped). Add it in `components/Contact.tsx` if you want it.
* Contact uses a `mailto:` link — no form/back-end needed.
