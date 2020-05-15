import db from '../database'

class User {
  async list () {
    return await db('users')
  }

  async save (data) {

  }

  async update (user) {

  }

  async delete (user) {

  }
}

export default new User()
