import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Welconx - Pinheiros - O urbano que te envolve em um dos bairros mais desejados de São Paulo"
        />
        <meta property="image" content="fachada.jpg"/>
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />

        {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
          __html:
          `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKR3L52');
          `
        }}/>
        {/* <!-- End Google Tag Manager --> */}
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
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKR3L52"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}/>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
        {/* <!-- Meta Pixel Code --> */}
        <script dangerouslySetInnerHTML={{
          __html: 
          `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '914039533053465');
          fbq('track', 'PageView');
          `
        }}/>
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=914039533053465&ev=PageView&noscript=1"
        />`
        }}/>
        {/* <!-- End Meta Pixel Code --> */}
      </body>
    </Html>
  )
}