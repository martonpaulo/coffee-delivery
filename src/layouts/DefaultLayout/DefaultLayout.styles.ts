import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 10rem);
  margin: 0rem auto;
  padding: 0 2rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.main`
  margin-top: 7rem;
  max-width: ${(props) => props.theme.sizes.pageWidth};
  width: 100%;
`;
