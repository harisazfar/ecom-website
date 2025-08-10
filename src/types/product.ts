export type Gender = "men" | "women";

export type Category =
  | "tshirts"
  | "shirts"
  | "jackets"
  | "pants"
  | "hoodies"
  | "dresses"
  | "skirts"
  | "accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  imageUrl: string;
  category: Category;
  gender: Gender;
}

export function getPriceLabel(priceCents: number, locale: string = "en-US", currency: string = "USD"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(priceCents / 100);
}


