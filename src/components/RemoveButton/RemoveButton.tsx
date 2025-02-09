import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import { RemoveButtonWrapper } from "@/components/RemoveButton/RemoveButton.styles";
import { ButtonM } from "@/styles/typography";

export function RemoveButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <RemoveButtonWrapper {...props}>
      <Trash size={16} />

      <ButtonM>Remove</ButtonM>
    </RemoveButtonWrapper>
  );
}
