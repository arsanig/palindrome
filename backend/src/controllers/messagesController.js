const Message = require('../models/Message')
const Utils = require('../utils')

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find()
        res.json(messages)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const getMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId)
        res.json(message)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const addMessage = async (req, res) => {
    try {
        const isPalindrome = await Utils.checkPalindrome(req.body.message)
        const message = new Message({
            message: req.body.message,
            palindrome: isPalindrome,
        })
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch (err) {
        res.json({ error: err })
    }
}

const updateMessage = async (req, res) => {
    try {
        const isPalindrome = await Utils.checkPalindrome(req.body.message)
        const updatedMessage = await Message.updateOne(
            { _id: req.params.messageId },
            { $set: { message: req.body.message, palindrome: isPalindrome } }
        )
        res.json(updatedMessage)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const removeMessage = async (req, res) => {
    try {
        const removedMessage = await Message.remove({
            _id: req.params.messageId,
        })
        res.json(removedMessage)
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = {
    getMessages,
    getMessage,
    addMessage,
    updateMessage,
    removeMessage,
}