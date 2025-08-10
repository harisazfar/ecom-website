export interface CartItem {
  productId: string;
  quantity: number;
}

export interface StoreState {
  cart: CartItem[];
  wishlist: string[]; // productIds
}

export interface StoreActions {
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

export interface StoreContextValue extends StoreState, StoreActions {
  cartCount: number;
  wishlistCount: number;
}


