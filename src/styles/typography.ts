import styled from "styled-components";

import { ColorType } from "@/types/color";

export const TitleXL = styled.h1<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleXL};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseTitle"]};
`;

export const TitleL = styled.h2<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleL};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseSubtitle"]};
`;

export const TitleM = styled.h3<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleM};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseSubtitle"]};
`;

export const TitleS = styled.h4<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleS};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseSubtitle"]};
`;

export const TitleXS = styled.h5<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleXS};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors[props.$color || "baseSubtitle"]};
`;

export const TextL = styled.p<{ $bold?: boolean; $color?: ColorType }>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textL};
  font-weight: ${(props) =>
    props.$bold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseText"]};
`;

export const TextM = styled.p<{ $bold?: boolean; $color?: ColorType }>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textM};
  font-weight: ${(props) =>
    props.$bold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseText"]};
`;

export const TextS = styled.p<{ $bold?: boolean; $color?: ColorType }>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textS};
  font-weight: ${(props) =>
    props.$bold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors[props.$color || "baseLabel"]};
`;

export const TextXS = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textXS};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const Tag = styled.span`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.tag};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.default};
  color: ${(props) => props.theme.colors.darkYellow};
  text-transform: uppercase;
`;

export const ButtonG = styled.span`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.buttonG};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.button};
  text-transform: uppercase;
`;

export const ButtonM = styled.span<{
  $color?: ColorType;
}>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.buttonM};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.button};
  color: ${(props) => props.theme.colors[props.$color || "baseSubtitle"]};
  text-transform: uppercase;
`;
