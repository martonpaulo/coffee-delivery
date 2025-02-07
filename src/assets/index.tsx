import { ImgHTMLAttributes } from "react";

import americano from "@/assets/americano.png";
import arabicCoffee from "@/assets/arabic-coffee.png";
import cafeAuLait from "@/assets/cafe-au-lait.png";
import cappuccino from "@/assets/cappuccino.png";
import coffeeAndBeans from "@/assets/coffee-and-beans.png";
import creamyEspresso from "@/assets/creamy-espresso.png";
import cubanCoffee from "@/assets/cuban-coffee.png";
import deliveryIllustration from "@/assets/delivery-illustration.svg";
import hawaiianCoffee from "@/assets/hawaiian-coffee.png";
import hotChocolate from "@/assets/hot-chocolate.png";
import icedEspresso from "@/assets/iced-espresso.png";
import irishCoffee from "@/assets/irish-coffee.png";
import latte from "@/assets/latte.png";
import logo from "@/assets/logo-with-name.svg";
import macchiato from "@/assets/macchiato.png";
import mocha from "@/assets/mocha.png";
import background from "@/assets/summary-background.svg";
import traditionalEspresso from "@/assets/traditional-espresso.png";
import { CoffeeImageType } from "@/types/coffee";

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

const coffeeImages: CoffeeImageType = {
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

export function CoffeeImage({
  name,
  ...props
}: { name: keyof typeof coffeeImages } & ImageProps) {
  const { src, alt } = coffeeImages[name];
  return <img src={src} alt={alt} {...props} />;
}

// how to use CoffeeImage component
// <CoffeeImage name="latte" />
// <CoffeeImage name="irishCoffee" width={200} height={200} />
