import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);

  return new Response("hi");
}
