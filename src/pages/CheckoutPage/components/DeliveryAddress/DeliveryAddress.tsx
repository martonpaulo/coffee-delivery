import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { Input } from "@/components/Input/Input";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { CheckoutInstruction } from "@/pages/CheckoutPage/components/CheckoutInstruction/CheckoutInstruction";
import {
  AddressFormContainer,
  AddressFormSection,
  DeliveryAddressContainer,
  ErrorMessageContainer,
} from "@/pages/CheckoutPage/components/DeliveryAddress/DeliveryAddress.styles";

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          <Input
            type="text"
            placeholder="Postal Code"
            customSize="medium"
            hasError={!!errors.postalCode}
            {...register("postalCode")}
          />
        </AddressFormSection>

        <ErrorMessageContainer>
          {errors.postalCode && (
            <ErrorMessage text={errors.postalCode.message as string} />
          )}
        </ErrorMessageContainer>

        <AddressFormSection>
          <Input
            type="text"
            placeholder="Street"
            hasError={!!errors.street}
            {...register("street")}
          />

          <Input
            type="number"
            placeholder="Number"
            customSize="small"
            hasError={!!errors.number}
            {...register("number", { valueAsNumber: true })}
          />
        </AddressFormSection>

        <ErrorMessageContainer>
          {errors.street && (
            <ErrorMessage text={errors.street.message as string} />
          )}
          {errors.number && (
            <ErrorMessage text={errors.number.message as string} />
          )}
        </ErrorMessageContainer>

        <AddressFormSection>
          <Input
            type="text"
            placeholder="Additional Info"
            optional
            {...register("additionalInfo")}
          />
        </AddressFormSection>

        <AddressFormSection>
          <Input
            type="text"
            placeholder="Neighborhood"
            hasError={!!errors.neighborhood}
            {...register("neighborhood")}
          />

          <Tooltip text="You can't change location yet">
            <Input
              type="text"
              placeholder="City"
              value="Barcelona"
              readOnly
              {...register("city")}
            />
          </Tooltip>

          <Tooltip text="You can't change location yet">
            <Input
              type="text"
              placeholder="State"
              value="Catalonia"
              readOnly
              {...register("state")}
            />
          </Tooltip>
        </AddressFormSection>

        <ErrorMessageContainer>
          {errors.neighborhood && (
            <ErrorMessage text={errors.neighborhood.message as string} />
          )}
        </ErrorMessageContainer>
      </AddressFormContainer>
    </DeliveryAddressContainer>
  );
}
