import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Enable React compiler for better performance
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;
