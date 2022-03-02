/*
 ! THIS SHOULD NEVER BE COMMITTED, 
 ! IT IS ONLY HERE FOR DEMOING PURPOSES
 ! NORMALLY GOES IN .env
 */
const MONGO_URL =
    'mongodb+srv://phlegmatic:MiDOhtRPFSdt7yey@cluster0.uc06j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const mongoose = require('mongoose')
const mongooseOpt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(MONGO_URL, mongooseOpt).then((res, err) => {
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
