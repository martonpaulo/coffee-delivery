import { useState } from "react";

import { CoffeeImage } from "@/assets";
import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import { RemoveButton } from "@/components/RemoveButton/RemoveButton";
import {
  ActionsContainer,
  CoffeeOrderContainer,
  DetailsAndActionsContainer,
  ImageWrapper,
  NameAndActionsContainer,
  PriceContainer,
} from "@/pages/CheckoutPage/components/CoffeeOrder/CoffeeOrder.styles";
import { TextM } from "@/styles/typography";
import { CoffeeType } from "@/types/coffee";

interface CoffeeOrderProps {
  coffee: CoffeeType;
}

export function CoffeeOrder({ coffee }: CoffeeOrderProps) {
  const { imageComponent, name, price, stock } = coffee;
  const [quantity, setQuantity] = useState(1);

  const handleSetQuantity = (quantity: number) => {
    setQuantity(quantity);
    console.log(`Selected quantity: ${quantity}`);
  };

  return (
    <CoffeeOrderContainer>
      <DetailsAndActionsContainer>
        <ImageWrapper>
          <CoffeeImage name={imageComponent} />
        </ImageWrapper>

        <NameAndActionsContainer>
          <TextM>{name}</TextM>

          <ActionsContainer>
            <QuantitySelector
              quantity={quantity}
              maxQuantity={stock}
              setQuantity={handleSetQuantity}
            />
            <RemoveButton
              onClick={() => console.log("Remove button clicked")}
            />
          </ActionsContainer>
        </NameAndActionsContainer>
      </DetailsAndActionsContainer>

      <PriceContainer>
        <TextM $bold>$ {price.toFixed(2)}</TextM>
      </PriceContainer>
    </CoffeeOrderContainer>
  );
}
