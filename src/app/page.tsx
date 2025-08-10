import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { loadProducts } from "@/data/catalog";

export default async function Home() {
  const products = await loadProducts();
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid title="Featured" products={products.slice(0, 8)} />
    </main>
  );
}
