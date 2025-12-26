export const dynamic = "force-static";
export const revalidate = 10;
export default async function GET() {
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Education" },
  ];

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
