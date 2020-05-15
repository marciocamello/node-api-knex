import db from '../database'
import Model from './Model'
import bcrypt from 'bcryptjs'
import { secrets } from '../config/secret'
import * as jwt from 'jsonwebtoken'

class User extends Model {
  async list () {
    return await db('users')
  }

  async show (id) {
    return await db('users')
      .where('id', id)
      .first()
  }

  async save (data) {
    data.password = await bcrypt.hash(data.password, 8)

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

  async generateToken (payload) {
    return jwt.sign({ id: payload.id }, secrets.JWT_SECRET, {
      expiresIn: 86400
    })
  }
}

export default new User('users')
