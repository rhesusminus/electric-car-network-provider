const { BadRequest } = require('./errors')

const isLoggedIn = (req) => !!req.session.userId

const sessionizeUser = (user) => ({ userId: user.id, username: user.username })

const parseError = (err) => (err.isJoi ? err.details[0] : JSON.stringify(err, Object.getOwnPropertyNames(err)))

const validate = async (schema, payload) => {
  try {
    await schema.validateAsync(payload, { abortEarly: false })
  } catch (error) {
    throw new BadRequest(error)
  }
}

module.exports = {
  isLoggedIn,
  sessionizeUser,
  parseError,
  validate
}
