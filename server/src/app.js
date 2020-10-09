require('dotenv').config()
const express = require('express')
const session = require('express-session')
const Redis = require('ioredis')
const connectRedis = require('connect-redis')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const { REDIS_CONFIG, SESSION_OPTIONS } = require('./config')
const { parseError } = require('./utils')
const { NotFound } = require('./errors')

const sessionRouter = require('./routes/session')
const stationsRouter = require('./routes/stations')

const app = express()

app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const RedisStore = connectRedis(session)

const client = new Redis({ port: REDIS_CONFIG.port, host: REDIS_CONFIG.host })

app.use(session({ ...SESSION_OPTIONS, store: new RedisStore({ client }) }))

app.use('/api/session', sessionRouter)
app.use('/api/stations', stationsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  throw new NotFound()
})

app.use(function (error, req, res, next) {
  if (!error.status) {
    console.log(error)
  }

  res.status(error.status || 500).send({ message: error.message || 'Internal Server Error' })
})

module.exports = app
