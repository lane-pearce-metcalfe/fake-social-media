export async function seed(knex) {
  await knex('mentions').del()

  await knex('mentions').insert([
    { PostId: 1, UserId: 2 },
    { PostId: 1, UserId: 3 },
  ])
}
