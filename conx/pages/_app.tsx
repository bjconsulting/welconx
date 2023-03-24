import React from 'react'
import Head from 'next/head';
import '../src/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welconx Pinheiros</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}