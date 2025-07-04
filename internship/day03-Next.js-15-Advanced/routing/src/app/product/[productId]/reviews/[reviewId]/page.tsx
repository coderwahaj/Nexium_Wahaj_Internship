import { notFound } from "next/navigation";
export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1 style={{ textAlign: "center" }}>
      {" "}
      Here is the Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}
