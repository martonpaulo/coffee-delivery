import styled from "styled-components";

export const CoffeeListContainer = styled.aside`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.125rem;
`;

export const CoffeeListGrid = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 2rem;
  row-gap: 3rem;
`;
