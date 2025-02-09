import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import {
  ToggleButtonGroup,
  ToggleOption,
} from "@/components/ToggleButtonGroup/ToggleButtonGroup";
import { CheckoutInstruction } from "@/pages/CheckoutPage/components/CheckoutInstruction/CheckoutInstruction";
import { PaymentMethodContainer } from "@/pages/CheckoutPage/components/PaymentMethod/PaymentMethod.styles";

const TOGGLE_OPTIONS: ToggleOption[] = [
  { value: "credit", label: "Credit Card", icon: CreditCard },
  { value: "debit", label: "Debit Card", icon: Bank },
  { value: "cash", label: "Cash", icon: Money },
];

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <CheckoutInstruction
        icon={CurrencyDollar}
        iconColor="purple"
        title="Payment"
        description="Payment is made on delivery, choose your payment method"
      />

      <ToggleButtonGroup
        name="payment-type"
        onChange={() => {}}
        options={TOGGLE_OPTIONS}
      />
    </PaymentMethodContainer>
  );
}
