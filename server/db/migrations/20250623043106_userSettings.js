export async function up(knex) {
  return knex.schema.createTable('userSettings', (table) => {
    table.int('UserId')
    table.string('Theme')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('userSettings')
}
