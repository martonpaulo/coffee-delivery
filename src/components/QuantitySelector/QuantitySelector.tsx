import { Minus, Plus } from "phosphor-react";

import { QuantityButton } from "@/components/QuantityButton/QuantityButton";
import {
  QuantitySelectorWrapper,
  QuantityTextWrapper,
} from "@/components/QuantitySelector/QuantitySelector.styles";
import { TextM } from "@/styles/typography";

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  setQuantity: (quantity: number) => void;
}

export function QuantitySelector({
  quantity,
  maxQuantity,
  setQuantity,
}: QuantitySelectorProps) {
  const updateQuantity = (change: number) => {
    setQuantity(Math.min(Math.max(quantity + change, 1), maxQuantity));
  };

  return (
    <QuantitySelectorWrapper>
      <QuantityButton
        onClick={() => updateQuantity(-1)}
        icon={Minus}
        disabled={quantity === 1}
      />

      <QuantityTextWrapper>
        <TextM $color="baseTitle">{quantity}</TextM>
      </QuantityTextWrapper>

      <QuantityButton
        onClick={() => updateQuantity(1)}
        icon={Plus}
        disabled={quantity === maxQuantity}
      />
    </QuantitySelectorWrapper>
  );
}
