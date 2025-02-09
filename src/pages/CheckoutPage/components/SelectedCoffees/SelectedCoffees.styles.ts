import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div + div {
    border-top: 1px solid ${(props) => props.theme.colors.baseButton};
  }
`;

export const PriceWrapper = styled.div`
  &:not(:first-child) {
    padding-top: 1.5rem;
  }

  &:not(:last-child) {
    padding-bottom: 1.5rem;
  }
`;

export const PriceValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
`;
