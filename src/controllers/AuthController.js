import User from '../models/User'
import bcrypt from 'bcryptjs'

class AuthController {
  async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'Invalid password' })
      }

      user.password = undefined

      return res.json({
        message: 'User login',
        result: {
          user,
          token: await User.generateToken(user)
        }
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }

  async register (req, res) {
    try {
      const user = await User.save(req.body)
      return res.json({
        message: 'User registered',
        result: user
      })
    } catch (e) {
      return res.json({ error: e })
    }
  }
}

export default new AuthController()
