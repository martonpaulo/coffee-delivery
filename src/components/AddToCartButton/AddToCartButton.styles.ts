import styled from "styled-components";

export const AddToCartButtonWrapper = styled.button`
  border: none;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.purple};

  svg {
    fill: ${(props) => props.theme.colors.baseCard};
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${(props) => props.theme.colors.darkPurple};

    svg {
      fill: ${(props) => props.theme.colors.baseCard};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  position: relative;
`;

export const PlusCircleIconWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 0.75rem;
  height: 0.75rem;

  position: absolute;
  top: 0.35rem;
  right: 0.25rem;
`;
