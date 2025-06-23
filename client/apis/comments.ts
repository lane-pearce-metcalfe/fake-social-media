import request from 'superagent'

const rootUrl = '/api/v1/comments'

export async function getPostComments(postId: number) {
  const response = await request.get(`${rootUrl}/post/${postId}`)
  return response.body
}
