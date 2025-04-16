// app/products/[productId]/reviews/[reviewId]/page.tsx

import { notFound } from "next/navigation";
export default async function ProductReview({
    params,
  }: {
    params: Promise<{ productId: string; reviewsId: string }>;
  }) {
    const { productId, reviewsId } = await params;
    if(parseInt(reviewsId)> 1000){
      notFound()
    }
  
    return (
      <>
        <h1>
          Review {reviewsId} for Products {productId}
        </h1>
      </>
    );
  }
  