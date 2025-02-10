import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { LoadingDialog } from "@/components/LoadingDialog/LoadingDialog";
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

export function SelectedCoffees() {
  const { cartItems, clearCart, cartTotalPrice } = useContext(CartContext);
  const [confirmOrderLoading, setConfirmOrderLoading] = useState(false);
  const navigate = useNavigate();

  const coffees = cartItems.map((item) => {
    return coffeeList.find((coffee) => coffee.id === item.id);
  });

  const handleSendOrder = () => {
    setConfirmOrderLoading(true);

    setTimeout(() => {
      setConfirmOrderLoading(false);
      navigate("/success");
      clearCart();
    }, 5000);
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

      <ButtonWithLabel label="Confirm Order" onClick={handleSendOrder} />

      <LoadingDialog
        title="Hang tight!"
        message=" We're confirming your order. This won't take long."
        isOpen={confirmOrderLoading}
      />
    </SelectedCoffeesContainer>
  );
}
