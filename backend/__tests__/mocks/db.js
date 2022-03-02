const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mockMongoServer
const mockServerOpt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

connect = async () => {
    mockMongoServer = await MongoMemoryServer.create()
    const mockURI = mockMongoServer.getUri()
    await mongoose.connect(mockURI, mockServerOpt)
}

disconnect = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mockMongoServer.stop()
}

module.exports = { connect, disconnect }
