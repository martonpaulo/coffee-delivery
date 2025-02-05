import { HomeWrapper } from "@/components/Homepage/Homepage.styles";
import { ButtonG, TextM, TitleXL } from "@/styles/typography";

export function Homepage() {
  return (
    <HomeWrapper>
      <TitleXL>Welcome to Coffee Delivery!</TitleXL>
      <TextM bold>This is a bold text</TextM>
      <ButtonG>Buy now</ButtonG>
    </HomeWrapper>
  );
}
