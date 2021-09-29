import { NextPageWithLayout } from "next"
import { Post } from "../../../types"
import ApiClient from "../../../libs/ApiClient"
import React, { ReactElement, useEffect, useState } from "react"
import AdminLayout from "../../../components/organisms/layouts/AdminLayout"

const AdminPostListPage: NextPageWithLayout = () => {
  const [list, setList] = useState<Post[]>([])

  useEffect(() => {
    const fetchBlogList = async () => {
      const response = await ApiClient.fetchPostList()
      setList(response.data.posts)
    }
    fetchBlogList()
  }, [])
  return (
    <div>
      <h1>Admin/BlogList</h1>
      <ul>
        {list.map(item => (
          <li>{item.heading}</li>
        ))}
      </ul>
    </div>
  )
}

AdminPostListPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}

export default AdminPostListPage