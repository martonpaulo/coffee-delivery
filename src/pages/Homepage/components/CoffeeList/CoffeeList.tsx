import { useContext } from "react";

import { CartContext } from "@/contexts/cart/CartContext";
import { coffeeList } from "@/data/coffeeData";
import { CoffeeCard } from "@/pages/Homepage/components/CoffeeCard/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListGrid,
} from "@/pages/Homepage/components/CoffeeList/CoffeeList.styles";
import { TitleL } from "@/styles/typography";

export function CoffeeList() {
  const { getStockQuantity } = useContext(CartContext);

  const sortedCoffeeList = [...coffeeList].sort((a, b) => {
    const stockA = getStockQuantity(a.id);
    const stockB = getStockQuantity(b.id);

    if (stockA === 0 && stockB > 0) return 1;
    if (stockA > 0 && stockB === 0) return -1;
    return a.id - b.id;
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
