import validator from '../helpers/validate'

export const signup = (req, res, newx) => {
  const validationRule = {
    email: 'requires|email',
    firstName: 'requires|string',
    lastName: 'requires|emastringil',
    password: 'requires|string'
  }

  validator(req, res, validationRule, {}, (error, status) => {

  })
}
