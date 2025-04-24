// app/products/[productId]/reviews/[reviewId]/page.tsx

export default async function ProductReview({
    params,
  }: {
    params: Promise<{ productId: string; reviewsId: string }>;
  }) {
    const { productId, reviewsId } = await params;
  
    return (
      <>
        <h1>
          Review {reviewsId} for product {productId}
        </h1>
      </>
    );
  }
  