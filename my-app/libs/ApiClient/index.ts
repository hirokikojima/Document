import axios, { AxiosInstance } from 'axios'
import { FetchPostDetailRequest } from './Requests'
import { FetchPostDetailResponse, FetchPostListResponse } from './Responses'

class ApiClient {
  private axios: AxiosInstance
  
  constructor() {
    this.axios = axios.create()
  }
  
  fetchPostDetail(request: FetchPostDetailRequest) {
    return this.axios.get<FetchPostDetailResponse>(`/api/posts/${request.id}`)
  }

  fetchPostList() {
    return this.axios.get<FetchPostListResponse>('/api/posts/list')
  }
}

export default new ApiClient

export * from './Requests'
export * from './Responses'