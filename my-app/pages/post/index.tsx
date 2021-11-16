import { GetStaticProps, GetStaticPropsContext, NextPageWithLayout } from "next"
import NextLink from "../../components/atoms/NextLink"
import { Pagination, Post } from "../../types"
import RouteUtil from "../../utils/RouteUtil"
import posts from "../../data/posts.json"
import React, { ReactElement } from "react"
import DefaultLayout from "../../components/organisms/DefaultLayout"

export type Props = {
  posts: Post[],
  pagination: Pagination
}

export const getStaticProps: GetStaticProps<Props> = (context: GetStaticPropsContext) => {
  return {
    props: {
      posts: posts,
      pagination: {
        pageCount: 1,
        current: 1,
      }
    }
  }
}

const PostListPage: NextPageWithLayout<Props> = (props: Props) => {
  const {
    posts,
    pagination
  } = props

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {
          posts.map((post, idx) => (
            <li key={idx}>
              <NextLink href={RouteUtil.getBlogDetailPageUrl(post.heading)}>
                <h2>{post.heading}</h2>
                <p>{post.body}</p>
              </NextLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

PostListPage.getLayout = (page: ReactElement) => {
  return (<DefaultLayout>{page}</DefaultLayout>)
}

export default PostListPage