const checkPalindrome = (message) => {
    if (!message) return false

    const cleanMessage = message.replace(/\W/g, '').toLowerCase()
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
