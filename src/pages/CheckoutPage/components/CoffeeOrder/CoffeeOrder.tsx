import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CoffeeImage } from "@/assets";
import { Dialog } from "@/components/Dialog/Dialog";
import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import { RemoveButton } from "@/components/RemoveButton/RemoveButton";
import { CartContext } from "@/contexts/cart/CartContext";
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
  const {
    getCartItemQuantity,
    getStockQuantity,
    removeFromCart,
    updateCartItem,
    cartItemCount,
  } = useContext(CartContext);
  const { id, imageComponent, name, price } = coffee;

  const quantityInCart = getCartItemQuantity(id);
  const stock = getStockQuantity(id);
  const maxQuantity = stock + quantityInCart;

  const [quantity, setQuantity] = useState(quantityInCart);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleSetQuantity = (quantity: number) => {
    updateCartItem(id, quantity);
    setQuantity(quantity);
  };

  const handleOpenRemoveDialog = () => {
    setDialogOpen(true);
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
    setDialogOpen(false);
    if (quantityInCart === cartItemCount) {
      navigate("/");
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const totalPrice = price * quantity;

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
              maxQuantity={maxQuantity}
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
        <TextM $bold>$ {totalPrice.toFixed(2)}</TextM>
      </PriceContainer>
    </CoffeeOrderContainer>
  );
}
