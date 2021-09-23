import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { PostList } from "../../types/Post"

export type Props = {
  posts: PostList
}

export const getStaticProps: GetStaticProps<Props> = (context: GetStaticPropsContext) => {
  const posts = [
    {
      heading: 'タイトル１',
      body: '本文'
    },
    {
      heading: 'タイトル２',
      body: '本文'
    },
    {
      heading: 'タイトル３',
      body: '本文'
    },
    {
      heading: 'タイトル４',
      body: '本文'
    }
  ]
  
  return {
    props: {
      posts: {
        posts: posts,
        pagination: {
          pageCount: 1,
          current: 1,
        }
      }
    }
  }
}

const BlogListPage: NextPage<Props> = (props: Props) => {
  const {
    posts
  } = props
  
  return (
    <div>
      <h1>BlogList</h1>
      <ul>
        {
          posts.posts.map((post) => {
            <li>
              <h2>{post.heading}</h2>
              <p>{post.body}</p>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default BlogListPage