import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import {
  ToggleButtonGroup,
  ToggleOption,
} from "@/components/ToggleButtonGroup/ToggleButtonGroup";
import { CheckoutInstruction } from "@/pages/CheckoutPage/components/CheckoutInstruction/CheckoutInstruction";
import {
  PaymentInputContainer,
  PaymentMethodContainer,
} from "@/pages/CheckoutPage/components/PaymentMethod/PaymentMethod.styles";

const TOGGLE_OPTIONS: ToggleOption[] = [
  { value: "credit", label: "Credit Card", icon: CreditCard },
  { value: "debit", label: "Debit Card", icon: Bank },
  { value: "cash", label: "Cash", icon: Money },
];

export function PaymentMethod() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    register("paymentType");
  }, [register]);

  const paymentType = watch("paymentType");

  const handlePaymentChange = (value: string) => {
    setValue("paymentType", value, { shouldValidate: true });
  };

  return (
    <PaymentMethodContainer>
      <CheckoutInstruction
        icon={CurrencyDollar}
        iconColor="purple"
        title="Payment"
        description="Payment is made on delivery, choose your payment method"
      />

      <PaymentInputContainer>
        <ToggleButtonGroup
          name="paymentType"
          value={paymentType}
          onChange={handlePaymentChange}
          options={TOGGLE_OPTIONS}
        />

        {errors.paymentType && (
          <ErrorMessage text={errors.paymentType.message as string} />
        )}
      </PaymentInputContainer>
    </PaymentMethodContainer>
  );
}
