import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BackgroundImage, CoffeeAndBeansImage } from "@/assets";
import {
  BackgroundWrapper,
  BenefitItem,
  BenefitsList,
  ContentContainer,
  IconWrapper,
  ImageWrapper,
  SummaryContainer,
  TitleSection,
} from "@/components/Summary/Summary.styles";
import { TextL, TextM, TitleXL } from "@/styles/typography";

const BENEFITS = [
  { icon: ShoppingCart, color: "darkYellow", text: "Easy and secure ordering" },
  { icon: Package, color: "baseText", text: "Packaging that keeps it fresh" },
  { icon: Timer, color: "yellow", text: "Fast, trackable delivery" },
  { icon: Coffee, color: "purple", text: "Your coffee, always perfect" },
] as const;

export function Summary() {
  return (
    <SummaryContainer>
      <ContentContainer>
        <TitleSection>
          <TitleXL>Find the perfect coffee for any time of day</TitleXL>
          <TextL>
            With Coffee Delivery, your coffee comes to you
            <br /> anytime, anywhere.
          </TextL>
        </TitleSection>

        <BenefitsList>
          {BENEFITS.map(({ icon: Icon, color, text }) => (
            <BenefitItem key={text}>
              <IconWrapper $color={color}>
                <Icon size={16} weight="fill" />
              </IconWrapper>
              <TextM>{text}</TextM>
            </BenefitItem>
          ))}
        </BenefitsList>
      </ContentContainer>

      <ImageWrapper>
        <CoffeeAndBeansImage />
      </ImageWrapper>

      <BackgroundWrapper>
        <BackgroundImage />
      </BackgroundWrapper>
    </SummaryContainer>
  );
}
