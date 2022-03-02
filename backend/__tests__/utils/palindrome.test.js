const { isPalindrome } = require('../../src/utils/palindrome')

describe('Unit tests for isPalindrome utility function', () => {
    it('returns true with an empty message', () => {
        const empty = ''
        expect(isPalindrome(empty)).toBe(true)
    })

    it('returns true with a palindromic number only', () => {
        const numberPalindrome = '99399'
        expect(isPalindrome(numberPalindrome)).toBe(true)
    })

    it('returns true with a palindromic string of letters and numbers', () => {
        const numberLetter = 'a99a'
        expect(isPalindrome(numberLetter)).toBe(true)
    })

    it('returns true with a palindrome amongst special characters', () => {
        const specialString = '0_0 (: /-\\ :) 0-0'
        expect(isPalindrome(specialString)).toBe(true)
    })

    it('returns true with a palindrome and an emoji', () => {
        const nonNumberLetter = 'a99a😬'
        expect(isPalindrome(nonNumberLetter)).toBe(true)
    })

    it('returns true with a palindrome of characters with accents', () => {
        const nonNumber = 'àáżáà'
        expect(isPalindrome(nonNumber)).toBe(true)
    })

    it('returns false with a non-palindrome and an emoji', () => {
        const nonNumberLetter = '😬99a😬'
        expect(isPalindrome(nonNumberLetter)).toBe(false)
    })

    it('returns false with a string of non-palindromic numbers only', () => {
        const nonNumber = '9939'
        expect(isPalindrome(nonNumber)).toBe(false)
    })

    it('returns false with a string of non-palindromic letters and numbers', () => {
        const nonNumberLetter = 'a99'
        expect(isPalindrome(nonNumberLetter)).toBe(false)
    })

    it('returns false with an emoji', () => {
        const emoji = '😬'
        expect(isPalindrome(emoji)).toBe(false)
    })

    it('returns false with an extended pictographic', () => {
        const pictograph = '👩‍👩‍👦‍👦'
        expect(isPalindrome(pictograph)).toBe(false)
    })

    it('returns false with a non palindrome', () => {
        const gibberish = 'fhfdafjkladjfa;ldjfalajdkfjei'
        expect(isPalindrome(gibberish)).toBe(false)
    })
})
