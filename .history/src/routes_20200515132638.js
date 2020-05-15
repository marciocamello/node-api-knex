import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello' })
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:user', UserController.update)
routes.delete('/users/:user', UserController.delete)

export default routes
