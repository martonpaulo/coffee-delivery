import { ReactNode, useState } from "react";

import {
  TooltipBox,
  TooltipBoxProps,
  TooltipWrapper,
} from "@/components/Tooltip/Tooltip.styles";
import { TextXS } from "@/styles/typography";

interface TooltipProps {
  text: string;
  active?: boolean;
  children: ReactNode;
  position?: TooltipBoxProps["$position"];
}

export function Tooltip({
  text,
  active = true,
  children,
  position = "bottom",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const displayTooltip = () => {
    if (active && !visible) setVisible(true);
  };

  const hideTooltip = () => {
    if (visible) setVisible(false);
  };

  return (
    <TooltipWrapper onMouseOver={displayTooltip} onMouseLeave={hideTooltip}>
      {children}
      {active && visible && (
        <TooltipBox $position={position}>
          <TextXS $color="white">{text}</TextXS>
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
}
