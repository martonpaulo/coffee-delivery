import styled from "styled-components";

export const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 4.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.baseButton};

  &:hover,
  &:focus-within {
    background-color: ${(props) => props.theme.colors.baseHover};
  }
`;

export const QuantityTextWrapper = styled.div`
  width: 1rem;
  text-align: center;
`;
