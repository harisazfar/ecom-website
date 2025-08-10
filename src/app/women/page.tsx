import ProductGrid from "@/components/ProductGrid";
import { loadProducts } from "@/data/catalog";

export const metadata = {
  title: "Women | Harry-Store",
};

export default async function WomenPage() {
  const women = (await loadProducts()).filter((p) => p.gender === "women");
  return <ProductGrid title="Women" products={women} />;
}


