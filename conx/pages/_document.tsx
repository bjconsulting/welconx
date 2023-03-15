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
        <meta
          name="og:description"
          content="Welconx - Pinheiros - O urbano que te envolve em um dos bairros mais desejados de São Paulo"
        />
        <meta property="og:image" content="fachada.jpg"/>
        <meta property="og:title" content="CONX - Imóveis Pinheiros"/>
        <meta property="og:url" content="https://conx.com.br/welconxpinheiros/"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}