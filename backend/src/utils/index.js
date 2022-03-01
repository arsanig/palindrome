const checkPalindrome = (message) => {
    if (message.length === 0) return true

    if (
        /\p{UnicodeBinaryPropertyName}/g.test(message) ||
        !/[A-Za-z0-9]/g.test(message)
    )
        return false

    const cleanMessage = message.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let left = 0
    let right = cleanMessage.length - 1
    while (left < right) {
        if (cleanMessage[left] !== cleanMessage[right]) return false
        left++
        right--
    }
    return true
}

module.exports = { checkPalindrome }
