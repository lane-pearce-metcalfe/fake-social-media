export async function seed(knex) {
  await knex('users').del()

  await knex('users').insert([
    {
      id: 1,
      UserName: 'Test UserName 1',
      FullName: 'Test FullName 1',
      Email: 'testEmailOne@gmail.com',
      PfpUrl:
        'https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg',
      UserSince: '10/10/2011',
      Auth0Sub: 'auth0|1',
    },
    {
      id: 2,
      UserName: 'Test UserName 2',
      FullName: 'Test FullName 2',
      Email: 'testEmailTwo@gmail.com',
      PfpUrl:
        'https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg',
      UserSince: '10/10/2012',
      Auth0Sub: 'auth0|2',
    },
    {
      id: 3,
      UserName: 'Test UserName 3',
      FullName: 'Test FullName 3',
      Email: 'testEmailThree@gmail.com',
      PfpUrl:
        'https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg',
      UserSince: '10/10/2013',
      Auth0Sub: 'auth0|3',
    },
    {
      id: 4,
      UserName: 'Test UserName 4',
      FullName: 'Test FullName 4',
      Email: 'testEmailFour@gmail.com',
      PfpUrl:
        'https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg',
      UserSince: '10/10/2014',
      Auth0Sub: 'auth0|4',
    },
  ])
}
