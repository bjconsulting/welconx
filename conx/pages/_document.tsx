import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta
          name="description"
          content="Welconx - Pinheiros - O urbano que te envolve em um dos bairros mais desejados de São Paulo"
        />
        <meta property="image" content="fachada.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}