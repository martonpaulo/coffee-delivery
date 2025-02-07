import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { TextM } from "@/styles/typography";

import { QuantityText } from "./QuantitySelector.styles";
import {
  DecrementButton,
  IncrementButton,
  QuantitySelectorWrapper,
} from "./QuantitySelector.styles";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <QuantitySelectorWrapper>
      <DecrementButton
        onMouseEnter={() => setHoveredButton("minus")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={decrease}
      >
        <Minus
          size={hoveredButton === "plus" ? 16 : 14}
          weight={hoveredButton === "minus" ? "bold" : "regular"}
        />
      </DecrementButton>

      <QuantityText>
        <TextM>{quantity}</TextM>
      </QuantityText>

      <IncrementButton
        onMouseEnter={() => setHoveredButton("plus")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={increase}
      >
        <Plus
          size={hoveredButton === "plus" ? 16 : 14}
          weight={hoveredButton === "plus" ? "bold" : "regular"}
        />
      </IncrementButton>
    </QuantitySelectorWrapper>
  );
}
