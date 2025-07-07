import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true, // ensures pages map to folders (important for shared hosting)
  images: {
    unoptimized: true, // disables Next.js image optimization for static export
  },
};

export default nextConfig;
