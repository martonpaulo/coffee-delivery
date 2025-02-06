import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BackgroundImage, CoffeeAndBeansImage } from "@/assets";
import { SummaryContainer } from "@/components/Summary/Summary.styles";

export function Summary() {
  return (
    <SummaryContainer>
      <BackgroundImage />
      <h2>Find the perfect coffee for any time of day</h2>
      <h3>
        With Coffee Delivery, your coffee comes to you — anytime, anywhere.
      </h3>
      <ul>
        <li>
          <ShoppingCart size={24} weight="fill" />
          Easy and secure ordering
        </li>
        <li>
          <Timer size={24} weight="fill" />
          Fast, trackable delivery
        </li>
        <li>
          <Package size={24} weight="fill" />
          Packaging that keeps it fresh
        </li>
        <li>
          <Coffee size={24} weight="fill" />
          Your coffee, always perfect
        </li>
      </ul>
      <CoffeeAndBeansImage />
    </SummaryContainer>
  );
}
