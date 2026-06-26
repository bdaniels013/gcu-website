/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deployed on Vercel as a Next.js app (not a pure static export) so the
  // contact form's /api/contact route can send email via Resend. Pages still
  // prerender; only the API route runs server-side.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
