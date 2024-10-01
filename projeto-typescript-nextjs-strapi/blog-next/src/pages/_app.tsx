import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
