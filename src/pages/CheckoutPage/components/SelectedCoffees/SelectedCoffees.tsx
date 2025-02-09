import { NavLink } from "react-router-dom";

import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { CoffeeOrder } from "@/pages/CheckoutPage/components/CoffeeOrder/CoffeeOrder";
import {
  CoffeeListContainer,
  PriceValueContainer,
  PriceWrapper,
  SelectedCoffeesContainer,
} from "@/pages/CheckoutPage/components/SelectedCoffees/SelectedCoffees.styles";
import { TextL, TextM, TextS } from "@/styles/typography";
import { CoffeeType } from "@/types/coffee";

interface SelectedCoffeesProps {
  coffees: CoffeeType[];
}

export function SelectedCoffees({ coffees }: SelectedCoffeesProps) {
  return (
    <SelectedCoffeesContainer>
      <CoffeeListContainer>
        {coffees.map((coffee) => (
          <PriceWrapper key={coffee.id}>
            <CoffeeOrder coffee={coffee} />
          </PriceWrapper>
        ))}
      </CoffeeListContainer>
      <PriceWrapper>
        <PriceValueContainer>
          <TextS $color="baseText">Items Total</TextS>
          <TextM>$12.00</TextM>
        </PriceValueContainer>
        <PriceValueContainer>
          <TextS $color="baseText">Delivery Fee</TextS>
          <TextM>$2.00</TextM>
        </PriceValueContainer>
        <PriceValueContainer>
          <TextL $color="baseSubtitle" $bold>
            Total
          </TextL>
          <TextL $color="baseSubtitle" $bold>
            $14.00
          </TextL>
        </PriceValueContainer>
      </PriceWrapper>
      <NavLink to="/success">
        <ButtonWithLabel label="Confirm Order" onClick={() => {}} />
      </NavLink>
    </SelectedCoffeesContainer>
  );
}
