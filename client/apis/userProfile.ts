import request from 'superagent'

const rootUrl = '/api/v1/userProfile'

export async function getUserProfile(id: number) {
  const response = await request.get(`${rootUrl}/${id}`)
  return response.body
}
