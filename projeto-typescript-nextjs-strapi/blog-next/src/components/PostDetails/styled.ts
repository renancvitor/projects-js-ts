import styled, { css } from "styled-components";

export const Container = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    font-style: italic;
  `}
`;
