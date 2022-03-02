const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is located under /api/messages')
})

const routes = require('./routes')
app.use('/api', routes)

module.exports = app
