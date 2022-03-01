const mongoose = require('mongoose')
const Message = require('../db/models/Message')
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
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid ID')

    try {
        const message = await Message.findById(_id)
        res.json(message)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const addMessage = async (req, res) => {
    try {
        const message = new Message({
            message: '',
            palindrome: true,
        })
        if (req.body.message !== '') {
            message.message = req.body.message
            const isPalindrome = await Utils.checkPalindrome(req.body.message)
            message.palindrome = isPalindrome
        }
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const updateMessage = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid ID')

    try {
        const message = new Message({
            message: '',
            palindrome: true,
        })
        if (req.body.message !== '') {
            message.message = req.body.message
            const isPalindrome = await Utils.checkPalindrome(req.body.message)
            message.palindrome = isPalindrome
        }
        const updatedMessage = await Message.updateOne(
            { _id: _id },
            {
                $set: {
                    message: message.message,
                    palindrome: message.palindrome,
                },
            }
        )
        res.json(updatedMessage)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const removeMessage = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid ID')

    try {
        const removedMessage = await Message.findByIdAndDelete({
            _id: _id,
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
