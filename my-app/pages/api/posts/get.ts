import { NextApiRequest, NextApiResponse } from "next"
import PostRepository from '../../../libs/Repositories/PostRepository'
import { Post } from "../../../types"

type PostGetResponse = {
  post: Post
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PostGetResponse>
) => {
  const {
    query: { id },
    method
  } = req

  // TODO 保存/更新を実装
  // switch(method) {
  //   case 'GET':
  //   case 'POST':
  //   case 'PUT':
  // }

  const post = await PostRepository.get(id as string)

  res.status(200).json({
    post: post
  })
}

export default handler