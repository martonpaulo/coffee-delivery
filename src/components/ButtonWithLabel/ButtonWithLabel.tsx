import { ButtonHTMLAttributes } from "react";

import { ButtonWithLabelWrapper } from "@/components/ButtonWithLabel/ButtonWithLabel.styles";
import { ButtonG } from "@/styles/typography";

interface ButtonWithLabelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: "yellow" | "purple";
}

export function ButtonWithLabel({
  label,
  color = "yellow",
  ...props
}: ButtonWithLabelProps) {
  return (
    <ButtonWithLabelWrapper $color={color} {...props}>
      <ButtonG>{label}</ButtonG>
    </ButtonWithLabelWrapper>
  );
}
