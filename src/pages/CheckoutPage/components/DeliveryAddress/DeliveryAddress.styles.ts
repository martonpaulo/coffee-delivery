import styled from "styled-components";

export const DeliveryAddressContainer = styled.div`
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

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressFormSection = styled.div`
  display: flex;
  gap: 0.75rem;

  ${(props) => props.theme.breakpoints.max.md} {
    flex-direction: column;
  }
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
