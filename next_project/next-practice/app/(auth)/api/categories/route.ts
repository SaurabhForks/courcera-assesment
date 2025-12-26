import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 10;
export async function GET() {
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Education" },
  ];

  return NextResponse.json({ message: "Categories API", categories });
}
