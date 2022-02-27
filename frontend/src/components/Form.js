import { useState } from 'react'
import { addMessage } from '../api'

export default function Form({ setFetchedData }) {
    const [textarea, setTextarea] = useState('')
    const [messageData, setMessageData] = useState({
        message: '',
        palindrome: '',
    })

    const handleChange = (e) => {
        setTextarea(e.target.value)
        setMessageData({ message: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage(messageData)
        setTextarea('')
        setFetchedData(false)
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
