const { isValidId } = require('../../src/utils/validator')
const mongoose = require('mongoose')

describe('Unit tests for isValidId function', () => {
    it('returns true with a valid mongoose id', () => {
        const _id = new mongoose.Types.ObjectId()
        expect(isValidId(_id)).toBe(true)
    })

    it('returns false with an empty string', () => {
        const empty = ''
        expect(isValidId(empty)).toBe(false)
    })

    it('returns false with just letters and numbers', () => {
        const alphanumeric = 'u9'
        expect(isValidId(alphanumeric)).toBe(false)
    })

    it('returns false with just special characters', () => {
        const characters = '/\\'
        expect(isValidId(characters)).toBe(false)
    })
})
