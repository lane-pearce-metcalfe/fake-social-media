export async function seed(knex) {
  await knex('posts').del()

  await knex('posts').insert([
    {
      Id: 1,
      UserId: 1,
      ImgUrl:
        'https://i.pinimg.com/736x/2c/7a/83/2c7a83fabacfa7835bac3385f3bfa4af.jpg',
      CreatedAt: '09/09/2001',
      Location: 'New Zealand',
    },
    {
      Id: 2,
      UserId: 1,
      ImgUrl:
        'https://i.pinimg.com/736x/53/f7/3d/53f73d802301b5fd79d635318e167c72.jpg',
      CreatedAt: '23/08/2023',
      Location: 'New Zealand',
    },
    {
      Id: 3,
      UserId: 3,
      ImgUrl:
        'https://i.pinimg.com/736x/3c/22/60/3c2260c568dd5f7d4709bf7ce5b9f716.jpg',
      CreatedAt: '07/11/2020',
      Location: 'Paris',
    },
  ])
}
