import { CartButton } from "@/components/CartButton/CartButton";
import { RemoveButton } from "@/components/RemoveButton/RemoveButton";
import { CheckoutPageContainer } from "@/pages/CheckoutPage/CheckoutPage.styles";

export function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <h1>Checkout Page</h1>

      <CartButton itemsCount={2} color="lightYellow" />
      <RemoveButton />
    </CheckoutPageContainer>
  );
}
