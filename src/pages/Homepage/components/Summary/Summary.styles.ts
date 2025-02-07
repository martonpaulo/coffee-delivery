import styled from "styled-components";

export const SummaryContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 5.875rem 0;
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

export const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const BackgroundWrapper = styled.div`
  z-index: -1;

  img {
    position: absolute;
    left: 0;
    top: 5.875rem;
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
