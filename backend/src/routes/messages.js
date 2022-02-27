const express = require('express')
const router = express.Router()
const MessagesController = require('../controllers/messagesController')

router.get('/', MessagesController.getMessages)
router.get('/:id', MessagesController.getMessage)
router.post('/', MessagesController.addMessage)
router.patch('/:id', MessagesController.updateMessage)
router.delete('/:id', MessagesController.removeMessage)

module.exports = router
