import styled from "styled-components";

export const DeliveryAddressContainer = styled.div`
  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.form`
  display: grid;
  gap: 1rem;
`;

export const AddressFormSection = styled.div`
  display: flex;
  gap: 0.75rem;
`;
