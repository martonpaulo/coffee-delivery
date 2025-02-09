import { InputHTMLAttributes } from "react";

import {
  InputContainer,
  InputWrapper,
  OptionalText,
} from "@/components/Input/Input.styles";
import { TextXS } from "@/styles/typography";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  customSize?: "small" | "medium" | "large";
}

export function Input({
  optional = false,
  customSize = "large",
  ...props
}: InputProps) {
  return (
    <InputContainer $size={customSize}>
      <InputWrapper $hasOptional={optional} {...props} />
      {optional && (
        <OptionalText>
          <TextXS $italic>Optional</TextXS>
        </OptionalText>
      )}
    </InputContainer>
  );
}
