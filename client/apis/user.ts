import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function getUserData(id: number) {
  const response = await request.get(`${rootUrl}/${id}`)
  return response.body
}
