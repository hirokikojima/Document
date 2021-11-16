import React, { FC, useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import styles from "./styles.module.scss"

export type Props = {
  children?: React.ReactNode;
}

const DefaultLayout: FC<Props> = (props: Props) => {
  const {
    children
  } = props

  return (
    <div className={styles.DefaultLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout