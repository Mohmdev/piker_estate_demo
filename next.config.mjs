/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    API_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api`
      : "http://localhost:3000/api",
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  transpilePackages: ['leaflet'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'leaflet': 'leaflet/dist/leaflet'
    };
    return config;
  }
};

export default nextConfig;
