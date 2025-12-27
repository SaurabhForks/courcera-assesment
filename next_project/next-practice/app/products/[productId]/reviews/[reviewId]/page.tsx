export async function generatestaticParams() {
  return [
    { productId: "1", reviewId: "1" },
    { productId: "2", reviewId: "2" },
    { productId: "3", reviewId: "3" },
  ];
}

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
