import styled from "styled-components";

interface ButtonWithLabelWrapperProps {
  $color: "yellow" | "purple";
}

export const ButtonWithLabelWrapper = styled.button<ButtonWithLabelWrapperProps>`
  height: 2.875rem;
  width: 100%;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme.colors[props.$color]};
  color: ${(props) => props.theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.$color === "yellow"
        ? props.theme.colors.darkYellow
        : props.theme.colors.darkPurple};
  }
`;
