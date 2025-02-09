import { Minus, Plus } from "phosphor-react";

import { QuantityButton } from "@/components/QuantityButton/QuantityButton";
import {
  QuantitySelectorWrapper,
  QuantityTextWrapper,
} from "@/components/QuantitySelector/QuantitySelector.styles";
import { Tooltip } from "@/components/Tooltip/Tooltip";
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
  const isOutOfStock = maxQuantity === 0;

  const isDecrementDisabled = quantity === 1 || isOutOfStock;
  const isIncrementDisabled = quantity === maxQuantity || isOutOfStock;

  const increment = () => {
    setQuantity(Math.min(quantity + 1, maxQuantity));
  };

  const decrement = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  const getItemPlural = () => (maxQuantity > 1 ? "items" : "item");

  return (
    <QuantitySelectorWrapper $disabled={isOutOfStock}>
      <Tooltip
        text="You need at least 1 item in your cart"
        active={isDecrementDisabled && !isOutOfStock}
      >
        <QuantityButton
          onClick={decrement}
          icon={Minus}
          disabled={isDecrementDisabled}
        />
      </Tooltip>

      <QuantityTextWrapper>
        <TextM $color="baseTitle">{quantity}</TextM>
      </QuantityTextWrapper>

      <Tooltip
        text={`Only ${maxQuantity} ${getItemPlural()} available in stock`}
        active={isIncrementDisabled && !isOutOfStock}
      >
        <QuantityButton
          onClick={increment}
          icon={Plus}
          disabled={isIncrementDisabled}
        />
      </Tooltip>
    </QuantitySelectorWrapper>
  );
}
