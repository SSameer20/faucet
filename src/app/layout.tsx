import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Solana Faucet | Instant SOL Airdrop on Devnet & Testnet",
  description:
    "Request free SOL tokens instantly from our fast and reliable Solana Faucet. Supports Devnet and Testnet. Ideal for developers testing dApps on Solana.",
  keywords: [
    "Solana Faucet",
    "Free SOL",
    "SOL Airdrop",
    "Solana Devnet",
    "Testnet",
    "Solana Wallet",
    "Web3 Testnet",
    "dApp development",
  ],
  icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "Sameer Shaik", url: "https://sameer.digital" }],
  metadataBase: new URL("https://faucet.sameer.digital"),
  openGraph: {
    title: "Free Solana Faucet | Instant SOL Airdrop on Devnet & Testnet",
    description:
      "Get test SOL tokens instantly for free. Our public Solana faucet supports Devnet and Testnet, perfect for blockchain developers and testers.",
    url: "https://faucet.sameer.digital",
    siteName: "Solana Faucet",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Solana Faucet Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Solana Faucet | Instant SOL Airdrop on Devnet & Testnet",
    description:
      "Request SOL in seconds from our fast and secure Solana testnet faucet. No wallet connect required — just your public key.",
    images: ["/preview.png"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-x-hidden`}
      >
        <nav className="w-full h-[10vh] flex px-10 border-amber-50  justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold">Faucet</span>
          </Link>
          <div className="flex gap-10">
            <Link href="/documentation">
              <span className="cursor-pointer text-xl">Documentation</span>
            </Link>
            <Link href="/transactions">
              <span className="cursor-pointer text-xl">Transactions</span>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
