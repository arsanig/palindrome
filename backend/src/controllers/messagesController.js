/*
    TODO: Revisit to make cleaner :(
 */
 

const mongoose = require('mongoose')
const Message = require('../db/models/Message')
const { isPalindrome } = require('../utils/palindrome')
const { isValidId } = require('../utils/validator')

const constructMessage = async (req) => {
    const message = new Message({
        message: '',
        palindrome: true,
    })
    if (req.body.message !== '') {
        message.message = req.body.message
        const palindrome = await isPalindrome(req.body.message)
        message.palindrome = palindrome
    }
    return message
}

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
        const { id: _id } = req.params
        if (await !isValidId(_id)) return res.status(404).send('Not a valid ID')
        res.json(await Message.findById(_id))
    } catch (err) {
        res.json({ error: err.message })
    }
}

const addMessage = async (req, res) => {
    if (req.body.message === undefined)
        return res.status(404).send('No object provided')
    try {
        const message = await constructMessage(req)
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const updateMessage = async (req, res) => {
    if (req.body.message === undefined)
        return res.status(404).send('No object provided')
    try {
        const { id: _id } = req.params
        if (await !isValidId(_id)) return res.status(404).send('Not a valid ID')
        const message = await constructMessage(req)
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
    try {
        const { id: _id } = req.params
        if (await !isValidId(_id)) return res.status(404).send('Not a valid ID')
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
