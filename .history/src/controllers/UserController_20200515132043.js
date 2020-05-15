import db from '../database'

class UserController {
  async index (req, res) {
    try {
      const users = await db('users')
      return res.json(users)
    } catch (e) {

    }
  }
}

export default new UserController()
