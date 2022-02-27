const checkPalindrome = (message) => {
    if (/\p{Emoji}/u.test(message)) {
        throw new Error(
            "Message can't include emojis if it's to be considered palindromic"
        )
    } else {
        return (
            message.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase() ===
            message
                .replace(/[^a-zA-Z0-9_]/g, '')
                .toLowerCase()
                .split('')
                .reverse()
                .join('')
        )
    }
}

module.exports =  { checkPalindrome }
