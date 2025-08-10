import ProductGrid from "@/components/ProductGrid";
import { productsByGender } from "@/data/products";

export const metadata = {
  title: "Women | Harry-Store",
};

export default function WomenPage() {
  const women = productsByGender("women");
  return <ProductGrid title="Women" products={women} />;
}


