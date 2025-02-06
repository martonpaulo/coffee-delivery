export type CoffeeImageType = {
  [key: string]: {
    src: string;
    alt: string;
  };
};

export type CoffeeType = {
  id: number;
  imageComponent: keyof CoffeeImageType;
  tags: string[];
  name: string;
  description: string;
  price: number;
};
