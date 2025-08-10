"use client";

import Link from "next/link";
import Image from "next/image";
import CheckoutClient from "./CheckoutClient";
import { useStore } from "@/store/StoreProvider";
import { products } from "@/data/products";
import { getPriceLabel } from "@/types/product";

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useStore();
  const items = cart
    .map((c) => {
      const product = products.find((p) => p.id === c.productId);
      return product ? { product, quantity: c.quantity } : null;
    })
    .filter(Boolean) as { product: (typeof products)[number]; quantity: number }[];

  const subtotalCents = items.reduce((sum, it) => sum + it.product.priceCents * it.quantity, 0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Your Cart</h1>
      {items.length === 0 ? (
        <div className="rounded-lg border border-black/10 p-6 text-center dark:border-white/10">
          <p>Your cart is empty.</p>
          <div className="mt-4">
            <Link href="/" className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
              Continue shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="relative h-24 w-20 overflow-hidden rounded-md bg-gray-50 dark:bg-white/5">
                  <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{getPriceLabel(product.priceCents)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => updateCartQuantity(product.id, Math.max(1, Number(e.target.value)))}
                    className="w-16 rounded-md border border-black/10 px-2 py-1 text-sm dark:border-white/10 bg-transparent"
                  />
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/10"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{getPriceLabel(subtotalCents)}</span>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Shipping and taxes calculated at checkout.</p>
            <div className="mt-4 flex items-center gap-2">
              <CheckoutClient />
              <button onClick={clearCart} className="rounded-md border border-black/10 px-4 py-2 text-sm hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/10">
                Clear
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}


