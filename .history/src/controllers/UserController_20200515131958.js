import db from '../database'

class UserController {
  index (req, res) {
    const users = []
    return res.json(users)
  }
}

export default new UserController()
