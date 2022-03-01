const Utils = require('../../src/utils')
const checkPalindrome = Utils.checkPalindrome

describe('Testing checkPalindrome function', () => {
    it('returns true with an empty message', () => {
        const empty = ''
        expect(checkPalindrome(empty)).toBe(true)
    })

    it('returns true with a palindromic number only', () => {
        const numberPalindrome = '99399'
        expect(checkPalindrome(numberPalindrome)).toBe(true)
    })

    it('returns true with a palindromic string of letters and numbers', () => {
        const numberLetter = 'a99a'
        expect(checkPalindrome(numberLetter)).toBe(true)
    })

    it('returns true with a palindrome amongst special characters', () => {
        const specialString = '0_0 (: /-\\ :) 0-0'
        expect(checkPalindrome(specialString)).toBe(true)
    })

    it('returns false with a string of non-palindromic numbers only', () => {
        const numberNonPalindrome = '9939'
        expect(checkPalindrome(numberNonPalindrome)).toBe(false)
    })

    it('returns false with a string of non-palindromic letters and numbers', () => {
        const nonNumberLetter = 'a99'
        expect(checkPalindrome(nonNumberLetter)).toBe(false)
    })

    it('returns false with an emoji', () => {
        const emoji = '😬'
        expect(checkPalindrome(emoji)).toBe(false)
    })

    it('returns false with an extended pictographic', () => {
        const pictograph = '👩‍👩‍👦‍👦'
        expect(checkPalindrome(pictograph)).toBe(false)
    })

    it('returns false with a non palindrome', () => {
        const gibberish = 'fhfdafjkladjfa;ldjfalajdkfjei'
        expect(checkPalindrome(gibberish)).toBe(false)
    })
})
