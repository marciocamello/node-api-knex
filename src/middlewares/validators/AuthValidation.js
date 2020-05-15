import validator from '../../helpers/validate'

const login = (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    password: 'required'
  }

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        })
    } else {
      next()
    }
  })
}

const register = (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    firstName: 'required|string',
    lastName: 'required|string',
    password: 'required|string'
  }

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        })
    } else {
      next()
    }
  })
}

export default {
  login,
  register
}
