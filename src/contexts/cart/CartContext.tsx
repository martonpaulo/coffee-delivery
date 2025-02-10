import { createContext } from "react";

import { CartItemType } from "@/contexts/cart/cart.types";
import { StockType } from "@/types/stock";

export interface CartContextType {
  cartItems: CartItemType[];
  cartItemCount: number;
  cartTotalPrice: number;
  stockItems: StockType;
  getCartItemQuantity: (id: number) => number;
  getStockQuantity: (id: number) => number;
  isInCart: (id: number) => boolean;
  addToCart: (id: number, quantity: number, price: number) => void;
  removeFromCart: (id: number) => void;
  updateCartItem: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);
