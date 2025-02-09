import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { LoadingDialog } from "@/components/LoadingDialog/LoadingDialog";
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
  const [confirmOrderLoading, setConfirmOrderLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOrder = () => {
    setConfirmOrderLoading(true);

    setTimeout(() => {
      setConfirmOrderLoading(false);
      navigate("/success");
    }, 5000);
  };

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

      <ButtonWithLabel label="Confirm Order" onClick={handleSendOrder} />

      <LoadingDialog
        title="Hang tight!"
        message=" We're confirming your order. This won't take long."
        isOpen={confirmOrderLoading}
      />
    </SelectedCoffeesContainer>
  );
}
