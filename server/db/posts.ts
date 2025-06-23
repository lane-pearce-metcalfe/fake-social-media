import db from './connection.ts'

export async function getPostsFromUser(id: number) {
  return await db('posts').where({ UserId: id }).select()
}
