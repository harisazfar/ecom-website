export interface MerchantConfig {
  siteName: string;
  description?: string;
  currency: string; // e.g. "USD"
  locale: string; // e.g. "en-US"
  productsSource: "static" | "json";
  productsJsonPath?: string; // e.g. "public/data/products.json"
}

const defaultConfig: MerchantConfig = {
  siteName: "Harry-Store",
  description: "Fashion essentials for everyone",
  currency: "USD",
  locale: "en-US",
  productsSource: "static",
};

const merchants: Record<string, MerchantConfig> = {
  default: defaultConfig,
  harry: {
    siteName: "Harry-Store",
    description: "Trendy styles and everyday fashion",
    currency: "USD",
    locale: "en-US",
    productsSource: "static",
  },
  // Example using JSON products catalogue
  // "merchant-x": {
  //   siteName: "Merchant X",
  //   description: "Curated looks",
  //   currency: "EUR",
  //   locale: "de-DE",
  //   productsSource: "json",
  //   productsJsonPath: "public/data/products.json",
  // },
};

export function getMerchantKey(): string {
  if (typeof process !== "undefined") {
    return process.env.NEXT_PUBLIC_MERCHANT || "default";
  }
  return "default";
}

export function getMerchantConfig(): MerchantConfig {
  const key = getMerchantKey();
  return merchants[key] || defaultConfig;
}


