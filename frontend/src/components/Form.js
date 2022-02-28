import { useState } from 'react'
import { useMessages } from '../contexts/MessagesContext'
import { addMessage } from '../actions/MessagesActions'

export default function Form() {
    const [textarea, setTextArea] = useState('')
    const [messagesState, messagesDispatch] = useMessages()
    const { edit } = messagesState

    const handleChange = (e) => {
        setTextArea(e.target.value)
    }

    const handleSubmit = (e) => {
        if (edit) {
        } else {
            const newMessage = {
                _id: '',
                message: textarea,
                palindrome: '',
            }
            addMessage(messagesDispatch, newMessage)
        }
    }

    return (
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            <label id="form-label">Enter a message</label>
            <textarea
                id="form-text"
                maxLength="80"
                value={textarea}
                onChange={(e) => handleChange(e)}
                required
            />
            <input id="form-input" type="submit" value="Check if palindrome" />
        </form>
    )
}
