export async function up(knex) {
  return knex.schema.createTable('likes', (table) => {
    table.int('UserId')
    table.int('PostId')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('likes')
}
