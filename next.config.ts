import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Standard Next.js Server mode (supports ISR, API Routes, Server Components)
  // Turbopack is default in Next.js 16
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
