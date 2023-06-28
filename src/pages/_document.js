import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="dark" className="overflow-hidden select-none">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F2937" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
