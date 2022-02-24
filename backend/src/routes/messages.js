const express = require('express')
const router = express.Router()
const MessagesController = require('../controllers/messagesController')

router.get('/', MessagesController.getMessages)
router.get('/:messageId', MessagesController.getMessage)
router.post('/', MessagesController.addMessage)
router.patch('/:messageId', MessagesController.updateMessage)
router.delete('/:messageId', MessagesController.removeMessage)

module.exports = router