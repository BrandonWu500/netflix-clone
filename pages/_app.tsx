import Layout from '@/components/Layout';
import {
  AuthContextProvider,
  AUTH_INIT_STATE,
} from '@/context/auth/AuthContext';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider {...AUTH_INIT_STATE}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
