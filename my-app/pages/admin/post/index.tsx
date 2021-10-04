import { NextPageWithLayout } from "next"
import { Post } from "../../../types"
import ApiClient from "../../../libs/ApiClient"
import React, { ReactElement, Suspense, useEffect, useState } from "react"
import AdminLayout from "../../../components/organisms/layouts/AdminLayout"
import SuspenseResource from "../../../libs/SuspenseResource"

const AdminPostListPage: NextPageWithLayout = () => {
  const promise = ApiClient
    .fetchPostList()
    .then((response) => response.data)
  const resource = new SuspenseResource(promise).read()

  return (
    <div>
      <h1>Admin/BlogList</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          {resource?.posts.map(item => (
            <li>{item.heading}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

AdminPostListPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}

export default AdminPostListPage