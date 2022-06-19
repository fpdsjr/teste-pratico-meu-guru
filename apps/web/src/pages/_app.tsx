import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from '~/styles/global';
import { UserProvider } from '~/context/UserProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
