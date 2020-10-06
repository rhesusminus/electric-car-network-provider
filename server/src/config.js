const { REDIS_HOST = 'localhost', REDIS_PORT = '6379', REDIS_PASSWORD = 'password' } = process.env
const { SESSION_SECRET = 'top secret', SESSION_NAME = 'sid', SESSION_IDLE_TIMEOUT = '1800000' } = process.env

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
  }
}
