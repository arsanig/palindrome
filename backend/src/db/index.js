const mongoose = require('mongoose')

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((res, err) => {
                if (err) return reject(err)
                console.log('Connected to MongoDB')
                resolve()
            })
    })
}

const disconnect = () => {
    mongoose.disconnect()
}

module.exports = { connect, disconnect }
