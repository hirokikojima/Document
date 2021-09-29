import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
}

declare module 'next/app' {
  export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
}