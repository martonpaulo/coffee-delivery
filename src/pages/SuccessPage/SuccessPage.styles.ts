import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  gap: 2rem;

  ${(props) => props.theme.breakpoints.max.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DeliveryDetails = styled.div`
  position: relative;
  display: grid;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.colors.yellow} 0%,
      ${(props) => props.theme.colors.purple} 100%
    );
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: ${(props) => props.theme.colors.background};
    z-index: -1;
  }
`;

export const IllustrationWrapper = styled.div`
  margin-bottom: -0.6875rem;

  ${(props) => props.theme.breakpoints.max.med} {
    margin-top: 2rem;
  }
`;
