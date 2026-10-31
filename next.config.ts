import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permit only the explicitly configured tunnel to load development assets.
  allowedDevOrigins: process.env.NGROK_DOMAIN
    ? [process.env.NGROK_DOMAIN]
    : [],
};

export default nextConfig;
