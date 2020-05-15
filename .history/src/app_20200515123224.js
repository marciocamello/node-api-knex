import express from 'express'
import cors from 'cors'
import compression from 'compression'

import routes from './routes'

class App {
  constructor () {
    this.express = express.Application

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(compression())
    this.express.use(cors())
  }

  database () {

  }

  routes () {
    this.express.use(routes)
  }
}

export default new App().express
