import { CartButton } from "@/components/CartButton/CartButton";
import { RemoveButton } from "@/components/RemoveButton/RemoveButton";
import { CheckoutPageContainer } from "@/pages/CheckoutPage/CheckoutPage.styles";

export function CheckoutPage() {
  const handleRemoveButtonClick = () => {
    console.log("Remove button clicked");
  };

  return (
    <CheckoutPageContainer>
      <h1>Checkout Page</h1>

      <CartButton itemsCount={2} color="lightYellow" />
      <RemoveButton onClick={handleRemoveButtonClick} />
    </CheckoutPageContainer>
  );
}
