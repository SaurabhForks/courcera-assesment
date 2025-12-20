import Link from "next/link";

export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a 5-second delay to see loading state
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Products Page</h1>
        <Link href="/products/1">Go to Product 1</Link>
        <Link href="/products/2">Go to Product 2</Link>
        <Link href="/products/3">Go to Product 3</Link>
      </main>
    </div>
  );
}
