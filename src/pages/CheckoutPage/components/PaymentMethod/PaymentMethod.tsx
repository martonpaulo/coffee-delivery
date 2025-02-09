import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import {
  ToggleButtonGroup,
  ToggleOption,
} from "@/components/ToggleButtonGroup/ToggleButtonGroup";
import { PaymentMethodContainer } from "@/pages/CheckoutPage/components/PaymentMethod/PaymentMethod.styles";
import { TextM, TextS } from "@/styles/typography";

const TOGGLE_OPTIONS: ToggleOption[] = [
  { value: "credit", label: "Credit Card", icon: CreditCard },
  { value: "debit", label: "Debit Card", icon: Bank },
  { value: "cash", label: "Cash", icon: Money },
];

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <CurrencyDollar size={22} />
      <TextM $color="baseSubtitle">Payment</TextM>
      <TextS $color="baseText">
        Payment is made on delivery, choose your payment method
      </TextS>

      <ToggleButtonGroup
        name="payment-type"
        onChange={() => {}}
        options={TOGGLE_OPTIONS}
      />
    </PaymentMethodContainer>
  );
}
