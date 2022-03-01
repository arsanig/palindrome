const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const routes = require('./routes')
app.use('/api', routes)

// establish database connection through mongoose
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(port, () => {
            console.log(`Connected to the DB and listening on port ${port}`)
        })
    )
    .catch((err) => console.log(err.message))

app.get('/', (req, res) => {
    res.send('API is located under /api/messages')
})
