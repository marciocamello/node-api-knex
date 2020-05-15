
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('email')
    table.text('firstName')
    table.text('lastName')
    table.text('password')
  })
}

exports.down = function (knex) {

}
