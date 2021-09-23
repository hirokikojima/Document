import { Pagination } from "./Common"

export type PostList = {
  posts: Post[]
  pagination: Pagination
}

export type Post = {
  heading: string
  body: string
}