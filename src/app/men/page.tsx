import ProductGrid from "@/components/ProductGrid";
import { loadProducts } from "@/data/catalog";

export const metadata = {
  title: "Men | Harry-Store",
};

export default async function MenPage() {
  const men = (await loadProducts()).filter((p) => p.gender === "men");
  return <ProductGrid title="Men" products={men} />;
}


