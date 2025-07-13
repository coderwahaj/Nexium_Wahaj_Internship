export default function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        Details for Product {params.productId}{" "}
      </h1>
    </>
  );
}
