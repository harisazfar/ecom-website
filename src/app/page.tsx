import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid title="Featured" products={products.slice(0, 8)} />
    </main>
  );
}
