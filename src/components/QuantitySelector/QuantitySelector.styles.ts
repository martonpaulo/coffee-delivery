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
  &:focus {
    background-color: ${(props) => props.theme.colors.baseHover};
  }
`;

const BaseButton = styled.button`
  width: 1.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.purple};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.darkPurple};
  }
`;

export const DecrementButton = styled(BaseButton)``;
export const IncrementButton = styled(BaseButton)``;

export const QuantityText = styled.div`
  width: 1.5rem;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
