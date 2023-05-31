import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: any) {
  
  const getLayout=Component.getLayout || ((page:any)=>page);

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps}/>);
}
