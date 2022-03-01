const app = require('./app')
const db = require('./db/index')
const port = process.env.PORT || 5000

db.connect().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
