import { data } from "../../data/data";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  const userIndex = data.users.findIndex((user) => user.id == id);
  if (userIndex > -1) {
    const deletedUser = data.users.splice(userIndex, 1);
    return new Response(JSON.stringify(deletedUser[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  const { ...updatedFields } = await request.json();
  const userIndex = data.users.findIndex((user) => user.id == id);

  console.log("Updating user with id:", userIndex, id);

  if (userIndex > -1) {
    data.users[userIndex] = { ...data.users[userIndex], ...updatedFields };
    return new Response(
      JSON.stringify({
        message: "User updated successfully",
        user: data.users[userIndex],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } else {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
