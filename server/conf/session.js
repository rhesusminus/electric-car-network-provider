const { SESSION_SECRET = 'top secret', SESSION_NAME = 'sid', SESSION_IDLE_TIMEOUT = '1800000' } = process.env

module.exports = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: SESSION_IDLE_TIMEOUT, // 30 minutes by default
    secure: process.env.NODE_ENV === 'production',
    sameSite: true
  },
  rolling: true,
  resave: false,
  saveUninitialized: false
}
