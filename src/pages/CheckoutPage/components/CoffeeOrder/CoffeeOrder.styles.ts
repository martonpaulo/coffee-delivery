import styled from "styled-components";

export const CoffeeOrderContainer = styled.div`
  width: 23rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.baseCard};

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;

  padding: 0.5rem 0.25rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 4rem;
  height: 4rem;
`;

export const DetailsAndActionsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const NameAndActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;
