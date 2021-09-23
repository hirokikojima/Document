import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"

export type Props = {
  heading: string
}

export const getStaticProps: GetStaticProps<Props> = (context: GetStaticPropsContext) => {
  const id = context.params!.id as string
  
  return {
    props: {
      heading: id
    }
  }
}

export const getStaticPaths: GetStaticPaths = (context: GetStaticPathsContext) => {
  return {
    paths: [
      { params: { id: '「グロースハック完全読本」を読んだ' } },
      { params: { id: '「監視入門」を読んだ' } },
      { params: { id: '「正しいものを正しく作る」を読んだ' } },
      { params: { id: '「クリーンアーキテクチャ」を読んだ' } },
    ],
    fallback: false
  }
}

const BlogDetailPage: NextPage<Props> = ({heading}) => (
  <div>
    <h1>{heading}</h1>
    <p>Example Text.Example Text.Example Text.</p>
    <p>Example Text.Example Text.Example Text.</p>
  </div>
)

export default BlogDetailPage