
const bcrypt = require('bcryptjs')

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'admin@nodeapi.com', firstName: 'Marcio', lastName: 'Camello', password: await bcrypt.hash('123123123', 8) }
      ])
    })
}
