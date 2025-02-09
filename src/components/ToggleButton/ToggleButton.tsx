import { ReactNode } from "react";

import { ToggleButtonContainer } from "@/components/ToggleButton/ToggleButton.styles";
import { ButtonM } from "@/styles/typography";
import { IconType } from "@/types/icon";

interface ToggleButtonProps {
  label: string;
  icon: IconType;
  children: ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

export function ToggleButton({
  label,
  icon: Icon,
  children,
  isSelected,
  onSelect,
}: ToggleButtonProps) {
  return (
    <ToggleButtonContainer $isSelected={isSelected} onClick={onSelect}>
      <Icon size={16} />
      {children}
      <ButtonM>{label}</ButtonM>
    </ToggleButtonContainer>
  );
}
