export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 dark:from-black dark:via-black dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Discover your style
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Trendy, comfortable, and crafted to last. Explore our curated selection
            of essentials for men and women.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#products" className="rounded-md bg-black px-4 py-2 text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
              Shop now
            </a>
            <a href="/women" className="rounded-md border border-black/10 px-4 py-2 hover:bg-gray-100 dark:border-white/20 dark:hover:bg-white/10">
              Women
            </a>
            <a href="/men" className="rounded-md border border-black/10 px-4 py-2 hover:bg-gray-100 dark:border-white/20 dark:hover:bg-white/10">
              Men
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


