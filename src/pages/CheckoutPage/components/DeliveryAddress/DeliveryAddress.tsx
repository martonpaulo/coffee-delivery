import { MapPinLine } from "phosphor-react";

import { InputText } from "@/components/InputText/InputText";
import { DeliveryAddressContainer } from "@/pages/CheckoutPage/components/DeliveryAddress/DeliveryAddress.styles";
import { TextM, TextS } from "@/styles/typography";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <MapPinLine size={22} />
      <TextM $color="baseSubtitle">Delivery Address</TextM>
      <TextS $color="baseText">Enter your delivery address</TextS>

      <InputText placeholder="Postal Code" />
      <InputText placeholder="Street" />
      <InputText placeholder="House Number" />
      <InputText placeholder="Additional Info" optional />
      <InputText placeholder="Neighborhood" />
      <InputText placeholder="City" />
      <InputText placeholder="State" />
    </DeliveryAddressContainer>
  );
}
