import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.medium};
`;

export const AllPostLinks = styled.a`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
