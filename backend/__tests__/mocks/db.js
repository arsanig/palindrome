const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mockMongoServer

connect = async () => {
    mockMongoServer = await MongoMemoryServer.create()
    const mockURI = mockMongoServer.getUri()
    await mongoose.connect(mockURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

disconnect = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mockMongoServer.stop()
}

module.exports = { connect, disconnect }
