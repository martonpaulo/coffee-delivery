import { CoffeeList } from "@/pages/Homepage/components/CoffeeList/CoffeeList";
import { Summary } from "@/pages/Homepage/components/Summary/Summary";
import { HomeContainer } from "@/pages/Homepage/Homepage.styles";

export function Homepage() {
  return (
    <HomeContainer>
      <Summary />

      <CoffeeList />
    </HomeContainer>
  );
}
