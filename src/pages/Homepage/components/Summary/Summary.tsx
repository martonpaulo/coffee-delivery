import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BackgroundImage, CoffeeAndBeansImage } from "@/assets";
import { TextWithIcon } from "@/components/TextWithIcon/TextWithIcon";
import {
  BackgroundWrapper,
  BenefitsList,
  ContentContainer,
  ImageWrapper,
  SummaryContainer,
  TitleSection,
} from "@/pages/Homepage/components/Summary/Summary.styles";
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
            With Coffee Delivery, your coffee comes to you anytime, anywhere.
          </TextL>
        </TitleSection>

        <BenefitsList>
          {BENEFITS.map(({ icon, color, text }) => (
            <TextWithIcon key={text} icon={icon} color={color}>
              <TextM>{text}</TextM>
            </TextWithIcon>
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
