import Document,{ Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import React from 'react';


class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="es">
        {/* Realizar el flush de los estilos, con la finalidad de que el sitio se vea bien el diferentes navegadores  */}
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*
export default function MyDocument() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}*/
