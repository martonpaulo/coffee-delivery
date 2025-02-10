import { initialCartState } from "@/contexts/cart/cart.reducer.utils";
import { CartStateType } from "@/contexts/cart/cart.types";

const STORAGE_PREFIX = "@coffee-delivery";
const STORAGE_VERSION =
  import.meta.env.VITE_STORAGE_VERSION || "unknown-version";
const STORAGE_KEY = `${STORAGE_PREFIX}:cart-state:${STORAGE_VERSION}`;

export function saveCartState(state: CartStateType) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadCartState(): CartStateType {
  const storageStateAsJSON = localStorage.getItem(STORAGE_KEY);

  if (!storageStateAsJSON) {
    return initialCartState as CartStateType;
  }

  try {
    return JSON.parse(storageStateAsJSON) as CartStateType;
  } catch (error) {
    console.error("Error parsing cart state from localStorage", error);
    return initialCartState as CartStateType;
  }
}
