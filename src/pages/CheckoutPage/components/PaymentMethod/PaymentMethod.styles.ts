import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

export const PaymentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
