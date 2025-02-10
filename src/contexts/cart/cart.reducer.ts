import { CartActions, CartActionTypes } from "@/contexts/cart/cart.actions";
import {
  addNewItem,
  initialCartState,
  removeFromCart,
  updateCartItem,
} from "@/contexts/cart/cart.reducer.utils";
import { CartStateType } from "@/contexts/cart/cart.types";

export function cartReducer(
  state: CartStateType,
  action: CartActions
): CartStateType {
  switch (action.type) {
    case CartActionTypes.ADD_NEW_ITEM: {
      const { id, quantity, price } = action.payload;
      return addNewItem(state, id, quantity, price);
    }
    case CartActionTypes.REMOVE_ITEM: {
      const { id } = action.payload;
      return removeFromCart(state, id);
    }
    case CartActionTypes.UPDATE_ITEM: {
      const { id, quantity } = action.payload;
      return updateCartItem(state, id, quantity);
    }
    case CartActionTypes.CLEAR_CART: {
      return initialCartState;
    }
    default:
      return state;
  }
}
