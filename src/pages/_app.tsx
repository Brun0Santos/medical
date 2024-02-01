import '../../styles/Home.module.css';
import '../../styles/globals.css';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import { TokenProvider } from '../context/LoginContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TokenProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          <Toaster />
        </SessionProvider>
      </TokenProvider>
    </>
  );
}
