import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const BaseButton = styled.button`
  border: none;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.white};

    svg {
      fill: ${(props) => props.theme.colors.baseCard};
    }
  }
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.lightPurple};
  color: ${(props) => props.theme.colors.darkPurple};

  svg {
    fill: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.darkPurple};
  }
`;

export const CartButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.lightYellow};

  svg {
    fill: ${(props) => props.theme.colors.darkYellow};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.darkYellow};
  }
`;
