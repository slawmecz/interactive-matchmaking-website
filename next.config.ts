import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/interactive-matchmaking-website', // Required for GitHub Pages with repo name in path
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
