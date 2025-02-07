import { Trash } from "phosphor-react";

import { RemoveButtonWrapper } from "@/components/RemoveButton/RemoveButton.styles";
import { ButtonM } from "@/styles/typography";

interface RemoveButtonProps {
  onClick: () => void;
}

export function RemoveButton({ onClick }: RemoveButtonProps) {
  return (
    <RemoveButtonWrapper onClick={onClick}>
      <Trash size={16} />

      <ButtonM>Remove</ButtonM>
    </RemoveButtonWrapper>
  );
}
