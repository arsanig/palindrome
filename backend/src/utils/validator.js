const mongoose = require('mongoose')

const isValidId = (_id) => {
    return mongoose.Types.ObjectId.isValid(_id) ? true : false
}

module.exports = { isValidId }
