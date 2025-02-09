import { coffeeList } from "@/data/coffeeData";
import { CoffeeCard } from "@/pages/Homepage/components/CoffeeCard/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListGrid,
} from "@/pages/Homepage/components/CoffeeList/CoffeeList.styles";
import { TitleL } from "@/styles/typography";

export function CoffeeList() {
  // Move coffees with stock === 0 to the end, keeping original order by ID
  const sortedCoffeeList = [...coffeeList].sort((a, b) => {
    if (a.stock === 0 && b.stock > 0) return 1;
    if (a.stock > 0 && b.stock === 0) return -1;
    return a.id - b.id; // Keeps original order by ID
  });

  return (
    <CoffeeListContainer>
      <TitleL>Our Coffees</TitleL>

      <CoffeeListGrid>
        {sortedCoffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListGrid>
    </CoffeeListContainer>
  );
}
