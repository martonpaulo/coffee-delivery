import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 10rem);
  margin: 0rem auto;
  padding: 0 2rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem 10rem;
  }
`;

export const MainWrapper = styled.main`
  margin-top: 7rem;
  max-width: ${(props) => props.theme.sizes.pageWidth};
  width: 100%;

  ${(props) => props.theme.breakpoints.max.md} {
    margin-top: 4rem;
  }
`;
