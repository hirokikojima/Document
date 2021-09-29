import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPageWithLayout } from "next"
import { Post } from "../../types"
import posts from "../../data/posts.json"
import React, { ReactElement } from "react"
import DefaultLayout from "../../components/organisms/layouts/DefaultLayout"

export type Props = {
  post: Post
}

export const getStaticProps: GetStaticProps<Props> = (context: GetStaticPropsContext) => {
  const id = context.params!.id as string
  const post = posts.find(post => post.heading === id)

  return {
    props: {
      post: post!
    }
  }
}

export const getStaticPaths: GetStaticPaths = (context: GetStaticPathsContext) => {
  const paths = posts.map(post => {
    return { params: { id: post.heading } }
  })
  
  return {
    paths: paths,
    fallback: false
  }
}

const PostDetailPage: NextPageWithLayout<Props> = ({post}) => (
  <div>
    <h1>{post.heading}</h1>
    <p>{post.body}</p>
  </div>
)

PostDetailPage.getLayout = (page: ReactElement) => {
  return (<DefaultLayout>{page}</DefaultLayout>)
}

export default PostDetailPage