export async function up(knex) {
  return knex.schema.createTable('userProfile', (table) => {
    table.string('Description')
    table.string('Location')
    table.string('BirthDate')
    table.int('UserId')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('userProfile')
}
