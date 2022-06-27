const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('Home Page')
})

router.get('/about', function (req, res) {
  res.send('About')
})

module.exports = router