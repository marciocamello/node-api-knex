import validator from '../helpers/validate'

const signup = (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    firstName: 'required|string',
    lastName: 'required|emastringil',
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
  signup
}
