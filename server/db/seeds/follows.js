export async function seed(knex) {
  await knex('follows').del()

  await knex('follows').insert([
    { UserId: 1, FollowedUserId: 2, FollowedAt: '12/12/2023' },
    { UserId: 1, FollowedUserId: 3, FollowedAt: '11/11/2018' },
    { UserId: 2, FollowedUserId: 3, FollowedAt: '09/09/2021' },
  ])
}
