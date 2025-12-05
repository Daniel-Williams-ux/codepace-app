import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // enables static export (replaces next export)
  trailingSlash: true, // required for shared hosting (folder-based routing)

  images: {
    unoptimized: true, // prevents Next from requiring a Node server for images
  },

  // IMPORTANT for static hosting: ensure absolute URLs work
  assetPrefix: '',
  basePath: '',
};

export default nextConfig;