import { coffeeList } from "@/data/coffeeData";
import {
  AddressAndPaymentContainer,
  CheckoutPageContainer,
  CompleteOrderContainer,
  SelectedCoffeesContainer,
} from "@/pages/CheckoutPage/CheckoutPage.styles";
import { DeliveryAddress } from "@/pages/CheckoutPage/components/DeliveryAddress/DeliveryAddress";
import { PaymentMethod } from "@/pages/CheckoutPage/components/PaymentMethod/PaymentMethod";
import { SelectedCoffees } from "@/pages/CheckoutPage/components/SelectedCoffees/SelectedCoffees";
import { TitleXS } from "@/styles/typography";

export function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <CompleteOrderContainer>
        <TitleXS>Complete your order</TitleXS>
        <AddressAndPaymentContainer>
          <DeliveryAddress />
          <PaymentMethod />
        </AddressAndPaymentContainer>
      </CompleteOrderContainer>

      <SelectedCoffeesContainer>
        <TitleXS>Selected Coffees</TitleXS>
        <SelectedCoffees coffees={coffeeList.slice(0, 4)} />
      </SelectedCoffeesContainer>
    </CheckoutPageContainer>
  );
}
