const emojiRegex = /\p{UnicodeBinaryPropertyName}/g

const checkEmoji = (message) => {
   return emojiRegex.test(message)
}

module.exports = { checkEmoji }
