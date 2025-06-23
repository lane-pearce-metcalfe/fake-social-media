export async function seed(knex) {
  await knex('userSettings').del()

  await knex('userSettings').insert([
    { UserId: 1, Theme: 'Dark' },
    { UserId: 2, Theme: 'Dark' },
    { UserId: 3, Theme: 'Light' },
    { UserId: 4, Theme: 'Dark' },
  ])
}
