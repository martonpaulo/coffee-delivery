import { CoffeeCard } from "@/components/CoffeeCard/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListGrid,
} from "@/components/CoffeeList/CoffeeList.styles";
import { TitleL } from "@/styles/typography";
import { coffeeList } from "@/utils/coffeeConstants";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleL>Our Coffees</TitleL>

      <CoffeeListGrid>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListGrid>
    </CoffeeListContainer>
  );
}
