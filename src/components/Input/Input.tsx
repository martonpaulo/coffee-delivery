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
  hasError?: boolean;
}

export function Input({
  optional = false,
  customSize = "large",
  hasError = false,
  ...props
}: InputProps) {
  return (
    <InputContainer $size={customSize}>
      <InputWrapper $hasOptional={optional} $hasError={hasError} {...props} />
      {optional && (
        <OptionalText>
          <TextXS $italic>Optional</TextXS>
        </OptionalText>
      )}
    </InputContainer>
  );
}
