import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes, useContext } from "react";
import { NavLink } from "react-router-dom";

import {
  CartButtonWrapper,
  ItemsCountContainer,
} from "@/components/CartButton/CartButton.styles";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { CartContext } from "@/contexts/cart/CartContext";
import { TextS } from "@/styles/typography";

export function CartButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { cartItemCount } = useContext(CartContext);

  const isDisabled = cartItemCount === 0;
  const tooltipText = isDisabled ? "Your cart is empty" : "Go to checkout";

  return (
    <Tooltip text={tooltipText}>
      <CartButtonWrapper disabled={isDisabled} {...props}>
        {isDisabled ? (
          <ShoppingCart size={22} weight="fill" />
        ) : (
          <NavLink to="/checkout">
            {cartItemCount > 0 && (
              <ItemsCountContainer>
                <TextS $bold $color="white">
                  {cartItemCount}
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
