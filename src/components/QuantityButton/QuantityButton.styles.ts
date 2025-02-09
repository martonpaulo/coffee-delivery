import styled from "styled-components";

export const QuantityButtonWrapper = styled.button`
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

  &:disabled {
    color: ${(props) => props.theme.colors.baseLabel};
    cursor: not-allowed;
  }
`;
