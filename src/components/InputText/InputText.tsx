import { InputHTMLAttributes } from "react";

import {
  InputTextContainer,
  InputWrapper,
  OptionalText,
} from "@/components/InputText/InputText.styles";
import { TextXS } from "@/styles/typography";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

export function InputText({ optional = false, ...props }: InputTextProps) {
  return (
    <InputTextContainer>
      <InputWrapper $hasOptional={optional} {...props} />
      {optional && (
        <OptionalText>
          <TextXS>Optional</TextXS>
        </OptionalText>
      )}
    </InputTextContainer>
  );
}
