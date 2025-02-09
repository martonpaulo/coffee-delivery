import { InputHTMLAttributes } from "react";

import {
  InputTextContainer,
  InputWrapper,
  OptionalText,
} from "@/components/InputText/InputText.styles";
import { TextXS } from "@/styles/typography";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  customSize?: "small" | "medium" | "large";
}

export function InputText({
  optional = false,
  customSize = "large",
  ...props
}: InputTextProps) {
  return (
    <InputTextContainer $size={customSize}>
      <InputWrapper $hasOptional={optional} {...props} />
      {optional && (
        <OptionalText>
          <TextXS>Optional</TextXS>
        </OptionalText>
      )}
    </InputTextContainer>
  );
}
