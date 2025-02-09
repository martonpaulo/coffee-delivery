import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export interface TooltipBoxProps {
  $position: "top" | "bottom" | "left" | "right";
}

export const TooltipBox = styled.div<TooltipBoxProps>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.baseSubtitle};
  padding: 0.5rem 0.75rem;

  border-radius: 6px;
  white-space: nowrap;
  z-index: 10;

  ${({ $position }) =>
    $position === "top" &&
    "bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 0.5rem;"}
  ${({ $position }) =>
    $position === "bottom" &&
    "top: 100%; left: 50%; transform: translateX(-50%); margin-top: 0.5rem;"}
  ${({ $position }) =>
    $position === "left" &&
    "right: 100%; top: 50%; transform: translateY(-50%); margin-right: 0.5rem;"}
  ${({ $position }) =>
    $position === "right" &&
    "left: 100%; top: 50%; transform: translateY(-50%); margin-left: 0.5rem;"}
`;
