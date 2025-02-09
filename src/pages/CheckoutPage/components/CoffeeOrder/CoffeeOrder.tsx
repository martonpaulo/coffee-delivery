import { useState } from "react";

import { CoffeeImage } from "@/assets";
import { Dialog } from "@/components/Dialog/Dialog";
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
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSetQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleOpenRemoveDialog = () => {
    setDialogOpen(true);
  };

  const handleRemoveItem = () => {
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
            <RemoveButton onClick={handleOpenRemoveDialog} />

            <Dialog
              title="Remove item?"
              message="Are you sure you want to remove this from your cart? You can add it again later if you change your mind."
              isOpen={isDialogOpen}
              confirmText="Remove item"
              onConfirm={handleRemoveItem}
              cancelText="Cancel"
              onCancel={handleCloseDialog}
              onClose={handleCloseDialog}
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
