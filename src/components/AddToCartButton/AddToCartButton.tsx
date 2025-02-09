import { PlusCircle, ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import {
  AddToCartButtonWrapper,
  PlusCircleIconWrapper,
} from "@/components/AddToCartButton/AddToCartButton.styles";
import { Tooltip } from "@/components/Tooltip/Tooltip";

export function AddToCartButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <Tooltip text="Add to cart" active={!props.disabled}>
      <AddToCartButtonWrapper {...props}>
        <ShoppingCart size={22} weight="fill" />
        <PlusCircleIconWrapper>
          <PlusCircle size={12} weight="fill" />
        </PlusCircleIconWrapper>
      </AddToCartButtonWrapper>
    </Tooltip>
  );
}
