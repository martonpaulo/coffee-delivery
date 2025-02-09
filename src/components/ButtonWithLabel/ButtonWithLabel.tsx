import { ButtonHTMLAttributes } from "react";

import { ButtonWithLabelWrapper } from "@/components/ButtonWithLabel/ButtonWithLabel.styles";
import { ButtonG } from "@/styles/typography";

interface ButtonWithLabelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function ButtonWithLabel({ label, ...props }: ButtonWithLabelProps) {
  return (
    <ButtonWithLabelWrapper {...props}>
      <ButtonG>{label}</ButtonG>
    </ButtonWithLabelWrapper>
  );
}
