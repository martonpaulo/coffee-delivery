import { useContext } from "react";

import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { CartContext } from "@/contexts/cart/CartContext";
import { coffeeList } from "@/data/coffeeData";
import { CoffeeOrder } from "@/pages/CheckoutPage/components/CoffeeOrder/CoffeeOrder";
import {
  CoffeeListContainer,
  PriceValueContainer,
  PriceWrapper,
  SelectedCoffeesContainer,
} from "@/pages/CheckoutPage/components/SelectedCoffees/SelectedCoffees.styles";
import { TextL, TextM, TextS } from "@/styles/typography";

const DELIVERY_FEE = 3.0;

interface SelectedCoffeesProps {
  onClickConfirmOrder: () => void;
}

export function SelectedCoffees({ onClickConfirmOrder }: SelectedCoffeesProps) {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  const coffees = cartItems.map((item) => {
    return coffeeList.find((coffee) => coffee.id === item.id);
  });

  const handleClickConfirmOrder = () => {
    onClickConfirmOrder();
  };

  const totalPrice = cartTotalPrice + DELIVERY_FEE;

  return (
    <SelectedCoffeesContainer>
      <CoffeeListContainer>
        {coffees.map((coffee) => (
          <PriceWrapper key={coffee!.id}>
            <CoffeeOrder coffee={coffee!} />
          </PriceWrapper>
        ))}
      </CoffeeListContainer>
      <PriceWrapper>
        <PriceValueContainer>
          <TextS $color="baseText">Items Total</TextS>
          <TextM>${cartTotalPrice.toFixed(2)}</TextM>
        </PriceValueContainer>
        <PriceValueContainer>
          <TextS $color="baseText">Delivery Fee</TextS>
          <TextM>${DELIVERY_FEE.toFixed(2)}</TextM>
        </PriceValueContainer>
        <PriceValueContainer>
          <TextL $color="baseSubtitle" $bold>
            Total
          </TextL>
          <TextL $color="baseSubtitle" $bold>
            ${totalPrice.toFixed(2)}
          </TextL>
        </PriceValueContainer>
      </PriceWrapper>

      <ButtonWithLabel
        label="Confirm Order"
        onClick={handleClickConfirmOrder}
        type="submit"
      />
    </SelectedCoffeesContainer>
  );
}
