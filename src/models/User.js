import db from '../database'

class User {
  async list () {
    return await db('users')
  }

  async show (id) {
    return await db('users')
      .where('id', id)
      .first()
  }

  async save (data) {
    return await db('users')
      .insert(data)
  }

  async update (id, data) {
    return await db('users')
      .where('id', id)
      .update(data)
  }

  async delete (id) {
    return await db('users')
      .where('id', id)
      .del()
  }
}

export default new User()
