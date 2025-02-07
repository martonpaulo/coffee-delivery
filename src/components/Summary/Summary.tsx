import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BackgroundImage, CoffeeAndBeansImage } from "@/assets";
import {
  BackgroundWrapper,
  BenefitsList,
  ContentContainer,
  ImageWrapper,
  SummaryContainer,
  TitleSection,
} from "@/components/Summary/Summary.styles";
import { TextWithIcon } from "@/components/TextWithIcon/TextWithIcon";
import { TextL, TextM, TitleXL } from "@/styles/typography";

const BENEFITS = [
  { Icon: ShoppingCart, color: "darkYellow", text: "Easy and secure ordering" },
  { Icon: Package, color: "baseText", text: "Packaging that keeps it fresh" },
  { Icon: Timer, color: "yellow", text: "Fast, trackable delivery" },
  { Icon: Coffee, color: "purple", text: "Your coffee, always perfect" },
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
          {BENEFITS.map(({ Icon, color, text }) => (
            <TextWithIcon key={text} Icon={Icon} color={color}>
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
