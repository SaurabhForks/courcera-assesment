import { Metadata } from "next";

type Props = {
  params: { productId: string };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId} Detail Page`,
    description: "This is the login page of the Next.js app",
  };
};
export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Product Detail</h1>
        <p>Product ID (async): {productId}</p>
      </main>
    </div>
  );
}
