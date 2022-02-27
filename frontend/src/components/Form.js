import { useState } from 'react'
import * as api from '../api'

export default function Form() {
    const [textarea, setTextArea] = useState('')

    const handleTextChange = (e) => {
        setTextArea(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        api.addMessage(textarea)
        setTextArea('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea
                maxLength="280"
                value={textarea}
                onChange={(e) => handleTextChange(e)}
                required
            ></textarea>
            <input type="submit" value="Check if Palindrome" />
        </form>
    )
}
