import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "static.wikia.nocookie.net" },
    ],
  },
};
export default nextConfig;
