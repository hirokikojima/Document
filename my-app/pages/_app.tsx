import '../styles/reset.min.css'
import '../styles/_variables.scss'
import '../styles/globals.scss'
import type { AppPropsWithLayout } from 'next/app'
import { ReactNode } from 'react'



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}
export default MyApp
