const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema ({
    message: {
        type: String,
        required: true,
    },
    palindrome: Boolean,
})

module.exports = mongoose.model('Message', MessageSchema)