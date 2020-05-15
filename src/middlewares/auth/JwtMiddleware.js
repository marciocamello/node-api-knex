import * as jwt from 'jsonwebtoken'
import { secrets } from '../../config/secret'
import User from '../../models/User'

async function jwtMiddleware (req, res, next) {
  try {
    const authHeader = req.headers.authorization
    const bearerRegex = /(^Bearer (.*))/gm
    const token = bearerRegex.exec(authHeader)

    const decoded = jwt.verify(token[2], secrets.JWT_SECRET)
    await User.findOne({ id: decoded.id })

    next()
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized' })
  }
}

export default jwtMiddleware
