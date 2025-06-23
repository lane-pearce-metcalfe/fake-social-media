export async function up(knex) {
  return knex.schema.createTable('mentions', (table) => {
    table.int('PostId')
    table.int('UserId')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('mentions')
}
