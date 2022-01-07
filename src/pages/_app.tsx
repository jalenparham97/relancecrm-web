import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@/theme';
import '../styles/globals.css';
import PageLayout from '@/components/layouts/PageLayout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Relance CRM</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </>
  );
}
