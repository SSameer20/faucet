import { CLUSTER_API_URL, setCorsHeaders } from "@/utils/helper";
import { PrismaClient } from "@prisma/client";
import { LAMPORTS_PER_SOL, Connection, PublicKey } from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(req: NextRequest) {
  const response = new NextResponse(null, { status: 204 });
  return setCorsHeaders(req, response);
}
export async function POST(req: NextRequest) {
  const connection = new Connection(CLUSTER_API_URL.DEVNET, "confirmed");
  const client = new PrismaClient();
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

    let user = await client.user.findUnique({
      where: {
        PublicKey: publicKey,
      },
    });

    if (!user) {
      user = await client.user.create({
        data: {
          PublicKey: publicKey,
        },
      });
    }

    await client.airdrop.create({
      data: {
        PublicKey: publicKey,
        Signature: AirDropSignature,
        Status: true,
      },
    });

    return NextResponse.json(
      { message: `Airdropped to ${publicKey}`, signature: AirDropSignature },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `${error}` }, { status: 400 });
  }
}
