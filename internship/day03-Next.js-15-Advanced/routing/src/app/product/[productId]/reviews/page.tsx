export default function ProductReviews({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <h1 style={{ textAlign: "center" }}>
      {" "}
      Reviews About Product {params.productId} !
    </h1>
  );
}
