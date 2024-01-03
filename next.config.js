/** @type {import('next').NextConfig} */

const CMS_API_DOMAIN = new URL(
  process.env.CMS_API_URL || "https://demo.traleor.com"
).hostname;

const BASE_DOMAIN = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "https://next-pro-weblog.vercel.app"
).hostname;

const nextConfig = {
  images: {
    domains: [CMS_API_DOMAIN, BASE_DOMAIN],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.traleor.com",
      },
    ],
  },
};

module.exports = nextConfig;
