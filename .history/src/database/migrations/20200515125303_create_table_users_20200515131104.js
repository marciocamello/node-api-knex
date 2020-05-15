
exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')

  table.text('email').unique().notNullable()
  table.text('firstName').notNullable()
  table.text('lastName')
  table.text('password').notNullable()

  table.timeStamp('created_at').defaultTo(knex.fn.now())
  table.timeStamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('users')
