import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import NextLink from "../../components/atoms/NextLink"
import { Pagination, Post } from "../../types"
import RouteUtil from "../../utils/RouteUtil"
import posts from "../../data/posts.json"

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

const BlogListPage: NextPage<Props> = (props: Props) => {
  const {
    posts,
    pagination
  } = props

  return (
    <div>
      <h1>BlogList</h1>
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

export default BlogListPage