const Joi = require('joi')

const username = Joi.string().alphanum().min(3).max(30).required()

const password = Joi.string().alphanum().min(3).max(16).required()

const logIn = Joi.object().keys({ username, password })

module.exports = { logIn }
