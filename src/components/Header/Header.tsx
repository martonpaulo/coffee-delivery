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
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { TextS } from "@/styles/typography";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/">
          <LogoImage />
        </NavLink>

        <HeaderActions>
          <Tooltip text="You can't change location yet">
            <LocationButton>
              <MapPin size={22} weight="fill" />
              <TextS>Barcelona, CAT</TextS>
            </LocationButton>
          </Tooltip>

          <CartButton />
        </HeaderActions>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
