import { products as staticProducts, findProductById as staticFindById } from "@/data/products";
import type { Product } from "@/types/product";
import { getMerchantConfig } from "@/config/merchant";
import fs from "node:fs/promises";
import path from "node:path";

export async function loadProducts(): Promise<Product[]> {
  const cfg = getMerchantConfig();
  if (cfg.productsSource === "json" && cfg.productsJsonPath) {
    try {
      const abs = path.join(process.cwd(), cfg.productsJsonPath);
      const raw = await fs.readFile(abs, "utf-8");
      const parsed = JSON.parse(raw) as Product[];
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // Fallback to static
    }
  }
  return staticProducts;
}

export async function loadProductById(id: string): Promise<Product | undefined> {
  const cfg = getMerchantConfig();
  if (cfg.productsSource === "json" && cfg.productsJsonPath) {
    const all = await loadProducts();
    return all.find((p) => p.id === id);
  }
  return staticFindById(id);
}


