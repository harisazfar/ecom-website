import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

interface ProductGridProps {
  title?: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {title ? (
        <h2 className="mb-4 text-xl font-bold tracking-tight sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


