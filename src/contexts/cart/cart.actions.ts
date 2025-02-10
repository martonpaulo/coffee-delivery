export enum CartActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

export type CartActions =
  | {
      type: CartActionTypes.ADD_NEW_ITEM;
      payload: { id: number; quantity: number; price: number };
    }
  | {
      type: CartActionTypes.REMOVE_ITEM;
      payload: { id: number };
    }
  | {
      type: CartActionTypes.UPDATE_ITEM;
      payload: { id: number; quantity: number };
    }
  | { type: CartActionTypes.CLEAR_CART };

export function addNewItemAction(
  id: number,
  quantity: number,
  price: number
): CartActions {
  return {
    type: CartActionTypes.ADD_NEW_ITEM,
    payload: { id, quantity, price },
  };
}

export function removeItemAction(id: number): CartActions {
  return { type: CartActionTypes.REMOVE_ITEM, payload: { id } };
}

export function updateItemAction(id: number, quantity: number): CartActions {
  return { type: CartActionTypes.UPDATE_ITEM, payload: { id, quantity } };
}

export function clearCartAction(): CartActions {
  return { type: CartActionTypes.CLEAR_CART };
}
