const express = require('express');
const router = express.Router();

//Import messages route
const messagesRoute = require('./messages')
router.use('/messages', messagesRoute)

module.exports = router