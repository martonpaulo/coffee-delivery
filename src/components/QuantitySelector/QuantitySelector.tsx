import { Minus, Plus } from "phosphor-react";

import { QuantityButton } from "@/components/QuantityButton/QuantityButton";
import {
  QuantitySelectorWrapper,
  QuantityTextWrapper,
} from "@/components/QuantitySelector/QuantitySelector.styles";
import { TextM } from "@/styles/typography";

interface QuantitySelectorProps {
  maxQuantity: number;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export function QuantitySelector({
  maxQuantity,
  quantity,
  setQuantity,
}: QuantitySelectorProps) {
  const increment = () => {
    setQuantity(Math.min(quantity + 1, maxQuantity));
  };

  const decrement = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  return (
    <QuantitySelectorWrapper>
      <QuantityButton
        onClick={decrement}
        icon={Minus}
        disabled={quantity === 1}
      />

      <QuantityTextWrapper>
        <TextM $color="baseTitle">{quantity}</TextM>
      </QuantityTextWrapper>

      <QuantityButton
        onClick={increment}
        icon={Plus}
        disabled={quantity === maxQuantity}
      />
    </QuantitySelectorWrapper>
  );
}
