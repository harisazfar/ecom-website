"use client";

import Image from "next/image";
import Link from "next/link";
import { getPriceLabel } from "@/types/product";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-lg border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black/20"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-lg bg-gray-50 dark:bg-white/5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight line-clamp-1">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-white/10 dark:text-gray-100">
            {product.gender === "men" ? "Men" : "Women"}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
          {product.description}
        </p>
        <div className="mt-2 text-sm font-semibold">
          {getPriceLabel(product.priceCents)}
        </div>
      </div>
    </Link>
  );
}


