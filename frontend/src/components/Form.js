import { useState } from 'react'
import { addMessage } from '../api'

export default function Form() {
    const [messageData, setMessageData] = useState({
        message: '',
        palindrome: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage(messageData)
    }

    return (
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            <label id="form-label">Enter a message</label>
            <textarea
                id="form-text"
                maxLength="280"
                value={messageData.message}
                onChange={(e) =>
                    setMessageData({ ...messageData, message: e.target.value })
                }
                required
            />
            <input id="form-input" type="submit" value="Check if palindrome" />
        </form>
    )
}
