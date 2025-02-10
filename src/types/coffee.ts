import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type CoffeeImgType = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export type CoffeeImgListType = {
  [key: string]: CoffeeImgType;
};

export type CoffeeType = {
  id: number;
  imageComponent: keyof CoffeeImgListType;
  tags: string[];
  name: string;
  description: string;
  price: number;
};
