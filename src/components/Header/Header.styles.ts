import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 1000;

  display: flex;
  justify-content: center;
  width: 100%;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 0;

  max-width: ${(props) => props.theme.sizes.pageWidth};
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LocationButton = styled.button`
  border: none;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.lightPurple};
  color: ${(props) => props.theme.colors.darkPurple};

  svg {
    fill: ${(props) => props.theme.colors.purple};
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.darkPurple};

    p {
      color: ${(props) => props.theme.colors.baseCard};
    }

    svg {
      fill: ${(props) => props.theme.colors.baseCard};
    }
  }
`;
