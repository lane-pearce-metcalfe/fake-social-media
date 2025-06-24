import request from 'superagent'

const rootUrl = '/api/v1/userSettings'

export async function getUserTheme(id: number) {
  const response = await request.get(`${rootUrl}/theme/${id}`)
  return response.body
}
