export default async function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;
  return (
    <>
      My product review page {productId} - {reviewId}
    </>
  );
}
