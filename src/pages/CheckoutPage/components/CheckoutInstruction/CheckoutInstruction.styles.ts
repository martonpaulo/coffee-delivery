import styled from "styled-components";

export const CheckoutInstructionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

interface CheckoutInstructionIconWrapperProps {
  $color: string;
}

export const CheckoutInstructionIconWrapper = styled.div<CheckoutInstructionIconWrapperProps>`
  color: ${(props) => props.theme.colors[props.$color]};
`;

export const CheckoutInstructionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;
