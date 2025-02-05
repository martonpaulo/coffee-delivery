import styled from "styled-components";

export const TitleXL = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleXL};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TitleL = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleL};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TitleM = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleM};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TitleS = styled.h4`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleS};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TitleXS = styled.h5`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleXS};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TextL = styled.p<{ bold?: boolean }>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textL};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TextM = styled.p<{ bold?: boolean }>`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textM};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
`;

export const TextS = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.textS};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.default};
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
  text-transform: uppercase;
`;

export const ButtonG = styled.button`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.buttonG};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.button};
  text-transform: uppercase;
`;

export const ButtonM = styled.button`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.buttonM};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.button};
  text-transform: uppercase;
`;
