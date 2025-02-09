import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { coffeeList } from "@/data/coffeeData";
import { CoffeeOrder } from "@/pages/CheckoutPage/components/CoffeeOrder/CoffeeOrder";
import { SelectedCoffeesContainer } from "@/pages/CheckoutPage/components/SelectedCoffees/SelectedCoffees.styles";
import { TextL, TextM, TextS } from "@/styles/typography";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <CoffeeOrder coffee={coffeeList[0]} />
      <CoffeeOrder coffee={coffeeList[1]} />
      <TextS $color="baseText">Items Total</TextS>
      <TextM>$12.00</TextM>
      <TextS $color="baseText">Delivery Fee</TextS>
      <TextM>$2.00</TextM>
      <TextL $color="baseSubtitle" $bold>
        Total
      </TextL>
      <TextL $color="baseSubtitle" $bold>
        $14.00
      </TextL>
      <ButtonWithLabel label="Confirm Order" onClick={() => {}} />
    </SelectedCoffeesContainer>
  );
}
