import db from './connection.ts'

export async function getUserTheme(id: number) {
  return await db('posts').where({ UserId: id }).select('Theme')
}
