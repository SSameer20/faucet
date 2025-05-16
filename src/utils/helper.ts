import { CLUSTER_API_URL_TYPE } from "./types";

export const CLUSTER_API_URL: CLUSTER_API_URL_TYPE = {
  DEVNET: process.env.SOLANA_DEV_NET || "https://api.devnet.solana.com",
  MAINNET: process.env.SOLANA_MAIN_NET || "https://api.mainnet-beta.solana.com",
  TESTNET: "https://api.testnet.solana.com",
};
