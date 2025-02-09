import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`;
