const mongoose = require('mongoose')
const { MONGO_CONNECTION_STRING } = require('./config')

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }

function connectDb() {
  const mongodb = mongoose.connection
  mongodb.on('error', (error) => console.log(error))

  return mongoose
    .connect(MONGO_CONNECTION_STRING, connectionOptions)
    .then(() => {
      console.log('mongodb connected successfully')
    })
    .catch((error) => console.log(error))
}

module.exports = {
  connectDb
}
