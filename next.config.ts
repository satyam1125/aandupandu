/** @type {import('next').NextConfig} */
import type { Configuration } from 'webpack';
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  images: {
    domains: [
      'i.pinimg.com',
      'images.unsplash.com',
      'dynamic-media-cdn.tripadvisor.com',
      'images.bhaskarassets.com',
      'photos.hotelbeds.com',
      'cloud.appwrite.io'
    ],
  },
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
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cloud.appwrite.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.pinimg.com https://images.unsplash.com https://dynamic-media-cdn.tripadvisor.com https://cloud.appwrite.io; font-src 'self'; connect-src 'self' https://cloud.appwrite.io; frame-src 'self'; object-src 'none'; base-uri 'self';",
          },
        ],
      },
    ];
  },
  webpack: (config: Configuration): Configuration => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'react$': require.resolve('react'),
      'react-dom$': require.resolve('react-dom')
    };
    return config;
  }
};


export default nextConfig;

