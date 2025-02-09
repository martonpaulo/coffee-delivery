import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent } from "react";

export type IconType = ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
