import { CoffeeType } from "@/types/coffee";

export const coffeeList: CoffeeType[] = [
  {
    id: 1,
    imageComponent: "traditionalEspresso",
    tags: ["traditional"],
    name: "Traditional Espresso",
    description: "Classic espresso made with hot water and ground coffee beans",
    price: 3.0,
  },
  {
    id: 2,
    imageComponent: "americano",
    tags: ["traditional"],
    name: "Americano",
    description: "Smooth, diluted espresso with a milder flavor",
    price: 3.5,
  },
  {
    id: 3,
    imageComponent: "creamyEspresso",
    tags: ["traditional"],
    name: "Creamy Espresso",
    description: "Traditional espresso topped with a velvety crema",
    price: 3.5,
  },
  {
    id: 4,
    imageComponent: "icedEspresso",
    tags: ["traditional", "iced"],
    name: "Iced Espresso",
    description: "Bold espresso served over ice for a refreshing taste",
    price: 4.0,
  },
  {
    id: 5,
    imageComponent: "cafeAuLait",
    tags: ["traditional", "with milk"],
    name: "Café au Lait",
    description: "A balanced mix of espresso and steamed milk",
    price: 4.0,
  },
  {
    id: 6,
    imageComponent: "latte",
    tags: ["traditional", "with milk"],
    name: "Latte",
    description: "Espresso with double the milk and a layer of creamy foam",
    price: 5.5,
  },
  {
    id: 7,
    imageComponent: "cappuccino",
    tags: ["traditional", "with milk"],
    name: "Cappuccino",
    description: "A cinnamon-infused drink with parts espresso, milk, and foam",
    price: 5.5,
  },
  {
    id: 8,
    imageComponent: "macchiato",
    tags: ["traditional", "with milk"],
    name: "Macchiato",
    description: "Rich espresso blended with a touch of warm milk and foam",
    price: 5.0,
  },
  {
    id: 9,
    imageComponent: "mocha",
    tags: ["traditional", "with milk"],
    name: "Mocha",
    description: "Espresso with chocolate syrup, a splash of milk, and foam",
    price: 5.5,
  },
  {
    id: 10,
    imageComponent: "hotChocolate",
    tags: ["traditional", "with milk"],
    name: "Hot Chocolate",
    description: "A comforting mix of melted chocolate, hot milk, and espresso",
    price: 4.5,
  },
  {
    id: 11,
    imageComponent: "cubanCoffee",
    tags: ["specialty", "alcoholic", "iced"],
    name: "Cuban Coffee",
    description: "Chilled espresso with rum, cream, and fresh mint",
    price: 6.0,
  },
  {
    id: 12,
    imageComponent: "hawaiianCoffee",
    tags: ["specialty"],
    name: "Hawaiian Coffee",
    description: "A naturally sweet coffee made with coconut milk",
    price: 5.0,
  },
  {
    id: 13,
    imageComponent: "arabicCoffee",
    tags: ["specialty"],
    name: "Arabic Coffee",
    description: "Spiced Arabic coffee brewed with aromatic spices",
    price: 5.0,
  },
  {
    id: 14,
    imageComponent: "irishCoffee",
    tags: ["specialty", "alcoholic"],
    name: "Irish Coffee",
    description:
      "A bold mix of coffee, Irish whiskey, sugar, and whipped cream",
    price: 6.0,
  },
];
