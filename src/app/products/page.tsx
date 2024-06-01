import ProductCard from "@/components/products/ProductCard";
import { pb } from "@/lib/pocketbase";

export default async function ProductsPage() {
  const products = await pb.collection("products").getList(1, 10, {
    cache: "no-store",
  });
  return (
    <div className="grid grid-cols-3 gap-3">
      {products.items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}