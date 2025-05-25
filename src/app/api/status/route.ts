import { setCorsHeaders } from "@/utils/helper";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(req: NextRequest) {
  const response = new NextResponse(null, { status: 204 });
  return setCorsHeaders(req, response);
}

export async function GET() {
  try {
    return NextResponse.json(
      {
        message: `✅ All services are up and running`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `✅ ${error}`,
      },
      { status: 200 }
    );
  }
}
