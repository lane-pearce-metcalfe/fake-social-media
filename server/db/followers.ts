import db from './connection.ts'

export async function getFollowingIds(id: number) {
  return await db('comments').where({ UserId: id }).select('FollowedUserId')
}
