import styled from "styled-components";

export const InputTextContainer = styled.div`
  position: relative;
  width: 100%;
`;

interface InputWrapperProps {
  $hasOptional?: boolean;
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

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  &:active {
    border-color: ${(props) => props.theme.colors.darkYellow};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.baseButton};
  }
`;

export const OptionalText = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
