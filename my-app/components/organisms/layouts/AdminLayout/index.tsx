import React, { FC } from "react"
import Footer from "../../Footer"
import Header from "../../Header"
import Sidebar from "../../Sidebar"

export type Props = {
  children?: React.ReactNode;
}

const AdminLayout: FC<Props> = (props: Props) => {
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

export default AdminLayout