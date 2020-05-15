import User from '../models/User'

class UserController {
  async index (req, res) {
    try {
      const users = await User.list()
      return res.json(users)
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async store (req, res) {
    try {
      const users = await User.save(req.body)
      return res.json({
        message: 'User list',
        result: users
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async show (req, res) {
    try {
      const user = await User.show(req.params.id)

      if (!user) {
        throw new Error('User are not exist')
      }

      return res.json({
        message: 'User view',
        result: user
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async update (req, res) {
    try {
      const user = await User.update(req.params.id, req.body)
      return res.json({
        message: 'User updated',
        result: user
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async delete (req, res) {
    try {
      await User.delete(req.params.id)
      return res.json({
        message: 'User removed'
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }
}

export default new UserController()
