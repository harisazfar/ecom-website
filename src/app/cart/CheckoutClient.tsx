"use client";

import { useState } from "react";
import { useStore } from "@/store/StoreProvider";
import { products } from "@/data/products";
import { useToast } from "@/components/ToastProvider";
import { useRouter } from "next/navigation";

export default function CheckoutClient() {
  const { cart, clearCart } = useStore();
  const { showToast } = useToast();
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");

  const handleCheckout = async () => {
    try {
      setStatus("processing");
      // Simulate a network checkout, summarizing cart
      const payload = cart.map((c) => ({
        id: c.productId,
        qty: c.quantity,
        priceCents: products.find((p) => p.id === c.productId)?.priceCents ?? 0,
      }));
      await new Promise((r) => setTimeout(r, 800));
      console.log("Mock checkout complete", payload);
      clearCart();
      setStatus("success");
      showToast("Checkout complete", "success");
      router.push("/cart/success");
    } catch (e) {
      setStatus("error");
      showToast("Checkout failed", "error");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={status === "processing"}
      className="flex-1 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-black"
    >
      {status === "processing" ? "Processing..." : status === "success" ? "Done!" : "Checkout"}
    </button>
  );
}


