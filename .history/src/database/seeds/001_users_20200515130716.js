
import bcrypt from 'bcryptjs'

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'admin@nodeapi.com', firstName: 'Marcio', lastName: 'Camello', password: '123123123' }
      ])
    })
}
