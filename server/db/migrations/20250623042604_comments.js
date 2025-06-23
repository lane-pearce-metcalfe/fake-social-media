export async function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('Id')
    table.int('UserId')
    table.string('Comment')
    table.int('PostId')
    table.string('SentAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('comments')
}
