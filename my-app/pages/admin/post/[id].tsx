import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage, NextPageWithLayout } from "next"
import React, { ReactElement } from "react"
import AdminLayout from "../../../components/organisms/layouts/AdminLayout"

const AdminPostDetailPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Admin/BlogDetail</h1>
    </div>
  )
}

AdminPostDetailPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}
  
export default AdminPostDetailPage