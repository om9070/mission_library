/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add allowed external domains here
  },
    eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
