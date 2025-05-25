import { NextRequest, NextResponse } from "next/server";
import { CLUSTER_API_URL_TYPE } from "./types";

export const CLUSTER_API_URL: CLUSTER_API_URL_TYPE = {
  DEVNET: process.env.SOLANA_DEV_NET || "https://api.devnet.solana.com",
  MAINNET: process.env.SOLANA_MAIN_NET || "https://api.mainnet-beta.solana.com",
  TESTNET: "https://api.testnet.solana.com",
};

export function formatTimeAgo(date: Date | string) {
  const diff = Date.now() - new Date(date).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
}

export const allowedOrigins = [
  "https://faucet-delta-eight.vercel.app",
  "https://faucet.sameer.digital",
];

export function setCorsHeaders(req: NextRequest, res: NextResponse) {
  const origin = req.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }

  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}
