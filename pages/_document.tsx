import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head title='Twitch UI'>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.png"
        />
      </Head>
      <title>Twitch UI</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}