import { ShoppingCart } from "phosphor-react";

import { CartButtonWrapper } from "@/components/CartButton/CartButton.styles";

interface CartButtonProps {
  color?: "purple" | "lightYellow";
}

export function CartButton({ color = "purple" }: CartButtonProps) {
  return (
    <CartButtonWrapper $color={color}>
      <a href="/coffee-delivery/success">
        <ShoppingCart size={22} weight="fill" />
      </a>
    </CartButtonWrapper>
  );
}
