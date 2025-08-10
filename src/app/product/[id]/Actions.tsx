"use client";

import { useStore } from "@/store/StoreProvider";

export default function Actions({ productId }: { productId: string }) {
  const { addToCart, addToWishlist } = useStore();
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => addToCart(productId, 1)}
        className="inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        Add to cart
      </button>
      <button
        type="button"
        onClick={() => addToWishlist(productId)}
        className="inline-flex h-11 items-center justify-center rounded-md border border-black/10 px-6 text-sm font-semibold transition hover:bg-gray-100 dark:border-white/20 dark:hover:bg-white/10"
      >
        Wishlist
      </button>
    </div>
  );
}


