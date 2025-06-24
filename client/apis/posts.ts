import request from 'superagent'

const rootUrl = '/api/v1/posts'

export async function getUserPosts(id: number) {
  const response = await request.get(`${rootUrl}/${id}`)
  return response.body
}
