/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to ./out so it can be hosted as a Render
  // Static Site (or any static/CDN host). All pages prerender and the
  // interactive bits (popup, countdown, form) run client-side.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
