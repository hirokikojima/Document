import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import NextLink from "../../../components/atoms/NextLink"
import { Pagination, Post } from "../../../types"
import RouteUtil from "../../../utils/RouteUtil"
import ApiClient from "../../../libs/ApiClient"
import { useEffect, useState } from "react"

const BlogListPage: NextPage = () => {
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

export default BlogListPage