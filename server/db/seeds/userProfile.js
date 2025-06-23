export async function seed(knex) {
  await knex('userProfile').del()

  await knex('userProfile').insert([
    {
      UserId: 1,
      Description: 'This a test description for user number 1',
      Location: 'New Zealand',
      BirthDate: '08/09/1920',
    },
    {
      UserId: 2,
      Description: 'This is a test description for user number 2',
      Location: 'New Zealand',
      BirthDate: '23/02/1945',
    },
    {
      UserId: 3,
      Description: 'This is a test description for user number 3',
      Location: 'New Zealand',
      BirthDate: '02/12/2056',
    },
    {
      UserId: 4,
      Description: 'This is a test description for user number 4',
      Location: 'New Zealand',
      BirthDate: '05/10/2002',
    },
  ])
}
