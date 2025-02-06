import { MapPin, ShoppingCart } from "phosphor-react";

import { LogoImage } from "@/assets";
import {
  CartButton,
  HeaderActions,
  HeaderContainer,
  LocationButton,
} from "@/components/Header/Header.styles";
import { TextS } from "@/styles/typography";

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage />

      <HeaderActions>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <TextS>Madrid, ES</TextS>
        </LocationButton>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </HeaderActions>
    </HeaderContainer>
  );
}
