import { useState } from "react";

import { CoffeeImage } from "@/assets";
import { CartButton } from "@/components/CartButton/CartButton";
import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import {
  ActionsContainer,
  CoffeeCardContainer,
  DetailsContainer,
  FooterContainer,
  ImageWrapper,
  PriceWrapper,
  TagItem,
  TagList,
} from "@/pages/Homepage/components/CoffeeCard/CoffeeCard.styles";
import { Tag, TextS, TitleM, TitleS } from "@/styles/typography";
import { CoffeeType } from "@/types/coffee";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { imageComponent, tags, name, description, price, stock } = coffee;
  const [quantity, setQuantity] = useState(1);

  const handleSetQuantity = (quantity: number) => {
    setQuantity(quantity);
    console.log(`Selected quantity: ${quantity}`);
  };

  return (
    <CoffeeCardContainer>
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
        <PriceWrapper>
          <TextS>$</TextS>
          <TitleM $color="baseText">{price.toFixed(2)}</TitleM>
        </PriceWrapper>

        <ActionsContainer>
          <QuantitySelector
            quantity={quantity}
            maxQuantity={stock}
            setQuantity={handleSetQuantity}
          />
          <CartButton />
        </ActionsContainer>
      </FooterContainer>
    </CoffeeCardContainer>
  );
}
