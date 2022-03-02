const { containsEmoji } = require('../../src/utils/emoji')

describe('Unit tests for containsEmoji function', () => {
    it('returns true with an emoji', () => {
        const emoji = '😆'
        expect(containsEmoji(emoji)).toBe(true)
    })

    it('returns true with a pictograph', () => {
        const pictograph = '👩‍👩‍👦‍👦'
        expect(containsEmoji(pictograph)).toBe(true)
    })

    it('returns false with an empty string', () => {
        const empty = ''
        expect(containsEmoji(empty)).toBe(false)
    })

    it('returns false with just letters and numbers', () => {
        const alphanumeric = 'u9'
        expect(containsEmoji(alphanumeric)).toBe(false)
    })

    it('returns false with just special characters', () => {
        const characters = '/\\'
        expect(containsEmoji(characters)).toBe(false)
    })
})
