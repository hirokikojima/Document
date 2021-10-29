import React, { FC } from "react"
import Footer from "../../common/Footer"
import Header from "../../common/Header"

export type Props = {
  children?: React.ReactNode;
}

const DefaultLayout: FC<Props> = (props: Props) => {
  const {
    children
  } = props
  
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout