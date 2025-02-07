import { ShoppingCart } from "phosphor-react";

import {
  CartButtonWrapper,
  ItemsCountContainer,
} from "@/components/CartButton/CartButton.styles";
import { TextS } from "@/styles/typography";

interface CartButtonProps {
  color?: "purple" | "lightYellow";
  itemsCount?: number;
}

export function CartButton({
  color = "purple",
  itemsCount = 0,
}: CartButtonProps) {
  return (
    <CartButtonWrapper $color={color}>
      <a href="/coffee-delivery/success">
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
