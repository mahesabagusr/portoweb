import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [100, 75],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
