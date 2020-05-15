
exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('email').unique().notNullable()
    table.text('firstName').notNullable()
    table.text('lastName')
    table.text('password').notNullable()

    table.text('created_at').defaultTo(knex.fn.now())
    table.text('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
