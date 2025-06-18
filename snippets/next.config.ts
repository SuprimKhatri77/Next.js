import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "ne9n0za5cn.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
