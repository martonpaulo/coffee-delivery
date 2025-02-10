import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoadingDialog } from "@/components/LoadingDialog/LoadingDialog";
import { CartContext } from "@/contexts/cart/CartContext";
import {
  AddressAndPaymentContainer,
  CheckoutPageContainer,
  CompleteOrderContainer,
  SelectedCoffeesContainer,
} from "@/pages/CheckoutPage/CheckoutPage.styles";
import { DeliveryAddress } from "@/pages/CheckoutPage/components/DeliveryAddress/DeliveryAddress";
import { PaymentMethod } from "@/pages/CheckoutPage/components/PaymentMethod/PaymentMethod";
import { SelectedCoffees } from "@/pages/CheckoutPage/components/SelectedCoffees/SelectedCoffees";
import { CheckoutFormData, checkoutSchema } from "@/schemas/checkoutSchema";
import { TitleXS } from "@/styles/typography";

export function CheckoutPage() {
  const { clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      postalCode: "",
      street: "",
      number: undefined,
      additionalInfo: "",
      neighborhood: "",
      city: "Barcelona",
      state: "Catalonia",
      paymentType: undefined,
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 5000));
      clearCart();
      navigate("/success", { state: data });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CheckoutPageContainer>
      <FormProvider {...methods}>
        <CompleteOrderContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <TitleXS>Complete your order</TitleXS>
          <AddressAndPaymentContainer>
            <DeliveryAddress />
            <PaymentMethod />
          </AddressAndPaymentContainer>
        </CompleteOrderContainer>

        <SelectedCoffeesContainer>
          <TitleXS>Selected Coffees</TitleXS>
          <SelectedCoffees
            onClickConfirmOrder={methods.handleSubmit(onSubmit)}
          />
        </SelectedCoffeesContainer>
      </FormProvider>

      <LoadingDialog
        title="Hang tight!"
        message="We're confirming your order. This won't take long."
        isOpen={isLoading}
      />
    </CheckoutPageContainer>
  );
}
