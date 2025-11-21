import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "e-learn-platform.s3.eu-central-003.backblazeb2.com",
      },
      {
        protocol: "https",
        hostname: "homelocator.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "51mb",
    },
  },
};
 export default nextConfig;