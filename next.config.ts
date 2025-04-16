/** @type {import('next').NextConfig} */
import type { Configuration } from 'webpack';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.bhaskarassets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "photos.hotelbeds.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config: Configuration): Configuration => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      react$: require.resolve("react"),
      "react-dom$": require.resolve("react-dom"),
    };
    return config;
  },
};

export default nextConfig;

