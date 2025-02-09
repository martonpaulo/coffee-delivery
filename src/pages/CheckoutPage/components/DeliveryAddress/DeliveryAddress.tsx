import { MapPinLine } from "phosphor-react";

import { Input } from "@/components/Input/Input";
import { Tooltip } from "@/components/Tooltip/Tooltip";
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
          <Input type="text" placeholder="Postal Code" customSize="medium" />
        </AddressFormSection>
        <AddressFormSection>
          <Input type="text" placeholder="Street" />
          <Input type="number" placeholder="Number" customSize="small" />
        </AddressFormSection>
        <AddressFormSection>
          <Input type="text" placeholder="Additional Info" optional />
        </AddressFormSection>
        <AddressFormSection>
          <Input type="text" placeholder="Neighborhood" />
          <Tooltip text="You can't change location yet">
            <Input type="text" placeholder="City" value="Barcelona" readOnly />
          </Tooltip>
          <Tooltip text="You can't change location yet">
            <Input type="text" placeholder="State" value="Catalonia" readOnly />
          </Tooltip>
        </AddressFormSection>
      </AddressFormContainer>
    </DeliveryAddressContainer>
  );
}
