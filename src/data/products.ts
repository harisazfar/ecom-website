import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "m-ts-001",
    slug: "mens-classic-tee",
    name: "Men's Classic Tee",
    description: "Soft cotton t-shirt with a tailored fit for everyday comfort.",
    priceCents: 1999,
    imageUrl: "/images/men/men-classic-tee.jpg",
    category: "tshirts",
    gender: "men",
  },
  {
    id: "m-sh-001",
    slug: "mens-oxford-shirt",
    name: "Men's Oxford Shirt",
    description: "Crisp oxford shirt with button-down collar for smart-casual looks.",
    priceCents: 4499,
    imageUrl: "/images/men/men-oxford-shirt.jpg",
    category: "shirts",
    gender: "men",
  },
  {
    id: "m-jk-001",
    slug: "mens-denim-jacket",
    name: "Men's Denim Jacket",
    description: "Classic denim jacket with a timeless medium wash.",
    priceCents: 6999,
    imageUrl: "/images/men/men-denim-jacket.jpg",
    category: "jackets",
    gender: "men",
  },
  {
    id: "m-pt-001",
    slug: "mens-chino-pants",
    name: "Men's Chino Pants",
    description: "Slim-fit chinos with stretch for all-day wear.",
    priceCents: 5499,
    imageUrl: "/images/men/men-chino-pants.jpg",
    category: "pants",
    gender: "men",
  },
  {
    id: "w-dr-001",
    slug: "womens-summer-dress",
    name: "Women's Summer Dress",
    description: "Lightweight floral dress with a flattering silhouette.",
    priceCents: 5899,
    imageUrl: "/images/women/women-summer-dress.jpg",
    category: "dresses",
    gender: "women",
  },
  {
    id: "w-sk-001",
    slug: "womens-pleated-skirt",
    name: "Women's Pleated Skirt",
    description: "Elegant pleated skirt that pairs beautifully with basics.",
    priceCents: 4799,
    imageUrl: "/images/women/women-pleated-skirt.jpg",
    category: "skirts",
    gender: "women",
  },
  {
    id: "w-hd-001",
    slug: "womens-cozy-hoodie",
    name: "Women's Cozy Hoodie",
    description: "Warm fleece hoodie with adjustable drawstrings.",
    priceCents: 3999,
    imageUrl: "/images/women/women-cozy-hoodie.jpg",
    category: "hoodies",
    gender: "women",
  },
  {
    id: "w-ac-001",
    slug: "womens-leather-belt",
    name: "Women's Leather Belt",
    description: "Genuine leather belt with minimalist buckle.",
    priceCents: 2999,
    imageUrl: "/images/women/women-leather-belt.jpg",
    category: "accessories",
    gender: "women",
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByGender(gender: "men" | "women"): Product[] {
  return products.filter((p) => p.gender === gender);
}

export function findProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}


