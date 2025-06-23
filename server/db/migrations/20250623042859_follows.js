export async function up(knex) {
  return knex.schema.createTable('follows', (table) => {
    table.int('UserId')
    table.int('FollowedUserId')
    table.string('FollowedAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('follows')
}
