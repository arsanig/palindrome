import { useMessages } from '../contexts/MessagesContext'
import {
    addMessage,
    updateMessage,
    inputChange,
    clear,
} from '../actions/MessagesActions'

export default function Form() {
    const [messagesState, messagesDispatch] = useMessages()
    const { textarea, edit, selectedForEdit } = messagesState

    const handleChange = (e) => {
        inputChange(messagesDispatch, e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        if (edit) {
            const newMessage = {
                _id: selectedForEdit._id,
                message: textarea,
            }
            console.log(newMessage)
            updateMessage(messagesDispatch, newMessage)
        } else {
            const newMessage = {
                _id: '',
                message: textarea,
                palindrome: '',
            }
            addMessage(messagesDispatch, newMessage)
        }
        clear(messagesDispatch)
    }

    return (
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            <label id="form-label">Enter a message</label>
            <textarea
                id="form-text"
                name="textarea"
                maxLength="80"
                value={textarea}
                onChange={(e) => handleChange(e)}
                required
            />
            <input id="form-input" type="submit" value="Check if palindrome" />
        </form>
    )
}
