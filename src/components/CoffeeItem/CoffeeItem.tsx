import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { CoffeeImage } from "@/assets";
import { CoffeeItemContainer } from "@/components/CoffeeItem/CoffeeItem.styles";
import { CoffeeType } from "@/types/coffee";

interface CoffeeItemProps {
  coffee: CoffeeType;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { imageComponent, tags, name, description, price } = coffee;

  return (
    <CoffeeItemContainer>
      <CoffeeImage name={imageComponent} />

      <div>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>

      <div>
        <Minus size={24} />
        1
        <Plus size={24} />
      </div>

      <ShoppingCart size={24} weight="fill" />
    </CoffeeItemContainer>
  );
}
