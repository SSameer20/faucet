export type CLUSTER_URL = "DEVNET" | "TESTNET" | "MAINNET";
export type CLUSTER_API_URL_TYPE = {
  [key in CLUSTER_URL]: string;
};
