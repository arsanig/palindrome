const express = require('express')
const mongoose = require('mongoose')
const app = express()
// TEMPORARILY PUTTING ABSOLUTE PATH TO THE dotenv
require("dotenv").config({path:'~/dev/palindrome/backend/.env'});
const port = process.env.PORT || 5000

const routes = require('./routes')
app.use('/api', routes)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// establish database connection through mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas using MongooseJS")
})

app.get('/', (req, res) => {
  res.send('RESTful API for handling messages')
})