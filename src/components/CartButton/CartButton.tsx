import { ShoppingCart } from "phosphor-react";

import { CartButtonWrapper } from "@/components/CartButton/CartButton.styles";
import { ColorType } from "@/types/color";

interface CartButtonProps {
  color?: ColorType;
}

export function CartButton({ color = "primary" }: CartButtonProps) {
  return (
    <CartButtonWrapper $color={color}>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonWrapper>
  );
}
