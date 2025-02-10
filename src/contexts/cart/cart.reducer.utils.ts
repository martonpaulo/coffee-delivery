import { CartItemType, CartStateType } from "@/contexts/cart/cart.types";
import { stockList } from "@/data/stockData";
import { StockType } from "@/types/stock";

export const initialCartState: CartStateType = {
  cartItems: [],
  cartItemCount: 0,
  cartTotalPrice: 0,
  stockItems: stockList,
};

function countTotalItemsInCart(cartItems: CartItemType[]): number {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

function countCartTotalPrice(cartItems: CartItemType[]): number {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
}

function updateStockItems(
  stockItems: StockType,
  id: number,
  delta: number
): StockType {
  return stockItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + delta } : item
  );
}

export function addNewItem(
  state: CartStateType,
  id: number,
  quantity: number,
  price: number
): CartStateType {
  if (state.cartItems.some((item) => item.id === id)) return state;

  const stockItem = state.stockItems.find((item) => item.id === id);
  if (!stockItem || stockItem.quantity < quantity) return state;

  const newCartItems = [...state.cartItems, { id, quantity, price }];

  return {
    ...state,
    cartItems: newCartItems,
    cartItemCount: countTotalItemsInCart(newCartItems),
    cartTotalPrice: countCartTotalPrice(newCartItems),
    stockItems: updateStockItems(state.stockItems, id, -quantity),
  };
}

export function removeFromCart(
  state: CartStateType,
  id: number
): CartStateType {
  const cartItem = state.cartItems.find((item) => item.id === id);
  if (!cartItem) return state;

  const newCartItems = state.cartItems.filter((item) => item.id !== id);

  return {
    ...state,
    cartItems: newCartItems,
    cartItemCount: countTotalItemsInCart(newCartItems),
    cartTotalPrice: countCartTotalPrice(newCartItems),
    stockItems: updateStockItems(state.stockItems, id, cartItem.quantity),
  };
}

export function updateCartItem(
  state: CartStateType,
  id: number,
  newQuantity: number
): CartStateType {
  const cartItem = state.cartItems.find((item) => item.id === id);
  if (!cartItem) return state;

  const quantityDiff = newQuantity - cartItem.quantity;

  if (quantityDiff > 0) {
    const stockItem = state.stockItems.find((item) => item.id === id);
    if (!stockItem || stockItem.quantity < quantityDiff) return state;
  }

  const newCartItems = state.cartItems.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );

  return {
    ...state,
    cartItems: newCartItems,
    cartItemCount: countTotalItemsInCart(newCartItems),
    cartTotalPrice: countCartTotalPrice(newCartItems),
    stockItems: updateStockItems(state.stockItems, id, -quantityDiff),
  };
}
