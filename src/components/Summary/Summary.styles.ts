import styled from "styled-components";

export const SummaryContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 5.875rem 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  margin-right: 3.5rem;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const BackgroundWrapper = styled.div`
  z-index: -1;

  img {
    position: absolute;
    left: 0;
    width: 100vw;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const ICON_COLORS = {
  darkYellow: "darkYellow",
  yellow: "yellow",
  baseText: "baseText",
  purple: "purple",
} as const;

interface IconWrapperProps {
  $color: keyof typeof ICON_COLORS;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[ICON_COLORS[props.$color]]};

  svg {
    fill: ${({ theme }) => theme.colors.background};
  }
`;
