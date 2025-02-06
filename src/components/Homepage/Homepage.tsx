import { CoffeeList } from "@/components/CoffeeList/CoffeeList";
import { HomeWrapper } from "@/components/Homepage/Homepage.styles";
import { Summary } from "@/components/Summary/Summary";

export function Homepage() {
  return (
    <HomeWrapper>
      <Summary />

      <CoffeeList />
    </HomeWrapper>
  );
}
