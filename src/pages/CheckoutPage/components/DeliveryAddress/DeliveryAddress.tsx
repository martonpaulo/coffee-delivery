import { MapPinLine } from "phosphor-react";

import { InputText } from "@/components/InputText/InputText";
import { CheckoutInstruction } from "@/pages/CheckoutPage/components/CheckoutInstruction/CheckoutInstruction";
import {
  AddressFormContainer,
  AddressFormSection,
  DeliveryAddressContainer,
} from "@/pages/CheckoutPage/components/DeliveryAddress/DeliveryAddress.styles";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <CheckoutInstruction
        icon={MapPinLine}
        iconColor="yellow"
        title="Delivery Address"
        description="Enter your delivery address"
      />

      <AddressFormContainer>
        <AddressFormSection>
          <InputText
            type="text"
            placeholder="Postal Code"
            customSize="medium"
          />
        </AddressFormSection>
        <AddressFormSection>
          <InputText type="text" placeholder="Street" />
          <InputText
            type="number"
            placeholder="House Number"
            customSize="small"
          />
        </AddressFormSection>
        <AddressFormSection>
          <InputText type="text" placeholder="Additional Info" optional />
        </AddressFormSection>
        <AddressFormSection>
          <InputText type="text" placeholder="Neighborhood" />
          <InputText type="text" placeholder="City" />
          <InputText type="text" placeholder="State" />
        </AddressFormSection>
      </AddressFormContainer>
    </DeliveryAddressContainer>
  );
}
