import { NextApiRequest, NextApiResponse } from "next"
import PostRepository from '../../../libs/Repositories/PostRepository'
import { Post } from "../../../types"

type PostListResponse = {
  posts: Post[]
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PostListResponse>
) => {
  const posts = await PostRepository.getList()

  res.status(200).json({
    posts: posts
  })
}

export default handler