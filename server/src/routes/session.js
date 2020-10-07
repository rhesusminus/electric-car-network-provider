const express = require('express')
const Joi = require('joi')
const { isLoggedIn, validate } = require('../utils')
const { catchAsync, guest, auth } = require('../middleware')
const validation = require('../validation')
const { SESSION_OPTIONS } = require('../config')
const { Unauthorized } = require('../errors')

const router = express.Router()

const user = { id: 1, username: 'user', password: 'password' }

const logIn = (req) => (userId) => (req.session.userId = userId)

router.get('', function (req, res) {
  if (isLoggedIn(req)) {
    return res.json({ userId: req.session.userId })
  }

  res.json({ message: 'no session' })
})

router.post(
  '',
  guest,
  catchAsync(async (req, res) => {
    await validate(validation.logIn, req.body)

    if (req.body.username !== user.username || req.body.password !== user.password) {
      throw new Unauthorized('Incorrect email or password')
    }

    logIn(req)(user.id)

    res.json({ message: 'OK' })
  })
)

router.delete(
  '',
  auth,
  catchAsync(async (req, res) => {
    if (req.session.userId) {
      req.session.destroy((error) => {
        if (error) {
          throw error
        }

        res.clearCookie(SESSION_OPTIONS.name)
        res.json({ message: 'OK' })
      })
    }
  })
)

module.exports = router
