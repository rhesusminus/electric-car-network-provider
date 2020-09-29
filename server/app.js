const express = require('express')
const session = require('express-session')
const createError = require('http-errors')
const Redis = require('ioredis')
const connectRedis = require('connect-redis')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { uuid: uuidv4 } = require('uuid')
const SESSION_OPTIONS = require('./conf/session')
const DB_OPTIONS = require('./conf/db')

const indexRouter = require('./routes/index')
const sessionRouter = require('./routes/session')

const app = express()

app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const RedisStore = connectRedis(session)

const client = new Redis({
  port: parseInt(DB_OPTIONS.redis.port, 10),
  host: DB_OPTIONS.redis.host,
  password: DB_OPTIONS.redis.password
})

app.use(session({ ...SESSION_OPTIONS, store: new RedisStore({ client }) }))

app.use('/', indexRouter)
app.use('/session', sessionRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
