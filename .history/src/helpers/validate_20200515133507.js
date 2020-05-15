import Validator from 'validatorjs'
const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages)
}
