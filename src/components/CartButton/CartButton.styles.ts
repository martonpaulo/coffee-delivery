import styled from "styled-components";

export const CartButtonWrapper = styled.button`
  border: none;
  height: 2.375rem;
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.lightYellow};

  svg {
    fill: ${(props) => props.theme.colors.darkYellow};
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${(props) => props.theme.colors.yellow};

    svg {
      fill: ${(props) => props.theme.colors.baseCard};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  position: relative;
`;

export const ItemsCountContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkYellow};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
