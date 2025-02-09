import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

import {
  ChildrenContainer,
  IconWrapper,
  TextWithIconContainer,
} from "@/components/TextWithIcon/TextWithIcon.styles";
import { ColorType } from "@/types/color";

interface TextWithIconProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  color?: ColorType;
  children: ReactNode;
}

export function TextWithIcon({
  icon: Icon,
  color = "purple",
  children,
}: TextWithIconProps) {
  return (
    <TextWithIconContainer>
      <IconWrapper $color={color}>
        <Icon size={16} weight="fill" />
      </IconWrapper>
      <ChildrenContainer>{children}</ChildrenContainer>
    </TextWithIconContainer>
  );
}
