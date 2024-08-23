import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" data-theme="light"> {}
      <Head>
        {/* Adicione metatags, fontes, etc. aqui se necessário */
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}