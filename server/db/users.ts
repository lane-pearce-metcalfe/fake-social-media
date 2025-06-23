import db from './connection.ts'

export async function getUserData(id: number) {
  return await db('users').where({ UserId: id }).select()
}
