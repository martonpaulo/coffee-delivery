import styled from "styled-components";

import { ColorType } from "@/types/color";

export const TextWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconWrapperProps {
  $color: ColorType;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[props.$color]};

  svg {
    fill: ${({ theme }) => theme.colors.background};
  }
`;

export const ChildrenContainer = styled.div``;
