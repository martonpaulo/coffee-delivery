import { MapPin } from "phosphor-react";

import { LogoImage } from "@/assets";
import { CartButton } from "@/components/CartButton/CartButton";
import {
  HeaderActions,
  HeaderContainer,
  HeaderWrapper,
  LocationButton,
} from "@/components/Header/Header.styles";
import { TextS } from "@/styles/typography";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <a href="/">
          <LogoImage />
        </a>

        <HeaderActions>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            <TextS>Madrid, Spain</TextS>
          </LocationButton>

          <CartButton color="lightYellow" />
        </HeaderActions>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
