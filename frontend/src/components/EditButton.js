import { useMessages } from '../contexts/MessagesContext'
import { edit } from '../actions/MessagesActions'

export default function EditButton({ messageId }) {
    const [messagesState, messagesDispatch] = useMessages()
    const { messages } = messagesState

    const handleEdit = () => {
        const selectedForEdit = messages.filter(
            (message) => message._id === messageId
        )[0]
        edit(messagesDispatch, selectedForEdit)
    }

    return (
        <button id="edit-button" onClick={() => handleEdit()}>
            Edit
        </button>
    )
}
