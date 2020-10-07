const { isLoggedIn } = require('./utils')
const { Unauthorized, BadRequest } = require('./errors')

const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('You are already logged in!'))
  }

  next()
}

const auth = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized('You must be logged in'))
  }

  next()
}

const catchAsync = (handler) => (req, res, next) => handler(req, res, next).catch(next)

module.exports = {
  catchAsync,
  guest,
  auth
}
