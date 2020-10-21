const express = require('express')
const router = express.Router()

const data = [
  {
    id: 'QA12',
    name: 'Auto lataamo 1',
    location: 'Oulu',
    status: 0,
    generalInformation: 'You can recharge your car here',
    type: 'slow',
    price: 0
  },
  {
    id: 'QA13',
    name: 'Auto lataamo 2',
    location: 'Oulu',
    status: 1,
    generalInformation: 'You can recharge your car here',
    type: 'fast',
    price: 18
  },
  {
    id: 'QA14',
    name: 'Auto lataamo 3',
    location: 'Kemi',
    status: 0,
    generalInformation: 'You can recharge your car here',
    type: 'slow',
    price: 20
  }
]

router.get('', async function (req, res) {
  res.json(data)
})

module.exports = router
