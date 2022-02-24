const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

router.get('/', async (req, res) => {
    try {
        const messages = await Message.find()
        res.json(messages);
    } catch (err) {
        res.json({ error: err })
    }
})

router.get('/:messageId', async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId)
        res.json(message)
    } catch (err) {
        res.json({ error: err })
    }
})

router.post('/', async (req, res) => {
    const message = new Message({
        message: req.body.message,
    })

    try {
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch (err) {
        res.json({ error: err })
    }
})

router.patch('/:messageId', async (req, res) => {
    try {
        const updatedMessage = await Message.updateOne(
            { _id: req.params.messageId },
            { $set: { message: req.body.message } }
        )
        res.json(updatedMessage)
    } catch (err) {
        res.json({ error: err })
    }
})

router.delete('/:messageId', async (req, res) => {
    try {
        const removedMessage = await Message.remove({ _id: req.params.messageId })
        res.json(removedMessage)
    } catch (err) {
        res.json({ error: err })
    }
})

module.exports = router