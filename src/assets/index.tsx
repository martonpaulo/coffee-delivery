import { ImgHTMLAttributes } from "react";

import americano from "@/assets/coffee-images/americano.png";
import arabicCoffee from "@/assets/coffee-images/arabic-coffee.png";
import cafeAuLait from "@/assets/coffee-images/cafe-au-lait.png";
import cappuccino from "@/assets/coffee-images/cappuccino.png";
import creamyEspresso from "@/assets/coffee-images/creamy-espresso.png";
import cubanCoffee from "@/assets/coffee-images/cuban-coffee.png";
import hawaiianCoffee from "@/assets/coffee-images/hawaiian-coffee.png";
import hotChocolate from "@/assets/coffee-images/hot-chocolate.png";
import icedEspresso from "@/assets/coffee-images/iced-espresso.png";
import irishCoffee from "@/assets/coffee-images/irish-coffee.png";
import latte from "@/assets/coffee-images/latte.png";
import macchiato from "@/assets/coffee-images/macchiato.png";
import mocha from "@/assets/coffee-images/mocha.png";
import traditionalEspresso from "@/assets/coffee-images/traditional-espresso.png";
import coffeeAndBeans from "@/assets/system-design/coffee-and-beans.png";
import deliveryIllustration from "@/assets/system-design/delivery-illustration.svg";
import logo from "@/assets/system-design/logo-with-name.svg";
import background from "@/assets/system-design/summary-background.svg";
import { CoffeeImgListType } from "@/types/coffee";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function LogoImage(props: ImageProps) {
  return <img src={logo} alt="Coffee Delivery logo" {...props} />;
}

export function BackgroundImage(props: ImageProps) {
  return (
    <img
      src={background}
      alt="Coffee Delivery branded cup with coffee beans and ground coffee"
      {...props}
    />
  );
}

export function CoffeeAndBeansImage(props: ImageProps) {
  return (
    <img src={coffeeAndBeans} alt="Coffee beans and ground coffee" {...props} />
  );
}

export function DeliveryIllustrationImage(props: ImageProps) {
  return (
    <img src={deliveryIllustration} alt="Delivery illustration" {...props} />
  );
}

const coffeeImgEnum: CoffeeImgListType = {
  traditionalEspresso: {
    src: traditionalEspresso,
    alt: "Traditional espresso in a glass cup",
  },
  americano: { src: americano, alt: "Americano in a glass cup" },
  creamyEspresso: {
    src: creamyEspresso,
    alt: "Creamy espresso in a glass cup",
  },
  icedEspresso: { src: icedEspresso, alt: "Iced espresso in a glass cup" },
  cafeAuLait: { src: cafeAuLait, alt: "Cafe au lait in a glass cup" },
  latte: { src: latte, alt: "Latte in a glass cup" },
  cappuccino: { src: cappuccino, alt: "Cappuccino in a glass cup" },
  macchiato: { src: macchiato, alt: "Macchiato in a glass cup" },
  mocha: { src: mocha, alt: "Mocha in a glass cup" },
  hotChocolate: { src: hotChocolate, alt: "Hot chocolate in a glass cup" },
  cubanCoffee: { src: cubanCoffee, alt: "Cuban coffee in a glass cup" },
  hawaiianCoffee: {
    src: hawaiianCoffee,
    alt: "Hawaiian coffee in a glass cup",
  },
  arabicCoffee: { src: arabicCoffee, alt: "Arabic coffee in a glass cup" },
  irishCoffee: { src: irishCoffee, alt: "Irish coffee in a glass cup" },
};

interface CoffeeImageProps extends ImageProps {
  name: keyof CoffeeImgListType;
}

export function CoffeeImage({ name, ...props }: CoffeeImageProps) {
  const { src, alt } = coffeeImgEnum[name];
  return <img src={src} alt={alt} {...props} />;
}

// how to use CoffeeImage component
// <CoffeeImage name="latte" />
// <CoffeeImage name="irishCoffee" width={200} height={200} />
