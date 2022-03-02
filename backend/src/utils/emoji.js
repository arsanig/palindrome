const emojiRegex = new RegExp(
    '(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])',
    'g'
)

const containsEmoji = (message) => {
    if (message === '') return false
    return emojiRegex.test(message)
}

module.exports = { containsEmoji }
