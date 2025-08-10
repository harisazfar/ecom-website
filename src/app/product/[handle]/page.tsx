import Image from "next/image";
import { notFound } from "next/navigation";
import { loadProductById } from "@/data/catalog";
import { getPriceLabel } from "@/types/product";
import Actions from "./Actions";
import { getMerchantConfig } from "@/config/merchant";

interface PageProps {
  params: Promise<{ handle: string }>;
}

async function findProductByHandle(handle: string) {
  // Prefer id match; fallback to slug match for compatibility
  return (await loadProductById(handle)) ?? null;
}

export async function generateMetadata({ params }: PageProps) {
  const { handle } = await params;
  const product = await findProductByHandle(handle);
  if (!product) return { title: "Product not found | Harry-Store" };
  return { title: `${product.name} | ${getMerchantConfig().siteName}` };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = await findProductByHandle(handle);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-50 dark:bg-white/5">
          <Image
            src={product.imageUrl || "https://images.unsplash.com/photo-1520975916090-3105956dac38"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{product.name}</h1>
          <div className="mt-2 text-lg font-semibold">{getPriceLabel(product.priceCents, getMerchantConfig().locale, getMerchantConfig().currency)}</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-white/10 dark:text-gray-100">
            <span>{product.gender === "men" ? "Men" : "Women"}</span>
            <span className="text-gray-400">•</span>
            <span className="capitalize">{product.category}</span>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-200">{product.description}</p>

          <div className="mt-6">
            <Actions productId={product.id} />
          </div>
        </div>
      </div>
    </main>
  );
}


