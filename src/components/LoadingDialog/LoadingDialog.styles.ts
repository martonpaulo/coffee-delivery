import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid ${(props) => props.theme.colors.baseHover};
  border-top: 4px solid ${(props) => props.theme.colors.purple};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 1s linear infinite;
`;
