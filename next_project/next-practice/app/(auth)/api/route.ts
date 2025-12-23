import { NextRequest } from "next/server";
import { data } from "../data/data";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");

  const filteredData = query
    ? data.users.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
      })
    : data;
  return new Response(JSON.stringify(filteredData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const newUser = await request.json();
  const updatedUser = {
    id: data.users.length + 1,
    ...newUser,
  };
  data.users.push(updatedUser);
  return new Response(
    JSON.stringify({ message: "User added successfully", user: updatedUser }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    },
  );
}
