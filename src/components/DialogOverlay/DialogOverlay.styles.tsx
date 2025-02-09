import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogContainer = styled.div`
  background: ${(props) => props.theme.colors.baseCard};
  margin: 1rem;
  padding: 2rem;
  border-radius: 6px;
  width: 100%;
  max-width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
`;
