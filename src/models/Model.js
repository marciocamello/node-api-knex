import db from '../database'

class Model {
  constructor (table) {
    this.table = table
  }

  async findOne (where) {
    return await db(this.table)
      .where(where)
      .first()
  }
}

export default Model
