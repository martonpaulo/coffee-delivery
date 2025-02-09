import styled from "styled-components";

interface ToggleButtonWrapperProps {
  $isSelected: boolean;
}

export const ToggleButtonContainer = styled.div<ToggleButtonWrapperProps>`
  height: 3.1875rem;
  border-radius: 6px;
  padding: 0 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  color: ${(props) => props.theme.colors.purple};
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.lightPurple
      : props.theme.colors.baseButton};

  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.purple
        : props.theme.colors.baseButton};

  span {
    line-height: unset;
    color: ${(props) => props.theme.colors.baseText};
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      !props.$isSelected && props.theme.colors.baseHover};

    span {
      color: ${(props) =>
        !props.$isSelected && props.theme.colors.baseSubtitle};
    }
  }
`;
