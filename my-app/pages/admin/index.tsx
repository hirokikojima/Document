import { NextPageWithLayout } from "next"
import React, { ReactElement } from "react"
import AdminLayout from "../../components/organisms/layouts/AdminLayout"

const AdminPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  )
}

AdminPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}

export default AdminPage