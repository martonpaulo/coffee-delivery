import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CoffeeImage } from "@/assets";
import { AddToCartButton } from "@/components/AddToCartButton/AddToCartButton";
import { Dialog } from "@/components/Dialog/Dialog";
import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { CartContext } from "@/contexts/cart/CartContext";
import {
  ActionsContainer,
  CoffeeCardContainer,
  DetailsContainer,
  FooterContainer,
  ImageWrapper,
  PriceContainer,
  TagItem,
  TagList,
} from "@/pages/Homepage/components/CoffeeCard/CoffeeCard.styles";
import { Tag, TextS, TitleM, TitleS } from "@/styles/typography";
import { CoffeeType } from "@/types/coffee";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { getStockQuantity, addToCart } = useContext(CartContext);
  const { id, imageComponent, tags, name, description, price } = coffee;

  const stock = getStockQuantity(id);

  const [quantity, setQuantity] = useState(stock > 0 ? 1 : 0);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const isOutOfStock = stock === 0;

  const handleSetQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCartButtonClick = () => {
    setDialogOpen(true);
    addToCart(id, quantity, price);
    if (quantity === stock) setQuantity(0);
    else setQuantity(1);
  };

  const handleGoToCart = () => {
    navigate("/checkout");
    setDialogOpen(false);
  };

  const handleContinueShopping = () => {
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Tooltip
      text="Out of stock, but we’re working to get more!"
      active={isOutOfStock}
      maxWidth
    >
      <CoffeeCardContainer $disabled={isOutOfStock}>
        <ImageWrapper>
          <CoffeeImage name={imageComponent} />
        </ImageWrapper>

        <TagList>
          {tags.map((tag) => (
            <TagItem key={tag}>
              <Tag>{tag}</Tag>
            </TagItem>
          ))}
        </TagList>

        <DetailsContainer>
          <TitleS>{name}</TitleS>
          <TextS>{description}</TextS>
        </DetailsContainer>

        <FooterContainer>
          <PriceContainer>
            <TextS>$</TextS>
            <TitleM $color="baseText">{price.toFixed(2)}</TitleM>
          </PriceContainer>

          <ActionsContainer>
            <QuantitySelector
              quantity={quantity}
              maxQuantity={stock}
              setQuantity={handleSetQuantity}
            />
            <AddToCartButton
              onClick={handleAddToCartButtonClick}
              disabled={isOutOfStock}
            />
          </ActionsContainer>
        </FooterContainer>

        <Dialog
          title="Item added to cart!"
          message={`${quantity}x ${name} was added to your cart`}
          isOpen={isDialogOpen}
          confirmText="Go to checkout"
          onConfirm={handleGoToCart}
          cancelText="Continue shopping"
          onCancel={handleContinueShopping}
          onClose={handleCloseDialog}
        />
      </CoffeeCardContainer>
    </Tooltip>
  );
}
