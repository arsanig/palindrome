const { containsEmoji } = require('./emoji')

const alphaNumRegex = /[A-Za-z0-9]/g
const nonAlphaNumRegex = /[^A-Za-z0-9]/g

const isPalindrome = (message) => {
    if (message.length === 0) return true

    if (containsEmoji(message) && !alphaNumRegex.test(message)) return false

    const cleanMessage = message.replace(nonAlphaNumRegex, '').toLowerCase()
    const reverseMessage = cleanMessage.split('').reverse().join('')
    return cleanMessage === reverseMessage
}

module.exports = { isPalindrome }
