'use client';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  hrml {
    font-size: 62.5%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({theme}) => theme.font.sizes.medium}
  }

  a {
    color: ${({theme}) => theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
  }

  &:hover {
    opacity: .6;
  }
`;
