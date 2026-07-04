import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/build-with-jiya',
  images: { unoptimized: true },
};

export default nextConfig;
