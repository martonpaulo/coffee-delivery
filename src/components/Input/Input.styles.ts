import styled from "styled-components";

const SIZE_VARIANTS = {
  small: "30%",
  medium: "50%",
  large: "100%",
} as const;

interface InputContainerProps {
  $size: "small" | "medium" | "large";
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: ${(props) => SIZE_VARIANTS[props.$size]};

  ${(props) => props.theme.breakpoints.max.md} {
    width: 100%;
  }
`;

interface InputWrapperProps {
  $hasOptional?: boolean;
  $hasError?: boolean;
}

export const InputWrapper = styled.input<InputWrapperProps>`
  height: 2.875rem;
  width: 100%;
  border-radius: 4px;
  padding: 0 0.75rem;
  padding-right: ${(props) => (props.$hasOptional ? "4rem" : "0.75rem")};

  border: 1px solid ${(props) => props.theme.colors.baseButton};
  background-color: ${(props) => props.theme.colors.baseInput};
  color: ${(props) => props.theme.colors.baseText};

  border-color: ${(props) => props.$hasError && props.theme.colors.darkYellow};

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  &:focus {
    border: 1px solid
      ${(props) =>
        props.$hasError
          ? props.theme.colors.darkYellow
          : props.theme.colors.baseButton};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[readonly] {
    cursor: not-allowed;
  }
`;

export const OptionalText = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
