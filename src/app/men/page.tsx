import ProductGrid from "@/components/ProductGrid";
import { productsByGender } from "@/data/products";

export const metadata = {
  title: "Men | Harry-Store",
};

export default function MenPage() {
  const men = productsByGender("men");
  return <ProductGrid title="Men" products={men} />;
}


