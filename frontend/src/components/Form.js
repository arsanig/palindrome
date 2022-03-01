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
        const newMessage = {
            _id: '',
            message: textarea,
            palindrome: '',
        }
        if (edit) {
            newMessage._id = selectedForEdit._id
            updateMessage(messagesDispatch, newMessage)
        } else {
            addMessage(messagesDispatch, newMessage)
        }
        clear(messagesDispatch)
    }

    return (
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            {edit ? (
                <label id="form-title-edit">Editing a message</label>
            ) : (
                <label id="form-title">Enter a message</label>
            )}
            <textarea
                id="form-text"
                name="textarea"
                maxLength="80"
                value={textarea}
                onChange={(e) => handleChange(e)}
            />
            <input id="form-input" type="submit" value="Check if palindrome" />
        </form>
    )
}
