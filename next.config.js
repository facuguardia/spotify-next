/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "lastfm.freetls.fastly.net"],
  },
};

module.exports = nextConfig;
