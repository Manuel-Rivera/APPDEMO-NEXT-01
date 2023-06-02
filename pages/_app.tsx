import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import { darkTheme } from '@/themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    // Provider envuenve a los componentes aplicando aplicandoce los estilos a todos los hijos
      <NextUIProvider theme={darkTheme}>
          <Component {...pageProps} />
      </NextUIProvider>
    )
}
