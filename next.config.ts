import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Image optimization settings (Next.js 16 defaults)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
    minimumCacheTTL: 14400, // 4 hours (Next.js 16 default)
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Strict mode for better error handling
  reactStrictMode: true,
  
  // Optimize production builds
  poweredByHeader: false,
  compress: true,
  
  // Environment variable validation
  serverExternalPackages: ['mongoose'],
};

export default nextConfig;
