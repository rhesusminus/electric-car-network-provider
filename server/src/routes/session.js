const express = require('express')
const Joi = require('joi')
const router = express.Router()
const { isLoggedIn, validate } = require('../utils')
const { catchAsync, guest, auth } = require('../middleware')
const validation = require('../validation')
const { SESSION_OPTIONS } = require('../config')

const user = { id: 1, username: 'user', password: 'password' }

const logIn = (req) => (userId) => (req.session.userId = userId)

router.get('', function (req, res) {
  if (isLoggedIn(req)) {
    return res.status(200).json({ userId: req.session.userId })
  }

  res.status(200).json({ message: 'no session' })
})

router.post(
  '',
  guest,
  catchAsync(async (req, res) => {
    await validate(validation.logIn, req.body)

    if (req.body.username !== user.username || req.body.password !== user.password) {
      throw new Error('Incorrect email or password')
    }

    logIn(req)(user.id)

    res.sendStatus(200)
  })
)

router.delete(
  '',
  auth,
  catchAsync(async (req, res) => {
    console.log(req.session.userId)
    const userId = req.session.userId

    if (userId) {
      req.session.destroy((error) => {
        if (error) {
          throw error
        }

        res.clearCookie(SESSION_OPTIONS.name)
        res.sendStatus(200)
      })
    }
  })
)

module.exports = router
