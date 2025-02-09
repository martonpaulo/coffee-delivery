import styled from "styled-components";

export const ButtonWithLabelWrapper = styled.button`
  height: 2.875rem;
  width: 100%;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.darkYellow};
  }
`;
