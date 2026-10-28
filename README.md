# Sai Kumar — AI & Software Developer Portfolio

Static portfolio site (built with Next.js 15, Tailwind, Framer Motion). The ready-to-deploy build lives in `site/`.

## Run locally
```bash
npm start        # serves ./site at http://localhost:3000
```

## Set your live URL (fixes social-share previews)
```bash
bash scripts/set-site-url.sh https://your-domain.com
```

## Deploy
- **Vercel / Netlify / Cloudflare Pages:** publish directory `site`, no build command.
- **Firebase Hosting:** `firebase deploy` (`firebase.json` already uses `site`).
- Must be hosted at a domain root (assets use absolute `/` paths), so a GitHub Pages *project* site (user.github.io/repo) won't work; use a custom domain or one of the hosts above.
