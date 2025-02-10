import { StockType } from "@/types/stock";

export interface CartItemType {
  id: number;
  quantity: number;
  price: number;
}

export interface CartStateType {
  cartItems: CartItemType[];
  cartItemCount: number;
  cartTotalPrice: number;
  stockItems: StockType;
}
