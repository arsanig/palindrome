const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)
const { connect, disconnect } = require('./mocks/db')

describe('Messages API', () => {
    beforeAll(() => {
        connect()
    })

    afterAll(() => {
        disconnect()
    })

    /*
     TODO Need to mock test DB so we're not writing to actual DB
     * * OR
     TODO Create separate test and prod env that write to differnt DBs
     */

    it('GET /messages; returns empty array or array of message objects', async () => {
        return request
            .get('/api/messages')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.arrayContaining([]) ||
                        expect.arrayContaining([
                            expect.objContaining({
                                _id: expect.any(mongoose.Types.ObjectId),
                                message: expect.any(String),
                                palindrome: expect.any(Boolean),
                            }),
                        ])
                )
            })
    })

    /*
     ! NEED TO APPEND ID TO THE URL 
     */

    // it('GET /messages/id; return a message by id', async () => {
    //     return request
    //         .get(`/api/messages/${id}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toEqual(
    //                 expect.objContaining({
    //                     _id: expect.any(mongoose.Types.ObjectId),
    //                     message: expect.any(String),
    //                     completed: expect.any(Boolean),
    //                 })
    //             )
    //         })
    // })

    /*
     ! NEED TO APPEND ID TO THE URL 
     */
    // it('GET /messages/id; return a 409 if message not found by id', async () => {
    //     return request.get(`/api/messages/${id}`).expect(409)
    // })

    // it('POST /messages; adds a new message', () => {
    //     return request.post('/api/messages').expect(409)
    // })

    // it('PATCH /messages/id; updates a message by id', () => {
    //     return request.patch(`/api/messages/${id}`).expect(409)
    // })

    // it('DELETE /messages/id; deletes a message by id', () => {

    // })
})
