import { setCorsHeaders } from "@/utils/helper";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(req: NextRequest) {
  const response = new NextResponse(null, { status: 204 });
  return setCorsHeaders(req, response);
}

export async function GET() {
  const client = new PrismaClient();
  try {
    const transactions = await client.airdrop.findMany({
      take: 10,
      orderBy: {
        CreatedAt: "desc",
      },
    });

    return new Response(JSON.stringify(transactions), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch transactions",
        error: `${error}`,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
