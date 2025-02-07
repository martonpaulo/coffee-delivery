import styled from "styled-components";

import { ColorType } from "@/types/color";

export interface CartButtonWrapperProps {
  $color: ColorType;
}

export const CartButtonWrapper = styled.button<CartButtonWrapperProps>`
  border: none;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.$color === "primary"
      ? props.theme.colors.purple
      : props.theme.colors.lightYellow};

  svg {
    fill: ${(props) =>
      props.$color === "primary"
        ? props.theme.colors.baseCard
        : props.theme.colors.darkYellow};
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.$color === "primary"
        ? props.theme.colors.darkPurple
        : props.theme.colors.darkYellow};

    svg {
      fill: ${(props) =>
        props.$color === "primary"
          ? props.theme.colors.baseCard
          : props.theme.colors.baseCard};
    }
  }
`;
