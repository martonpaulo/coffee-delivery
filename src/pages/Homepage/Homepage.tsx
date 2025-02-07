import { CoffeeList } from "@/components/CoffeeList/CoffeeList";
import { Summary } from "@/components/Summary/Summary";
import { HomeContainer } from "@/pages/Homepage/Homepage.styles";

export function Homepage() {
  return (
    <HomeContainer>
      <Summary />

      <CoffeeList />
    </HomeContainer>
  );
}
