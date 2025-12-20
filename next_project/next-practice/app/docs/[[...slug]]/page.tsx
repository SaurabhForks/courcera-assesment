import { notFound } from "next/navigation";

export default async function Document({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = await params;
  if (slug?.length > 2) {
    return notFound();
  }
  if (slug?.length === 2) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold">
          Document{slug[0]} -- Feature {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold">Document: {slug[0]}</h1>
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold">Documentation Home</h1>
      </div>
    );
  }
}
