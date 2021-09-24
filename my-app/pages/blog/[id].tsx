import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { Post } from "../../types"
import posts from "../../data/posts.json"

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

const BlogDetailPage: NextPage<Props> = ({post}) => (
  <div>
    <h1>{post.heading}</h1>
    <p>{post.body}</p>
  </div>
)

export default BlogDetailPage