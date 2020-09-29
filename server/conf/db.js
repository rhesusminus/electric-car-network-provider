const { REDIS_HOST = 'localhost', REDIS_PORT = '6379', REDIS_PASSWORD = 'password' } = process.env

modules.exports = {
  redis: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD
  }
}
