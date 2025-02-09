import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import {
  CartButtonWrapper,
  ItemsCountContainer,
} from "@/components/CartButton/CartButton.styles";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { TextS } from "@/styles/typography";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  itemsCount?: number;
}

export function CartButton({ itemsCount = 0, ...props }: CartButtonProps) {
  const isDisabled = itemsCount === 0;
  const tooltipText = isDisabled ? "Your cart is empty" : "Go to checkout";

  return (
    <Tooltip text={tooltipText}>
      <CartButtonWrapper disabled={isDisabled} {...props}>
        {isDisabled ? (
          <ShoppingCart size={22} weight="fill" />
        ) : (
          <NavLink to="/checkout">
            {itemsCount > 0 && (
              <ItemsCountContainer>
                <TextS $bold $color="white">
                  {itemsCount}
                </TextS>
              </ItemsCountContainer>
            )}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        )}
      </CartButtonWrapper>
    </Tooltip>
  );
}
