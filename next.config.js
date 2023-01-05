/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
