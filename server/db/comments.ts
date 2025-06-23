import db from './connection.ts'

export async function getCommentsOnPost(id: number) {
  return await db('comments').where({ PostId: id }).select()
}
