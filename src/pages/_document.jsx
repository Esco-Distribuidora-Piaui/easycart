import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" data-theme="light"> {/* Defina o idioma do seu site aqui */}
      <Head>
        {/* Adicione metatags, fontes, etc. aqui se necessário */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}