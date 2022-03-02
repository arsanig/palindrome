const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose')
const { connect, disconnect } = require('./mocks/db')
const Message = require('../src/db/models/Message')
const { isValidId } = require('../src/utils/validator')

const newMessage = async () => {
    const id = new mongoose.Types.ObjectId()
    const message = new Message({
        _id: id,
        message: '',
        palindrome: true,
    })
    const savedMessage = await message.save()
    return savedMessage
}

describe('Integration tests to test Messages API', () => {
    beforeAll(() => {
        connect()
    })

    afterAll(() => {
        disconnect()
    })

    it('GET /messages; returns empty array or array of message objects', async () => {
        return request
            .get('/api/messages')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.arrayContaining([]) ||
                        expect.arrayContaining([
                            expect.objectContaining({
                                _id: expect.any(mongoose.Types.ObjectId),
                                message: expect.any(String),
                                palindrome: expect.any(Boolean),
                            }),
                        ])
                )
            })
    })

    it('GET /messages/id; return a message by id', async () => {
        const message = await newMessage()
        return request
            .get(`/api/messages/${message._id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toMatchObject({
                    _id: message._id,
                    message: message.message,
                    palindrome: message.palindrome,
                })
            })
    })

    it('GET /messages/id; return a 404 for not a valid id', async () => {
        return request
            .get(`/api/messages/${null}`)
            .expect('Content-Type', /html/)
            .expect(404)
    })

    it('POST /messages; adds a new message without id or palindrome field', async () => {
        const message = {
            message: '',
        }
        return request
            .post(`/api/messages`)
            .send(message)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toMatchObject({
                    message: expect.any(String),
                    palindrome: expect.any(Boolean),
                })
                expect(isValidId(res.body._id)).toBeTruthy()
            })
    })

    // it('POST /messages; tries to add a new message with no body in the request', async () => {
    //     return request
    //         .post(`/api/messages`)
    //         .send({})
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toMatchObject({
    //                 message: expect.any(String),
    //                 palindrome: expect.any(Boolean),
    //             })
    //             expect(isValidId(res.body._id)).toBeTruthy()
    //         })
    // })

    it('POST /messages; tries to add a new message to a non valid id', async () => {
        return request
            .post(`/api/messages///`)
            .send()
            .expect('Content-Type', /text/)
            .expect(404)
    })

    // it('PATCH /messages/id; updates a message by id', () => {
    //     const id = new mongoose.Types.ObjectId()
    //     const message = new Message({
    //         _id: id,
    //         message: '',
    //         palindrome: true,
    //     })
    //     const savedMessage = await message.save()

    //     return request.patch(`/api/messages/${id}`).expect(409)
    // })

    // it('PATCH /messages/id; updates a message by id from palindromic to not', () => {
    //     return request.patch(`/api/messages/${id}`).expect(409)
    // })

    // it('PATCH /messages/id; updates a message by id from non-palindromic to palindromic', () => {
    //     return request.patch(`/api/messages/${id}`).expect(409)
    // })

    // it('DELETE /messages/id; deletes a message by id', () => {
    //     const id = new mongoose.Types.ObjectId()
    //     const message = new Message({
    //         _id: id,
    //         message: '',
    //         palindrome: false,
    //     })
    //     const savedMessage = await message.save()

    //     return request
    //         .get(`/api/messages/${id}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toMatchObject({
    //                 _id: savedMessage._id,
    //                 message: savedMessage.message,
    //                 palindrome: savedMessage.palindrome,
    //             })
    //         })
    // })

    it('DELETE /messages/id; tries to delete message with bad id', () => {
        return request
            .delete('/api/messages/badid')
            .expect('Content-Type', /text/)
            .expect(404)
    })
})
