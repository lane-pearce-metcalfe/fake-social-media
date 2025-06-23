export async function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('Id')
    table.int('UserId')
    table.string('ImgUrl')
    table.string('CreatedAt')
    table.string('Location')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('posts')
}
