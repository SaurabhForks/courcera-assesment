import Link from "next/link";

export default async function Reviews({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  return (
    <div>
      <Link href={`/products/${productId}/reviews/1`}>1</Link>
      <Link href={`/products/${productId}/reviews/2`}>2</Link>
      <Link href={`/products/${productId}/reviews/3`}>3</Link>
    </div>
  );
}
