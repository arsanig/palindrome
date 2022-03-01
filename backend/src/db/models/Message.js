const mongoose = require('mongoose')
mongoose.Schema.Types.String.checkRequired((v) => typeof v === 'string')

const MessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    palindrome: Boolean,
})

module.exports = mongoose.model('Message', MessageSchema)
