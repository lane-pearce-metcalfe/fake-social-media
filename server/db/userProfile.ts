import db from './connection.ts'

export async function getUserProfile(id: number) {
  return await db('userProfile').where({ UserId: id }).select()
}
