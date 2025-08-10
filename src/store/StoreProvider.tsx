"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { StoreActions, StoreContextValue, StoreState } from "@/types/store";

const StoreContext = createContext<StoreContextValue | null>(null);

const STORAGE_KEY = "harry-store";

function loadInitialState(): StoreState {
  if (typeof window === "undefined") return { cart: [], wishlist: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { cart: [], wishlist: [] };
    const parsed = JSON.parse(raw) as StoreState;
    if (!parsed || !Array.isArray(parsed.cart) || !Array.isArray(parsed.wishlist)) {
      return { cart: [], wishlist: [] };
    }
    return parsed;
  } catch {
    return { cart: [], wishlist: [] };
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoreState>({ cart: [], wishlist: [] });

  useEffect(() => {
    setState(loadInitialState());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const addToCart = useCallback<StoreActions["addToCart"]>((productId, quantity = 1) => {
    setState((prev) => {
      const existing = prev.cart.find((c) => c.productId === productId);
      if (existing) {
        return {
          ...prev,
          cart: prev.cart.map((c) =>
            c.productId === productId ? { ...c, quantity: c.quantity + quantity } : c
          ),
        };
      }
      return { ...prev, cart: [...prev.cart, { productId, quantity }] };
    });
  }, []);

  const removeFromCart = useCallback<StoreActions["removeFromCart"]>((productId) => {
    setState((prev) => ({ ...prev, cart: prev.cart.filter((c) => c.productId !== productId) }));
  }, []);

  const updateCartQuantity = useCallback<StoreActions["updateCartQuantity"]>((productId, quantity) => {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.map((c) => (c.productId === productId ? { ...c, quantity } : c)),
    }));
  }, []);

  const clearCart = useCallback<StoreActions["clearCart"]>(() => {
    setState((prev) => ({ ...prev, cart: [] }));
  }, []);

  const addToWishlist = useCallback<StoreActions["addToWishlist"]>((productId) => {
    setState((prev) =>
      prev.wishlist.includes(productId)
        ? prev
        : { ...prev, wishlist: [...prev.wishlist, productId] }
    );
  }, []);

  const removeFromWishlist = useCallback<StoreActions["removeFromWishlist"]>((productId) => {
    setState((prev) => ({ ...prev, wishlist: prev.wishlist.filter((id) => id !== productId) }));
  }, []);

  const clearWishlist = useCallback<StoreActions["clearWishlist"]>(() => {
    setState((prev) => ({ ...prev, wishlist: [] }));
  }, []);

  const value = useMemo<StoreContextValue>(() => {
    const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = state.wishlist.length;
    return {
      ...state,
      cartCount,
      wishlistCount,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
    };
  }, [state, addToCart, removeFromCart, updateCartQuantity, clearCart, addToWishlist, removeFromWishlist, clearWishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}


