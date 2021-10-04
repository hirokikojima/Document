import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage, NextPageWithLayout } from "next"
import React, { ReactElement, Suspense, useEffect, useState } from "react"
import AdminLayout from "../../../components/organisms/layouts/AdminLayout"
import ApiClient from "../../../libs/ApiClient"
import { Post } from "../../../types"

const AdminPostDetailPage: NextPageWithLayout = () => {
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    const fetchBlogList = async () => {
      const response = await ApiClient.fetchPostDetail({id: 'posts.json'})
      setPost({
        heading: response.data.heading,
        body: response.data.body,
      })
    }
    fetchBlogList()
  }, [])
  return (
    <div>
      <h1>Admin/BlogDetail</h1>
      <Suspense fallback={<h2>Loading...</h2>}>

      </Suspense>
    </div>
  )
}

AdminPostDetailPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}
  
export default AdminPostDetailPage