import { CoffeeImage } from "@/assets";
import { CartButton } from "@/components/CartButton/CartButton";
import {
  ActionsContainer,
  CoffeeCardContainer,
  DetailsContainer,
  FooterContainer,
  ImageWrapper,
  PriceWrapper,
  TagItem,
  TagList,
} from "@/components/CoffeeCard/CoffeeCard.styles";
import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import { Tag, TextS, TitleM, TitleS } from "@/styles/typography";
import { CoffeeType } from "@/types/coffee";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { imageComponent, tags, name, description, price } = coffee;

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
          <TitleM>{price.toFixed(2)}</TitleM>
        </PriceWrapper>

        <ActionsContainer>
          <QuantitySelector />
          <CartButton />
        </ActionsContainer>
      </FooterContainer>
    </CoffeeCardContainer>
  );
}
