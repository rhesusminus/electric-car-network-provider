const { REDIS_HOST = 'localhost', REDIS_PORT = '6379', REDIS_PASSWORD = 'secret' } = process.env
const { SESSION_SECRET = 'top secret', SESSION_NAME = 'sid', SESSION_IDLE_TIMEOUT = '1800000' } = process.env
const {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_HOST = 'localhost',
  MONGO_PORT = 27017,
  MONGO_DB = 'users'
} = process.env

module.exports = {
  REDIS_CONFIG: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD
  },
  SESSION_OPTIONS: {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
      maxAge: parseInt(SESSION_IDLE_TIMEOUT, 10), // 30 minutes by default
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
  },
  MONGO_CONNECTION_STRING: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`
}
