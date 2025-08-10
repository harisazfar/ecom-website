"use client";
import Link from "next/link";
import { useStore } from "@/store/StoreProvider";

export default function Header() {
  const { cartCount, wishlistCount } = useStore();
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
        Harry-Store
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/men" className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10">
            Men
          </Link>
          <Link href="/women" className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10">
            Women
          </Link>
          <Link href="/news" className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10">
            News
          </Link>
          <Link href="/wishlist" className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10">
            Wishlist{wishlistCount ? <span className="ml-1 rounded-full bg-gray-900 px-1.5 text-xs text-white dark:bg-white dark:text-black">{wishlistCount}</span> : null}
          </Link>
          <Link href="/cart" className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10">
            Cart{cartCount ? <span className="ml-1 rounded-full bg-gray-900 px-1.5 text-xs text-white dark:bg-white dark:text-black">{cartCount}</span> : null}
          </Link>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 sm:inline"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}


