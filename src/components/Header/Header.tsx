import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/">
          <LogoImage />
        </NavLink>

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
