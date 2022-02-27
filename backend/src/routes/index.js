const express = require('express')
const router = express.Router()

//base route when visiting <url>/api
router.get('/', (req, res) => {
    res.send('RESTful API for handling messages that may be palindromes')
})

//messages route
const messagesRoute = require('./messages')
router.use('/messages', messagesRoute)

module.exports = router
