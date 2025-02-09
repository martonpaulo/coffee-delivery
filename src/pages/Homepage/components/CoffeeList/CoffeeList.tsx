import { coffeeList } from "@/data/coffeeData";
import { CoffeeCard } from "@/pages/Homepage/components/CoffeeCard/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListGrid,
} from "@/pages/Homepage/components/CoffeeList/CoffeeList.styles";
import { TitleL } from "@/styles/typography";

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
