const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose')
const { connect, disconnect } = require('./mocks/db')
const Message = require('../src/db/models/Message')
const { isValidId } = require('../src/utils/validator')

const newMessage = async (isPalindromic) => {
    const id = new mongoose.Types.ObjectId()
    let newMessage
    isPalindromic ?
        newMessage = new Message({
            _id: id,
            message: '',
            palindrome: true,
        }) :
        newMessage = new Message({
            _id: id,
            message: 'ab',
            palindrome: false,
        })
    const savedMessage = await newMessage.save()
    return savedMessage
}

describe('Integration tests to test Messages API', () => {
    beforeAll(() => {
        connect()
    })

    afterAll(() => {
        disconnect()
    })

    describe('GET', () => {
        it('/messages; returns empty array or array of message objects', () => {
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

        it('/messages/id; return a message by id', async () => {
            const isPalindromic = true
            const message = await newMessage(isPalindromic)
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

        it('/messages/id; return a 404 for not a valid id', () => {
            return request
                .get(`/api/messages/${null}`)
                .expect('Content-Type', /html/)
                .expect(404)
        })
    })

    describe('POST', () => {
        it('/messages; adds a new message without id or palindrome field', () => {
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

        it('/messages; receive error when trying to add message with no body', () => {
            return request
                .post(`/api/messages`)
                .send({})
                .expect('Content-Type', /html/)
                .expect(404)
                .then()
        })

        it('/messages; receive error when trying to add message with an invalid id', () => {
            return request
                .post(`/api/messages///`)
                .send()
                .expect('Content-Type', /html/)
                .expect(404)
        })
    })

    describe('PATCH', () => {
        it('/messages/id; updates a message by id from palindrome to non-palindrome', async () => {
            const isPalindromic = true
            const message = await newMessage(isPalindromic)
            const newPalindromeMessage = {
                message: 'not a palindrome'
            }
            request
                .patch(`/api/messages/${message._id}`)
                .send(newPalindromeMessage)
                .expect('Content-Type', /json/)
                .expect(200)
                .then(() => {
                    request.get(`/api/messages/${message._id}`)
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .then((res) => {
                            expect(res.body.palindrome).toBeFalsy()
                        })
                })
        })


        it('/messages/id; updates a message by id from non-palindrome to palindrome', async () => {
            const isPalindromic = false
            const message = await newMessage(isPalindromic)
            const newPalindromeMessage = {
                message: '999'
            }
            request
                .patch(`/api/messages/${message._id}`)
                .send(newPalindromeMessage)
                .expect('Content-Type', /json/)
                .expect(200)
                .then(() => {
                    request.get(`/api/messages/${message._id}`)
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .then((res) => {
                            expect(res.body.palindrome).toBeTruthy()
                        })
                })
        })

        it('/messages/id; receive error when trying to add message with an invalid id', () => {
            return request
                .post('/api/messages/blah')
                .send()
                .expect('Content-Type', /html/)
                .expect(404)
        })
    })

    describe('DELETE', () => {
        it('/messages/id; deletes a message by id', async () => {
            const message = await newMessage()
            return request
                .delete(`/api/messages/${message._id}`)
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

        it('/messages/id; tries to delete message with bad id', () => {
            return request
                .delete('/api/messages/badid')
                .expect('Content-Type', /html/)
                .expect(404)
        })
    })
})
