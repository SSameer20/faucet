import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
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
    console.error("Error fetching transactions:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch transactions" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
