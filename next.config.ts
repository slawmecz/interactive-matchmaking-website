import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  // basePath removed for custom domain swatanie.pl
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
