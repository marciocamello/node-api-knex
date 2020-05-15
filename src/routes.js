import { Router } from 'express'

import JwtMiddleware from './middlewares/auth/JwtMiddleware'
import UserValidation from './middlewares/validators/UserValidation'
import AuthValidation from './middlewares/validators/AuthValidation'

import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello' })
})

// Register and Login routes
routes.post('/login', AuthValidation.login, AuthController.login)
routes.post('/register', AuthValidation.register, AuthController.register)

// Users routes
routes.get('/users', JwtMiddleware, UserController.index)
routes.get('/users/:id', JwtMiddleware, UserValidation.show, UserController.show)
routes.post('/users', JwtMiddleware, UserValidation.store, UserController.store)
routes.put('/users/:id', JwtMiddleware, UserController.update)
routes.delete('/users/:id', JwtMiddleware, UserController.delete)

export default routes
