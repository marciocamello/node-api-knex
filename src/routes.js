import { Router } from 'express'

import UserController from './controllers/UserController'
import UserValidation from './middlewares/UserValidation'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello' })
})

routes.get('/users', UserController.index)
routes.get('/users/:id', UserValidation.show, UserController.show)
routes.post('/users', UserValidation.store, UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

export default routes
