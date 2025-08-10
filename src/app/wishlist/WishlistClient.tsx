"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/StoreProvider";
import { useToast } from "@/components/ToastProvider";
import { products } from "@/data/products";
import { getPriceLabel } from "@/types/product";

export default function WishlistClient() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const { showToast } = useToast();
  const items = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Wishlist</h1>
      {items.length === 0 ? (
        <div className="rounded-lg border border-black/10 p-6 text-center dark:border-white/10">
          <p>Your wishlist is empty.</p>
          <div className="mt-4">
            <Link href="/" className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
              Browse products
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product) => (
            <div key={product.id} className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-50 dark:bg-white/5">
                <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
              </div>
              <div className="mt-2">
                <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                  {product.name}
                </Link>
                <div className="text-sm text-gray-600 dark:text-gray-300">{getPriceLabel(product.priceCents)}</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => {
                    addToCart(product.id, 1);
                    showToast("Added to cart", "success");
                  }}
                  className="flex-1 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-black"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {
                    removeFromWishlist(product.id);
                    showToast("Removed from wishlist", "info");
                  }}
                  className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/10"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}


