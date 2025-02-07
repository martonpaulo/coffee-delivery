import styled from "styled-components";

interface CartButtonWrapperProps {
  $color: "purple" | "lightYellow";
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

  background-color: ${(props) => props.theme.colors[props.$color]};

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${(props) =>
        props.$color === "purple"
          ? props.theme.colors.baseCard
          : props.theme.colors.darkYellow};
    }
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.$color === "purple"
        ? props.theme.colors.darkPurple
        : props.theme.colors.yellow};

    svg {
      fill: ${(props) => props.theme.colors.baseCard};
    }
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
