const { checkEmoji } = require('./checkEmoji')

const alphaNumRegex = /[A-Za-z0-9]/g
const nonAlphaNumRegex = /[^A-Za-z0-9]/g

const checkPalindrome = (message) => {
    if (message.length === 0) return true

    if (checkEmoji(message) || !alphaNumRegex.test(message))
        return false

    const cleanMessage = message.replace(nonAlphaNumRegex, '').toLowerCase()
    const reverseMessage = cleanMessage.split('').reverse().join('')
    return cleanMessage === reverseMessage
}

module.exports = { checkPalindrome }
