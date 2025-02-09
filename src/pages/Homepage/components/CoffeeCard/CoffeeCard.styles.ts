import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme.colors.baseCard};

  text-align: center;

  border-radius: 6px 36px 6px 36px;

  position: relative;
`;

export const ImageWrapper = styled.div`
  margin-top: -1.25rem;
  display: flex;
  justify-content: center;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 0.75rem 1.25rem 1rem;
`;

export const TagItem = styled.li`
  background-color: ${(props) => props.theme.colors.lightYellow};
  border-radius: 100px;
  padding: 0 0.5rem;

  span {
    line-height: unset;
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1.25rem;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  position: absolute;
  bottom: 1.25rem;
  width: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  height: 2.375rem;
`;
