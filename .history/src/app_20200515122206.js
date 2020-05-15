import express from 'express'
import cors from 'cors'
import compression from 'compression'

import routes from './routes'

class App {

  constructor(){

    this.express = express.Application
  }

  middlewares() {

  }

  database() {

  }

  routes() {

  }
}

export default new App().express