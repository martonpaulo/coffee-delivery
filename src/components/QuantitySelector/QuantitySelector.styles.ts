import styled from "styled-components";

interface QuantitySelectorWrapperProps {
  $disabled: boolean;
}

export const QuantitySelectorWrapper = styled.div<QuantitySelectorWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.baseButton};

  &:hover,
  &:focus-within {
    background-color: ${(props) =>
      !props.$disabled && props.theme.colors.baseHover};
  }
`;

export const QuantityTextWrapper = styled.div`
  width: 1rem;
  text-align: center;
`;
