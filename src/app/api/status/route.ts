import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: `✅ All services are up and running`,
    },
    { status: 200 }
  );
}
