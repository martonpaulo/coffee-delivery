import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import {
  CartButtonWrapper,
  ItemsCountContainer,
} from "@/components/CartButton/CartButton.styles";
import { TextS } from "@/styles/typography";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple" | "lightYellow";
  itemsCount?: number;
}

export function CartButton({
  color = "purple",
  itemsCount = 0,
  ...props
}: CartButtonProps) {
  return (
    <CartButtonWrapper $color={color} {...props}>
      <a href="/coffee-delivery/checkout">
        {itemsCount > 0 && color === "lightYellow" && (
          <ItemsCountContainer>
            <TextS $bold $color="white">
              {itemsCount}
            </TextS>
          </ItemsCountContainer>
        )}
        <ShoppingCart size={22} weight="fill" />
      </a>
    </CartButtonWrapper>
  );
}
