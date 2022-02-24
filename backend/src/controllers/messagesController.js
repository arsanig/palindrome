const Message = require('../models/Message')

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find()
        res.json(messages);
    } catch (err) {
        res.json({ error: err.message })
    }
}

exports.getMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId)
        res.json(message)
    } catch (err) {
        res.json({ error: err.message })
    }
}

exports.addMessage = async (req, res) => {
    const message = new Message({
        message: req.body.message,
    })

    try {
        const savedMessage = await message.save()
        res.status(201).json(savedMessage)
    } catch (err) {
        res.status(403).json({ error: err.message })
    }
}

exports.updateMessage = async (req, res) => {
    try {
        const updatedMessage = await Message.updateOne(
            { _id: req.params.messageId },
            { $set: { message: req.body.message } }
        )
        res.json(updatedMessage)
    } catch (err) {
        res.json({ error: err.message })
    }
}

exports.removeMessage = async (req, res) => {
    try {
        const removedMessage = await Message.remove({ _id: req.params.messageId })
        res.json(removedMessage)
    } catch (err) {
        res.json({ error: err })
    }
}