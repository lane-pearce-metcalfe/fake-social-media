export async function seed(knex) {
  await knex('comments').del()

  await knex('comments').insert([
    {
      Id: 1,
      UserId: 2,
      Comment: 'Test comment one!',
      PostId: 1,
      SentAt: '08/08/2008',
    },
  ])
}
