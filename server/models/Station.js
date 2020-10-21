const { string, number } = require('joi')
const { Schema } = require('mongoose')

const stationSchema = new Schema({
  id: String,
  name: String,
  location: String,
  status: Number,
  generalInformation: String,
  type: String,
  price: Number
})

module.exports = stationSchema
