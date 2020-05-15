import db from '../database'

class UserController {
  async index (req, res) {
    try {
      const users = await db('users')
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async store (req, res) {
    try {
      const users = await db('users')
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async update (req, res) {
    try {
      const users = await db('users')
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async delete (req, res) {
    try {
      const users = await db('users')
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }
}

export default new UserController()
