import { CoffeeItem } from "@/components/CoffeeItem/CoffeeItem";
import { CoffeeListContainer } from "@/components/CoffeeList/CoffeeList.styles";
import { coffeeList } from "@/utils/coffeeConstants";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Our Coffees</h1>
      {coffeeList.map((coffee) => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
    </CoffeeListContainer>
  );
}
