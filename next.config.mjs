/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a deployable site to ./out
  // (works on Vercel, Netlify, Firebase Hosting, GitHub Pages, Cloudflare Pages…)
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
