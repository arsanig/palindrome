const checkPalindrome = (message) => {
    if (message.length === 0) return true

    if (
        /\p{Emoji}[^A-Za-z0-9_]/u.test(message) ||
        /\p{Extended_Pictographic}/u.test(message)
    ) {
        return false
    }

    if (/[A-Za-z0-9_]/g.test(message)) {
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
}

module.exports = { checkPalindrome }
