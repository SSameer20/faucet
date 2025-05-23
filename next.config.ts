import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://faucet.sameer.digital",
    "https://faucet-test.sameer.digital",
    "https://faucet-delta-eight.vercel.app",
  ],
};


export default nextConfig;
