const Utils = require('../../src/utils')
const checkPalindrome = Utils.checkPalindrome

describe('Testing checkPalindrome function', () => {
    it('should return true with an empty message', () => {
        const empty = ''
        expect(checkPalindrome(empty)).toBe(true)
    })

    it('should return true with a complex palindrome that has special characters', () => {
        const complex =
            'Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.'
        expect(checkPalindrome(complex)).toBe(true)
    })

    it('should return true with a string of just numbers', () => {
        const number = '99399'
        expect(checkPalindrome(number)).toBe(true)
    })

    it('should return true with a string of letters and numbers', () => {
        const numberLetter = 'a99a'
        expect(checkPalindrome(numberLetter)).toBe(true)
    })

    it('should return false with an emoji', () => {
        const emoji = '😬'
        expect(checkPalindrome(emoji)).toBe(false)
    })

    it('should return false with an extended pictographic', () => {
        const pictograph = '👩‍👩‍👦‍👦'
        expect(checkPalindrome(pictograph)).toBe(false)
    })

    it('should return false with a string of just special characters', () => {
        const specialString = '&*^$)&^@'
        expect(checkPalindrome(specialString)).toBe(false)
    })

    it('should return false with a non palindrome', () => {
        const gibberish = 'fhfdafjkladjfa;ldjfalajdkfjei'
        expect(checkPalindrome(gibberish)).toBe(false)
    })
})
