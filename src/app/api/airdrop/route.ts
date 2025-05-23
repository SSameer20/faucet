import { CLUSTER_API_URL } from "@/utils/helper";
import { LAMPORTS_PER_SOL, Connection, PublicKey } from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";

const connection = new Connection(CLUSTER_API_URL.DEVNET, "confirmed");

export async function POST(req: NextRequest) {
  try {
    console.log(`req in api`);
    const data = await req.json();
    const { publicKey } = await data;
    if (!publicKey) {
      throw new Error("public key is required");
    }

    const ValidPublicKey = new PublicKey(publicKey);

    const AirDropSignature = await connection.requestAirdrop(
      ValidPublicKey,
      1 * LAMPORTS_PER_SOL
    );

    return NextResponse.json(
      { message: `Airdropped to ${publicKey}`, signature: AirDropSignature },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error while airdropping" },
      { status: 400 }
    );
  }
}
