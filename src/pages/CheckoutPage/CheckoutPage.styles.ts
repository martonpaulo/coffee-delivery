import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  ${(props) => props.theme.breakpoints.max.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CompleteOrderContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;

  ${(props) => props.theme.breakpoints.max.md} {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 75%;
  }
`;

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;

  ${(props) => props.theme.breakpoints.max.md} {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 75%;
  }
`;
