import { ButtonHTMLAttributes } from "react";

import { QuantityButtonWrapper } from "@/components/QuantityButton/QuantityButton.styles";
import { IconType } from "@/types/icon";

interface QuantityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function QuantityButton({ icon: Icon, ...props }: QuantityButtonProps) {
  return (
    <QuantityButtonWrapper {...props}>
      <Icon size={14} weight="bold" />
    </QuantityButtonWrapper>
  );
}
