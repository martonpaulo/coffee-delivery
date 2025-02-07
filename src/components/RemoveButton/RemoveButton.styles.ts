import styled from "styled-components";

export const RemoveButtonWrapper = styled.button`
  height: 2rem;
  border-radius: 6px;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;

  gap: 0.25rem;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.baseButton};
  color: ${(props) => props.theme.colors.purple};

  span {
    line-height: unset;
    color: ${(props) => props.theme.colors.baseText};
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.baseHover};
    color: ${(props) => props.theme.colors.darkPurple};

    span {
      color: ${(props) => props.theme.colors.baseSubtitle};
    }
  }
`;
