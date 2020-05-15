import db from '../database'

class UserController {
  async index (req, res) {
    try {
      const users = await db('user')
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }
}

export default new UserController()
