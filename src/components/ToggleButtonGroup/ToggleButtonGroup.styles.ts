import styled from "styled-components";

export const ToggleButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input {
    display: none;
  }

  ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;
