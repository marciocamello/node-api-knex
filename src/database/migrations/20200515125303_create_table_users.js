
exports.up = knex => knex.schema.createTable('users', table => {
  table.increments()

  table.string('email').unique().notNullable()
  table.string('firstName').notNullable()
  table.string('lastName')
  table.string('password').notNullable()

  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('users')
