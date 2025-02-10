import { ReactNode, useEffect, useReducer } from "react";

import {
  addNewItemAction,
  clearCartAction,
  removeItemAction,
  updateItemAction,
} from "@/contexts/cart/cart.actions";
import { cartReducer } from "@/contexts/cart/cart.reducer";
import { loadCartState, saveCartState } from "@/contexts/cart/cart.storage";
import { CartContext } from "@/contexts/cart/CartContext";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, loadCartState());

  useEffect(() => {
    saveCartState(state);
  }, [state]);

  const getCartItemQuantity = (id: number) => {
    if (!state.cartItems) {
      return 0;
    }

    const item = state.cartItems.find((item) => item.id === id);

    return item?.quantity ?? 0;
  };

  const getStockQuantity = (id: number) => {
    if (!state.stockItems) {
      return 0;
    }

    const item = state.stockItems.find((item) => item.id === id);

    return item?.quantity ?? 0;
  };

  const isInCart = (id: number) => {
    if (!state.cartItems) {
      return false;
    }

    return state.cartItems.some((item) => item.id === id);
  };

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  const addToCart = (id: number, quantity: number, price: number) => {
    const isItemAlreadyInCart = isInCart(id);

    if (isItemAlreadyInCart) {
      const currentQuantity = getCartItemQuantity(id);
      const newQuantity = currentQuantity + quantity;
      updateCartItem(id, newQuantity);
    } else {
      dispatch(addNewItemAction(id, quantity, price));
    }
  };

  const removeFromCart = (id: number) => {
    if (!isInCart(id)) {
      return;
    }

    dispatch(removeItemAction(id));
  };

  const updateCartItem = (id: number, quantity: number) => {
    if (!isInCart(id)) {
      return;
    }

    dispatch(updateItemAction(id, quantity));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        cartItemCount: state.cartItemCount,
        cartTotalPrice: state.cartTotalPrice,
        stockItems: state.stockItems,
        getCartItemQuantity,
        getStockQuantity,
        isInCart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
