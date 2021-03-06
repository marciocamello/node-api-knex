import validator from '../../helpers/validate'

const store = (req, res, next) => {
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

const show = (req, res, next) => {
  const validationRule = {
    id: 'required|integer'
  }

  validator(req.params, validationRule, {}, (err, status) => {
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
  store,
  show
}
